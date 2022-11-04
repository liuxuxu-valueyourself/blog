<template>
  <div class="">
    <div class="art_item" @click="toArtDetail">
      <div class="item-top">
        <p class="title textLeft">标题标题标题标题标题标题</p>
        <span class="COLOR_999">发布于 2022-09-28</span>
      </div>
      <div class="content_jj textLeft">这是一些简介这是一些简介这是一些这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介</div>
    </div>
    <div class="art_item" @click="toArtDetail">
      <div class="item-top">
        <p class="title textLeft">标题标题标题标题标题标题</p>
        <span class="COLOR_999">发布于 2022-09-28</span>
      </div>
      <div class="content_jj textLeft">这是一些简介这是一些简介这是一些这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介这是一些简介</div>
    </div>
  </div>
</template>

<script>

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
  methods: {
    toArtDetail () {
      this.$router.push({
        name: 'ArtDetail'
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
  font-weight: 300;
  margin: 10px 0;
}
.textLeft {
  text-align: left;
}
.art_item {
  margin-bottom: 30px;
  margin-left: 20px;
  cursor: pointer;
  padding-right: 20px;
}
.item-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.7;
}
.content_jj {
  margin: 10px 0 20px;
  color: #666;
}
</style>
