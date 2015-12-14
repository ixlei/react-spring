<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="/stylesheets/business-header.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/task1.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/finacing-publish.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
    <title>意向发布</title>
</head>

<body>
    <jsp:include page="business-header.jsp"></jsp:include>
    <div class="wrap">
        <jsp:include page="finance-publish-sidenav.jsp"></jsp:include>
        <div class="main">
            <form action="/springmvc/company/financepublish" method="post" name="form">
                <div class="basic_info">
                    <p class="tit">基本信息</p>
                    <div class="left fl">
                        <p>公司名称：<span>${companyName }</span></p>
                        <p>公司注册时间：<span>${createTime }</span></p>
                        <p>产品类型：<span>私募债</span></p>
                    </div>
                    <div class="right fr">
                        <p>公司注册地区：<span>${registerAddress }</span></p>
                        <p>公司注册资本：<span>${registerCapital }</span></p>
                        <p>所属行业：<span>${workField }</span></p>
                    </div>
                    <div class="buttom">
                        <p>
                            发行金额：
                            <input type="text" name="publishMoneyMin"> —
                            <input type="text" name="publishMoneyMax"> 万
                        </p>
                        <p>
                            <label>发行年限：</label>
                            <input type="text" id="year" name="publishFixedYesrs"> 年
                        </p>
                        <p>
                            <label for="text">还本付息方式:</label>
                            <textarea id="textarea" cols=50 rows=6 name="publishFinsh">
                            </textarea>
                        </p>
                        <p>
                            <label for="text">发行完成:</label>
                            <textarea id="textarea" cols=50 rows=6 name="publishFinsh">
                            </textarea>
                        </p>
                    </div>
                </div>
                <div class="more_info">
                    <p class="tit">更多信息</p>
                    <div class="left fl">
                        <p>
                            可承担最高利息：
                            <input class="por" type="text" name="occupyPercentMin" /> —
                            <input class="por" type="text" name="occupyPercentMax" /> %
                        </p>
                        <p>
                            年资金占用时长：
                            <input class="exit" type="text" name="exitWay" />
                        </p>
                        <p>
                            可提供风控:
                            <select>
                                <option value="抵押">抵押</option>
                                <option value="看书">看书</option>
                                <option value="运动">运动</option>
                                <option value="购物">购物</option>
                            </select>
                        </p>
                        <p>
                            担保方:
                            <input class="ensure" type="text" name="bondsman" />
                        </p>
                    </div>
                    <div class="right right1 fl">
                        <p>
                            企业当前净资产:
                            <input class="pro" type="text" name="netAsset" /> 万
                        </p>
                        <p>
                            去年营业额：
                            <input class="trunover" type="text" name="turnover"> 万
                        </p>
                        <p>
                            公司净利润：
                            <input class="profits" type="text" name="netProfit"> 万
                        </p>
                        <p>
                            还款来源：
                            <input type="text" class="threshold" name="investmentMinRequest"> 万
                        </p>
                    </div>
                </div>
                <input class="submit" type="button" value="发布" id="btn" />
            </form>
        </div>
    </div>
    <div id="footer">
        <div id="foot-list">
        </div>
    </div>
    <script type="text/javascript" src="/javascripts/imd.js"></script>
    <script type="text/javascript">
    imd.initDocReady(function() {
    	var sideItem = document.getElementsByClassName('side-item');
    	sideItem[1].className = sideItem[1].className + ' on';
    	
        imd.Event('#btn').on('click', function(e) {

            var form = document.forms.form,
                data = new FormData(form);
            imd.ajax({
                type: 'POST',
                async: true,
                url: '/springmvc/company/raisedbonds',
                receiveType: 'json',
                data: data,
                success: function(res) {
                    alert(res.res);
                },
                error: function(e) {
                    alert('网络错误，稍后再试');
                }
            });
        });

    });
    </script>
</body>

</html>
