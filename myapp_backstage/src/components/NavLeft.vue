<template>
  <div class="NacLeft_container">
    <div :class="{nav_item:true, active:index == 0}" @click="toAddArt">添加文章</div>
    <div :class="{nav_item:true, active:index == 1}" @click="toAbout">关于</div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      index:0,

    }
  },
  computed: {},
  watch: {},
  onShow () {
  },
  created () {
  },
  methods: {
    toAddArt () {
      this.index = 0
      if (this.$route.name === 'AddArt') {
        return
      }
      this.$router.push({
        name: 'AddArt'
      })
    },
    toAbout () {
      this.index = 1
      if (this.$route.name === 'About') {
        return
      }
      this.$router.push({
        name: 'About'
      })
    }
  }
}
</script>

<style scoped>
.NacLeft_container {
  width: 250px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 100vh;
  background: #202020;
  color: #fff;
}
.nav_item {
  height: 45px;
  line-height: 45px;
  color: #999;
}
.nav_item.active {
  color: #fff;
  background: #2479cc;
}
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #008c8c;
  margin-bottom: 20px;
}
.avatar_box {
  margin: 30px 0;
}
</style>
