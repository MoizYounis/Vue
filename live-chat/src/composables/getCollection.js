import { ref, watchEffect } from "vue";
import { projectFirestore } from "@/firebase/config";
import { formatDistanceToNow } from "date-fns";

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref([]);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt", "asc");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        if (doc.data().createdAt) {
          let time = formatDistanceToNow(doc.data().createdAt.toDate());
          results.push({ ...doc.data(), id: doc.id, createdAt: time });
        }
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      documents.value = null;
      console.log(err.message);
      error.value = "could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });
  return { documents, error };
};

export default getCollection;
