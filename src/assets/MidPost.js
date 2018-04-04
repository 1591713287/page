import axios from 'axios'
(function (root, factory) {
  if (typeof exports === "object") {
    // CommonJS
    module.exports = exports = factory();
  }
  else if (typeof define === "function" && define.amd) {
    // AMD
    define([], factory);
  }
  else {
    // Global (browser)
    root.MidPost = factory();
  }
}(this, function () {

  var MidPost = MidPost || (function () {

  });
  // 23423421312
  var configData = {
    url: 'https://www.51kangduo.com/midserver.asq',
    requestJson: "{'openId':'23423421312'}",
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
  };
   function Encrypt() {
    //字符串类型的key用之前需要用uft8先parse一下才能用
    configData.postData.requestEncrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(configData.requestJson), CryptoJS.enc.Utf8.parse(configData.Aeskey), {   //srcs代表明文
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    return configData.postData.requestEncrypted;
  };

  //aes解密
  function Decrypt(word) {
    var key = CryptoJS.enc.Utf8.parse(configData.Aeskey);
    var decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  };

    function md5sign() {
    var postDataKey = [];
    var index = 0;
    var md5Str = '';
    var postDatastr = JSON.stringify(configData.postData);
    var md5Json = JSON.parse(postDatastr);
//            md5Json.remove()
    $.each(md5Json, function (k, v) {         //循环加签
      if (k != "sign" && k != "signType") {
        postDataKey[index] = k;
        index++;
      }
    });
    postDataKey.sort();                      //排序加签
    $.each(postDataKey, function (key, val) {
      if (key != (postDataKey.length - 1)) {
        md5Str += (val + "=" + md5Json[val].toString() + "&");
      } else if (key == (postDataKey.length - 1)) {
        md5Str += (val + "=" + md5Json[val]);
      }
    });
    md5Str += '&key=' + configData.Aeskey;
    console.log(md5Str);
    configData.postData.sign = CryptoJS.MD5(md5Str).toString().toLocaleUpperCase();//  $.md5(md5Str).toLocaleUpperCase();
  };
  MidPost.postMidserver = function (options) {
    configData.requestJson = options.requestjson;
    configData.postData.service = options.service;
    console.log(options.service)
    options = $.extend({
      url: '',
      params: {},
      dataType: 'text',
      success: function (data) {
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
      }
    }, options);
    Encrypt();
    md5sign();
    console.log(JSON.stringify(configData.postData));
    axios({
      url: configData.url,
      method: 'post',
      timeout :1500,
      dataType: 'JSON',
      data: JSON.stringify(configData.postData)
    }).then(function (res) {
      try {
        console.log(res.data);
     //   data = eval('(' + res + ')');
        var response = '';
        console.log(res.data.responseEncrypted);
        if (res.data.responseEncrypted) {
          console.log(res.data.responseEncrypted);
          response = JSON.parse(Decrypt(res.data.responseEncrypted));
        }
        console.log(response);
        if (response) {
          options.success(response);
        } else {
          options.success(data);
        }
      } catch (e) {
      }
    }, function (XMLHttpRequest, textStatus, errorThrown) {
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
  }

  return MidPost;
}))
