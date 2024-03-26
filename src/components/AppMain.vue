<script>
import ProductCard from './ProductCard.vue';

export default {
    name: 'AppMain',
    components: {
        ProductCard
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    mainImg: "/public/img/1.webp",
                    hoverImg: "/public/img/1b.webp",
                    brand: "Levi's",
                    description: "RELAXED FIT TEE UNISEX",
                    priceOld: 29.99,
                    priceNew: 14.99,
                    discount: "-50%",
                    eco: "Sostenibilitá",
                    likeIt: false,
                },
                {
                    id: 2,
                    mainImg: "/public/img/2.webp",
                    hoverImg: "/public/img/2b.webp",
                    brand: "Guess",
                    description: "ROSES TEE",
                    priceOld: 29.99,
                    discount: "-30%",
                    priceNew: 20.99,
                    likeIt: false,

                },
                {
                    id: 3,
                    mainImg: "/public/img/3.webp",
                    hoverImg: "/public/img/3b.webp",
                    brand: "Come Zucchero Filato",
                    description: "VOGLIA DI COLORI PASTELLO",
                    priceOld: 184.99,
                    priceNew: 129.99,
                    likeIt: false,
                },
                {
                    id: 4,
                    mainImg: "/public/img/4.webp",
                    hoverImg: "/public/img/4b.webp",
                    brand: "Levi's",
                    description: "TEE UNISEX",
                    priceOld: 29.99,
                    eco: "Sostenibilità",
                    priceNew: 14.99,
                    discount: "-50%",
                    likeIt: false,
                },
                {
                    id: 5,
                    mainImg: "/public/img/5.webp",
                    hoverImg: "/public/img/5b.webp",
                    brand: "Maya Deluxe",
                    description: "STRIPE BODICE",
                    priceOld: 99.99,
                    likeIt: false,
                },
                {
                    id: 6,
                    mainImg: "/public/img/6.webp",
                    hoverImg: "/public/img/6b.webp",
                    brand: "Espirit",
                    description: "MAGLIONE - BLACK",
                    eco: "Sostenibilitá",
                    priceNew: 29.99,
                    likeIt: true,
                },
            ]
        }
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