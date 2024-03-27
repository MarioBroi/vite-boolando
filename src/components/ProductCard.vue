<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
        }
    }, emits: ["showProduct"]
}
</script>

<template>

    <div class="product">
        <!-- <img :src="product.mainImg" alt="" class="main-image">
        <img :src="product.hoverImg" alt="" class="second-image"> -->
        <img :src="product.hoverEffect === true ? product.hoverImg : product.image" :alt="product.name">
        <!-- /products images -->

        <div class="details">

            <span class="brand">{{ product.brand }}</span>
            <!-- <span><a href="#" class="link">{{ product.description }}</a></span> -->
            <h3 @click="$emit('showProduct', product)">{{ product.description }}</h3>

            <span class="new-price" v-if="product.discount !== null">{{ (product.price - (product.price *
            Math.abs(parseInt(product.discount))) / 100).toFixed(2) }}&euro;</span>
            <span class="new-price" v-else>{{ product.price }} &euro;</span>
            <span v-if="product.discount !== null" class="old-price">{{ product.price }} &euro;</span>

            <div class="products-badge">

                <div class="discount" v-if="product.discount !== null">{{ product.discount }}</div>
                <div class="eco" v-if="product.eco === true">Sostenibilitá</div>

            </div>
            <!-- /product badge -->

            <div class="favourite">
                &hearts;
            </div>
            <!-- /heart -->

        </div>
        <!-- /.details -->

    </div>
    <!-- /.card -->

</template>

<style></style>