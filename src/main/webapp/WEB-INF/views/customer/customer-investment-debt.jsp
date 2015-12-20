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

	<title>私募债详情</title>
      <link rel="stylesheet" type="text/css" href="/stylesheets/customer-header.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/customer_investment_debt.css">
	<link rel="stylesheet" type="text/css" href= "/stylesheets/reset.css">
</head>
<body>
	<jsp:include page="customer-header.jsp"></jsp:include>
	<div class="wrapper">
		<div class="return">
			<a href="#">返回上一层</a>
		</div><!--return-->
	<div class="title">
		<p>私募债详情</p>
	</div><!--title-->
	<div class="introduce">
		<p>私募债券融资是指融资人通过协商、招标等非社会公开方式，向特定投资人出售债权进行的融资，包括债券发行以外的各种借款。
        私募债券融资是一种便捷高效的融资方式，审批周期快，所募资金用途相对灵活，期限较银行贷款长，综合融资成本比信托资金和民间借贷低，
        部分地区享受政策贴息，有助于解决企业融资难问题。
        </p>
	</div><!--introduce-->
	<div class="detail">
		<div class="gross fl">
			<p class="total">平台累积交易量</p>
			<p><span class="num">8888</span><span class="total">笔</span></p>
		</div><!--gross-->
		<div class="amount fl">
			<p class="total">平台累积交易金额</p>
			<p><span class="num">8888</span><span class="total">亿</span></p>
		</div><!--amount-->
		<div class="situation fl">
			<p class="total" >交易增长情况</p>
			<div class="info">
			<span >近一周</span><br>
			<img src="/images/arrow1.png"><br>
			<span>增长率13%</span></div>
			<div class="info">
			<span>近一月</span><br>
			<img src="/images/arrow2.png"><br>
			<span>增长率13%</span>
			</div>
			<div class="info">
			<span>近一季</span><br>
			<img src="/images/arrow3.png"><br>
			<span>增长率13%</span>
			</div>
		</div><!--situation-->
	</div><!--detail-->
	<div class="progress">
		<p class="tit">私募债交易流程</p>
		<ul>
            <li ><img  src="/images/loan.png"></li>
            <li><img  src="/images/time.png"></li>
            <li><img  src="/images/number.png"></li>
            <li><img  src="/images/sign.png"></li>
            <li><img  src="/images/check.png"></li>
            <li><img  src="/images/issue.png"></li>
            <li><img  src="/images/DC.png"></li>
            <a href="#" class="DC">注册用户</a>
             <a href="#" class="issue">实名认证</a>
             <a href="#" class="check">撮合配对</a>
             <a href="#" class="sign">预约洽谈</a>
             <a href="#" class="number">电子签约</a>
             <a href="#" class="time">在线汇款</a >
              <a href="#" class="loan">投资成功</a>
		</ul>
	</div><!--progress-->
	</div><!--wrapper-->
     <div id="footer">
    </div>
    <script type="text/javascript">
		window.onload = function() {
			var flag = ${flag};
			var item = document.getElementsByClassName('nav-item');
			item[flag].className = item[flag].className + ' active';
		}
	</script>
</body>
</html>