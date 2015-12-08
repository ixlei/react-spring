<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
<title>首页</title>
<link rel="stylesheet" href="/stylesheets/customer-header.css">
<link rel="stylesheet" type="text/css" href="/stylesheets/login.css">
<link rel="stylesheet" type="text/css" 
	href="/stylesheets/customer-footer.css">

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
					<li style="background-image: url(/images/banner-l1.png)"></li>
					<li style="background-image: url(/images/banner-l2.png)"></li>
					<li style="background-image: url(/images/banner-l3.png)"></li>
				</ul>
			</div>
			<div id="login">
				<form method="post" action="/springmvc/customer/login">
					<ul>
						<li><span class="label">账号:</span>
						 	<input type="text" id="username" name="username" class="input-text">
						</li>
						<li>
							<span class="label">密码:</span> 
							<input type="password" id="password" name="password" class="input-text">
						</li>
						<li><span id="auth-tips">验证码:&nbsp;</span> 
							<input type="text" 	name="auth" id="auth-in"> 
							<span id="auth"> <img src="/images/refresh.png" alt=""></span>
						 	<span id="refresh">刷新</span>
						</li>
						<li>
							<input type="checkbox" name="nologin" value="自动登陆"
							class="checke" id="nologin" checked /> <span id="nologin-text">自动登陆</span>
							<span id="iforget"><a href="iforget" title="">忘记密码?</a></span>
						</li>
						<li>
							<input type="radio" name = "logintype" value="投资者" checked/> <span>投资者登陆</span>
							<input type="radio" name="logintype" value="企业登" /><span>企业登陆</span>
						</li> 
						<li>
							<input type="submit" id="btn-login" value="立即登陆">
							<span id="btn-reg"><a href="/springmvc/customer/reg" title="">立即注册</a></span>
						</li>
						<li>
							<span id="feedback">${ errmsg }</span>
						</li>
					</ul>
				</form>
			</div>
		</div>
	</div>
	<div id="footer"></div>
	<script type="text/javascript" src="/javascripts/jq.js"></script>
	<script src="/javascripts/unslider.js"></script>
	<script type="text/javascript">
		$(window).load(function() {
			var unslider = $('.banner').unslider({
				delay : 3000,
				fluid : true
			});
			console.log(unslider);
			$('.unslider-arrow').click(function() {
				var fn = this.className.split(' ')[1];
				unslider.data('unslider')[fn]();
			});

			$('#first-glance').css({
				width : '400px',
				height : '320px'
			})
		});
	</script>
</body>

</html>
