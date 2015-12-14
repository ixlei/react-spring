<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>个人中心-资产管理</title>
    <link href="/stylesheets/personalcenter_assetsmanagement.css" type="text/css" rel="stylesheet">
    <link href="/stylesheets/business-header.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/customer-footer.css" rel="stylesheet" type="text/css">
</head>
<body>
<jsp:include page="investor-header.jsp"></jsp:include>
<div class="main">
	<c:forEach var="investor" items="${investor }">
    <div class="container">
        <div id="title">
                <h1>资料管理</h1>
            </div>
     
        <div id="first">
            <div style="margin: 8px">基本信息</div>
            <hr/>
            <div class="box">
                <div id="first_left">
                        <div class="block">
                        	
                            <p>投资者姓名：<c:out value="${investor.username }"></c:out></p><br/>
                            <p>联系方式：<c:out value="${investor.contact }"></c:out></p><br/>
                            <p>职位：<c:out value="${investor.position }"></c:out></p><br/>
                            <p>资金额： <c:out value="${investor.capitalFlow }"></c:out></p><br/>
                            <p>所在地区：<c:out value="${investor.investAddress }"></c:out></p><br/>
                        </div>
                        <div class="block">
                            <p>投资领域：<c:out value="${investor.investFiled }"></c:out></p><br/>
                            <p>投资阶段：<c:out value="${investor.investStage }"></c:out></p><br/>
                            <p>投资周期：<c:out value="${investor.investCycle }"></c:out></p><br/>
                            <p>投资规模：<c:out value="${investor.investorScale }"></c:out></p><br/>
                            <p>投资地区：<c:out value="${investor.investAddress }"></c:out></p><br/>
                        </div>

                    </div>
                <div id="first_right">
                        <div class="block">
                            <img src="/images/myphoto.png">
                            <p id="button1"><a href="">更换</a></p>
                        </div>
                        <div class="block">
                            <p>所在公司名称：<c:out value="${investor.companyName }"></c:out></p><br/>
                            <p>公司注册地址：<c:out value="${investor.companyAddress }"></c:out></p><br/>
                            <p>公司注册资本：<c:out value="${investor.capital }"></c:out></p><br/>
                            <p>法定代表人信息：<c:out value="${investor.legalRepresentative }"></c:out></p><br/>
                            <p>法定代表人委托信息：<c:out value="${investor.legalRepresentativewt }"></c:out></p><br/>
                        </div>
                    </div>
            </div>
        </div>
        <div id="second">
            <div style="margin: 8px">基本信息</div>
            <hr/>
            <div class="box">
                <div id="second_top">
                    <div id="top_left">
                        <p>股东背景：<c:out value="${investor.shareholderBackground }"></c:out></p><br/>
                        <p>投资行业：<c:out value="${investor.investorIndustry }"></c:out></p><br/>
                        <p>投资类型：<c:out value="${investor.investorType }"></c:out></p><br/>
                        <p>达成案例：<c:out value="${investor.successInvestor }"></c:out></p><br/>
                    </div>
                    <div id="top_right">
                        <p>管理基金：<c:out value="${investor.manageFund }"></c:out></p><br/>
                        <p>投资意向金额：<c:out value="${investor.intentionMoney }"></c:out></p><br/>
                        <p>所需资料：<c:out value="${investor.needResource }"></c:out></p><br/>
                    </div>
                </div>
                <div id="second_middle">投资历史：<br/>
                  <c:out value="${investor.investorHistory }"></c:out>
                </div>
                <div id="second_bottom">
                    <p>瑞贝卡（600439.sh）、兴森科技（002436.sz)</p><br/>
                    <p>天壕节能科技股份有限公司（300332.sz）</p><br/>
                    <p>郴州金贵银业股份有限公司（已过发审会）</p><br/>
                    <p>金轮科创股份有限公司（已过发审会）</p><br/>
                    <p id="button2"><a href="/springmvc/investor/newsManagment">编辑</a></p>
                </div>
            </div>
        </div>
    </div>
    </c:forEach>
</div>
<div id="footer">
    <div id="foot-list">
    </div>
</div>
</body>
</html>
