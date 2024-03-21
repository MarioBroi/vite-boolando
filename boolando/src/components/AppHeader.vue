<script>

import AppLogo from './AppLogo.vue'

export default {
    name: 'AppHeader',
    components: {
        AppLogo
    }
}

</script>


<template>

    <header class="site-header">

        <nav class="container d-flex">

            <div class="d-flex">

                <a href="#" class="padding">Donna</a>
                <a href="#" class="padding">Uomo</a>
                <a href="#" class="padding">Bambini</a>

            </div>
            <!-- /gender selection -->

            <!-- <img src="img/boolean-logo.png" alt="" class="logo"> -->
            <!-- /image logo Booleaner -->

            <div>

                <a href="#">
                    <i class="fa fa-user"></i>
                </a>

                <a href="#">
                    <i class="fa fa-heart-o"></i>
                </a>

                <a href="#">
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </a>

            </div>
            <!-- /header icons -->

        </nav>
        <!-- /nav container -->

    </header>
    <!-- /.site-header -->

</template>

<style></style>