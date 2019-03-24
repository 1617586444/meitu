<template>
  <div>
    <h2><center>网名大全</center></h2>
    <ul>
      <li v-for="name in nameList" :key="name.id"><center>{{name.femalename}}</center></li>
    </ul>
    <center><button @click="btn">加载更多</button></center>
  </div>
</template>

<script>
import axiois from 'axios';
export default {
  data () {
    return{
      curPage: 1,
      nameList: []
    }
  },
  created() {
    this.getWangName ()
  },
  methods: {
    getWangName () {
      axiois.get('https://www.apiopen.top/femaleNameApi',{
        params: {
          page: this.curPage,
        }
      }).then(item => {
        console.log(item.data.data);
        this.nameList.push(...item.data.data);
      })

    },
    btn() {
        this.curPage ++;
        this.getWangName()
      }
  }
}
</script>

<style scope>
 ul li{
   line-height:30px;
   border-block-end: 1px solid #ccc;
 }
</style>
