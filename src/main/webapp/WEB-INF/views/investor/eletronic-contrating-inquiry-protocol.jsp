<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
	<title>电子签约-协议查询</title>
	<link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/eletronic-contrating-inquiry-protocol.css">

</head>
<body>
	<jsp:include page="investor-header.jsp"></jsp:include>
	<div id="mainContainer">
		<div id="main">
			<div id="sidebarContainer">
				<div id="listTitle">
					<ul id="sidebarTitle">
						<li class="sidebarItem">电子签约</li>
					</ul>
				</div>
				<jsp:include page="eletronic-sign-left-nav.jsp"></jsp:include>
			</div>
			<div id="mainContent">
            <p class="title">协议查询</p>
                     <div id="searchForm">
					<div id="searchInput">
                        <div id="textClear">
                            <a href=""><img src="/images/cancel.png"></a>
                        </div>
						<input id="searchText" type="text" placeholder="请输入关键字搜索">
					</div>
					<a href="" style="display:inline;">
                        <div id="searchButton">查询</div>
                     </a>

				    </div>
                    <div id="selectForm">
                        <p>排序：</p>
                        <select>
                            <option></option>
                            <option>签约时间</option>
                            <option>签约方</option>
                            <option>合约内容</option>
                            <option>状态</option>
                        </select>
                    </div>
                    <div id="TableList">
                    	<table class="hovertable">
                        
                        <tr>
                        	<th>签约时间</th><th>签约方</th><th>合约内容</th><th>状态</th>
                        </tr>
                        
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>
                        <tr>
                            <td>2015-01-01</td><td>安心股权有限公司</td><td>股权转让协议</td> <td>审核中</td>
                        </tr>

                      
    
                    </table>
                    <hr class="hr1"/>
                    </div>
				<div id="page">
				</div>
			</div>
		</div>
	</div>
	<div id="footer">
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