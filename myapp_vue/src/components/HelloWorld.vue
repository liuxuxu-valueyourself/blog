<template>
  <div class="hello">
    <div class="click_div dd" @click="handleClick">添加文章</div>
    <div class="click2_div dd" @click="handleClick2">删除文章</div>
    <div class="dd" @click="handleClick3">修改文章</div>
    <div class="dd" @click="handleClick4">查询文章</div>
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
          className: '前端',
          articleName: '文章标题',
          articleDesc: '很不错',
          articleImg: '文章图片',
          articleContent: '文章内容',
          articleAvatar: '刘旭旭'
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleClick2 () {
      axios
        .post('/article/deteleArticle', {
          id: 12
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleClick3 () {
      axios
        .post('/article/updateArticle', {
          id: 1,
          className: '前端',
          articleName: '文章标题',
          articleDesc: '很不错的文章',
          articleImg: '图片',
          articleContent: '文章内容',
          articleAvatar: '刘旭旭'
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleClick4 () {
      axios
        .post('/article/queryArticle', {
          pageNum: 1,
          pageSize: 10
        })
        .then(response => {
          console.log('queryArticle', response)
        })
        .catch(error => {
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
.dd{
  cursor: pointer;
}
</style>
