import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      const doc = await projectFirestore.collection("posts").doc(id).get();
      if (!doc.exists) {
        throw Error("That post does not exists");
      }
      post.value = { ...doc.data(), id: doc.id };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
