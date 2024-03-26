<script>
import ProductCard from './ProductCard.vue';
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        ProductCard
    },
    data() {
        return {
            products: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/products')
            .then(response => {
                console.log(response);
                this.products = response.data;
            })
    }
}
</script>

<template>

    <main class="site-main">
        <section class="container-img d-flex flex-center products">

            <ProductCard :product="product" v-for="product in products" />



        </section>
    </main>
    <!-- /.site-main -->

</template>

<style></style>../main.js