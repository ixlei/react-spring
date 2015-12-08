<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="html/text;charset=utf-8"/>
    <link href="/stylesheets/business-header.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/customer-footer.css" rel="stylesheet" type="text/css">
    <link href="/stylesheets/data_management-edit.css" rel="stylesheet" type="text/css">
    <title>编辑</title>
</head>

<body>
    <jsp:include page="business-header.jsp"></jsp:include>
    <div id="main">
        <div id="title">
            资 料 管 理
        </div>
        <div class="subtitle">
            基本内容
            <div id="back">
                <a href="/springmvc/company/isource">返回上一层</a>
            </div>
        </div>
        <hr/>
        <div class="content">
            <div class="box1">
                <p>
                    公司名称：深圳诚勒达电力建设有限公司
                    <br/> 公司类型：有限责任公司
                    <br/> 所属行业：电力建设
                    <br/> 咨询电话：
                    <input id="tel">
                    <br/> 主营业务：电力建设
                    <br/> 盈利模式：
                    <select>
                        <option value="1">关系服务</option>
                        <option value="2">产品标准</option>
                        <option value="3">客户解决方案</option>
                        <option value="4">个性挖掘</option>
                        <option value="5">速度领先</option>
                        <option value="6">数据处理</option>
                        <option value="7">成本占优</option>
                        <option value="8">中转站模式</option>
                        <option value="9">其他</option>
                    </select>
                    <br/>
                </p>
            </div>
            <div class="box2">
                <p>
                    注册资本：1000万
                    <br/> 营业执照注册号：201392080
                    <br/> 法人代表：
                    <input id="legal_person">
                    <br/> 注册时间：2015-01-01
                    <br/> 总部地址：
                    <input id="address">
                    <br/> 当前信用等级：AAA
                    <br/>
                </p>
            </div>
            <div class="box3">
                <div id="img">
                    <img src="/images/dy.jpg">
                </div>
                <div id="modify">
                    <a href="">更改</a>
                </div>
            </div>
        </div>
        <div class="subtitle">
            更多信息
        </div>
        <hr/>
        <div class="content" style="height: 700px;position: relative">
            <div style="height: 152px">
                <div class="box1">
                    <p>
                        公司细分行业：电子科技
                        <br/> 担保方：
                        <input id="danbaofang">
                        <br/> 员工人数：
                        <input id="renshu">
                        <br/> 相关机构：
                        <input id="xiangguanjigou">
                        <br/>
                    </p>
                </div>
                <div class="box2">
                    <p>
                        占地面积：
                        <input id="area">
                        <br/> 分厂：
                        <input id="fenchang">
                        <br/> 子公司：
                        <input id="zigongsi">
                        <br/> 驻外办事机构：
                        <input id="banshijigou">
                        <br/>
                    </p>
                </div>
                <div class="box3" style="height: 152px"></div>
            </div>
            <div class="textarea">
                经营理念：
                <textarea rows="2" cols="80%" id="linian" style="vertical-align: top"></textarea>
                <br/>
            </div>
            <div class="textarea">
                产品服务：
                <textarea rows="2" cols="80%" id="fuwu" style="vertical-align: top"></textarea>
                <br/>
            </div>
            <div class="textarea">
                行业概况：
                <textarea rows="2" cols="80%" id="gaikuang" style="vertical-align: top"></textarea>
                <br/>
            </div>
            <div class="textarea">
                发展战略：
                <textarea rows="2" cols="80%" id="zhanlue" style="vertical-align: top"></textarea>
                <br/>
            </div>
            <div class="textarea">
                团队描述：
                <textarea rows="2" cols="80%" id="miaoshu" style="vertical-align: top"></textarea>
                <br/>
            </div>
            <div class="box1">
                <p>优势与专长：</p>
                <div class="subbox">
                    技术优势：
                    <input id="jishuyoushi" class="box-input">
                    <br/> 产品优势：
                    <input id="chanpinyoushi" class="box-input">
                    <br/> 市场优势：
                    <input id="shichangyoushi" class="box-input">
                    <br/>
                </div>
                <div id="other">
                    <p>发展情况：<a href="javascript:void(0);" id="add">点击添加</a></p>
                    <div id="layer">
                        <div id="nav-title">
                            <span>x</span>
                        </div>
                        <div id="form-list">
                            <div id="list-tips">
                                <span>请填写公司上一季度的财务数据(单位：万元)</span>
                            </div>
                            <div class="layer-form">
                                <label for="">资产总额：</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">负债总额：</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">平均资产总额：</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">所有者权益总额：</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">流动资产：</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">流动负债：</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">销售收入:</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">当期销售净收入:</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">营业成本：</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">当期现售收入:</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">主营业务收入净额:</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">初期应收帐款余额:</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">期末应收帐款余额:</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form">
                                <label for="">利润额:</label>
                                <input type="text" name="" />
                            </div>
                            <div class="layer-form" id="file-upload">
                                <label for="">上传财务报告:</label>
                                <input type="file" name="" />
                                <span id="btn-file">上传</span>
                            </div>
                            <div id="sure" class="layer-form">
                                <span><a href="javascript:void(0);">确定</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="submit">
                <p><a href="">保存</a></p>
            </div>
        </div>
    </div>
    <div id="footer">
        <div id="foot-list">
        </div>
    </div>
    <script type="text/javascript">
    window.onload = function() {
        var nav_title = document.getElementById('nav-title');
        var sure = document.getElementById('sure');
        var layer = document.getElementById('layer');
        var add = document.getElementById('add');
        nav_title.onclick = function(e) {
            layer.style.display = 'none';
        }

        sure.onclick = function(e) {
            layer.style.display = 'none';
        }

        add.onclick = function(e) {
            layer.style.display = 'block';
        }
    }
    </script>
</body>

</html>
    