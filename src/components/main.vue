<template lang="html">
  <div class="main">
    <mt-header title="首页"></mt-header>

    <!-- <div class="footer">
    </div> -->
    <router-view></router-view>
  </div>


</template>

<script>
  import wx from 'weixin-js-sdk'
  import  axios from 'axios'
  import { MidPost } from '../assets/MidPost.js'
  import all from '../../node_modules/vue-cookie/build/vue-cookie'
  export default {
    data () {
      return {
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
          wx.onMenuShareAppMessage({ // 分享给朋友  ,在config里面填写需要使用的JS接口列表，然后这个方法才可以用
            title: '这里是标题', // 分享标题
            desc: 'This is a test!', // 分享描述
            link: '链接', // 分享链接
            imgUrl: '图片', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
              alert('成功')
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          });
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

      var requestJson = null;
      if (openid != '') {
        requestJson ={openId:openid}
        //console.log(requestJson)
      } else
      {
        requestJson = {openId:'test'}
      }

      console.log(JSON.stringify(requestJson))

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
        requestjson: JSON.stringify(requestJson)
      })
    }
  }
</script>

<style lang="css">

</style>
