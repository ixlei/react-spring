<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<link rel="stylesheet" type="text/css"
	href="/stylesheets/customer-header.css" />
<link rel="stylesheet" type="text/css"
	href="/stylesheets/finacing-company.css" />
<title>融资企业</title>
</head>

<body>
	<jsp:include page="customer-header.jsp"></jsp:include>
	<div id="main">
		<div id="content">
			<div id="side-nav">
				<div id="search-nav">
					<form method="post">
						<span id="search-text">企业搜索:</span>
						<div id="search-area">
							<input type="text" placeholder="搜索" id="search-in" /> <input
								type="button" value="搜素" id="search-btn" />
						</div>
					</form>
				</div>
				<div id="filter-nav">
					<ul>
						<li class="filter-item-list" id="industry-item"><span
							class="filter-item"> <a href="javascript:void(0)">行业筛选
									<img src="/images/back-bottom.png">
							</a>
						</span>
							<div id="industry-layer">
								<div id="industry-search">
									<form>
										<input type="text" /> <input type="button" value="确定" />
									</form>
								</div>
								<div id="industry-list">
									<span class="hot-push">热门行业:</span>
									<ul>
										<li><span class="industry" data-industry="行业一">行业一</span>
											<span class="industry" data-industry="行业一">行业一</span> <span
											class="industry" data-industry="行业一">行业一</span> <span
											class="industry" data-industry="行业一">行业一</span> <span
											class="industry" data-industry="行业一">行业一</span> <span
											class="industry" data-industry="行业一">行业一</span></li>
										<li><span class="industry" data-industry="行业一">行业一</span>
											<span class="industry" data-industry="行业一">行业一</span> <span
											class="industry" data-industry="行业一">行业一</span> <span
											class="industry" data-industry="行业一">行业一</span> <span
											class="industry" data-industry="行业一">行业一</span> <span
											class="industry" data-industry="行业一">行业一</span></li>
										<li><span class="industry" data-industry="行业一">行业一</span>
											<span class="industry" data-industry="行业一">行业一</span> <span
											class="industry" data-industry="行业一">行业一</span> <span
											class="industry" data-industry="行业一">行业一</span></li>
									</ul>
								</div>
							</div></li>
						<li class="filter-item-list"><span class="filter-item">
								<a href="javascript:void(0)">地区筛选<img
									src="/images/back-bottom.png" /></a>
						</span>
							<div id="area-layer">
								<div id="area-search">
									<form>
										<input type="text" /> <input type="button" value="确定" />
									</form>
								</div>
								<div id="area-list">
									<span class="hot-push">热门地区:</span>
									<ul>
										<li><span class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span></li>
										<li><span class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span></li>
										<li><span class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span> <span
											class="area" data-industry="地区一">地区一</span></li>
									</ul>
								</div>
							</div></li>
						<li class="filter-item-list"><span class="filter-item">
								<a href="javascript:void(0)">融资额: <img
									src="/images/back-bottom.png" />
							</a>
						</span>
							<div id="number-in">
								<span class="hot-push">融资额:</span>
								<div id="number">
									<form>
										<input type="text" placeholder="￥" /> <span>-</span> <input
											type="text" placeholder="￥" /> <span>单位:万</span> <br /> <input
											type="button" value="确定" />
									</form>
								</div>
							</div></li>
					</ul>
				</div>
			</div>
			<div id="fanicing-list-title">
				<span>公司logo/照片</span> <span>公司名称</span> <span>主营业务</span> <span>融资需求</span>
				<span>公司简介</span>
			</div>
			<div id="fanicing-list">
				<ul>
					<li>
						<div class="other">
							<span> <a href="/springmvc/customer/finacingmore/1"> <img
									src="/images/logo_0001.jpg" alt="" />
							</a>
							</span> <span>广州市铱泰电子科技有限公司</span> <span>通讯设备</span> <span>50w</span>
						</div>
						<div class="introduction">
							<p>广州市铱泰电子科技有限公司是集研究开发、制造销售、应用服务为一体的高新技术企业</p>
						</div>
					</li>
					<li>
						<div class="other">
							<span> <a href="/springmvc/customer/finacingmore/2"> <img
									src="/images/logo_0002.jpg" alt="" />
							</a>
							</span> <span>仙宗汇饭店</span> <span>云计算</span> <span>50w</span>
						</div>
						<div class="introduction">
							<p>是一家四星级酒店，位于重庆北部新城核心商业区域，地理位置优越，交通便利。</p>
						</div>
					</li>
					<li>
						<div class="other">
							<span> <a href="/springmvc/customer/finacingmore/3"> <img
									src="/images/logo_0003.jpg" alt="" />
							</a></span> <span>书风绿色酒店</span> <span>计算机</span> <span>50w</span>
						</div>
						<div class="introduction">
							<p>坐落在大连市金融、商贸、旅游、交通中心的中山广场，是一座欧洲文艺复兴风格的巴洛克式建筑，现为全国重点文物保护单位。
							</p>
						</div>
					</li>
					<li>
						<div class="other">
							<span> <a href="/springmvc/customer/finacingmore/4"> <img
									src="/images/logo_0004.jpg" alt="" />
							</a></span> <span>莱客饭店</span> <span>计算机</span> <span>50w</span>
						</div>
						<div class="introduction">
							<p>是集餐饮、住宿、会务为一体的综合性旅游饭店。饭店环境幽雅。</p>
						</div>
					</li>
					<li>
						<div class="other">
							<span><a href="/springmvc/customer/finacingmore/5"> <img
									src="/images/logo_0005.jpg" alt="" />
							</a></span> <span>宜冠地产</span> <span>通讯设备</span> <span>50w</span>
						</div>
						<div class="introduction">
							<p>公司按照现代企业制度的管理模式，遵循有限责任公司制度的运作方式</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
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
