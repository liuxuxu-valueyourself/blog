<template>
  <div class="artDetail_container">
    <h2 class="title COLOR_333">文章详情</h2>
    <div class="COLOR_999 fonts_16 desc">
      <span class='mar_left10'>发布日期：2020/5/3</span>
      <span class='mar_left10'>更新日期：2020/5/3</span>
      <span class='mar_left10'>分类：前端</span>
    </div>
    <div class="content">
      内容
    </div>
  </div>
</template>

<script>
import '../assets/index.css'

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  onShow () {
  },
  created () {
  },
  methods: {},
  mounted () {
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
</style>
