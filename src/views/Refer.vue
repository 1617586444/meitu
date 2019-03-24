<template>
  <div>
    <p class="tab">
      <router-link to="/video">搞笑</router-link>
      <router-link to="/day">每日推荐</router-link>
    </p>
    <ul>
      <li v-for="item in list" :key="item.id">
        <h3>{{item.name}}</h3>
        <p class="userHeader"><img :src="item.profile_image" alt=""></p>
        <p>{{item.text}}</p>
        <video :src="item.videouri" controls="controls" :poster="item.image_small"></video>
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
      type: 1,
      list: []
    }
  },
  created () {
    this.getVideo()
  },
  methods: {
    getVideo() {
        axios.get('https://www.apiopen.top/satinApi',{
        params: {
          page: this.numPage,
          type: this.type
        }
      }).then(res => {
        this.list.push(...res.data.data)
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
