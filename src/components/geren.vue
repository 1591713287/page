<template>
	<div>
	  <div class="nav-geren">
	  	<img src="../assets/imgs/tx.png"/>
	  	<p>{{msg}}</p><br />
	  	<ul>
	  		<li>{{tut}}</li>
	  		<li>{{tss}}</li>
	  	</ul>
	  	<h5>
	  	<img src="../assets/imgs/szz.png"/>
	  		<span>{{zh}}</span>
	  	</h5>
	  </div>

	  	<div id="wei">
			<gerenzj txt='我的二维码' ass='扫码快速授权身份'>
				<img src="../assets/imgs/333.png"/>
			</gerenzj>

			<gerenzj txt='意见反馈' ass='着急问题，请联系'>
				<img src="../assets/imgs/333.png"/>
			</gerenzj>

			<gerenzj txt='常用就诊人' ass='增加\修改\删除'>
				<img src="../assets/imgs/333.png"/>
			</gerenzj>

			<gerenzj>
				<img src="../assets/imgs/333.png"/>
			</gerenzj>
		</div>

		<div class="dd">
			<p>{{ding}}</p>
			<gerenzj txt='挂号订单' ass="当日订单/预约订单">
				<img src="../assets/imgs/333.png"/>
			</gerenzj>
			<gerenzj txt='门诊缴费订单' ass="查询核对电子凭条">
				<img src="../assets/imgs/333.png"/>
			</gerenzj>
		</div>


	  	<div class="qt">
			<p>{{ qts }}</p>
			<gerenzj txt='帮助中心' ass="操作帮助/就医引导">
				<img src="../assets/imgs/333.png"/>
			</gerenzj>

			<gerenzj txt='关于我们' ass="由腾医信息技术支持">
				<img src="../assets/imgs/333.png"/>
			</gerenzj>
		</div>
  </div>
</template>

<script>
import gerenzj from './gerenzj.vue';//引用组件
export default {

  data () {
    return {
      msg: '李立',
      tut:'男',
      tss:'42岁',
      zh:'账号设置',
      ding:'我的订单',
      qts:'其他服务'

    }
  },
  components:{
  	gerenzj
  }

}
</script>

<style scoped>
.nav-geren{
	width: 100%;
	height: 80px;
	border-bottom: 1px solid #c3c3c3;
	background-color: white;
}
.nav-geren img{
	width: 50px;
	position: absolute;
	left: 30px;
	top: 15px;
}
.nav-geren ul{
	position: absolute;
	left: 95px;
}
.nav-geren li{
	font-size: 12px;
	color: #C3C3C3;
	display: inline-block;
	margin-top: 30px;
}
.nav-geren p{
	font-size: 15px;
	padding-top: 25px;
	position: absolute;
	left: 100px;

}
.nav-geren h5{
	width: 120px;
	height: 40px;
	line-height: 40px;
	background-color: #0FC7D3;
	color: white;
	border-radius: 50px 0 0 50px;
	position: absolute;
	right: 0px;

}
.nav-geren h5 img{
	width: 20px;
	margin-left: -15px;
	margin-top: -6px;
}
.nav-geren h5 span{
	margin-left: 25px;
}
#wei{
		width: 100%;
		height: 100px;
		margin-top: 20px;
	}
	#wei img{
		width: 20px;
	}
	#wei dier:nth-child(1){
		border-left: none;
	}
	.dd{
		width: 100%;
		height: 100px;
		margin-top: 30px;
	}
	.dd img{
		width: 20px;
	}
	.dd p{
		font-size: 14px;
		margin-left: -250px;
		line-height: 40px;
	}


	.qt{
		width: 100%;
		height: 100px;
		margin-top: 20px;
	}
	.qt img{
		width: 20px;
	}
	.qt p{
		font-size: 14px;
		margin-left: -250px;
		margin-bottom: 20px;
	}
</style>
