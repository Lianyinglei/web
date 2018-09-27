<template>
	<div class="app-container calendar-list-container">
		<div style="border-bottom: 1px solid #ccc;height:30px;line-height: 30px;">客户数量统计</div>
		<div  style="padding-top: 10px;">
			<el-form ref="form" :model="pieForm" >
    			<el-row type="flex" class="row-bg" justify="space-around">
    				<el-col>
    					<el-form-item>
    						<label class="search_label">仪器型号</label>
    						<el-input v-model="pieForm.type" placeholder="请输入保养仪器型号" style="width:150px;"></el-input>
    					</el-form-item>
    				</el-col>
    				<el-col>
    					<el-form-item >
                           <div class="select_area">
                           <label class="search_label">地区</label>
                           <el-select v-model="area" placeholder="区域" @change="chooseArea" style="width:150px;">
                               <el-option
                                 v-for="item in areaData"
                                 :key="item.id"
                                 :label="item.label"
                                 :value="item.id">
                               </el-option>
                           </el-select>
                           </div>
                         </el-form-item>
    				</el-col>
    				<el-col>
    					<el-form-item>
    						<label class="search_label">地址</label>
    						<el-input v-model="pieForm.address" placeholder="请输入地址" style="width:150px;"></el-input>
    					</el-form-item>
    				</el-col>
    			</el-row>
    			<div style="overflow: hidden;">
	    			<el-form-item style="float: right;padding-right: 30px;">
	    			      <el-button type="primary" @click = "searchClick" >查询</el-button>
	    			      <el-button type="danger" @click = "clearClick">清除</el-button>
	    			</el-form-item>
    			</div>
    		</el-form>
		</div>
		<div class="echart_content" style="border-top:1px solid #ccc;">
			<div>
				<!-- <pie-charts ></pie-charts> -->
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex';

	export default{
		data(){
			return{
				pieForm:{
					type:'',
					address:""
				}
			}
		},
		computed:{
            ...mapGetters([
                    'elements'
                ])
        },
	}
</script>
<style type="text/css">
	.search_label{
        width:70px;
        display: inline-block;
        font-size: 14px;
        font-weight: normal;
        color:#333;
        text-align: right;
    }
</style>