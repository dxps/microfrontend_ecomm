<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This is the <code>header</code> SPA that provides links to various places.
    </p>
    <div class="navlinks">
      <div class="navlink"><a href="/home">Home</a></div>
      <div class="navlink"><a href="/testpage">TestPage</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.hello {
  background-color: powderblue;
  padding: 1px 16px 1px 16px;
}

.navlinks {
  display: flex;
}

.navlink {
  margin: 0 10px;
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
  color: #005467;
}
</style>
