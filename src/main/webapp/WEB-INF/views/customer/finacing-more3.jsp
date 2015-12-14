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
                <img class="head" src="/images/logo_0003.jpg">
                <p style="font-size: 2em">书风绿色酒店</p><br/>
                <div class="about">
                    <p>坐落在大连市金融、商贸、旅游、交通中心的中山广场，是一座欧洲文艺复兴风格的巴洛克式建筑，现为全国重点文物保护单位。</p>
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
                        成立时间：2002<br/>
                        注册资本：500万人民币<br/>
                        咨询电话：411 3988 1234<br/>
                        企业类型：民营企业<br/>
                        注册地址：辽宁大连中山区中山广场<br/><br/>
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
                                <li style="background-image: url(/images/rotate3_1.png)"></li>
                                <li style="background-image: url(/images/rotate3_2.png)"></li>
                                <li style="background-image: url(/images/rotate3_3.png)"></li>
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
                    细分行业：住宿<br/>
                    <p class="content">
                    </p><br/>
                </div>
                <div class="bottom-title-line">
                    <span class="title">产品服务：</span>
                    <span class="long-line"></span>
                </div>
                <div class="center-content">
                    <p class="content">大连君悦酒店拥有370间豪华海景房，酒店所有房间都拥有无与伦比的辽阔海景。其中包括28间风格雅致的套房。2,568平方米的活动及会议空间，其中包括层高8米的854平方米无柱大宴会厅与390平方米的悦海厅与9个面积各异的小宴会厅，均拥有良好的自然采光。高速无线网络接入与先进的可视影像设备。悦水疗设有1个豪华双人理疗间及3个豪华单人理疗间，提供一系列的身体与面部护理。拥有自然采光的20米恒温泳池。
                    </p><br/>
                </div>
                <div class="bottom-title-line">
                    <span class="title">优势专长：</span>
                    <span class="long-line"></span>
                </div>
                <div class="center-content">
                    技术优势：先进的技术<br/>
                    产品优势：环境整洁<br/>
                    市场优势：市场充足<br/>
                    人才优势：兢兢业业的优秀员工<br/>
                    管理优势：卓有成效的管理团队<br/>
                    品牌优势：独有特色<br/><br/>
                </div>
                <div class="bottom-title-line">
                    <span class="title">公司介绍：</span>
                    <span class="long-line"></span>
                </div>
                <div class="center-content">
                    <p class="content">
                        致力于为客人打造更加完美的商务之旅，一键式服务让您体验现代商旅的舒适与便捷；训练有素的酒店一线员工能熟练地进行英语和日语沟通，并为客人提供优质、全面、超值地服务，同时酒店还特设了多语种的宾客关系团队，可以随时为外藉客人提供周到、贴心地服务，并帮助客人解决在店期间的一切问题。拥有370间豪华海景房，酒店所有房间都拥有无与伦比的辽阔海景，其中包括28间风格雅致的套房。
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
        var arr = ['url(/images/s3_1.png)',
            'url(/images/s3_2.png)',
            'url(/images/s3_3.png)'
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