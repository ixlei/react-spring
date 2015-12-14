<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
	<link rel="stylesheet" type="text/css" href="/stylesheets/personal-attiontion.css"> 
	<meta content="text/html;charset=utf-8">
	<title>我关注的</title>
</head>
<body>
	 <jsp:include page="investor-header.jsp"></jsp:include>
	<div class="wrap">
		<div class="title">
			我关注的
		</div><!--title-->
		<div class="toubu">
			<div class="sort">
				
				<dl class="select">
					<span >排序:</span>
					<dt>请选择</dt>
					<dd>
						<ul>
							<li><a href="#">按时间排序</a></li>
							<li><a href="#">按信用排序</a></li>
							<li><a href="#">按地点排序</a></li>
							<li><a href="#">按规模排序</a></li>
						</ul>
					</dd>
				</dl>
			</div><!--sort-->
			<div class="search">
				<input type="text" placeholder="请输入关键字搜索">
				<button>&nbsp&nbsp&nbsp&nbsp搜&nbsp索</button>
			</div>
		</div><!--search-->
		<table cellSpacing=0 cellPadding=0>
			<tr>
				<th>
					公司名称
				</th>
				<th>
					关注状态
				</th>
				<th>
					发布产品
				</th>
				<th>
					产品类型
				</th>
				<th>
					更多操作
				</th>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
			<tr>
				<td>
					天津电力建设有限公司
				</td>
				<td>
					互相关注
				</td>
				<td>
					天津电力建设有限公司增信私募债
				</td>
				<td>
					单一债
				</td>
				<td>
					<button class="private_letter">私信</button>
				</td>
			</tr>
		</table>
		<div class="page">
			
		</div>
		<p class="company">推荐投资人</p>
		<div class="slider">
			<div class="slider_left">
				<p>知名投资人</p>
				<div id="focus1">
					<div class="pre"></div>
				    <div class="next"></div>
				    <ul> 
				    	<li>
				       		<a href="#" target="_blank">
				       			<img src="/images/touzizhe1.png">
				       		</a>
				       	</li>
				       <li>
				       		<a href="#" target="_blank">
				       			<img src="/images/touzizhe2.png">
				       		</a>
				       </li>
				      
				     </ul>
				</div>
				<div class="see-more" style="">
					<span><a href="/springmvc/investor/moreInvestor" title="查看更多投资人">查看更多投资人>></a></span>
				</div>
			</div>
			<div class="slider_right">
				<p>新晋投资人</p>
				<div id="focus">
					<div class="pre"></div>
				    <div class="next"></div>
				    <ul> 
				    	 <li>
				       		<a href="#" target="_blank">
				       			<img src="/images/touzizhe3.png">
				       		</a>
				       </li>
				       <li>
				       		<a href="#" target="_blank">
				       			<img src="/images/touzizhe4.png">
				       		</a>
				       	</li>
				     </ul>
				</div>
				<div class="see-more" >
					<span><a href="/springmvc/investor/moreInvestor" title="查看更多投资人">查看更多投资人>></a></span>
				</div>

			</div>
		</div><!--slider-->
	</div>
	<div id="footer">
    	<div id="foot-list">
    </div>
</div>
<script type="text/javascript" src="/javascripts/jq.js"></script>
	<script type="text/javascript " src="/javascripts/lubotu.js"></script>
	<script type="text/javascript">
		$(function(){
			$(".select").each(function(){
				var s=$(this);
				var z=parseInt(s.css("z-index"));
				var dt=$(this).children("dt");
				var dd=$(this).children("dd");
				var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   
				var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    
				dt.click(function(){dd.is(":hidden")?_show():_hide();});
				dd.find("a").click(function(){dt.html($(this).html());_hide();});  
				$("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
			})
		})
	</script>
</body>
</html>