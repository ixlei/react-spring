<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html >
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="/stylesheets/font.css">
    <link rel="stylesheet" href="/stylesheets/customer-header.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/reg.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
    <title>注册</title>
</head>

<body>
    <jsp:include page="customer-header.jsp"></jsp:include>
    <div id="main">
        <div id="content">
            <div id="sitenav">
                <ul>
                    <li><span class="sitnav-active">
                    <img src="/images/1.png" alt="" />设置登录名</span></li>
                    <li><span><img src="/images/2.png" alt="" />填写注册信息</span></li>
                    <li><span><img src="/images/3.png" alt="" />注册完成</span></li>
                </ul>
            </div>
            <div id="reg">
                <form method="post" id="form" name="reg">
                    <ul>
                    	 <li><span class="label">用户类型:</span>
                            <input type="radio" checked="checked" name="type" value="企业" class="checked" /> <span>企业</span>
                            <input type="radio" checked="checked" name="type" value="投资者" class="checked" checked/> <span class="check">投资者</span>
                        </li>
                        <li>
                            <span class="label">邮箱:</span>
                            <input type="text" id="email" class="reg-input" name="email" /> <span class="check"> </span></li>
                        <li><span class="label">密码:</span>
                            <input type="password" id="password" class="reg-input" name="password"/> <span class="check"></span></li>
                        <li><span class="label">确认密码:</span>
                            <input type="password" id="re-password" class="reg-input" name="re-password" /> <span class="check"></span></li>
                        <li><span class="label">验证码:</span>
                            <input type="text" id="auth" class="reg-input" name="auth" />
                            <span id="auth-image"><img src="/images/1.png" /></span>
                            <span id="refresh"><img src="/images/refresh.png" /></span>
                            <span class="check" id="check-auth"></span>
                        </li>
                        <li class="investor"><span class="label">姓名:</span>
                            <input type="text" id="username" class="reg-input" name="username" /> <span class="check"> </span></li>
                        <li class="investor"><span class="label">身份证号:</span>
                            <input type="text" id="IdCard" class="reg-input" name="IdCard" />
                             <span class="check"> </span></li>
                        <li class="company none"><span class="label">企业名称:</span>
                            <input type="text" id="companyname" class="reg-input" name="companyName" /> <span class="check"> </span></li>
                        <li class="company none"><span class="label">组织机构代码:</span>
                            <input type="text" id="code" class="reg-input" name="code" />
                             <span class="check"> </span></li>
                        <li><span class="label"></span>
                            <input type="checkbox" name="iagree" value="企业" class="checke" id="agree" checked />
                             <span>我同意<a href="/protopl">《网站服务协议》</a></span></li>
                        <li><span class="label"></span>
                            <input type="submit" id="btn" value="下一步" /> 
                            <span id="login"> <a href="/springmvc/customer/login">&nbsp;&nbsp;登陆</a></span></li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
    <div id="footer">
        <div id="foot-list"></div>
    </div>
    <script type="text/javascript" src="/javascripts/jq.js"></script>
    <script type="text/javascript" src="/javascripts/imd.js"></script>
    <script type="text/javascript" src="/javascripts/reg.js"></script>
</body>

</html>
