<script>

export default {
    name: 'AppMain'
}

</script>

<template>

    <main class="site-main">

        <section class="container-img d-flex flex-center products">

            <div class="product">

                <img src="/img/1.webp" alt="" class="main-image">
                <img src="/img/1b.webp" alt="" class="second-image">
                <!-- /products images -->

                <div class="details">

                    <span class="brand">Levi's</span>
                    <span><a href="#" class="link">relaxed fit tee unisex</a></span>
                    <span class="new-price">14,99€</span>
                    <del class="old-price">29.99€</del>

                    <div class="products-badge">

                        <div class="discount">-50%</div>
                        <div class="eco">Sostenibilitá</div>

                    </div>
                    <!-- /product badge -->

                    <div class="favourite">
                        &hearts;
                    </div>
                    <!-- /heart -->

                </div>
                <!-- /details -->

            </div>
            <!-- /product 1 -->

            <div class="product">

                <img src="/img/2.webp" alt="" class="main-image">
                <img src="/img/2b.webp" alt="" class="second-image">
                <!-- /products images -->

                <div class="details">

                    <span class="brand">Guess</span>
                    <span><a href="#" class="link">roses tee</a></span>
                    <span class="new-price">20,99€</span>
                    <del class="old-price">29.99€</del>

                    <div class="products-badge">

                        <div class="discount">-30%</div>

                    </div>
                    <!-- /product badge -->

                    <div class="favourite">
                        &hearts;
                    </div>
                    <!-- /heart -->

                </div>
                <!-- /details -->

            </div>
            <!-- /product 2 -->

            <div class="product">

                <img src="/img/3.webp" alt="" class="main-image">
                <img src="/img/4b.webp" alt="" class="second-image">
                <!-- /products images -->

                <div class="details">

                    <span class="brand">Come Zucchero Filato</span>
                    <span><a href="#" class="link">voglia di colori pastello</a></span>
                    <span class="new-price">129,99€</span>
                    <del class="old-price">184.99€</del>

                    <div class="products-badge">

                        <div class="discount">-30%</div>

                    </div>
                    <!-- /product badge -->

                    <div class="favourite">
                        &hearts;
                    </div>
                    <!-- /heart -->

                </div>
                <!-- /details -->

            </div>
            <!-- /product 3 -->

            <div class="product">

                <img src="/img/4.webp" alt="" class="main-image">
                <img src="/img/4b.webp" alt="" class="second-image">
                <!-- /products images -->

                <div class="details">

                    <span class="brand">Levi's</span>
                    <span><a href="#" class="link">tee unisex</a></span>
                    <span class="new-price">14,99€</span>
                    <del class="old-price">29.99€</del>

                    <div class="products-badge">

                        <div class="discount">-50%</div>
                        <div class="eco">Sostenibilitá</div>

                    </div>
                    <!-- /product badge -->

                    <div class="favourite">
                        &hearts;
                    </div>
                    <!-- /heart -->

                </div>
                <!-- /details -->

            </div>
            <!-- /product 4 -->

            <div class="product">

                <img src="/img/5.webp" alt="" class="main-image">
                <img src="/img/5b.webp" alt="" class="second-image">
                <!-- /products images -->

                <div class="details">

                    <span class="brand">Maya Deluxe</span>
                    <span><a href="#" class="link">stripe bodice</a></span>
                    <span class="new-price">99,99€</span>

                    <div class="favourite">
                        &hearts;
                    </div>
                    <!-- /heart -->

                </div>
                <!-- /details -->

            </div>
            <!-- /product 5 -->

            <div class="product">

                <img src="/img/6.webp" alt="" class="main-image">
                <img src="/img/6b.webp" alt="" class="second-image">
                <!-- /products images -->

                <div class="details">

                    <span class="brand">Esprit</span>
                    <span><a href="#" class="link">maglione - black</a></span>
                    <span class="new-price">29,99€</span>

                    <div class="products-badge">

                        <div class="eco">Sostenibilitá</div>

                    </div>
                    <!-- /product badge -->

                    <div class="favourite">
                        &hearts;
                    </div>
                    <!-- /heart -->

                </div>
                <!-- /details -->

            </div>
            <!-- /product 6 -->

        </section>
        <!-- /section container product -->

    </main>
    <!-- /.site-main -->

</template>

<style>
.products {
    padding: 4rem 0 0;
    flex-wrap: wrap;
}

.product {
    width: calc(96% / 3);
    margin-bottom: 4rem;
    margin-left: 0.4rem;
    position: relative;
}

.container-img {
    max-width: 1200px;
    margin: 0 auto;
}

.product img {
    width: 100%;
}

div.product img.second-image,
div.product:hover img.main-image {
    display: none;
}

div.product:hover img.second-image {
    display: inline-block;
}

div.product span {
    font-size: 0.9rem;
}

.details {
    top: 2%;
}

.brand {
    font-size: 1rem;
}

.link {
    color: black;
    display: block;
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 0.3rem 0;
}

.new-price {
    color: var(--booleando-discount);
    font-weight: 800;
    padding-right: 0.5rem;
}

.products-badge {
    position: absolute;
    left: 0;
    bottom: 20%;
    display: inline-block;
    padding: 0.15rem 0;
    font-weight: 800;
    color: var(--booleando-lighter);
}

.discount {
    background-color: var(--booleando-discount);
    display: inline-block;
    padding: 0.2rem;
}

.eco {
    background-color: var(--booleando-sustainable);
    display: inline-block;
    padding: 0.2rem;
}

.favourite {
    position: absolute;
    top: 2%;
    right: 0;
    background-color: var(--booleando-lighter);
    padding: 0.5rem;
    font-size: 1.5rem;
}

.favourite:hover {
    color: var(--booleando-discount);
}
</style>