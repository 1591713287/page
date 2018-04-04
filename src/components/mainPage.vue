<template lang="html">
    <div class="mainPage">
      <swiperPart swiperid='go'>
        <div slot='swiper-con' class="swiper-slide">
          <img src="../assets/imgs/c_one.jpg" alt="loading..." />
        </div>
        <div slot='swiper-con' class="swiper-slide">
          <img src="../assets/imgs/c_two.jpg" alt="loading..." />
        </div>
        <div slot='swiper-con' class="swiper-slide">
          <img src="../assets/imgs/c_three.jpg" alt="loading..." />
        </div>
      </swiperPart>

       <!-- 定位div -->
        <div class="address">
            <span class="addLogo">
              <img src="../assets/imgs/dz.png" alt="...">
            </span>
            <span class="addText">当前院区:武汉大学中南...</span>
        </div>

      <!-- 九宫格 -->
        <div class="content col-xs-12">
            <div class="col-xs-4 infoCell" v-for="(item,index) in itemInfo">
              <router-link :to="listSrcArr[index]"  class="infoLink">
                <img :src="item.imgSrc" alt="loading..." class="LogoPicture"><br/>
                <span>{{item.text}}</span>
              </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import swiperPart from './swiper.vue';
export default {
  data(){
    return{
          listSrcArr:[
            "/SectionList","/todayList","/SectionList",
            "/SectionList","/SectionList","/SectionList",
            "/SectionList","/SectionList","/SectionList",
            "/SectionList","/geren"
          ],
          itemInfo:[
              {
                imgSrc:require('../assets/imgs/p1.png'),
                text:"预约挂号"
              },
              {
                imgSrc:require('../assets/imgs/p2.png'),
                text:"当天挂号"
              },
              {
                imgSrc:require('../assets/imgs/p3.png'),
                text:"扫码付"
              },
              {
                imgSrc:require('../assets/imgs/p4.png'),
                text:"门诊缴费"
              },
              {
                imgSrc:require('../assets/imgs/p5.png'),
                text:"门诊查询"
              },
              {
                imgSrc:require('../assets/imgs/p6.png'),
                text:"一日清单查询"
              },
              {
                imgSrc:require('../assets/imgs/p7.png'),
                text:"检查报告单"
              },
              {
                imgSrc:require('../assets/imgs/p8.png'),
                text:"检验报告单"
              },
              {
                imgSrc:require('../assets/imgs/p9.png'),
                text:"体检报告单"
              },
              {
                imgSrc:require('../assets/imgs/p10.png'),
                text:"问卷调查"
              },
              {
                imgSrc:require('../assets/imgs/p11.png'),
                text:"个人中心"
              }
          ]

      }
  },
  components:{
      swiperPart
    }
}
</script>

<style lang="css">
/* 中间医院定位 */
.address{
  width: 76%;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  border-radius: 20px;
  position: relative;
  top: -20px;
  left: 11%;
  z-index: 2;
  background: #fff;
  box-shadow: 1px 2px 1px paleturquoise;
}
.addLogo img{
  width: 22px;
  height: 30px;
}
.addText{
  letter-spacing: 3px;
}
/* 主体九宫格部分 */
.content{
 padding: 0;
 background: white;
}
.infoLink{
  display: inline-block;
  text-align: center;
  color:#333;
  font-size: 14px;
  padding: 10px 0;
}
.infoCell{
  display: inline-block;
}
.LogoPicture{
   width:82px;
   height:82px;
 }


</style>
