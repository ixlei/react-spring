<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="/stylesheets/customer-header.css">
	<link rel="stylesheet" type="text/css" 	href="/stylesheets/company-service-content.css">
	<link rel="stylesheet" type="text/css" 	href="/stylesheets/customer-footer.css">
<title>企业服务</title>
</head>

<body>
	<jsp:include page="customer-header.jsp"></jsp:include>
	<div id="main">
		<div id="content">
			<div id="first-glance" class="banner">
				<a href="#" class="unslider-arrow next"> <img
					src="/images/btn-pre.png" alt="" />
				</a> <a href="#" class="unslider-arrow next"> <img
					src="/images/btn-next.png" alt="" />
				</a>
				<ul>
					<li style="background-image: url(/images/banner1.jpg)"></li>
					<li style="background-image: url(/images/banner2.png)"></li>
					<li style="background-image: url(/images/banner3.png)"></li>
				</ul>
			</div>
			<div id="service-item">
				<div id="item-management">
					<p class="title">资产管理</p>
					<p class="item-describe">
						可为单一客户提供定向资产管理服务 <br /> 为多个用户办理集合资产管理业务 <br /> 为客户特定目的办理专项资产管理业务
					</p>
					<div class="other">
						<span><a href="/springmvc/customer/assetgo" title="">了解更多</a></span>
						<span> <a href="/springmvc/customer/servicego" title="">
								去管理 </a>
						</span>
					</div>
				</div>
				<div id="item-esignature">
					<p class="title">电子签约</p>
					<p class="item-describe">
						自动化线上交易 <br /> 通过业务洽谈，协商协议具体内容 <br /> 依托数字认证，时间戳认证，完成线上交易
					</p>
					<div class="other">
						<span> <a href="/springmvc/customer/assetgo" title="">了解更多</a>
						</span> <span> <a href="/springmvc/login" title=""> 去签约 </a>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="footer">
		<div id="foot-list"></div>
	</div>
	
	<script type="text/javascript" src="/javascripts/jq.js"></script>
	<script type="text/javascript" src="/javascripts/citi.js"></script>
	<script src="/javascripts/unslider.js"></script>
	<script type="text/javascript">
    $(window).load(function() {
        var unslider = $('.banner').unslider({
            delay: 3000,
            fluid: true
        });
        $('.unslider-arrow').click(function() {
            var fn = this.className.split(' ')[1];
            unslider.data('unslider')[fn]();
        });
		$(".nav-item").eq(${flag}).addClass("active");
    });
    </script>
</body>

</html>
