<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css" />
    <link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css" />
    <link rel="stylesheet" type="text/css" href="/stylesheets/logined-company-proprety.css" />
    <link rel="stylesheet" type="text/css" href="/stylesheets/radioButton.css" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>资产管理</title>
</head>

<body>
	<jsp:include page="business-header.jsp" ></jsp:include>
    <div id="main">
        <div id="content">
            <div id="nav-head">
                <div id="nav">
                    <a href="/debat-manag"><span id="debat-manag">债权管理</span></a>
                    <span id="search">搜索：</span>
                    <input></input>
                    <span><a href="/serach"><img src="/images/_search.png"></a></span>
                </div>
                <div id="nav1">
                    <a href="/stock-manag"><span id="stock-manag">股权管理</span></a>
                </div>
            </div>
            <div id="sift">
                <span>筛选条件</span>
                <span>发布时间：</span>
                <div id="announce-time">
                    <form>
                        <input type="radio" id="1" value="1" name="time" check="checked" />
                        <label for="1">近一个月</label>
                        <input type="radio" id="2" value="2" name="time" />
                        <label for="2">近三个月</label>
                        <input type="radio" id="3" value="3" name="time" />
                        <label for="3">近六个月</label>
                        <input type="radio" id="4" value="4" name="time" />
                        <label for="4">近一年</label>
                        <input type="radio" id="5" value="5" name="time" />
                        <label for="5">近两年</label>
                    </form>
                </div>
            </div>
            <div id="announce-message">
                <span>发布信息</span>
            </div>
            <div class="product">
                <span>产品名称1</span>
                <div class="prod1">
                    <ul>
                        <li>发布时长：1个月24天</li>
                        <li>目前股权状况：一共买的价钱</li>
                        <li>融资方式：股权融资</li>
                    </ul>
                </div>
                <div class="prod2">
                    <ul>
                        <li>期限：6个月</li>
                        <li>融资占比：谁买了，买了多少</li>
                        <li>意向投资方：互相关注的</li>
                    </ul>
                </div>
            </div>
            <div class="product">
                <span>产品名称2</span>
                <div class="prod1">
                    <ul>
                        <li>发布时长：1个月24天</li>
                        <li>目前股权状况：一共买的价钱</li>
                        <li>融资方式：股权融资</li>
                    </ul>
                </div>
                <div class="prod2">
                    <ul>
                        <li>期限：6个月</li>
                        <li>融资占比：谁买了，买了多少</li>
                        <li>意向投资方：互相关注的</li>
                    </ul>
                </div>
            </div>
            <div id="nav-footer">
            </div>
        </div>
    </div>
    <div id="footer">
    </div>
   	<script type="text/javascript">
   	if(document.addEventListener) {
		document.addEventListener("DOMContentLoaded", function(e) {
			document.removeEventListener("DOMContentLoaded", arguments.callee, false);
			addClass();
		}, false)
	} else if (document.attachEvent) { 
		 document.attchEvent("onreadystatechange", function() {
             if (document.readyState == 'complete') {
                 document.detachEvent("onreadystatechange", arguments.callee);
                 addClass()
             }
         });
		 
		 if (document.documentElement.doScroll && typeof window.frameElement === "undefined") {
             (function() {
             	try{
                     document.documentElement.doScroll("left");
                 } catch (err) {
                     setTimeout(arguments.callee, 0);
                     return;
                 }
                 addClass()
             })();
         }
	} else {
		window.onload = function() {
			addClass();
		}
	}
	
	var addClass = function() {
		var navItemList = document.getElementsByClassName('nav-item');
		navItemList[${flag}].className = navItemList[${flag}].className + ' active';
	};
   	</script>
</body>

</html>
    