<template lang="html">
  <div class="OrderList">
    <mt-header title="处方详情">
        <router-link to="/" slot="left">
           <mt-button icon="back">back</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="chooseHos">
        <span>选择医院:</span>
        <select >
            <option v-for="item in hosList" v-bind:value="item.value">{{item.text}}</option>
        </select>
        <p>
            <button type="button" name="button" class="checkHos" @click="checkHos()">查询</button>
        </p>
    </div>
    <ul v-for="(item,index) in checkInfo" class="checkInfo">
       <li>{{item.hosName}}</li>
       <li>{{item.address}}</li>
       <li>{{item.tel}}</li>
    </ul>

    <rootFoot></rootFoot>
  </div>
</template>

<script>
import rootFoot from './footer.vue';
export default {
  data(){
    return{
            hosList:[
              {text:'A医院',value:'a'},{text:'B',value:'b'},{text:'C',value:'c'}
            ],
            input3: 'ydui@qq.com',
            input4: '',
            input5: '',
            checkInfo:[]
    }
  },
  methods:{
     checkHos(){
       this.$http.get('../../../static/test.json').then((response) => {
           // 响应成功回调
           this.checkInfo.push(response.data);
           console.log(this.checkInfo)
           console.log(response.data);
        }, (response) => {
          // 响应错误回调
          console.log('服务器请求失败');
       });
     }
  },
  components:{
    rootFoot
  }

}
</script>

<style lang="css">
  .chooseHos p button{
    width:60px;
    text-align: center;
  }
  .chooseHos{
    width: 100%;
    height: 70px;
  }
  .chooseHos span{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    text-align: left;
  }
  .chooseHos select{
    width: 50%;
    height: 24px;
    outline: none;
    border-radius: 7px;
  }
  .checkHos{
    border: 1px solid #999;
    border-radius: 7px;
    padding: 5px;
  }
.checkInfo{
  clear: both;
  padding: 0;
  margin: 10px 0;
}
.checkInfo li{
  display: inline-block;
  font-size: 14px;
  width: 30%;
}




</style>
