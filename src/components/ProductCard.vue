<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
        }
    }
}
</script>

<template>

    <div class="product">
        <img :src="product.mainImg" alt="" class="main-image">
        <img :src="product.hoverImg" alt="" class="second-image">
        <!-- /products images -->

        <div class="details">

            <span class="brand">{{ product.brand }}</span>
            <span><a href="#" class="link">{{ product.description }}</a></span>
            <span class="new-price">{{ product.priceNew }}</span>
            <del class="old-price">{{ product.priceOld }}</del>

            <div class="products-badge">

                <div class="discount">{{ product.discount }}</div>
                <div class="eco">{{ product.eco }}</div>

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