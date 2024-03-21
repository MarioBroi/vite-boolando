<script>

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}

</script>

<template>

  <AppHeader />
  <AppMain />
  <AppFooter />

</template>

<style>
.container {
  width: 80%;
  height: 100%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
  margin: auto;
}

.d-flex {
  display: flex;
}


.flex-center {
  justify-content: center;
  align-items: center;
}

.flex-space-btwn {
  justify-content: space-between;
}

a {
  color: var(--booleando-lighter);
  text-decoration: none;
}

.padding {
  padding: 0.25rem;
}

/* #endregion Common */

/* #region Header */

.site-header {
  background-color: var(--booleando-primary);
}

.logo {
  width: 15%;
  padding: 1rem;
}

/* #endregion Header */

/* #region Main */

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
}

.new-price {
  color: var(--booleando-discount);
  font-weight: 800;
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
  padding: 0.4rem;
  font-size: 1.5rem;
}

.favourite:hover {
  color: var(--booleando-discount);
}

/* #endregion Main */

/* #region Footer */

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