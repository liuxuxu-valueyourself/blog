<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="click_div" @click="handleClick">发送请求</div>
  </div>
</template>

<script>
import axios from '../../src/http/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleClick () {
      axios
        .post('/article/addArticle', {
          name: '测试'
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.click_div {
  cursor: pointer;
}
</style>
