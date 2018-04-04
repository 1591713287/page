<template lang="html">

    <div class="tabs">
  <!--命名路由-->
  <ul class="list">
   <!--this inspection reports XML/HTML tags with missing mandatory attrbutes ,you can specify attrbute name that should not be reported-->
   <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->
   <router-link :to="{name:'Register'}" tag="li" exact>
    <div>
     <i class="icon iconfont icon-editor"></i>
    </div>
    <div>注册</div>
   </router-link>
   <router-link :to="{name:'OrderInfo'}" tag="li">
    <div>
     <i class="icon iconfont icon-mine_fill"></i>
    </div>
    <div>用户管理</div>
   </router-link>
   <router-link :to="{name:'OrderList'}" tag="li">
    <div>
     <i class="icon iconfont icon-createtask"></i>
    </div>
    <div>处方详情</div>
   </router-link>
  </ul>
     </div>
</template>

<script>
export default {
}
</script>
<style lang="css">
   .tabs {
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: #fff;
      width: 100%;
    }
   .tabs > ul, .tabs > ul > li {
       margin: 0;
       padding: 0;
    }
   .list {
       display: table;
       width: 100%;
    }
    .list > li {
       width: 32%;
       font-size: 14px;
       display: inline-block;
       cursor: pointer;
     }
    .list li.router-link-active{
       color: red;
     }
    .list li > div {
       font-size: 14px;
     }
    .list .iconfont{
       font-size: 28px;
     }
</style>
