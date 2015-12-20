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
<link rel="stylesheet" type="text/css"
	href="/stylesheets/complete-invest-reg.css">
<link rel="stylesheet" type="text/css"
	href="/stylesheets/customer-footer.css">
<link rel="stylesheet" href="/stylesheets/kalendae.css">

<title>企业信息完善</title>
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
				<form method="post" enctype="multipart/form-data" action="/springmvc/customer/companyUserNextStep">
					<div id="left-reg">
						<ul>
							<li>
							<span class="label">企业类型:</span> 
								<select name="companyType" 	class="reg-input">
									<option value=""></option>
									<option value="有限责任公司">有限责任公司</option>
									<option value="">股份有限公司</option>
									<option value="股份有限公司">个人合伙企业</option>
									<option value="个人独资企业">个人独资企业</option>
									<option value="其他">其他</option>
								</select>
							</li>
							<li>
								<span class="label">注册资本:</span>
								<input type="text" name="registerCapital" class="reg-input" />
							</li>
							<li>
								<span class="label">营业执照注册号:</span>
								<input type="text" 	name="businessLicence" class="reg-input" />
							</li>
							<li>
								<span class="label">法定代表人:</span>
								<input type="text" name="legalRepresentative" class="reg-input" />
							</li>
							<li>
								<span class="label">成立时间:</span>
								<input type="text" 	name="createTime" class="reg-input" id="date" />
							</li>
							<li>
								<span class="label">注册地址:</span>
								<input type="text" 	name="registerAddress" class="reg-input" />
							</li>
							<li>
								<span class="label">总部地址:</span>
								<input type="text" 	name="headquartersAddress" class="reg-input" />
							</li>
							<li>
								<span class="label">咨询电话:</span>
								<input type="text" 	name="first" id="first" />
								<span>-</span>
								<input type="text" name="second" id="second" />
							</li>
							<li>
								<span class="label">所属行业:</span>
								<select name="workField" class="reg-input" >
										<option value=""></option>
										<option value="金融投资">金融投资</option>
										<option value="房地产">房地产</option>
										<option value="能源">能源</option>
										<option value="化学">化学</option>
								</select>
							</li>
							<li>
								<span class="label">主要业务:</span>
								<input type="text" 	name="mainField" class="reg-input" />
							</li>
							<li>
								<span class="label">盈利模式:</span>
								<select name="earnPattern" 	class="reg-input">
									<option value=""></option>
									<option value="关系服务">关系服务</option>
									<option value="产业标准">产业标准</option>
									<option value="客户解决方案">客户解决方案</option>
									<option value="个性挖掘">个性挖掘</option>
									<option value="速度领先">速度领先</option>
									<option value="数据处理">数据处理</option>
									<option value="成本占优">成本占优</option>
									<option value="中转站模式">中转站模式</option>
									<option value="其他">其他</option>
								</select>
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
							<span id="text">上传图片</span> <input name="image" type="file" id="fileInput">
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div id="footer"></div>
	<script type="text/javascript" src="/javascripts/jq.js"></script>
	<script type="text/javascript" src="/javascripts/imd.js"></script>
	<script type="text/javascript" src="/javascripts/kalendae.js"></script>
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

							var calendar = new Kalendae.Input('date', {
								months : 1
							});
						});
	</script>
</body>

</html>
