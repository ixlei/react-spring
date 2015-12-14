<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/stylesheets/business-header.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/nav.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/applied-investment-sign.css">
   <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css"> 
    <title>电子签约(进行申请)</title>
</head>
<body>
    <jsp:include page="investor-header.jsp"></jsp:include>
    <div id="content">
    <div class="wrap">
        <div class="nav">
          <div class="title">
              <p>电子签约</p>
          </div><!--tit-->
      
         <jsp:include page="eletronic-sign-left-nav.jsp"></jsp:include>
        </div>
        </div>
        <div class="main">
            <p class="welcome">
                <span class="name">王女士</span>
                ，欢迎您
            </p>
            <p class="stage">
                当前的状态：
                <span >已进行数字证书申请</span>
            </p>
            <div class="left_line">
            </div><!--left_line-->
            <span class="tit">电子签约流程</span>
            <div class="right_line">             
            </div><!--right_line-->
            <div class="progress">
                <img src="/images/DC-apply.png" class="DC_apply">
                <img src="/images/connection.png" class="connection c1">
                <img src="/images/DC-authentication.png" class="DC_authentication">
                <img src="/images/connection.png" class="connection c2">
                <a href="#">    
                    <img src="/images/check-contract.png" class="check_contract">
                </a>
                <img src="/images/connect-slide.png" class="connect_slide cs1">
                <a href="#">
                    <img src="/images/sign-contract.png" class="sign_contract">
                </a>
                <img src="/images/connect-slide.png" class="connect_slide cs2">
                <img src="/images/number-authentication.png" class="number_authentication">
                <img src="/images/connection.png" class="connection c3">
                <img src="/images/time-authentication.png" class="time_authentication">               
                <img src="/images/connection.png" class="connection c4">
                <a href="#">
                    <img src="/images/sign-finished.png" class="sign_finished">
                </a>
            </div><!--progress-->
        </div><!--main-->
     </div>
   <!--wrap-->
     <div id="footer">
        <div id="foot-list">
        </div>
    </div>
    <script type="text/javascript">
    	window.onload = function() {
    		var flag = ${falg};
    		var navItemList = document.getElementsByClassName('nav-tem');
    		navItemList[flag].className = navItemList[flag].className + ' active';
    		
    	}
    </script>
</body>
</html>
