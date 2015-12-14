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
                <img class="head" src="/images/logo_0005.jpg">
                <p style="font-size: 2em">宜冠地产</p><br/>
                <div class="about">
                    <p>公司按照现代企业制度的管理模式，遵循有限责任公司制度的运作方式</p>
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
                        成立时间：2011年12月11日<br/>
                        注册资本：2000万人民币<br/>
                        咨询电话：0554-608-6969<br/>
                        企业类型：有限责任公司<br/>
                        注册地址：淮南市山南新区<br/><br/>
                    </div>
                    <div class="center-title-line">
                        <span class="title">公司规模：</span>
                        <span class="short-line"></span>
                    </div>
                    <div class="center-content">
                        分厂：无<br/>
                        子公司：5个<br/>
                        驻外办事处机构：无<br/>
                        员工人数：50人<br/>
                        占地面积：22.07万平方米<br/><br/>
                    </div>
                </div>
                <div class="center-right">
                    <p style="font-size: 1.1em">公司图片：</p>
                    <br/>
                    <div class="imgBox" id="slider">
                        <div class="banner">
                            <ul id="banner-image">
                                <li style="background-image: url(/images/rotate5_1.png)"></li>
                                <li style="background-image: url(/images/rotate5_2.png)"></li>
                                <li style="background-image: url(/images/rotate5_3.png)"></li>
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
                    所属行业：基础建设行业<br/>
                    细分行业：房地产<br/>
                    <p class="content">
                    </p><br/>
                </div>
                <div class="bottom-title-line">
                    <span class="title">产品服务：</span>
                    <span class="long-line"></span>
                </div>
                <div class="center-content">
                    <p class="content">房屋租售、公寓租售、商铺租售、写字楼租售，以内外多个露天广场串联各个功能中心，街区广场、花园庭院、下沉庭院等，地上与地下、垂直与水平交通系统使商业空间形成生动、变化的有机整体。在这里，休闲娱乐、运动健身、购物消费、餐饮聚会等业态多元混合，丰富多彩的活动让小镇街区每天都是欢乐的节日。
                    </p><br/>
                </div>
                <div class="bottom-title-line">
                    <span class="title">优势专长：</span>
                    <span class="long-line"></span>
                </div>
                <div class="center-content">
                    技术优势：先进的技术<br/>
                    产品优势：投资升值<br/>
                    市场优势：便捷选房<br/>
                    人才优势：兢兢业业的优秀员工<br/>
                    管理优势：卓有成效的管理团队<br/>
                    品牌优势：有系统的资深品牌<br/><br/>
                </div>
                <div class="bottom-title-line">
                    <span class="title">公司介绍：</span>
                    <span class="long-line"></span>
                </div>
                <div class="center-content">
                    <p class="content">
                        公司始终坚持以市场为导向、开发为重点，经营为龙头，质量为根本的开发理念和经营方针，切实转变观念，解放思想，紧紧围绕市场狠抓经营，强化管理，树立责任感、认识危机感；不断留意和观察房地产市场行情，积极寻求探索与市场机制相适应的经营策略和经营方针，走品牌化之路。
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
        var arr = ['url(/images/s5_1.png)',
            'url(/images/s5_2.png)',
            'url(/images/s5_3.png)'
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