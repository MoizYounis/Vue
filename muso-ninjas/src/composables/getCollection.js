import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";
import { formatDistanceToNow } from "date-fns";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  // register the firestore collection reference
  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // must wait for the server to create the timestamp & send it back
        if (doc.data().createdAt) {
          let time = formatDistanceToNow(doc.data().createdAt.toDate());
          results.push({ ...doc.data(), id: doc.id, createdAt: time });
        }
      });

      // update values
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch the data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents };
};

export default getCollection;
