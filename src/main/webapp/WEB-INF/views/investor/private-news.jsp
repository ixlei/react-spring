<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
    <title>个人中心-我的消息</title>
    <link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/personal_center_my_message_privately.css">

</head>
<body>
<jsp:include page="investor-header.jsp"></jsp:include>
<div id="mainContainer">
    <div id="main">
        <div id="sidebarContainer">
            <div id="listTitle">
                <ul id="sidebarTitle">
                    <li class="sidebarItem">我的消息</li>
                </ul>
            </div>
            <jsp:include page="inews-left-nav.jsp"></jsp:include>
        </div>
        <div id="mainContent">
            <div id="searchForm">
                <div id="searchInput">
                    <input id="searchText" type="text" placeholder="请输入关键字">
                </div>
                <a href="" style="display:inline;">
                    <div id="searchButton">确定</div>
                </a>
            </div>
            <div id="mainContent_list">
                    <ul class="table_item">
                        2015-01-01&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;广州财富股份公司&nbsp;&nbsp;&nbsp;&nbsp;
                        你好，我是……
                    </ul>

                    <ul class="table_item">
                        2015-01-01&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;深圳平安股份公司&nbsp;&nbsp;&nbsp;&nbsp;
                        你好，我是……
                    </ul>
            </div>
            <div id="page">
                <div>

                </div>
            </div>
        </div>
    </div>
</div>
<div id="footer">
</div>
</body>
</html>
    