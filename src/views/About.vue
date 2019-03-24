<template>
  <div class="about">
    <center>
      <input type="text" class="put" placeholder="请输入歌名" v-model="name"><button @click="selectMusic" class="btn" >搜索</button>
    </center>
    <ul>
      <li v-for="item in videoList" :key="item.songid">
        <p>歌手：{{item.author}}</p>
        <p>歌名:{{item.title}}</p>
        <p class="muic-img"><img :src="item.pic" alt=""><audio :src="item.url" controls="controls"></audio></p>
      </li>
    </ul>
    <WangName/>
  </div>
</template>

<script>
import WangName from '../components/WangName.vue'
import axios from 'axios';
export default {
   components: {
    WangName,
  },
  data () {
    return{
      videoList:[],
      name: '',
    }
  },
  created() {

  },
  methods: {
    getVidioAction () {
      axios.get('https://api.apiopen.top/searchMusic',{
        params: {
          name: this.name
        }
      }).then(res => {
        console.log(res.data.result);
        this.videoList=res.data.result;

      })
    },
    selectMusic() {
      this.getVidioAction ()
    }
  },
}
</script>

<style scope>
  input,button {
  outline: none;
}
.more{
  text-align: right;
  color: blue;
}
.olLi{
  margin-top:60px;
}
.address{
  height:150px;
  overflow-x: auto;
}
*{
  margin:0;
  padding: 0;
}
.put{
  width: 60%;
  background: #fff;
  padding:10px;
  border:1px solid blue;
}
.btn{
  background:green;
  border:none;
  height:40px;
  width:80px;
  line-height:40px;
  text-align: center;
}
.muic-img img {
  width:50px;
  height: 50px;
}
</style>
