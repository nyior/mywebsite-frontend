<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavbarComponent from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    Footer
  }
};
</script>

<style></style>
