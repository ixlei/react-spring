<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="renderer" content="webkit" />
<meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
<title>当前预约</title>
<link rel="stylesheet" type="text/css"
	href="/stylesheets/business-header.css">
<link rel="stylesheet" type="text/css"
	href="/stylesheets/customer-footer.css">
<link rel="stylesheet" type="text/css"
	href="/stylesheets/reservation-management-current-reservation.css">

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
					<a href="" style="display: inline;">
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
							<th>预约方</th>
							<th>联系方式</th>
							<th>预约时间</th>
							<th>&nbsp;预约提交时间</th>
							<th>&nbsp;&nbsp;操作</th>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>王森淼&nbsp;</td>
							<td>&nbsp;18840838187&nbsp;</td>
							<td>&nbsp;2015-10-05&nbsp;</td>
							<td>&nbsp;2015-09-10&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>唐烨煊&nbsp;</td>
							<td>&nbsp;15542320109&nbsp;</td>
							<td>&nbsp;2015-09-28&nbsp;</td>
							<td>&nbsp;2015-09-15&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>闫怡卉&nbsp;</td>
							<td>&nbsp;18340861556&nbsp;</td>
							<td>&nbsp;2015-09-27&nbsp;</td>
							<td>&nbsp;2015-09-14&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>潘与成&nbsp;</td>
							<td>&nbsp;18840823156&nbsp;</td>
							<td>&nbsp;2015-09-26&nbsp;</td>
							<td>&nbsp;2015-09-14&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>马凯&nbsp;</td>
							<td>&nbsp;15541198290&nbsp;</td>
							<td>&nbsp;2015-09-25&nbsp;</td>
							<td>&nbsp;2015-09-13&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>杨玉婷&nbsp;</td>
							<td>&nbsp;15524704435&nbsp;</td>
							<td>&nbsp;2015-09-25&nbsp;</td>
							<td>&nbsp;2015-09-13&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>田熙颖&nbsp;</td>
							<td>&nbsp;18842678655&nbsp;</td>
							<td>&nbsp;2015-09-25&nbsp;</td>
							<td>&nbsp;2015-09-13&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>李旺&nbsp;</td>
							<td>&nbsp;13478919974&nbsp;</td>
							<td>&nbsp;2015-09-25&nbsp;</td>
							<td>&nbsp;2015-09-13&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>刘浩&nbsp;</td>
							<td>&nbsp;18840868327&nbsp;</td>
							<td>&nbsp;2015-09-24&nbsp;</td>
							<td>&nbsp;2015-09-11&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>马俊辉&nbsp;</td>
							<td>&nbsp;18840823550&nbsp;</td>
							<td>&nbsp;2015-09-24&nbsp;</td>
							<td>&nbsp;2015-09-11&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>闫廷廷&nbsp;</td>
							<td>&nbsp;15541197657&nbsp;</td>
							<td>&nbsp;2015-09-20&nbsp;</td>
							<td>&nbsp;2015-09-10&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>赵京木&nbsp;</td>
							<td>&nbsp;13998472011&nbsp;</td>
							<td>&nbsp;2015-09-20&nbsp;</td>
							<td>&nbsp;2015-09-10&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						<tr onMouseOver="this.style.backgroundColor='#ffff66';"
							onMouseOut="this.style.backgroundColor='#d4e3e5';" class="tr-list" data-index="1">
							<td>王肖&nbsp;</td>
							<td>&nbsp;18840833200&nbsp;</td>
							<td>&nbsp;2015-09-18&nbsp;</td>
							<td>&nbsp;2015-09-10&nbsp;&nbsp;</td>
							<td><a class="A_finished" href="javascript:void(0);" data-index="1">&nbsp;&nbsp;&nbsp;完成&nbsp;&nbsp;&nbsp;</a></td>
						</tr>
						
					</table>
					<hr class="hr1" />
				</div>

				<div id="page"></div>
			</div>
		</div>
	</div>
	<div id="footer"></div>
	<script type="text/javascript">
		window.onload = function() {
			var A_finished = document.getElementsByClassName('A_finished');
			var hovertable = document.getElementsByClassName('hovertable')[0];
			
			
			hovertable.onclick = function(e) {
				if(e.target.tagName == 'A' && e.target.className == 'A_finished') {
					var tr = document.getElementsByClassName('tr-list');
					for(var i in tr) {
						if(tr[i].dataset.index == e.target.dataset.index) {
							break;
						}
					}
					
					tr[i].parentNode.removeChild(tr[i]);
				}
			}
			
		
		}
	</script>
</body>
</html>