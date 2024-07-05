<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
  <Modal :theme="theme" @close="toggleModal">
    <h1>Slot Title</h1>
    <p>Slot Text</p>
    <template v-slot:links>
      <a href="#">Google</a>
    </template>
    </Modal>
  </div>
  <button @click.right="toggleModal">Show Modal (Right Click)</button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: 'App',
  components: {Modal},
  data() {
    return {
      title: "My First Prooject",
      theme: "sale",
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
