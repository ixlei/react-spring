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

<title>电子签约</title>
<link rel="stylesheet" type="text/css"
	href="/stylesheets/customer-header.css">
<link rel="stylesheet" type="text/css"
	href="/stylesheets/customer-footer.css">
<link rel="stylesheet" type="text/css" href="/stylesheets/signature.css">
<link rel="stylesheet" type="text/css" href="/stylesheets/reset.css">
</head>
<body>
	<jsp:include page="customer-header.jsp"></jsp:include>
	<div class="wrapper">
		<div class="return">
			<a href="/springmvc/customer/service">返回上一层</a>
		</div>
		<!--return-->


		<div class="title">
			<p>电子签约详情</p>
		</div>
		<!--title-->
		<div class="introduce">
			<p>电子签约是一种提供给交易双方线上交易的自动化便捷途径。用户可以在本平台上，通过业务洽谈、协商协议具体内容，依托数字认证、时间戳认证，完成线上交易。实现交易的电子签约流程。</p>
		</div>
		<!--introduce-->
		<div class="detail">
			<div class="gross fl">
				<p class="total">平台累积交易量</p>
				<p>
					<span class="num">8888</span> <span class="total">笔</span>
				</p>
			</div>
			<!--gross-->
			<div class="amount fl">
				<p class="total">平台累积交易金额</p>
				<p>
					<span class="num">8888</span> <span class="total">亿</span>
				</p>
			</div>
			<!--amount-->
			<div class="situation fl">
				<p class="total">交易增长情况</p>
				<div class="info">
					<span>近一周</span> <img src="/images/arrow1.png"> <span>增长率13%</span>
				</div>
				<div class="info">
					<span>近一月</span> <img src="/images/arrow2.png"> <span>增长率13%</span>
				</div>
				<div class="info">
					<span>近一季</span> <img src="/images/arrow3.png"> <span>增长率13%</span>
				</div>
			</div>
			<!--situation-->
		</div>
		<!--detail-->
		<div class="progress">
			<p class="tit">电子签约流程</p>
			<ul>
				<li><img src="/images/loan.png"></li>
				<li><img src="/images/time.png"></li>
				<li><img src="/images/number.png"></li>
				<li><img src="/images/sign.png"></li>
				<li><img src="/images/check.png"></li>
				<li><img src="/images/issue.png"></li>
				<li><img src="/images/DC.png"></li>
				<a href="#" class="DC">数字证书认证</a>
				<a href="#" class="issue">证书下发</a>
				<a href="#" class="check">查看协议</a>
				<a href="#" class="sign">签订协议</a>
				<a href="#" class="number">数字认证</a>
				<a href="#" class="time">时间戳认证</a>
				<a href="#" class="loan">放款确认</a>
			</ul>
		</div>
		
	</div>
	
	<div id="footer"></div>
	<script type="text/javascript">
	window.onload = function() {
			var flag = ${flag};
			flag = parseInt(flag);
			var item = document.getElementsByClassName('nav-item');
			item[flag].className = item[flag].className + ' active';
		}
	</script>
</body>
</html>