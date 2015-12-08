<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<head>
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
    <title>个人中心-我的消息</title>
    <link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/private-center-my-news.css">

</head>
<body>
<jsp:include page="business-header.jsp"></jsp:include>
<div id="mainContainer">
    <div id="main">
        <div id="sidebarContainer">
            <div id="listTitle">
                <ul id="sidebarTitle">
                    <li class="sidebarItem">我的消息</li>
                </ul>
            </div>
            <jsp:include page="inews-left-nav.jsp"></jsp:include>
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
            <!--******* *************************************** table**********************************************-->
            <div id="TableList">
                <table class="hovertable">

                    <tr>
                        <th>&nbsp;日期&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内容&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多操作</th>
                    </tr>

                    <!--*****************全是一样的**************************************************************************************-->
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr><tr onMouseOver="this.style.backgroundColor='#ffff66';"
                             onMouseOut="this.style.backgroundColor='#d4e3e5';">
                    <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr>
                    <tr onMouseOver="this.style.backgroundColor='#ffff66';"
                        onMouseOut="this.style.backgroundColor='#d4e3e5';">
                        <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
                    </tr><tr onMouseOver="this.style.backgroundColor='#ffff66';"
                             onMouseOut="this.style.backgroundColor='#d4e3e5';">
                    <td>&nbsp;&nbsp;&nbsp;2015-07-08&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;深圳成乐达电力建设公司关注了您&nbsp;&nbsp;&nbsp;</td><td><a class="com_detail" href="link address">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;企业详情</a></td>
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
