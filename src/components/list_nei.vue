<template>
  <div class="shouji">
      <ul class="shouji-list">
        <router-link class="list-title" v-for="item in keshi" :to="{ path: item.path }" tag="li" active-class="active">
          {{ item.name }}
          <i class="icon iconfont icon-jiantouyou rightIcon-1"></i>
        </router-link>
      </ul>
  </div>
</template>

<script>
    export default {
      name: "ydui-shouji",
      data () {
        return {
          keshi:[
            {
              name:'消化内科门诊(6楼)',
              path:'xiaohua'
            },
            {
              name:'心内科门诊(6楼)',
              path:''
            },
            {
              name:'肾内科门诊(6楼)',
              path:''
            },
            {
              name:'内分泌门诊(6楼)',
              path:''
            },
            {
              name:'感染科(1楼)',
              path:''
            },
            {
              name:'血液内科门诊(6楼)',
              path:''
            },
            {
              name:'呼吸内科门诊(6楼)',
              path:''
            },
              ]
            }
      },
      methods:{

      }
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
  ul{
    width: 100%;
    height: auto;
    padding-left: 15px;
  }
  .list-title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }
  .shouji-list li{
    position: relative;
  }
  .rightIcon-1{
    color: #ccc;
    position: absolute;
    top: 12px;
    left: -117px;
  }
</style>
