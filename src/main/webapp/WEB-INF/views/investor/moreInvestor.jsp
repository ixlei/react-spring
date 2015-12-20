<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<head>
    	<meta name="renderer" content="webkit">
    	<meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
	<title>更多投资人</title>
	<link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/user-corporate-mode-finance-patch.css">
</head>
<body>
	<jsp:include page="investor-header.jsp"></jsp:include>
	<div id="mainContainer">
		<div id="main">
			<div id="mainContent">
                    <div id="searchForm">
                        <div id="searchInput">
                                <div id="textClear">
                                    <a href=""><img src="/images/cancel.png"></a>
                                </div>
                                <input id="searchText" type="text" placeholder="请输入关键字搜索">
                        </div>
                        <a href="" style="display:inline;">
                            <div id="searchButton">确定</div>
                        </a>
                   </div>
                   <div id="selectForm">
                        <p>类型：</p>
                        <select>
                            <option>全部</option>
                            <option>股权投资</option>
                            <option>债权投资</option>
                        </select>
                    </div>
                    <a href="javascript:void(0);" style="display:inline;color:#2A324B;padding-left:20px;" onclick="$('#patchPanel').slideToggle('slow');">显示/隐藏筛选信息</a>
                    <div id="patchPanel">
                        <div>地区筛选：<div class="selectItemGroup">
                                <span class="selectItem"><input type="checkbox">黑龙江</span>
                                <span class="selectItem"><input type="checkbox">吉林</span>
                                <span class="selectItem"><input type="checkbox">辽宁</span>
                                <span class="selectItem"><input type="checkbox">河北</span>
                                <span class="selectItem"><input type="checkbox">河南</span>
                                <span class="selectItem"><input type="checkbox">新疆</span>
                                <span class="selectItem"><input type="checkbox">江苏</span>
                                <span class="selectItem"><input type="checkbox">山西</span>
                                <span class="selectItem"><input type="checkbox">陕西</span>
                                <span class="selectItem"><input type="checkbox">甘肃</span>
                                <span class="selectItem"><input type="checkbox">四川</span>
                                <span class="selectItem"><input type="checkbox">青海</span>
							<span class="selectItem"><input type="checkbox">湖南</span>
							<span class="selectItem"><input type="checkbox">江西</span>
							<span class="selectItem"><input type="checkbox">湖北</span>
							<span class="selectItem"><input type="checkbox">安徽</span>
							<span class="selectItem"><input type="checkbox">浙江</span>
							<span class="selectItem"><input type="checkbox">福建</span>
							<span class="selectItem"><input type="checkbox">广东</span>
							<span class="selectItem"><input type="checkbox">广西</span>
							<span class="selectItem"><input type="checkbox">贵州</span>
							<span class="selectItem"><input type="checkbox">云南</span>
							<span class="selectItem"><input type="checkbox">海南</span>
							<span class="selectItem"><input type="checkbox">内蒙古</span>
							<span class="selectItem"><input type="checkbox">山东</span>
							<span class="selectItem"><input type="checkbox">宁夏</span>
							<span class="selectItem"><input type="checkbox">西藏</span>
							<span class="selectItem"><input type="checkbox">北京</span>
							<span class="selectItem"><input type="checkbox">天津</span>
							<span class="selectItem"><input type="checkbox">上海</span>
							<span class="selectItem"><input type="checkbox">重庆 </span>
							<span class="selectItem"><input type="checkbox">香港</span>
							<span class="selectItem"><input type="checkbox">台湾</span>
                            </div>
                            
                        </div>
                        <br/>
                        <div>行业筛选：<div class="selectItemGroup">
                                <span class="selectItem"><input type="checkbox">金融投资</span>
                                <span class="selectItem"><input type="checkbox">房地产</span>
                                <span class="selectItem"><input type="checkbox">能源</span>
                                <span class="selectItem"><input type="checkbox">化学化工</span>
                                <span class="selectItem"><input type="checkbox">节能环保</span>
                                <span class="selectItem"><input type="checkbox">建筑建材</span>
                                <span class="selectItem"><input type="checkbox">矿产冶金</span>
                                <span class="selectItem"><input type="checkbox">基础设施</span>
                                <span class="selectItem"><input type="checkbox">农林牧渔</span>
                                <span class="selectItem"><input type="checkbox">国防军工</span>
                                <span class="selectItem"><input type="checkbox">航空航天</span>
                                <span class="selectItem"><input type="checkbox">电气设备</span>
							<span class="selectItem"><input type="checkbox">机械机电</span>
							<span class="selectItem"><input type="checkbox">交通运输</span>
							<span class="selectItem"><input type="checkbox">仓储物流</span>
							<span class="selectItem"><input type="checkbox">汽车汽配</span>
							<span class="selectItem"><input type="checkbox">纺织服装饰品</span>
							<span class="selectItem"><input type="checkbox">旅游酒店</span>
							<span class="selectItem"><input type="checkbox">餐饮休闲娱乐</span>
							<span class="selectItem"><input type="checkbox">教育培训体育</span>
							<span class="selectItem"><input type="checkbox">文化传媒广告</span>
							<span class="selectItem"><input type="checkbox">批发零售</span>
							<span class="selectItem"><input type="checkbox">家电数码</span>
							<span class="selectItem"><input type="checkbox">家居日用</span>
							<span class="selectItem"><input type="checkbox">食品饮料烟草</span>
							<span class="selectItem"><input type="checkbox">医疗保健</span>
							<span class="selectItem"><input type="checkbox">生物医药</span>
							<span class="selectItem"><input type="checkbox">IT互联网</span>
							<span class="selectItem"><input type="checkbox">电子通信</span>
							<span class="selectItem"><input type="checkbox">海洋开发</span>
							<span class="selectItem"><input type="checkbox">商务贸易</span>
							<span class="selectItem"><input type="checkbox">家政服务</span>
							<span class="selectItem"><input type="checkbox">园林园艺</span>
							<span class="selectItem"><input type="checkbox">收藏品</span>
							<span class="selectItem"><input type="checkbox">行政事业机构</span>
							<span class="selectItem"><input type="checkbox">其他行业</span>





                            </div>
                        </div>
                        <br/>
                        <div>资金类型：<div class="selectItemGroup">
                                <span class="selectItem"><input type="checkbox">全部</span>
                                <span class="selectItem"><input type="checkbox">个人资金</span>
                                <span class="selectItem"><input type="checkbox">企业资金</span>
								<span class="selectItem"><input type="checkbox">天使投资</span>
								<span class="selectItem"><input type="checkbox">VC投资</span>
								<span class="selectItem"><input type="checkbox">PE投资</span>
								<span class="selectItem"><input type="checkbox">小额贷款</span>
								<span class="selectItem"><input type="checkbox">典当公司</span>
								<span class="selectItem"><input type="checkbox">担保公司</span>
								<span class="selectItem"><input type="checkbox">金融租赁</span>
                                <span class="selectItem"><input type="checkbox">投资公司</span>
								<span class="selectItem"><input type="checkbox">资产管理</span>
                                <span class="selectItem"><input type="checkbox">商业银行</span>
								<span class="selectItem"><input type="checkbox">证券公司</span>
								<span class="selectItem"><input type="checkbox">基金公司</span>
								<span class="selectItem"><input type="checkbox">信托公司</span>
								<span class="selectItem"><input type="checkbox">资产管理</span>
                                <span class="selectItem"><input type="checkbox">其他资金</span>
						 </div>
                        </div>
                        <br/>
                        <div>金额区间：<div class="selectItemGroup">
                                <input type="input" class="sizeSelect">&nbsp;-&nbsp;<input type="input" class="sizeSelect">
                                万元
                            </div>
                        </div>
                        <br/>
                        <div>收益率范围：<div class="selectItemGroup">
                                <input type="input" class="sizeSelect">&nbsp;-&nbsp;<input type="input" class="sizeSelect">
                                %
                        </div>
                        <a href="">
                            <div id="patchConfirmButton">确定</div>
                        </a>
                    </div>
                </div> 
                    <div id="TableList">
                    	<table>
                        
                        <tr>
                        	<th>产品名称</th>
                            <th>类型</th>
                            <th>地区</th>
                            <th>资金类型</th>
                            <th>金额</th>
                            <th class="rightItem">投资者</th>
                        </tr>
                        
                        <tr>
                            <td>深圳某资金500万-2亿寻经营性实体招商引资项目</td><td>股权投资</td><td>深圳市</td><td>企业资金</td><td>4000万</td><td>王女士</td>
                        </tr>
                        <tr>
                            <td>深圳某资金500万-2亿寻经营性实体招商引资项目</td><td>股权投资</td><td>深圳市</td><td>企业资金</td><td>4000万</td><td>王女士</td>
                        </tr>
                        <tr>
                            <td>深圳某资金500万-2亿寻经营性实体招商引资项目</td><td>股权投资</td><td>深圳市</td><td>企业资金</td><td>4000万</td><td>王女士</td>
                        </tr>
                        <tr>
                            <td>深圳某资金500万-2亿寻经营性实体招商引资项目</td><td>股权投资</td><td>深圳市</td><td>企业资金</td><td>4000万</td><td>王女士</td>
                        </tr>
                        <tr>
                            <td>深圳某资金500万-2亿寻经营性实体招商引资项目</td><td>股权投资</td><td>深圳市</td><td>企业资金</td><td>4000万</td><td>王女士</td>
                        </tr>
                        <tr>
                            <td>深圳某资金500万-2亿寻经营性实体招商引资项目</td><td>股权投资</td><td>深圳市</td><td>企业资金</td><td>4000万</td><td>王女士</td>
                        </tr>
                    </table>
                    </div>
				<div id="page">
				</div>
			</div>
		</div>
	</div>
	<div id="footer">
    	</div>
</body>