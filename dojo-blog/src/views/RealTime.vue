<template>
  <div v-if="posts.length" class="layout">
    <PostList :posts="posts" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";
import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner.vue";
export default {
  components: { PostList, Spinner },
  setup() {
    const posts = ref([]);
    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        posts.value = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      });
    return { posts };
  },
};
</script>

<style>
</style>