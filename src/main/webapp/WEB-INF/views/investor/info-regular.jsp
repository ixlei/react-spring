<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html >
<html>

<head>
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
    <link href="/stylesheets/reset.css" type="text/css" rel="stylesheet" />
    <link href="/stylesheets/task4-nav.css" type="text/css" rel="stylesheet" />
    <link href="/stylesheets/information_issue.css" type="text/css" rel="stylesheet" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>定期报告</title>
</head>

<body>
    <jsp:include page="investor-header.jsp"></jsp:include>
    <div class="swap">
        <div class="nav fl">
            <div class="tit ">
                <p>定期报告</p>
            </div>
            <!--tit-->
            <div class="tri">
            </div>
            <div class="tri1">
            </div>
            <jsp:include page="info-left-nav.jsp"></jsp:include>
        </div>
        <div class="main fl">
            <div class="main_head">
                <p>中心报告</p>
                <div class="search">
                    <input type="text" class="input" placeholder="请输入关键字搜索">
                    <button class="search_button">&nbsp;&nbsp;&nbsp;搜&nbsp;索</button>
                </div>
            </div>
            <div class="main_content">
                <ul>
                    <li>
                        <img src="/images/select.png" />
                        <a href="#">关于景森工程设计顾问有限公司终止挂牌的公告</a>
                    </li>
                    <li>
                        <a href="#">关于景森工程设计顾问有限公司终止挂牌的公告</a>
                    </li>
                    <li>
                        <a href="#">关于景森工程设计顾问有限公司终止挂牌的公告</a>
                    </li>
                    <li>
                        <a href="#">关于景森工程设计顾问有限公司终止挂牌的公告</a>
                    </li>
                    <li>
                        <a href="#">关于景森工程设计顾问有限公司终止挂牌的公告</a>
                    </li>
                    <li>
                        <a href="#">关于景森工程设计顾问有限公司终止挂牌的公告</a>
                    </li>
                    <li>
                        <a href="#">关于景森工程设计顾问有限公司终止挂牌的公告</a>
                    </li>
                    <li>
                        <a href="#">关于景森工程设计顾问有限公司终止挂牌的公告</a>
                    </li>
                    <li>
                        <a href="#">关于景森工程设计顾问有限公司终止挂牌的公告</a>
                    </li>
                    <li>
                        <a href="#">关于景森工程设计顾问有限公司终止挂牌的公告</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    <div id="footer">
    </div>
    <script type="text/javascript">
  		window.onload = function() {
  			var flag = ${flag};
  			var leftOn = ${leftOn};
  			var leftOnList = document.getElementsByClassName('left-nav');
  			leftOnList[leftOn].className = leftOnList[leftOn].className + ' on';
  			
  			var navItemList = document.getElementsByClassName('nav-item');
  			navItemList[flag].className = navItemList[flag].className + ' active';
  		}
    </script>
</body>

</html>
    