<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <title>详情查看</title>
    <link href="/stylesheets/customer_financing_more.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/customer-header.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/customer-footer.css" rel="stylesheet" type="text/css">
   
</head>
<body>
    <jsp:include page="customer-header.jsp"></jsp:include>
    <div id="main">
        <div class="container">
            <div class="top">
                <img class="head" src="/images/logo_0004.jpg">
                <p style="font-size: 2em">莱客饭店</p><br/>
                <div class="about">
                    <p>是集餐饮、住宿、会务为一体的综合性旅游饭店。饭店环境幽雅。
                    </p>
                </div>
                <div class="top-right">
                    <div class="return">
                        <a id="return0" href="">访问官网</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a id="return" href="">返回上一层<img style="vertical-align: middle" src="/images/back.png"></a>
                    </div>
                    <div class="button" id="send">
                        <a href="">发送意见</a>
                    </div>
                    <div class="button" id="attention">
                        <a href="">关注企业</a>
                    </div>
                </div>
            </div><hr class="clear"/>
            <div class="center">
                <h2 style="font-size: 1.2em">公司信息</h2><br>
                <div class="center-left">
                    <div class="center-title-line">
                        <span class="title">基本信息：</span>
                        <span class="short-line"></span>
                    </div>
                    <div class="center-content">
                        成立时间：2007年6月9日<br/>
                        注册资本：500万人民币<br/>
                        咨询电话：4007-889-889<br/>
                        企业类型：民营企业<br/>
                        注册地址：山东省济南市二环东路<br/><br/>
                    </div>
                    <div class="center-title-line">
                        <span class="title">公司规模：</span>
                        <span class="short-line"></span>
                    </div>
                    <div class="center-content">
                        分厂：无<br/>
                        子公司：无<br/>
                        驻外办事处机构：无<br/>
                        员工人数：1000人<br/>
                        占地面积：10000平米<br/><br/>
                    </div>
                </div>
                <div class="center-right">
                    <p style="font-size: 1.1em">公司图片：</p>
                    <br/>
                    <div class="imgBox" id="slider">
                        <div class="banner">
                            <ul id="banner-image">
                                <li style="background-image: url(/images/rotate4_1.png)"></li>
                                <li style="background-image: url(/images/rotate4_2.png)"></li>
                                <li style="background-image: url(/images/rotate4_3.png)"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom-title-line">
                    <span class="title">行业发展：</span>
                    <span class="long-line"></span>
                </div>
                <div class="center-content">
                    所属行业：服务业<br/>
                    细分行业：餐饮<br/>
                    <p class="content">
                    </p><br/>
                </div>
                <div class="bottom-title-line">
                    <span class="title">产品服务：</span>
                    <span class="long-line"></span>
                </div>
                <div class="center-content">
                    <p class="content">提供优质化服务，个性化享受：济南蓝海大饭店的所有服务人员能熟练的掌握服务的技巧与流程，同时我们还可以根据客人的特殊要求如婚宴、寿宴、旅游等提供个性化、定制化的服务，让您感受高品味的享受。
                    </p><br/>
                </div>
                <div class="bottom-title-line">
                    <span class="title">优势专长：</span>
                    <span class="long-line"></span>
                </div>
                <div class="center-content">
                    技术优势：先进的技术<br/>
                    产品优势：产品符合大众口味<br/>
                    市场优势：市场必需品<br/>
                    人才优势：兢兢业业的优秀员工<br/>
                    管理优势：卓有成效的管理团队<br/>
                    品牌优势：品质安全健康<br/><br/>
                </div>
                <div class="bottom-title-line">
                    <span class="title">公司介绍：</span>
                    <span class="long-line"></span>
                </div>
                <div class="center-content">
                    <p class="content">
                        饭店餐饮区域共设有600个餐位，以经营“精品鲁菜”为主，汇集燕、鲍、翅、参等高档菜品，配合地道的胶东海鲜和市场流行的地域菜品，均由名厨料理，菜品精良。朋友聚会或是贵宾宴请，20个风格独特的宴会包间均能使宾客在浓郁的文化氛围中品尝各款美食佳肴
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div id="footer">
       <div id="foot-list">
       </div>
        <script type="text/javascript" src="/javascripts/jq.js"></script>
    <script type="text/javascript" src="/javascripts/islider.js"></script>
    <script type="text/javascript">
    window.onload = function() {
        $('.banner').unslider({
            fluid: true,
            dots: true
        });
        var arr = ['url(/images/s4_1.png)',
            'url(/images/s4_2.png)',
            'url(/images/s4_3.png)'
        ];
        var i = 0;
        $('.dot').each(function() {
            this.style.backgroundImage = arr[i++];
        });
    }
    </script>
</div>

</body>
</html>