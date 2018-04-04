<template>
  <div>

    <div class="formlist">
      <form action="" class="formlist-content">
        <p><label class="Uname">姓名：</label><span><input type="text" placeholder="请输入姓名" v-model="showName" class="formlist-inp"></span></p>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
        <p><label class="Uname">身份证号：</label><span><input type="text" placeholder="请输入身份证号码" v-model="sfId" class="formlist-inp"></span></p>
        <span class="g-form-error">{{ sfIdErrors.errorText }}</span>
        <p class="tel">
          <label class="Uname">手机号：</label>
          <span ><input type="text" placeholder="请输入手机号码" v-model="Tel" class="formlist-inp"></span>
          <span><input
            type="button" value="发送" class="fasong"></span></p>
        <span class="g-form-error">{{ TelErrors.errorText }}</span>
        <p><label class="Uname">验证码：</label><span><input type="text" placeholder="请输入验证码" class="formlist-inp"></span></p>
        <div class="btn_regist"><input type="button" class="reg" value="注册" @click="fn"></div>
        <span class="g-form-error">{{errorText }}</span>
      </form>

      <!-- <button type="button" name="button" @click='scan'> 调用二维码 </button> -->

      <div data-role="page">
        <div data-role="content">
          * 公众号支付测试（第1步：商品列表） *<br><hr><br>
          尊敬的客户，请选择购买下列商品：
          <br><br>
          <a href=" ">铅笔一枝</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" name="button" @click='jyPay'> 调用支付 </button>
          <!-- <a href="/wxpay/order.asq?goodsid=0002&price=0.02&number=1&goodsname=橡皮&openid="+configData.requestJson.openId>橡皮一块</a><br><br>
          <a href="/wxpay/order.asq?goodsid=0003&price=0.03&number=1&goodsname=小刀&openid="+configData.requestJson.openId>小刀一把</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/wxpay/order.asq?goodsid=0004&price=0.04&number=1&goodsname=小书&openid="+configData.requestJson.openId>小书一本</a><br><br><hr><br> -->
          价格便宜透顶，再不买，你会后悔一辈子！<br>
          赶快点击上面的商品，立即付款购买！<br><br>
          送货：本人跑步送货给你。免运费哦！
          <br><br><br><br><br><br>
          <hr>
          <center>测试测试测试测试</center>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import wx from 'weixin-js-sdk'
  import  axios from 'axios'
  import { MidPost } from '../assets/MidPost.js'
  import all from '../../node_modules/vue-cookie/build/vue-cookie'

  export default {
    name:'reg',
    data () {
      return {
        showName:'',
        sfId:'',
        Tel:'',
        errorText:'',
        configData: {
          url: 'https://www.51kangduo.com/midserver.asq',
          requestJson: "{'openId':'1'}",
          Aeskey: '17C133AE614211DC',
          postData: {
            service: 'weixin.checkUser',
            partner: 'WYFRONTTEST',
            hospitalCode: '000004',
            dataFormat: 'JSON',
            inputCharset: 'utf-8',
            debug: true,
            requestEncrypted: '+l946Wek1izYa++D9OBmpw==',
            signType: 'md5',
            sign: '192C2382A2BFA47DCB52B961574CB525'
          }
        },
        wxConfigJson:''
      }
    },

    created () {

      var that = this
      axios({
        url:'https://www.51kangduo.com/YLaccess.asq',
        // url: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1625a10ed8d25739&redirect_uri=https%3A%2F%2Fwww%2E51kangduo%2Ecom%2FYLaccess%2Easq&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect',
        method: 'post',
        timeout :1500,
        dataType: 'JSON',
        data: "{'url':'"+location.href.split('#')[0]+ "'}"
      }).then(function (res) {

        console.log(res.data)
        that.wxConfigJson = res.data;
        console.log(that.wxConfigJson);

        let jssdk = that.wxConfigJson;

        wx.config({
          debug: true,
          appId: jssdk.AppId,
          timestamp:jssdk.TimeStamp,
          nonceStr: jssdk.NonceStr,
          signature: jssdk.Signature,
          jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'onVoicePlayEnd',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
          ]
        });
        wx.ready(function() { //通过ready接口处理成功验证
          // config信息验证成功后会执行ready方法

        });

        wx.error(function(res) {//通过error接口处理失败验证
          // config信息验证失败会执行error函数
        })


      },function (XMLHttpRequest, textStatus, errorThrown) {
        Common.hideMask();
        if (textStatus == 'timeout') {
          alert("请求超时，请重新尝试");
        }
        if (options.isTip == undefined || options.isTip == null || options.isTip != false) {
          alert("请确认网络连接,或联系管理员！");
        }
        options.error(XMLHttpRequest, textStatus, errorThrown);
      }).catch(function (err) {
        console.log(err)
      })


      //获取cookie
      function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1);
          if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
      }

      function get(name) {

        var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');

        return v ? v[2] : null;

      }

      //aes解密
      var that = this;

      function Decrypt(word) {
        var key = CryptoJS.enc.Utf8.parse(that.configData.Aeskey);
        var decrypt = CryptoJS.AES.decrypt(word, key, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
      };


      var openid = Decrypt(getCookie('OpenId'));

      console.log("解密后"+openid);

      //  var requestJson = null;
      if (openid != '') {
        this.configData.requestJson ={openId:openid}
        //console.log(requestJson)
      } else
      {
        this.configData.requestJson = {openId:'test'}
      }

      console.log(JSON.stringify(this.configData.requestJson))

      var that = this;
      MidPost.postMidserver({success:function(data){
          console.log(data.ifNew)
          if(data.ifNew && data.ifNew == 1){
            console.log('router register')
          }else{
            that.$router.push('/Register')
          }
        },
        service:"weixin.checkUser",
        requestjson: JSON.stringify(that.configData.requestJson)
      })
    },

    computed:{
      userErrors (){
        let errorText,status;
        if(this.showName === ''){
          status = false;
          errorText = ''
        } else if(!/^[\u4e00-\u9fa5]{0,}$/g.test(this.showName)){
          status = false;
          errorText = '姓名必须为汉字'
        }
        else{
          status = true;
          errorText = ''
        }
        return{
          errorText,
          status
        }
      },
      sfIdErrors (){
        let errorText ,status;
        if(this.sfId === ''){
          status = false;
          errorText = ''
        }else if(!/^\d{15}|\d{18}$/g.test(this.sfId)){
          status = false;
          errorText = '请正确输入身份证号码'
        }else{
          status = true;
          errorText = ''
        }
        return{
          errorText,
          status
        }
      },
      TelErrors (){
        let errorText ,status;
        if(this.Tel === ''){
          status = false;
          errorText = ''
        }else if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g.test(this.Tel)){
          status = false;
          errorText = '请正确输入手机号码'
        }else{
          status = true;
          errorText = ''
        }
        return{
          errorText,
          status
        }
      }
    },
    methods:{
      fn () {
        if (!this.userErrors.status || !this.sfIdErrors.status || !this.TelErrors.status) {
          this.errorText = '请正确输入要填写的内容!!!'
        }
        else {
          this.errorText = '';
          let instance = Toast('注册成功');
          this.$router.push('/OrderList');
          setTimeout(() => {
            instance.close();
          }, 1000);
        }
      },
      jyPay () {
        var payUrl =  "/wxpay/order.asq?goodsid=0002&price=0.02&number=1&goodsname=橡皮&openid="+this.configData.requestJson.openId ;
        //console.log(payUrl);
        window.open(payUrl);
      },
      scan () {
        wx.scanQRCode({
          desc: 'scanQRCode desc',
          needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
            // 回调
          },
          error: function(res){
            if(res.errMsg.indexOf('function_not_exist') > 0){
              alert('版本过低请升级')
            }
          }
        });
      }
    }

  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .header{
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: black;
    color: white;
    text-align: center;
  }
  .formlist-content{
    width: 90%;
    padding: 0 auto;
  }
  .formlist{
    margin-top: 40px;
  }
  .formlist p{
    width: 100%;
    margin-top: 8px;
    display: inline-block;
    text-align: center;
  }
  input{
    outline: none;
  }
  .formlist-inp{
    display: inline-block;
    height: 30px;
    width: 50%;
    border-radius: 5px;
    border: 1px solid black;
    text-indent: 1em;
  }
  .tel{
    position: relative;
  }
  .tel .fasong{
    position: absolute;
    top: 3px;
    border: 1px solid #999;
    padding: 4px;
    border-radius: 5px;
    margin-left: 5px;
  }
  .fasong{
    display: inline-block;
    width: 11%;
  }
  .reg{
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #26a2ff;
    color: white;
    border: none;
    border-radius: 7px;
  }
  .g-form-error{
    padding-left: 30px;
    color: red;
    font-size: 10px;
  }
  .Uname{
    width: 25%;
    display: inline-block;
    padding-right: 5px;
    text-align: right;
  }
  .btn_regist{
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
</style>
