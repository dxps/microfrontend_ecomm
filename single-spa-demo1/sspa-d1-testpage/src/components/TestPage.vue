<template>
  <div class="testpage">
    <h2>TestPage</h2>
    <p>Test page content</p>
  </div>
</template>

<script>
export default {
  name: "TestPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.testpage {
  background-color: darkseagreen;
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
a {
  color: #42b983;
}
</style>
