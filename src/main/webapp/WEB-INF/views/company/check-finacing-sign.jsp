<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/stylesheets/business-header.css" />
    <link rel="stylesheet" type="text/css" href="/stylesheets/nav.css" />
    <link rel="stylesheet" type="text/css" href="/stylesheets/check-finacing-sign.css" />
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css" />
    <title>电子签约</title>
</head>
<body>
    <jsp:include page="business-header.jsp"></jsp:include>
    <div class="wrap">
        <div class="nav">
          <div class="title">
              <p>电子签约</p>
          </div><!--tit-->
          <div class="tri">
          </div>
          <div class="tri1">
          </div>
          <jsp:include page="eletronic-sign-left-nav.jsp"></jsp:include>
           </div><!--list-->
        </div><!--nav-->
        </div>
        <div class="main">
            <p class="welcome">
                <span class="name">王女士</span>
                ，欢迎您
            </p>
            <p class="stage">
                当前的状态：
                <span >数字证书申请审核中</span>
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
    </div><!--wrap-->
     <div id="footer">
        <div id="foot-list">
        </div>
    </div>
</body>
</html>