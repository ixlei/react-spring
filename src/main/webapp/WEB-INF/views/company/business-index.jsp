<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
    <link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/logined-busiess-index.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
    <title>企业首页</title>
</head>

<body>
    <jsp:include page="business-header.jsp"></jsp:include>
    <div id="main">
        <div id="content">
            <div class="banner" id="first-glance">
                <a href="#" class="unslider-arrow next">
                    <img src="/images/btn-pre.png" alt="" />
                </a>
                <a href="#" class="unslider-arrow next">
                    <img src="/images/btn-next.png" alt="" />
                </a>
                <ul>
                    <li style="background-image:url(/images/banner1.jpg)">
                    </li>
                    <li style="background-image:url(/images/banner2.png)">
                    </li>
                    <li style="background-image:url(/images/banner3.png)">
                    </li>
                </ul>
            </div>
            <div id="invest-center">
                <div id="inv-title">
                    <p id="inv-title">推荐投资人</p>
                </div>
                <div id="invest-list">
                    <div id="left-banner">
                        <p>知名投资人</p>
                        <div class="banner" id="site-banner-l">
                            <ul>
                                </li>
                                <li style="background-image:url(/images/company1.png)">
                                </li>
                                <li style="background-image:url(/images/company2.png)">
                                </li>
                            </ul>
                        </div>
                        <div class="invest-more">
                            <span><a href="/invest-more" title="">查看更多投资人>></a></span>
                        </div>
                    </div>
                    <div id="right-banner">
                        <p>新晋投资人</p>
                        <div class="banner" id="site-banner-r">
                            <ul>
                                <li style="background-image:url(/images/company3.png)">
                                </li>
                                <li style="background-image:url(/images/company4.png)">
                                </li>
                            </ul>
                        </div>
                        <div class="invest-more">
                            <span><a href="/invest-more" title="">查看更多投资人>></a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="news">
                <p id="zixun">资讯</p>
                <div id="news-area">
                    <ul>
                        <li>
                            <div class="title-nav">
                                <span>政策资讯</span>
                                <span class="more">
                                    <a href="/more" title="">更多</a>
                                </span>
                            </div>
                            <div id="policy-item">
                                <div class="zixun-item" id="lf">
                                    <p>
                                        <a title="浙江发布金融产业发展规划 金融产业再获政策支持" href="_target">浙江发布金融产业发展规划 金融产业再获政策支持
                                        </a>
                                    </p>
                                    <p>
                                        <a title="用好改革政策做好金融工作 " href="_target">用好改革政策做好金融工作 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="金融数据显经济企稳 央行定调下半年政策" href="_target">金融数据显经济企稳 央行定调下半年政策
                                        </a>
                                    </p>
                                    <p>
                                        <a title="国务院部署促进进出口稳定增长政策措施 " href="_target">国务院部署促进进出口稳定增长政策措施 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="央行定调货币政策：基调保持稳健 调控追求精准" href="_target">央行定调货币政策：基调保持稳健 调控追求精准
                                        </a>
                                    </p>
                                    <p>
                                        <a title="金融数据显经济企稳 央行定调下半年政策" href="_target">金融数据显经济企稳 央行定调下半年政策
                                        </a>
                                    </p>
                                    <p>
                                        <a title="用好改革政策做好金融工作 " href="_target">用好改革政策做好金融工作 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="用好改革政策做好金融工作 " href="_target">用好改革政策做好金融工作 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="金融数据显经济企稳 央行定调下半年政策" href="_target">金融数据显经济企稳 央行定调下半年政策
                                        </a>
                                    </p>
                                </div>
                                <div class="zixun-item" id="ls">
                                    <p>
                                        <a title="浙江发布金融产业发展规划 金融产业再获政策支持" href="_target">浙江发布金融产业发展规划 金融产业再获政策支持
                                        </a>
                                    </p>
                                    <p>
                                        <a title="用好改革政策做好金融工作 " href="_target">用好改革政策做好金融工作 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="金融数据显经济企稳 央行定调下半年政策" href="_target">金融数据显经济企稳 央行定调下半年政策
                                        </a>
                                    </p>
                                    <p>
                                        <a title="浙江发布金融产业发展规划 金融产业再获政策支持" href="_target">浙江发布金融产业发展规划 金融产业再获政策支持
                                        </a>
                                    </p>
                                    <p>
                                        <a title="浙江发布金融产业发展规划 金融产业再获政策支持" href="_target">浙江发布金融产业发展规划 金融产业再获政策支持
                                        </a>
                                    </p>
                                    <p>
                                        <a title="浙江发布金融产业发展规划 金融产业再获政策支持" href="_target">浙江发布金融产业发展规划 金融产业再获政策支持
                                        </a>
                                    </p>
                                    <p>
                                        <a title="国务院部署促进进出口稳定增长政策措施 " href="_target">国务院部署促进进出口稳定增长政策措施 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="用好改革政策做好金融工作 " href="_target">用好改革政策做好金融工作 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="浙江发布金融产业发展规划 金融产业再获政策支持" href="_target">浙江发布金融产业发展规划 金融产业再获政策支持
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="title-nav">
                                <span>市场资讯</span>
                                <span class="more">
                                    <a href="/more" title="">更多</a>
                                </span>
                            </div>
                            <div id="market-item">
                                <div class="zixun-item" id="rf">
                                    <p>
                                        <a title="2015年上半年社会融资规模增量8.81万亿元 " href="_target">2015年上半年社会融资规模增量8.81万亿元 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="德隆系前高管操盘 深圳惠程证券投资收益剧增" href="_target">德隆系前高管操盘 深圳惠程证券投资收益剧增
                                        </a>
                                    </p>
                                    <p>
                                        <a title="德隆系前高管操盘 深圳惠程证券投资收益剧增" href="_target">德隆系前高管操盘 深圳惠程证券投资收益剧增 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="方正证券被证监会立案调查 涉嫌信息披露违规" href="_target">方正证券被证监会立案调查 涉嫌信息披露违规 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="工行与泛欧交易所开展战略合作 " href="_target">工行与泛欧交易所开展战略合作 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="理财产品发行量维持平稳" href="_target">理财产品发行量维持平稳 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="红蜻蜓等6只新股周一上市定位分析" href="_target">红蜻蜓等6只新股周一上市定位分析
                                        </a>
                                    </p>
                                    <p>
                                        <a title="赛升药业等3只新股周三申购指南 顶格需83.4万元" href="_target">赛升药业等3只新股周三申购指南 顶格需83.4万元 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="兖州煤业高管增持超10万股 拟投资超23亿建煤矿" href="_target">兖州煤业高管增持超10万股 拟投资超23亿建煤矿
                                        </a>
                                    </p>
                                </div>
                                <div class="zixun-item" id="rs">
                                    <p>
                                        <a title="2015年上半年社会融资规模增量8.81万亿元 " href="_target">2015年上半年社会融资规模增量8.81万亿元 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="德隆系前高管操盘 深圳惠程证券投资收益剧增" href="_target">德隆系前高管操盘 深圳惠程证券投资收益剧增
                                        </a>
                                    </p>
                                    <p>
                                        <a title="德隆系前高管操盘 深圳惠程证券投资收益剧增" href="_target">德隆系前高管操盘 深圳惠程证券投资收益剧增 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="方正证券被证监会立案调查 涉嫌信息披露违规" href="_target">方正证券被证监会立案调查 涉嫌信息披露违规 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="工行与泛欧交易所开展战略合作 " href="_target">工行与泛欧交易所开展战略合作 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="理财产品发行量维持平稳" href="_target">理财产品发行量维持平稳 
                                        </a>
                                    </p>
                                    <p>
                                        <a title="红蜻蜓等6只新股周一上市定位分析" href="_target">红蜻蜓等6只新股周一上市定位分析
                                        </a>
                                    </p>
                                    <p>
                                        <a title="赛升药业等3只新股周三申购指南 顶格需83.4万元" href="_target">赛升药业等3只新股周三申购指南 顶格需83.4万元 
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="footer">
        <div id="foot-list">
        </div>
    </div>
   <script type="text/javascript" src="/javascripts/jq.js"></script>
    <script type="text/javascript" src="/javascripts/d3.min.js"></script>
    <script type="text/javascript" src="/javascripts/citi.js"></script>
    <script src="/javascripts/unslider.js"></script>
    <script type="text/javascript">
    $(window).load(function() {
    	   var flag = ${flag};
           $('.nav-item').eq(flag).addClass('active');
        var unslider = $('.banner').unslider({
            delay: 3000,
            fluid: true
        });
        $('#site-banner-r').css({
            height: '240px'
        })
        $('#site-banner-l').css({
            height: '240px'
        })
        $('.unslider-arrow').click(function() {
            var fn = this.className.split(' ')[1];
            unslider.data('unslider')[fn]();
        });
        var lscroll = {
            parent: {
                obj: '#policy-item',
                height: 240
            },
            scroll: {
                height: 360,
                speedUp: 120,
                firstScroll: '#lf',
                secondScroll: '#ls'
            }

        };

        var rscroll = {
            parent: {
                obj: '#market-item',
                height: 240
            },
            scroll: {
                height: 360,
                speedUp: 120,
                firstScroll: '#rf',
                secondScroll: '#rs'
            }
        }

        citi.scrollUp(lscroll);
        citi.scrollUp(rscroll);
     
    })
    </script>
</body>

</html>
    