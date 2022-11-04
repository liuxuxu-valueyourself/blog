<template>
  <div class="artDetail_container">
    <h2 class="title COLOR_333">{{artData.title}}</h2>
    <div class="COLOR_999 fonts_16 desc">
      <span class='mar_left10'>发布日期：{{artData.createTime}}</span>
      <span class='mar_left10'>更新日期：{{artData.createTime}}</span>
      <span class='mar_left10'>分类：{{artData.class}}</span>
    </div>
    <div>
      <div class="COLOR_008C8C mar_top20 text-left">{{artData.descFlag}}</div>
    </div>
    <div class="markdown-body">
      <div class="content" v-html="res">
      </div>
    </div>
  </div>
</template>

<script>
// import '../assets/index.css'
import axios from "../http";
import {marked} from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import "github-markdown-css"

export default {
  components: {},
  props: {},
  data () {
    return {
      artData:{},
      content:'',
      res:'',
    }
  },
  computed: {},
  watch: {},
  onShow () {
  },
  created () {
    // console.log('codeLangs', editor.getMenuConfig('codeSelectLang').codeLangs)
    console.log('this.$route', this.$route.query)
    this.queryArticleById()
  },
  methods: {
    queryArticleById () {
      axios.post('/article/queryArticleById', {
        id: this.$route.query.id
      })
        .then(response => {
          this.artData = response.data.data
          console.log('marked111', marked.parse)
          let res = marked.parse(this.artData.content)
          // console.log('res', res)
          this.res = res;
          // this.content = marked(this.artData.content, {breaks: true}).replace(/<pre>/g, "<pre class='hljs'>");
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    console.log('marked', marked)
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: true
    })
  }
}
</script>

<style scoped>
.artDetail_container {
  margin: 20px;
}
.title {
  font-weight: 400;
  font-size: 2em;
}
.desc {
  margin-top: 20px;
}
.content {
  margin-top: 20px;
}
</style>
