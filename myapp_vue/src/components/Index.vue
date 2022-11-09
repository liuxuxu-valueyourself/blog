<template>
  <div class="">
    <div class="art_item" @click="toArtDetail(item.id)" v-for="item in list" :key="item.id">
      <div class="item-top">
        <p class="title textLeft">{{item.title}}</p>
        <div class="COLOR_999">发布于 {{item.createTime}}</div>
      </div>
      <div class="content_jj textLeft">{{item.descFlag}}</div>
    </div>
    <div style='margin-top: 10px'>
      <PageNum :nowPage="nowPage" :allData="allData" @handleClick="changePageNum($event)"/>
    </div>
  </div>
</template>

<script>

import axios from "../http";
import PageNum from "./PageNum";

export default {
  components: {
    PageNum
  },
  props: {},
  data () {
    return {
      list:[],
      nowPage:1,
      allData:30,
      limit:10,
      maxPageLen:6,
    }
  },
  computed: {},
  watch: {},
  onShow () {
  },
  created () {
    this.queryList()
  },
  methods: {
    queryList() {
      axios.post('/article/queryArticle', {
          pageNum: 1,
          pageSize: 100
        })
        .then(response => {
          let artList = response.data.data;
          this.list = this.list.concat(artList)
        })
        .catch(error => {
          console.log(error)
        })
    },
    toArtDetail (id) {
      this.$router.push({
        name: 'ArtDetail',
        query:{id:id}
      })
    },
    changePageNum(num) {
      this.nowPage = num;
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
