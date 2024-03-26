<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import ProductModal from "./components/ProductModal.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    ProductModal
  },
  data() {
    return {
      modalWindow: false,
      modalContent: null
    }
  },
  methods: {
    showProduct(product) {
      this.modalWindow = true;
      this.modalContent = product;
    }
  },
}

</script>

<template>

  <AppHeader />
  <AppMain :showProduct="showProduct" />
  <AppFooter />
  <ProductModal v-if="modalWindow" :modalContent="modalContent" @close-modal-window="modalWindow = false" />

</template>

<style></style>