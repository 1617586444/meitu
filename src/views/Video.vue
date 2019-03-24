<template>
  <div>
    <p class="tab">
      <router-link to="/video">搞笑</router-link>
      <router-link to="/day">每日推荐</router-link>
    </p>
    <ul>
      <li v-for="item in list" :key="item.id">
        <h3>{{item.name}}</h3>
        <p class="userHeader"><img :src="item.header" alt=""></p>
        <p>{{item.text}}</p>
        <video controls="controls" :poster="item.thumbnail" :src="item.video"></video>
      </li>
    </ul>
    <center @click="goPage">下一页</center>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      numPage:1,
      count: 8,
      type: 'video',
      list: []
    }
  },
  created () {
    this.getVideo()
  },
  methods: {
    getVideo() {
        axios.get('https://api.apiopen.top/getJoke',{
        params: {
          page: this.numPage,
          count: this.count,
          type: this.type
        }
      }).then(res => {
        this.list.push(...res.data.result)
      })
    },
    goPage() {
      this.numPage++;
      this.getVideo()
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
  .userHeader img{
    width:30px;
    height:30px;
    float: left;
    border-radius: 50px;
  }
  video{
    width:100%;
    height:100%;
  }
  .tab{
    width:100%;
    height: 50px;
    display: flex;
    line-height:50px;
    font-size:20px;
    justify-content:space-around;
    box-shadow: 0 0 10px #ccc;
  }
  .tab a{
    color: #333;
    text-decoration: none;
  }
  .router-link-active{
    color:blue;
    border-bottom: 2px solid blue;
    line-height:48px;
    display: inline-block;
  }

</style>
