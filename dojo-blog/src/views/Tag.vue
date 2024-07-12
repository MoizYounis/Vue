<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <TagCloud :posts="posts" />
      <PostList :posts="filteredPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from "@/composables/getPosts";
import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    const route = useRoute();
    const tag = route.params.tag;
    const filteredPosts = computed(() =>
      posts.value.filter((post) => post.tags.includes(tag))
    );
    return { posts, filteredPosts, error };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>