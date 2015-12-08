<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />

<title>资产管理</title>
<link rel="stylesheet" type="text/css"
	href="/stylesheets/customer-header.css">
<link rel="stylesheet" type="text/css"
	href="/stylesheets/customer-footer.css">
<link rel="stylesheet" type="text/css"	href="/stylesheets/asset_management.css">
<link rel="stylesheet" type="text/css" href="/stylesheets/reset.css">
</head>
<body>
	<jsp:include page="customer-header.jsp"></jsp:include>
	<div class="wrapper">
		<div class="return">
			<a href="/springmvc/customer/service">返回上一层</a>
		</div>
		


		<div class="title">
			<p>资产管理详情</p>
		</div>
		<!--title-->
		<div class="introduce">
			<p>资产管理业务是指资产管理人根据资产管理合同约定的方式、条件、要求以及限制，对客户资产进行经营运作，为客户提供证券、基金及其它金融产品的投资管理服务的行为。可为单一客户提供定向资产管理服务，为多个客户办理集合资产管理业务，为客户特定目的办理专项资产管理业务</p>
		</div>
		<!--introduce-->
		<div class="detail">
			<div class="gross fl">
				<p class="total">平台累积交易量</p>
				<p>
					<span class="num">8888</span><span class="total">笔</span>
				</p>
			</div>
			<!--gross-->
			<div class="amount fl">
				<p class="total">平台累积交易金额</p>
				<p>
					<span class="num">8888</span><span class="total">亿</span>
				</p>
			</div>
			<!--amount-->
			<div class="situation fl">
				<p class="total">交易增长情况</p>
				<div class="info">
					<span>近一周</span><br> <img src="/images/arrow1.png"><br>
					<span>增长率13%</span>
				</div>
				<div class="info">
					<span>近一月</span><br> <img src="/images/arrow2.png"><br>
					<span>增长率13%</span>
				</div>
				<div class="info">
					<span>近一季</span><br> <img src="/images/arrow3.png"><br>
					<span>增长率13%</span>
				</div>
			</div>
			<!--situation-->
		</div>
		<!--detail-->
		<div class="progress">
			<p class="tit">资产管理</p>
			<ul>
				<li class="stock"><a href="#">股权管理</a></li>
				<li class="debt"><a href="#">债权管理</a></li>
				<li class="product"><a href="#">产品管理</a></li>
				<li class="income"><a href="#">收益估计</a></li>
				<li class="sum"><a href="#">权益合计</a></li>
			</ul>
		</div>
		<!--progress-->
	</div>

	<div id="footer"></div>
	<script type="text/javascript">
		window.onload = function() {
			var flag = ${flag};
			var item = document.getElementsByClassName('nav-item');
			item[flag].className = item[flag].className + ' active';
		}
		
	</script>

</body>
</html>