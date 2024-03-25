<script>
export default {
    name: 'AppCard',
    props: {
        product: {
            type: Object
        }
    }

}
</script>

<template>
    <div class="row">
        <div class="col">
            <div class="card">
                <img :src="product.firstImage" alt="">
                <img class="hover-img" :src="product.secondImage" alt="">
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
                </div>
                <!-- /.details -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
</template>

<style></style>