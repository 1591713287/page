<template>
<div class="">
   <!--顶部-->
    <mt-header title="用户管理">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">back</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

    <div class="hello">
	    	<img src="../assets/imgs/touxianglogo.png"/>
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

    <div class='que'>
  		<p class="que-to1">

  			已完成订单
  		</p>
  		<p class="que-to2">未完成订单</p>
  	</div>

    <rootFoot></rootFoot>
  </div>
</template>

<script>
import rootFoot from './footer.vue';
export default {
  data () {
    return {
      msg: '姓名',
      tut:'性别',
      tss:'年龄',
      zh:'账号设置'
    }
  },
  components:{
     rootFoot
  }

}
</script>


<style scoped>
.hello{
	width: 100%;
	height: 80px;
	border-bottom: 1px solid #c3c3c3;
	background-color: white;
	position: relative;
}
.hello img{
	width: 50px;
	position: absolute;
	left: 30px;
	top: 15px;
}
.hello p{
	font-size: 15px;
	padding-top: 25px;
	position: absolute;
	left: 100px;

}
.hello ul{
	position: absolute;
	left: 95px;
	top: 20px;
}
.hello li{
	font-size: 13px;
	color: #C3C3C3;
	display: inline-block;
	margin-top: 30px;
}
.hello h5{
	width: 120px;
	height: 40px;
	line-height: 40px;
	background-color: #0FC7D3;
	color: white;
	border-radius: 50px 0 0 50px;
	position: absolute;
	right: 0px;

}
.hello h5 img{
	width: 20px;
	margin-left: -15px;
	margin-top: -6px;
}
.hello h5 span{
	margin-left: 25px;
}
.que{
		width: 100%;
		height: 50px;
		line-height: 50px;
		border: 1px solid #c3c3c3;
		float: left;
		text-align: center;
		border-right: none;
		background-color: white;
		margin-top: 20px;
}
.que-to1{
	float: left;
	width: 50%;
	height: 50px;
	border-right: 1px solid #C3C3C3;
	font-size: 13px;
}

.que-to1 img{
	width: 20px;

}
.que-to2{
	font-size: 13px;
}


</style>
