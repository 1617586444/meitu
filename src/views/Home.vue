<template>
  <div class="home">
      <ul class="tabItem">
        <router-link tag="li" to="/query">查快递</router-link>
        <router-link tag="li" to="/image">美图</router-link>
      </ul>
    <router-view></router-view>
  </div>
</template>

<style scope>
.home{
  height:100%;
  width:100%;
}
*{
  margin:0;
  padding: 0;
}

  ul>li{
    list-style: none;
    width:100%;
  }

  .tabItem{
    height: 49px;
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
  .router-link-active{
    color:blue;
    border-bottom: 2px solid blue;
    line-height:48px;
    display: inline-block;
  }

</style>
