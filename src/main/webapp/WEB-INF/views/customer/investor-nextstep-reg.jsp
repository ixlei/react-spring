<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="/stylesheets/font.css">
<link rel="stylesheet" href="/stylesheets/customer-header.css">
<link rel="stylesheet" type="text/css" href="/stylesheets/complete-reg.css">
<link rel="stylesheet" type="text/css"
	href="/stylesheets/customer-footer.css">
<title>继续注册</title>
</head>

<body>
	<jsp:include page="customer-header.jsp"></jsp:include>
	<div id="main">
		<div id="content">
			<div id="sitenav">
				<ul>
					<li><span><img src="/images/1.png" alt="" />设置登录名</span></li>
					<li><span class="sitnav-active"><img
							src="/images/2.png" alt="" />填写注册信息</span></li>
					<li><span><img src="/images/3.png" alt="" />注册完成</span></li>
				</ul>
			</div>
			<div id="complete-reg">
				<form method="post"  action="/springmvc/customer/investorNextStep" enctype="multipart/form-data">
					<div id="left-reg">
						<ul>
							<%-- <li>
								<span class="label">投资者名称:</span> 
								<input type="text" name="" class="reg-input">
							</li> --%>
							<li><span class="label">公司名称:</span> 
								<input type="text" name="companyName" class="reg-input">
							</li>
							<li>
								<span class="label">法定代表人:</span>
								<input type="text" name="legalRepresentative" class="reg-input">
							</li>
							<li>
								<span class="label">法定代表委托人:</span>
								<input type="text"	name="legalRepresentativewt" class="reg-input">
							</li>
							<li>
								<span class="label">营业执照注册号:</span> 
								<input type="text" 	name="businesslicence" class="reg-input">
							</li>
							<li>
								<span class="label">注册资本:</span> 
								<input type="text" 	name="registerCapital" class="reg-input">
							</li>
							<li>
								<span class="label">注册地址:</span> 
								<input type="text" 	name="registerAddress" class="reg-input">
							</li>
							<li>
								<span class="label">所在地区:</span> 
								<input type="text" name="companyAddress" class="reg-input">
							</li>
							<li>
								<span class="label">投资地区:</span> 
								<input type="text" 	name="investAddress" class="reg-input">
							</li>
							<li>
								<span class="label">投资领域:</span> 
								<input type="text" 	name="investFiled" class="reg-input">
							</li>
							<li>
								<span class="label">投资阶段:</span> 
								<input type="text" 	name="investStage" class="reg-input"></li>
							<li>
								<span class="label">投资周期:</span> 
								<input type="text" 	name="investCycle" class="reg-input">
							</li>
							<li>
								<span class="label">总部地址:</span>
								<input type="text" 	name="headquartersAddress" class="reg-input">
							</li>
							<li>
								<span class="label">咨询电话:</span> 
								<input type="text" 	name="" id="first"> 
								<span>-</span>
								<input type="text" 	name="" id="second">
							</li>
							<li>
								<span class="label"></span> 
								<input type="submit" id="btn" value="下一步" />
							</li>
						</ul>
					</div>
					<div id="right-reg">
						<div id="title">
							<p>企业/个人表示(LOGO)</p>
						</div>
						<div id="logo-show"></div>
						<div id="file">
							<span id="text">上传图片</span> <input type="file" name="image" id="fileInput" />
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div id="footer"></div>
	<script type="text/javascript" src="/javascripts/jq.js"></script>
	<script type="text/javascript" src="/javascripts/imd.js"></script>
	<script type="text/javascript">
		$(document)
				.ready(
						function() {
							imd
									.Event('#fileInput')
									.on(
											'change',
											function(e) {
												var fileReader = new FileReader();
												var file = imd
														.getElement('#fileInput').files[0];
												fileReader.onload = function() {
													var html = '<span><img src=' + '"' + fileReader.result + '"' + '></span>';
													$('#logo-show')
															.append(html);
												}
												fileReader.readAsDataURL(file);
											});
						});
	</script>
</body>

</html>
