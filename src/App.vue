<template>
  <div id="app">
    <!-- <router-link to="/">展示一</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    if (document.getElementById("hyq-spinner")) {
      document.body.removeChild(document.getElementById("hyq-spinner"));
    }
  }
};
</script>

<style>
</style>
