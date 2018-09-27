<template>
	<div id="main" style="width: 100%;height:400px;"></div>
</template>
<script type="text/javascript">
	import echarts from 'echarts';
	require('echarts/theme/macarons'); // echarts 主题

	export default{
		data(){
			return {
				
			}
		},
		mounted(){
			this.initChart();
		},
		methods:{
			initChart(){
				var myChart = echarts.init(document.getElementById('main'));
				let pieOption = {
					title:{
						text: '天气情况统计',
        				subtext: '虚构数据',
        				left: 'center'
					},
					tooltip:{
						trigger: 'item',
        				formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend:{
						bottom: 10,
        				left: 'center',
        				data: ['已装机', '试用','正式启用','已停用','重新启用']
					},
					series:[
						{
							type:'pie',
							radius:'65%',
							center:['50%',"50%"],
							selectedMode:'single',
							data:[
								{value:535,name:"已装机"},
								{value:520,name:"试用"},
								{value:634,name:"正式启用"},
								{value:735,name:"已停用"},
								{value:735,name:"重新启用"}
							],
						}
					],
					itemStyle:{
						emphasis:{
							shadowBlur: 10,
                    		shadowOffsetX: 0,
                    		shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				};
				myChart.setOption(pieOption);
			}
		}
	}
</script>