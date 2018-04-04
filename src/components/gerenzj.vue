<template>
	<div class="divss">
			<p><slot></slot></p>
			<p class="zzz">
				<h6>{{txt}}</h6>
				<span class="mm">{{ass}}</span>
			</p>

	</div>
</template>

<script>
	export default{
		props:['txt','ass'],
	}
</script>

<style scoped>
.divss{
		width: 49.3%;
		height: 50px;
		border: 1px solid #c3c3c3;
		float: left;
		text-align: left;
		border-right: none;
		background-color: white;
		padding-top:  10px;
	}
	.divss p:nth-child(1){
		font-size: 12px;
		width: 20%;
		float: left;
		margin-top: 6px;
		margin-left: 10px;
	}
	.divss p:nth-child(2){
		width: 80%;
		float: right;
		padding-top: 10px;

	}

	.mm{
		font-size: 10px;
		color: #C3C3C3;
	}


</style>
