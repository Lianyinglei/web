<template>
	<div :class="className" :style="{height:height,width:width}"/>
</template>
<script type="text/javascript">
	import echarts from 'echarts';
	require('echarts/theme/macarons'); // echarts 主题

	export default{
		name:'pieChart',
		props: {
		  className: {
		    type: String,
		    default: 'chart'
		  },
		  width: {
		    type: String,
		    default: ''
		  },
		  height: {
		    type: String,
		    default: '300px'
		  }
		},
		data(){
			return{
				chart:null,
				opinion:['Industries','technology','Forex','Gold','Forecasts'],
				opinionData:[
					{value:332,name:'Industries'},
					{value:432,name:'technology'},
					{value:352,name:'Forex'},
					{value:132,name:'Gold'},
					{value:532,name:'Forecasts'}
				]
			}
		},
		mounted(){
			this.initChart();
		},
		beforeDestroy() {
		  if (!this.chart) {
		    return
		  }
		  this.chart.dispose();
		  this.chart = null;
		},
		methods:{
			initChart(){
				this.chart =echarts.init(this.$el,'macarons');
				this.chart.setOption({
					tooltip:{
						trigger:'item',
						formatter:"{a}<br/>{b}:{c} ({d}%)"
					},
					legend:{
						//orient:'vertical',
						left: 'center',
         				bottom: '10',
						data:this.opinion
					},
					calculable: true,
					series:[
						{
							name:'访问来源',
							type:'pie',
							//roseType:'radius',
							//radius:['50%','70%'],
							center:["50%","40%"],
							data:this.opinionData,
							avoidLabelOverlap: false,
							animationEasing: 'cubicInOut',
            				animationDuration: 2600,
            				label:{
            					normal:{
            						show:true
            					},
            					emphasis:{
            						show:true,
            						textStyle:{
            							fontSize:'30',
            							fontWeight:'blod'
            						}
            					}
            				},
            				// labelLine:{
            				// 	normal:{
            				// 		show:false
            				// 	}
            				// }
						}
					]
				})
			}
		}
	}
</script>