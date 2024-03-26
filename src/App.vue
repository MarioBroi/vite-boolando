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
</style>