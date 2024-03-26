<script>
import ProductCard from './ProductCard.vue';
import { state } from "../state.js";
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        ProductCard
    },
    data() {
        return {
            hoverEffect: false,
            state: state,
            products: []
        }
    },
    props: { showProduct: Function },
    mounted() {
        state.getProducts();
        axios.get('http://localhost:3000/products')
            .then(response => {
                console.log(response);
                this.products = response.data;
            });
    }
}
</script>

<template>

    <main class="site-main">

        <section class="container-img d-flex flex-center products">

            <ProductCard :product="product" :key="product.id" v-for="product in products"
                @mouseover="product.hoverEffect = true" @mouseleave="product.hoverEffect = false"
                @show-product="showProduct" />

        </section>

    </main>
    <!-- /.site-main -->

</template>

<style></style>