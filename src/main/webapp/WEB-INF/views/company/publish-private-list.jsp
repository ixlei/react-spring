<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
	<title>私募债列表</title>
	<link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/message-publish-private-list.css">

</head>
<body>
	<jsp:include page="business-header.jsp"></jsp:include>
	<div id="mainContainer">
		<div id="main">
			<div id="sidebarContainer">
				<div id="listTitle">
					<ul id="sidebarTitle">
						<li class="sidebarItem">电子签约</li>
					</ul>
				</div>
				<jsp:include page="inews-left-nav.jsp"></jsp:include>
			</div>
			<div id="mainContent">
				<div id="searchForm">
					<div id="input">
						<div id="textClear">
							<a href=""><img src="/images/cancel.png"></a>
						</div>
						<input id="searchText" type="text" placeholder="请输入关键字搜索"></textarea>
					</div>
					<a href="" style="display:inline;">
						<img src="/images/search.png" style="vertical-align:middle;">
						<p id="searchTitle">搜索</p>
					</a>

				</div>
				<p class="title">私募债列表</p>
				<div id="subjectListContainer">
					<table id="subjectListContent">
						<tbody>
							<tr>
								<th>债券代码</th>
								<th>债券名称</th>
								<th>所属行业</th>
								<th>转让日期</th>
								<th>承销商</th>
								<th class="rightListHead">受托人</th>
							</tr>
							<tr>
								<td class="listItem">a</td>
								<td class="listItem">a</td>
								<td class="listItem">a</td>
								<td class="listItem">a</td>
								<td class="listItem">a</td>
								<td class="listItem">a</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div id="page">
				</div>
			</div>
		</div>
	</div>
	<div id="footer">
    	</div>
</body>
</html>