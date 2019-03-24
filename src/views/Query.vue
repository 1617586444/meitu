<template>
  <div>
    <ol class="olLi">
      <li>
        <input class="put" type="text" placeholder="请输入运单号" v-model="inputVal" />
        <button class="btn" @click="queryInfo">查询</button>
      </li>
    </ol>
    <ol class="add-wrape">
      <li class="address" v-for="item in genre" :key="item.id">{{item.context}}
        <div>{{item.time}}</div>
        <div>{{item.location}}</div>
      </li>
    <p class="more" @click="$router.push('/about')">点击查看更多精彩</p>
    <p class="more" @click="$router.push('/video')">视频入口</p>
    </ol>
  </div>
</template>

<script>

import axios from 'axios'
export default {

   data () {
    return {
      genre: [],
      inputVal: '',
    }
  },
  methods: {
    queryGoods() {
      axios.get('https://api.apiopen.top/EmailSearch',{
        params: {
          number:this.inputVal
        }
      }).then (res=> {
        if (res.status == '200') {
        this.genre = res.data.result.data;
        } else{
          alert('网络有问题请稍后重试！')
        }

      })
    },
    queryInfo() {
      if (this.inputVal == '') {
        alert('请输入内容')
      } else {
        this.queryGoods();
      }
    },

  }
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
  ul>li{
    list-style: none;
    width:100%;
  }
  .item-img>li>img{
    width:100%;
    height:100%;
  }
  .tabItem{
    height: 50px;
    box-shadow: 0 0 10px #ccc;
    display: flex;
    line-height:50px;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    background:#fff;
  }
  .tabItem li{
    flex: 1;
    text-align: center;
    font-size:18px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
  }
  .active{
    color:blue;
    border-bottom: 2px solid blue;
    line-height:48px;
    display: inline-block;
  }
  ol{
    width:100%;
    height:40px;
    text-align: center;
    line-height:40px;
  }
  ol li{
    margin-top:20px;
  }
</style>
