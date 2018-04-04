<template>
  <div class="main-content">
    <div class="header-search">
      <p class="search-inp"><input type="text" placeholder="输入姓名首字母或汉字找医生"></p>
      <span class="icon iconfont icon-iconfontzhizuobiaozhun22 search-icon"></span>
    </div>
  <div class="list">
    <!-- <span class="glyphicon glyphicon-menu-right"></span> -->
    <div class="list-left">
      <router-link tag="li" :to="{path:item.path}" active-class="active" v-for="item in showkeshi" >{{item.name}}</router-link>
    </div>
    <div class="list-right">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name:'ydui',
  data () {
    return {
      showkeshi:[
        {
          name:'内科',
          path:'nei'
        },
        {
          name:'外科',
          path:'wai'
        },
        {
          name:'妇产科',
          path:'fuchan'
        },
        {
          name:'儿科',
          path:'erke'
        },
        {
          name:'皮肤科',
          path:'pifu'
        },
        {
          name:'肿瘤中心',
          path:'zhongliu'
        },
        {
          name:'妇瘤',
          path:'fuliu'
        },
        {
          name:'神经科',
          path:'shenjing'
        },
        {
          name:'中医科',
          path:'zhongyi'
        },
        {
          name:'眼科',
          path:'yanke'
        },
        {
          name:'耳鼻喉科',
          path:'erbihou'
        },
        {
          name:'口腔科',
          path:'kouqiang'
        },
        {
          name:'康复科',
          path:'kangfu'
        },
        {
          name:'放射科',
          path:'fangshe'
        },
        {
          name:'病理科',
          path:'bingli'
        },
        {
          name:'其他科室',
          path:'qita'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .header-search{
    width: 100%;
    background-color: whitesmoke;
    padding: 15px 0;
  }
  .header-search p{
    margin: 0 auto;
    width: 90%;
    position: relative;
  }
  .header-search input{
    width: 100%;
    height: 28px;
    text-indent: 1em;
    border: 1px solid #ccc;
    border-radius: 20px;
    color: #999;
  }
  input::-webkit-input-placeholder {
    color: #aab2bd;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
  }
  .search-icon{
    display: inline-block;
    width: 38px;
    height: 26px;
    background-color: aqua;
    color: white;
    border-radius: 0 20px 20px 0;
    position: absolute;
    top: 16px;
    right: 5.23%;
  }
  .list{
    width: 100%;
  }
  .list-left{
    width: 45%;
    float: left;
  }
  .list-left li{
    list-style: none;
    width: 100%;
    text-align: left;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    text-indent: 1.5em;
    background-color: #F6F6F6;
    color: black;
    border-right: 1px solid #ccc;
  }
  .list-left li:hover,
  .list-left li.active{
    color: aquamarine;
    background-color: #FFF;
    border: 1px solid #ccc;
    border-right: none;
    border-left: 3px solid aquamarine;
  }
  .list-left li:first-of-type{
    border-top: none;
  }
  .list-left li:last-child{
    border-bottom: 1px solid #ccc;
  }
  .list-right{
    width: 55%;
    float: right;
    text-align: center;
  }

</style>
