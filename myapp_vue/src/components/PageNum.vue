<template>
  <div class="PageNum-container">
    <div :class="{'btn-item':true,'disable':current==1}" @click="handlePageClick(1)">首页</div>
    <div :class="{'btn-item':true,'disable':current==1}" @click="handlePageClick(current-1)">上一页</div>
    <div :class="{'btn-item':true,'active':item==current}"
         v-for="item in numberArr" :key="item" @click="handlePageClick(item)">
      {{item}}
    </div>
    <div :class="{'btn-item':true,'disable':current==allPageNum}" @click="handlePageClick(current+1)">下一页</div>
    <div :class="{'btn-item':true,'disable':current==allPageNum}" @click="handlePageClick(allPageNum)">尾页</div>
    <div class="box">
      <span>跳转到</span>
      <input class='input' @keydown="handleKeyDown($event)" v-model="inputNum"/>
      <span>页</span>
    </div>
  </div>
</template>

<script>
/**
 * nowPage 当前页码
 * allData 总数据量
 * limit 每页显示量
 * maxPageLen 最大页码数量
 */
export default {
  components: {},
  props: {
    nowPage: {
      type: Number
    },
    allData: {
      type: Number
    },
    limit: {
      type: Number,
      default: 10
    },
    maxPageLen: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      numberArr: [],
      current:this.nowPage,
      inputNum:'',
    }
  },
  computed: {
    allPageNum() {
      return Math.ceil(this.allData / this.limit)
    }
  },
  watch: {
    nowPage: {
      handler() {
        console.log('change')
        this.current = this.nowPage
        this.handleArr()
      },
      immediate:true
    }
  },
  onShow() {
  },
  created() {
  },
  methods: {
    handleKeyDown(e) {
      if(e.keyCode == 13) {
        const reg = /(^[1-9]\d*$)/g;
        const result = reg.test(this.inputNum);
        if (!result) {
          alert('格式不对')
          return;
        }
        if(this.inputNum < 1 || this.inputNum > this.allPageNum) {
          alert('页数不对')
          return;
        }
        this.$emit('handleClick',parseInt(this.inputNum))
        this.inputNum = ''
      }
    },
    handleArr() {
      let minPage = Math.ceil(this.current - (this.maxPageLen / 2))
      let maxPage = Math.ceil(this.current + (this.maxPageLen / 2))
      if(minPage <= 1) minPage = 1
      if(maxPage >= this.allPageNum) maxPage = this.allPageNum
      if(this.allPageNum < this.maxPageLen) {
        minPage = 1;
        maxPage = this.allPageNum;
      }
      let tempArr = []
      for (let i = minPage; i <= maxPage; i++) {
        tempArr.push(i)
      }
      this.numberArr = tempArr
    },
    handlePageClick(num) {
      if(num < 1 ) return;
      if(num > this.allPageNum) return;
      if(num == this.current) return;
      this.$emit('handleClick',num)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.btn-item {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 3px;
  cursor: pointer;
  color: #2479cc;
  font-size: 14px;
  border: 1px solid #2479cc;
  margin: 0 2px;
}

.btn-item.disable {
  cursor: not-allowed;
  color: #ccc;
  border-color: #ccc;
}
.btn-item.active {
  background: #2479cc;
  color: #fff;
}
.box {
  display: inline-block;
}
.input {
  width: 20px;

}
</style>
