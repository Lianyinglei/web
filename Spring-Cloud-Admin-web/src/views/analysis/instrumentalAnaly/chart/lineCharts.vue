<template>
	<div id="mainChart" style="width: 100%;height:400px;"></div>
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
				var myChart = echarts.init(document.getElementById('mainChart'));
				let  lineOption = {
					title: {
				        text: '折线图堆叠'
				    },
				    tooltip:{
				    	trigger:'axis'
				    },
				    // legend:{
				    // 	data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
				    // },
				    grid:{
				    	left:"3%",
				    	right:'4%',
				    	bottom:"3%",
				    	containLabel:true
				    },
				    toolbox:{
				    	feature:{
				    		saveAsImage:{}
				    	}
				    },
				    xAxis:{
				    	type:'category',
				    	boundarGap:false,
				    	data:['类别1',"类别2","类别3","类别4"]
				    },
				    yAxis:{
				    	type:'value'
				    },
				    series:[
				    	{
		    	            type:'line',
		    	            data:[120, 132, 101, 134]
		    	        }
				    ]
				};
				myChart.setOption(lineOption);
			}
		}
	}
</script>
<style type="text/css">
	
</style>