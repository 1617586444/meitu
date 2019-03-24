<template>
  <div class="image-wrape">
     <ul class="item-img">
      <li v-for="(item,ind) in list" :key="ind">
        <img :src="item.url" >
      </li>
      <center><button @click="loadMore">点击下一页</button></center>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      currentPage: 2,
      list: [],
      isIndex: 0,
      genre: [],
      inputVal: '',
    }
  },
    methods: {
      loadImg () {
    axios.get('https://www.apiopen.top/meituApi',
      {
        params: {
          page: this.currentPage   // 页数
        }
      }).then( (item) => {

      this.list.push(...item.data.data);
    }).catch( error => {
      console.log(error);
    })
    },
    loadMore() {
      this.currentPage ++;
      this.loadImg ();
    },
      togooleNum(index) {
      this.isIndex = index;
    },
    },
    created () {
    this.loadImg ();
  },
}
</script>

<style scope>
.image-wrape{
  overflow: hidden;
  margin-top:50px;
}
.item-img img{
  width:100%;
  height:100%;
}
</style>
