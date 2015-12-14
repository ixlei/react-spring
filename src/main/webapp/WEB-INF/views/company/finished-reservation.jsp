<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
	<title>已完成预约</title>
	<link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/reservation-management-finished-reservation.css">

</head>
<body>
	<jsp:include page="business-header.jsp"></jsp:include>
	<div id="mainContainer">
		<div id="main">
			<div id="sidebarContainer">
				<div id="listTitle">
					<ul id="sidebarTitle">
						<li class="sidebarItem">预约管理</li>
					</ul>
				</div>
				<jsp:include page="reservation-sidenav.jsp"></jsp:include>
			</div>
			<div id="mainContent">
                     
                     <div id="searchForm">
                     <p>查询：</p>
                    <div id="searchInput">
                        <input id="searchText" type="text" placeholder="请输入关键字搜索">
                    </div>
                    <a href="" style="display:inline;">
                                                                                <div id="searchButton">确定</div>
                                                                    </a>

                    </div>
                    <div id="selectForm">
                        <p>排序：</p>
                        <select>
                            <option></option>
                            <option>预约方</option>
                            <option>联系方式</option>
                            <option>预约时间</option>
                            <option>预约提交时间</option>
                            <option>操作</option>
                        </select>
                    </div>
                    <div id="TableList">
                    	<table class="hovertable">
                        
                        <tr>
                        	<th>预约方</th><th>联系方式</th><th>预约时间</th><th>&nbsp;预约提交时间</th>
                        </tr>
                        
                        <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>赵京木&nbsp;</td><td>&nbsp;18840838187&nbsp;</td><td>&nbsp;2015-09-016&nbsp;</td> <td>&nbsp;2015-08-28&nbsp;&nbsp;</td>
                        </tr>
                         <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>陈天韵&nbsp;</td><td>&nbsp;18840836093&nbsp;</td><td>&nbsp;2015-09-16&nbsp;</td> <td>&nbsp;2015-08-28&nbsp;&nbsp;</td>
                        </tr>
                         <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>张恩德&nbsp;</td><td>&nbsp;18840838187&nbsp;</td><td>&nbsp;2015-09-15&nbsp;</td> <td>&nbsp;2015-08-27&nbsp;&nbsp;</td>
                        </tr>
                         <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>刘宇&nbsp;</td><td>&nbsp;18697023568&nbsp;</td><td>&nbsp;2015-09-14&nbsp;</td> <td>&nbsp;2015-08-25&nbsp;&nbsp;</td>
                        </tr>
                         <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>李曜&nbsp;</td><td>&nbsp;13842640317&nbsp;</td><td>&nbsp;2015-09-10&nbsp;</td> <td>&nbsp;2015-08-23&nbsp;&nbsp;</td>
                        </tr>
                         <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>张明山&nbsp;</td><td>&nbsp;18840838187&nbsp;</td><td>&nbsp;2015-09-05&nbsp;</td> <td>&nbsp;2015-08-19&nbsp;&nbsp;</td>
                        </tr>
                         <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>王肖&nbsp;</td><td>&nbsp;18840833200&nbsp;</td><td>&nbsp;2015-09-01&nbsp;</td> <td>&nbsp;2015-08-01&nbsp;&nbsp;</td>
                        </tr>
                         <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>张洵&nbsp;</td><td>&nbsp;18606038045&nbsp;</td><td>&nbsp;2015-08-25&nbsp;</td> <td>&nbsp;2015-07-24&nbsp;&nbsp;</td>
                        </tr>
                        <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>潘与成&nbsp;</td><td>&nbsp;18840823156&nbsp;</td><td>&nbsp;2015-08-24&nbsp;</td> <td>&nbsp;2015-07-24&nbsp;&nbsp;</td>
                        </tr>
                        <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>王梓涵&nbsp;</td><td>&nbsp;18340861201&nbsp;</td><td>&nbsp;2015-08-23&nbsp;</td> <td>&nbsp;2015-07-20&nbsp;&nbsp;</td>
                        </tr>
                        <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                            onMouseOut="this.style.backgroundColor='#d4e3e5';">
                            <td>邓媛元&nbsp;</td><td>&nbsp;18107766480&nbsp;</td><td>&nbsp;2015-08-19&nbsp;</td> <td>&nbsp;2015-07-20&nbsp;&nbsp;</td>
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
</body>
</html>