<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ContactList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from "@/components/contact-list/index.vue";

export default {
  name: "Home",
  components: {
    ContactList
  }
};
</script>
