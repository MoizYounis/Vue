import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";
import { formatDistanceToNow } from "date-fns";

const useCollection = (collecttion) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collecttion).add(doc);
    } catch (err) {
      error.value = "could not send message";
    }
  };
  return { addDoc, error };
};

export default useCollection;
