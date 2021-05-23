<template>
  <div class="taskedit-mfe">
    <h2>Task Edit</h2>
    <p>This MFE shows the task edit features.</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.taskedit-mfe {
  border: 1px solid #42b983;
  background-color: white;
  padding: 4px;
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
