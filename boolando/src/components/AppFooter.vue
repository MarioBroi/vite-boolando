<script>

export default {
    name: 'AppFooter'
}

</script>

<template>

    <footer class="site-footer">

        <div class="container d-flex">

            <div class="company">

                Boolando s.r.l.

                <div class="info">

                    <a href="#">Informazioni legali </a>

                    <a href="#"> Informativa sulla pricacy </a>

                    <a href="#"> Diritto di recesso</a>

                </div>

            </div>
            <!-- /company info -->

            <div class="socials">
                Trovaci anche su

                <div class="socials-icons">

                    <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-facebook-f" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-pinterest" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>

                </div>

            </div>
            <!-- /socials -->

        </div>
        <!-- /footer container -->

    </footer>
    <!-- /.site-footer -->

</template>

<style>
.site-footer {
    background-color: var(--booleando-darker);
}

.company {
    font-weight: 800;
    color: var(--booleando-lighter);
    text-align: left;
    padding-top: 2rem;
}

.info {
    font-size: 0.6rem;
    padding-top: 0.6rem;
    margin-bottom: 2rem;
}

.socials {
    color: var(--booleando-lighter);
    text-align: center;
    padding-top: 2rem;
    font-size: 0.6rem;
}

.socials-icons {
    padding-top: 0.6rem;
    font-size: 1rem;
    margin-bottom: 2rem;
}
</style>