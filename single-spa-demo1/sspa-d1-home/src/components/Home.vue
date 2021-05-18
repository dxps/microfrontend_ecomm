<template>
  <div class="home">
    <h2>Home</h2>
    <p>Welcome! This is content of the <code>home</code>SPA.<br /></p>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.home {
  background-color: antiquewhite;
  padding: 1px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
