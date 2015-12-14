<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <title>股权管理</title>
    <link href="/stylesheets/radioButton.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/business-header.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/customer-footer.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/socket-manage.css" rel="stylesheet" type="text/css">
</head>

<body>
    <jsp:include page="investor-header.jsp"></jsp:include>
    <div id="main">
        <jsp:include page="socket-top-nav.jsp"></jsp:include>
        <div id="filter">
            <div>筛选条件</div>
            <div>
                <form>
                    <span>发布时间：</span>
                    <input id='one-month' type="radio" name="radio-group" checked="checked" />
                    <label for="one-month">近一个月</label>
                    <input id='three-month' type="radio" name="radio-group" />
                    <label for="three-month">近三个月</label>
                    <input id='six-month' type="radio" name="radio-group" />
                    <label for="six-month">近六个月</label>
                    <input id='one-year' type="radio" name="radio-group" />
                    <label for="one-year">近一年</label>
                    <input id='two-year' type="radio" name="radio-group" />
                    <label for="two-year">近两年</label>
                </form>
            </div>
        </div>
        <div id="condition-list">
            <div id="subtitle">
                股权状况分布
            </div>
            <div id="list-item">
                <div id="content">
                    <div class="list-text">
                        <div>
                            公司名称：渤海黑山
                        </div>
                        <div>
                            <span>所在地：北京</span>
                            <span>份额：1</span>
                            <span>投入资金额：500万</span>
                        </div>
                    </div>
                    <div class="list-text">
                    	 <div>
                            	公司名称：软件服务外包公司
                        </div>
                        <div>
                            <span>所在地：大连</span>
                            <span>份额：3</span>
                            <span>投入资金额：1000万</span>
                        </div> 
                    </div>
                    <div class="list-text">
                  		<div>
                            	公司名称：旋风科技公司
                        </div>
                        <div>
                            <span>所在地：大连</span>
                            <span>份额：4</span>
                            <span>投入资金额：1200万</span>
                        </div> 
                    </div>
                    <div class="list-text">
                    	 <div>
                            	公司名称：软件开发科技公司
                        </div>
                        <div>
                            <span>所在地：大连</span>
                            <span>份额：1</span>
                            <span>投入资金额：800万</span>
                        </div>
                    </div>
                     <div class="list-text">
                    	 <div>
                            	公司名称：暴走科技公司
                        </div>
                        <div>
                            <span>所在地：大连</span>
                            <span>份额：1</span>
                            <span>投入资金额：800万</span>
                        </div>
                    </div>
                </div>
                <div id="image">
                    <img src="/images/socket-manage.png" />
                </div>
            </div>
        </div>
    </div>
    <div id="footer">
        <div id="foot-list">
        </div>
    </div>
</body>

</html>
    