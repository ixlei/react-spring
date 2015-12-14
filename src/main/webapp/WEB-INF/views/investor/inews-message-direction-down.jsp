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
    <link rel="stylesheet" type="text/css" href="/stylesheets/personal_center_my_message_privately.css">

</head>
<body>
<jsp:include page="investor-header.jsp"></jsp:include>
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
                <div id="searchInput">
                    <input id="searchText" type="text" placeholder="请输入关键字">
                </div>
                <a href="" style="display:inline;">
                    <div class="searchButton">确定</div>
                </a>

            </div>
            <div id="mainContent_list">
                <div class="table_item">
                    &nbsp;&nbsp;股权人定向披露
                    <img class="img_down" src="/images/pick_up.png">
                </div>
                <div class="table_item_text">
                    <div class="pick_up_first">
                      <span>请选择定向披露的对象:</span><br/>
                        <form  >
                            <input type="checkbox" />
                            <label>男</label><br/>
                            <input type="checkbox"  />
                            <label>女</label><br/>
                            <input type="checkbox"/>
                            <label>王森淼</label>
                        </form>
                    </div>
                    <div class="pick_up_second">
                        <form  >
                            <label>股份变动及股东变动情况.PDF</label><br/>
                            <label>股份变动及股东变动情况.PDF</label><br/>
                            <label>股份变动及股东变动情况.PDF</label>
                        </form>
                    </div>
                    <div class="inputButton">
                        <a href="" style="display:inline;">
                            <div class="searchButton">确定</div>
                        </a>
                    </div>

                </div>

                <div class="table_item">
                    &nbsp;&nbsp;债权人定向披露
                    <img class="img_down" src="/images/pick_up.png">
                </div>
                <div class="table_item_text">
                    <div class="pick_up_first">
                        <span>请选择定向披露的对象:</span><br/>
                        <form  >
                            <input type="checkbox" />
                            <label>男</label><br/>
                            <input type="checkbox"  />
                            <label>女</label><br/>
                            <input type="checkbox"/>
                            <label>王森淼</label>
                        </form>
                    </div>
                    <div class="pick_up_second">
                        <form  >
                            <label>股份变动及股东变动情况.PDF</label><br/>
                            <label>股份变动及股东变动情况.PDF</label><br/>
                            <label>股份变动及股东变动情况.PDF</label>
                        </form>
                    </div>
                    <div class="inputButton">
                        <a href="" style="display:inline;">
                            <div class="searchButton">确定</div>
                        </a>
                    </div>

                </div>
            </div>
            <div id="page">
                <div>

                </div>
            </div>
        </div>
    </div>
</div>
<div id="footer">
</div>
</body>

