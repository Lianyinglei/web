<template>
	<div id="barchart" style="width: 100%;height:400px;"></div>
</template>
<script type="text/javascript">
	import echarts from 'echarts';
	require('echarts/theme/macarons'); // echarts 主题

	export default{
		data(){
			return{

			}
		},
		mounted(){
			this.initChart();
		},
		methods:{
			initChart(){
				var myChart = echarts.init(document.getElementById("barchart"));
				let barOption = {
					color:["#3398DB"],
					tooltip:{
						trigger:"axis",
						axisPointer:{
							type:'shadow'
						}
					},
					grid:{
						left:'3%',
						right:'4%',
						bottom:"3%",
						containLabel:true
					},
					xAxis:[
						{
							type:'category',
							data:['Mon','Tue','Wed','Thu','Fri',"Sat",'Sun'],
							axisTick:{
								alignWidthLabel:true
							}
						}
					],
					yAxis:[{
						type:'value'
					}
					],
					series:[
						{
							name:'直接访问',
							type:'bar',
							barWidth:'60%',
							data:[10,52,200,334,390,220,330]
						}
					]
				};
				myChart.setOption(barOption);
			}
		}

	}
	
</script>
<style type="text/css">
	
</style>