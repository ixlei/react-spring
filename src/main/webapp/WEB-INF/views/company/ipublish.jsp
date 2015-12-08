<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    	<meta name="renderer" content="webkit" />
    	<meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
	<title>我要发布</title>
	<link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/message-publish-my-pubish.css">
  
</head>
<body>
	<jsp:include page="business-header.jsp"></jsp:include>
	<div id="mainContainer">
		<div id="main">
			<div id="sidebarContainer">
				<div id="listTitle">
					<ul id="sidebarTitle">
						<li class="sidebarItem">信息发布</li>
					</ul>
				</div>
				<jsp:include page="info-publish.jsp"></jsp:include>
			</div>
			<div id="mainContent">
				<div id="searchForm">
					<div id="input">
						<div id="textClear">
							<a href=""><img src="/images/cancel.png"></a>
						</div>
						<input id="searchText" type="text" placeholder="请输入关键字搜索">
					</div>
					<a href="" style="display:inline;">
						<div id="searchButton">搜索</div>
					</a>

				</div>
				<p class="title">对公数据披露</p>
				<div id="subjectListContainer">
                <div id="headPhotoBox"></div>
					<table id="subjectListContent">
						<tbody>
							<tr>
								<td>公司名称：某某股份有限公司</td>
								<td>成立时间：2006/10/09</td>
							</tr>
							<tr>
								<td class="listItem">所在地区：广东省 深圳市 宝安区</td>
								<td class="listItem">注册资本：5000万&nbsp;人民币</td>
							</tr>
                            <tr>
                                <td class="listItem">所属行业：机械制造业</td>
                                <td class="listItem">咨询电话：0755-86802655</td>
                            </tr>
                            <tr>
                                <td class="listItem">所属专利：专利一、专利二</td>
                                <td class="listItem">驻外办事处机构：无</td>
                            </tr>
                            <tr>
                                <td class="listItem">分厂：分厂一、分厂二</td>
                                <td class="listItem">员工人数：100人</td>
                            </tr>
                            <tr>
                                <td class="listItem">子公司：子公司一</td>
                                <td class="listItem">占地面积：100亩</td>
                            </tr>
                            <tr>
                                <td class="listItem">技术优势：优势优势</td>
                                <td class="listItem">人才优势：优势优势</td>
                            </tr>
                            <tr>
                                <td class="listItem">产品优势：优势优势</td>
                                <td class="listItem">品牌优势：优势优势</td>
                            </tr>
                            <tr>
                                <td class="listItem">市场优势：优势优势</td>
                                <td class="listItem">管理优势：优势优势</td>
                            </tr>
						</tbody>
					</table>
				</div>
                <p class="title">产品服务：</p>
                <p>
                    公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品
                    公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品
                    公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品
                </p>
                <p class="title">公司简介</p>
                <p>公司简介公司简介</p>
                <p class="title">公司相册</p>
                <div id="albumContainer"></div>
                <a href="javascript:void(0);" onclick="publishWidget.startWidget('albumContainer')">
                    <div id="publishButton">发布更多消息
                    </div>
                </a>
				<div id="page">
				</div>
			</div>
		</div>
	</div>
	<div id="footer">
    	</div>
     <script type="text/javascript" src="/javascripts/jq.js"></script>
    <script type="text/javascript" src="/javascripts/publish.js"></script>
    <script type="text/javascript">
    window.onload = function() {
    	var navItemList = document.getElementsByClassName('nav-item');
    	var leftNavList = document.getElementsByClassName('left-side-nav');
    	navItemList[${flag}].className = navItemList[${flag}].className + ' active';
    	leftNavList[${leftNav}].className = leftNavList[${leftNav}].className +' on';
    };
    </script>
</body>
</html>