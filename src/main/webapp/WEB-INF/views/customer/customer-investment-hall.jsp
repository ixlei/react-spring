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
<link rel="stylesheet" href="/stylesheets/customer-header.css">
<link rel="stylesheet" type="text/css"
	href="/stylesheets/customer_investment_hall.css">
<link rel="stylesheet" type="text/css"
	href="/stylesheets/customer-footer.css">
<title>投资中心</title>

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
					<p class="title">私募股权</p>
					<p class="item-describe">
						降低投资者的交易费用 <br /> 提高投资效率 <br /> 青睐规模初定的成长企业，多倾向中长期 <br />
						降低财务成本 <br /> 投资退出渠道多样化
					</p>
					<div class="other">
						<span class="content_more"><a
							href="/springmvc/customer/investStock" style="color: #4F4F4F;">了解更多</a></span>
						<span class="content_more_text"> <a href="/springmvc/login"
							title="" style="color: #4F4F4F; font-size: 14px"> 去投资 去融资 </a>
						</span>
					</div>
				</div>
				<div id="item-esignature">
					<p class="title">私募债</p>
					<p class="item-describe">
						便捷高效 <br /> 审批周期快 <br /> 综合融资成本低于信托资金和民间借贷 <br /> 政策贴息 <br />
						期限较长
					</p>
					<div class="other">
						<span class="content_more"><a
							href="/springmvc/customer/investdebt" style="color: #4F4F4F;">了解更多</a></span>
						<span class="content_more_text_1"> <a
							href="/springmvc/login" title=""
							style="color: #4F4F4F; font-size: 14px"> 去投资 去融资 </a>
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
	<script src="/javascripts/unslider.js"></script>
	<script type="text/javascript">
		$(window).load(function() {
			var unslider = $('.banner').unslider({
				delay : 3000,
				fluid : true
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
