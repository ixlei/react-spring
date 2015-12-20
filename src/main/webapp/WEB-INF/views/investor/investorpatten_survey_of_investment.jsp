<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>资产管理</title>
    <link href="/stylesheets/radioButton.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/business-header.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/customer-footer.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/logined_investorpatten_stockright_manage.css" rel="stylesheet" type="text/css">
</head>
<body>
<jsp:include page="investor-header.jsp"></jsp:include>
<div id="main">
    <jsp:include page="manage-first-galance.jsp"></jsp:include>
    <div id="content">
        <div id="subtitle">
            股权状况分布
        </div>
        <div class="list-text">
            <div>
                公司名称
            </div>
            <div>
                <span>所在地：北京</span>
                <span>份额：1</span>
                <span>投入资金额：100万</span>
            </div>
        </div>
        <div class="list-text">

        </div>
        <div class="list-text">

        </div>
        <div class="list-text">

        </div>
    </div>
</div>
<div id="footer">
    <div id="foot-list">
    </div>
</div>
<script type="text/javascript">
	window.onload = function() {
		var flag = ${flag};
		var navItemList = document.getElementsByClassName('nav-item');
		navItemList[flag].className = navItemList[flag].className + ' active';
	}
</script>
</body>
</html>