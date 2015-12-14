<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-type" content="html/text;charset=utf-8" />
    <title>资料管理</title>
    <link href="/stylesheets/personal-center-information-management.css" type="text/css" rel="stylesheet">
    <link href="/stylesheets/business-header.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/customer-footer.css" rel="stylesheet" type="text/css">
</head>
<body>
<jsp:include page="business-header.jsp"></jsp:include>
<div class="main">
    <div class="container">
        <div id="title">
                <h1>资料管理</h1>
            </div>
        <div id="first">
            <div style="margin: 8px">基本信息</div>
            <hr/>
            <div class="box">
                <div id="first_left">
                        <div class="block">
                            <p>公司名称：深圳诚勒电力建设有限公司&nbsp;<span><a class="noBackground" href="http://www.fujianxinghua.com/">[公司官网]</a></span></p><br/>
                            <p>公司类型：有限责任公司</p><br/>
                            <p>所属行业：电力建设</p><br/>
                            <p>咨询电话：18840838187</p><br/>
                            <p>主营业务：电力建设</p><br/>
                            <p>盈利模式：产品金字塔模式</p><br/>
                            <p>注册资本：1000万</p><br/>
                            <p>营业执照注册号：201392080</p><br/>
                            <p>法人代表：王森淼</p><br/>
                        </div>
                    </div>
                <div id="first_right">
                        <div class="block">
                            <img src="/images/myphoto.png">
                            <p id="button1"><a href="">更换</a></p>
                        </div>
                        <div class="block">
                            <br/><br/>
                            <p>注册时间：2015-01-01</p><br/>
                            <p>总部地址：辽宁省大连市大连理工大学</p><br/>
                            <p>当前信用评级：AAA</p>
                        </div>
                    </div>
            </div>
        </div>
        <div id="second">
            <div style="margin: 8px">更多信息</div>
            <hr/>
            <div class="box">
                <div id="second_top">
                    <div id="top_left">
                        <p>公司细分行业：电子科技</p><br/>
                        <p>担保方：广发证券公司</p><br/>
                        <p>员工人数：400人</p><br/>
                        <p>相关机构：无</p><br/>
                    </div>
                    <div id="top_right">
                        <p>占地面积：100亩</p><br/>
                        <p>分厂：分厂一、分厂二</p><br/>
                        <p>子公司：无</p><br/>
                        <p>驻外办事机构：无</p>
                    </div>
                </div>
                <div class="long_information">经营理念：<br/>公司自成立以来一直专注于电网输电线路在线监测产品的设计、研发、制造与销售。
                </div>
                <div class="long_information">产品服务：<br/>公司主要产品为输电线路覆冰在线监测装置、输电线路微气象区在线监测装置、输电线路态增容在线监测装置。
                </div>
                <div class="long_information">发展战略：<br/>近几年，我国特高压输电技术发展较快，但与之适应的输电线路在线监测技术起步较晚，监测装置和监测系统尚不成熟，输电线路抵御冰雪、大风等自然灾害的能力较弱。输电环节智能化有助于充分利用现有电网资源，大幅度提高输电线路输送能力，降低输电成本；优化输电网络运行条件，充分发挥现有输电线路的效率；提高电力系统稳定水平，促进智能电网的发展和互联；实现状态评估、故障诊断、状态检修和风险预警，实现对线路运行状态的可控、能控和在控。 
                </div>
                <div class="long_information">
                团队描述：<br/>
                    <strong>王森淼</strong>
                    <p>公司创始人，董事长</p>
                    <strong>宁泽涛</strong>
                    <p>负责公司整体运营和管理，副总裁</p>
                </div>
                <div class="long_information">
                优势与专长：<br/>
                <p>
                技术优势：自主创新能力、团队、设备、专利、稳定客户、合作企业
                </p>
                <p>
                产品优势：产品定位、品种、质量保证
                </p>
                <p>市场优势：市场占有情况（海外市场、市场占有率）、合作伙伴、公司规模
                </p>
                </div>
                <div>
                发展情况：
                    公司是国内最早研究输电线路在线监测的专业公司之一，公司最要竞争对手：西安金源、杭州雷鸟、国网富达等。
                </div>
                <div id="button2"><a href="/springmvc/company/isourceEdit">编辑</a></div>
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