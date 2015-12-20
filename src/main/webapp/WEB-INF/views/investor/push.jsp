<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/push.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
    <title>push</title>
</head>

<body>
    <jsp:include page="investor-header.jsp"></jsp:include>
    <div id="main">
        <div id="content">
            <div id="push-chart">
                <div class="user-info">
                    <div class="user-info-photo">
                        <img src="/images/IMG_2743-1c.jpg">
                        <p>传统型投资者</p>
                    </div>
                    <div class="user-modify">
                        <span class="mod-btn">
                            <a href="javascript:void(0)">修正>></a>
                        </span>
                        <div class="layer">
                            <form>
                                <select>
                                    <option value="1">
                                        传统型
                                    </option>
                                    <option value="1">
                                        新兴型
                                    </option>
                                    <option value="1">
                                        热点型
                                    </option>
                                    <option value="1">
                                        前瞻型
                                    </option>
                                    <option value="1">
                                        稳健性型
                                    </option>
                                </select>
                                <input type="button" value="确定">
                            </form>
                        </div>
                    </div>
                </div>
                <div id="chart-nav">
                    <div class="chart-list">
                        <p class="chart-list-title">投资风险类偏好</p>
                        <div class="chart">
                            <canvas width="200" height="200" class="can-chart"></canvas>
                            <div></div>
                            <div class="list-tips">
                                <i class="trans"></i>
                                <div class="layer-tips">
                                    <ul>
                                        <li>
                                            <span class="tips-list-title">信用风险:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">流动性风险:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">市场风险:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">道德风险:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">历史相关投资:</span>
                                            <span class="tips-his">深圳诚勒达电力建设工程有限公司增信私募债</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="modify-nav">
                            <span class="mod-nav-tips">
                                <a href="javascript:void(0);">修正>></a>
                            </span>
                            <div class="modify">
                                <form>
                                    <ul>
                                        <li>
                                            <label class="mod-list"> 信用风险:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="mod-list">流动性风险:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="mod-list"> 市场风险:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="mod-list"> 道德风险:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <input type="button" value="确定">
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="chart-list">
                        <p class="chart-list-title">投资回报类偏好</p>
                        <div class="chart">
                            <canvas width="200" height="200" class="can-chart"></canvas>
                            <div></div>
                            <div class="list-tips">
                                <i class="trans"></i>
                                <div class="layer-tips">
                                    <ul>
                                        <li>
                                            <span class="tips-list-title">收益情况:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">投资金额:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">投资门槛:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">投资推出方式:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">历史相关投资:</span>
                                            <span class="tips-his">深圳诚勒达电力建设工程有限公司增信私募债</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="modify-nav">
                            <span class="mod-nav-tips">
                                <a href="javascript:void(0);">修正>></a>
                            </span>
                            <div class="modify return">
                                <form>
                                    <ul>
                                        <li>
                                            <label class="mod-list">收益情况:</label>
                                            <input type="text">-
                                            <input type="text">
                                        </li>
                                        <li>
                                            <label class="mod-list">投资退出年限:</label>
                                            <input type="text">-
                                            <input type="text">
                                        </li>
                                        <li>
                                            <label class="mod-list">收益率/持股比:</label>
                                            <input type="text">-
                                            <input type="text">
                                        </li>
                                        <li>
                                            <label class="mod-list">投资门槛:</label>
                                            <input type="text">-
                                            <input type="text">
                                        </li>
                                        <li>
                                            <input type="button" value="确定">
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="chart-list">
                        <p class="chart-list-title">投资成长类偏好</p>
                        <div class="chart">
                            <canvas width="200" height="200" class="can-chart"></canvas>
                            <div></div>
                            <div class="list-tips">
                                <i class="trans"></i>
                                <div class="layer-tips">
                                    <ul>
                                        <li>
                                            <span class="tips-list-title">业务质量:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">企业扩展能力:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">企业增长潜能:</span>
                                            <span>5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">市场潜在竞争力:</span>
                                            <span class="tips-res">5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">历史相关投资:</span>
                                            <span class="tips-his">深圳诚勒达电力建设工程有限公司增信私募债</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="modify-nav">
                            <span class="mod-nav-tips">
                                <a href="javascript:void(0);">修正>></a>
                            </span>
                            <div class="modify">
                                <form>
                                    <ul>
                                        <li>
                                            <label class="mod-list">业务质量:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="mod-list">业务扩展能力:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="mod-list">企业增产潜能:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="mod-list">市场潜在竞争力:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <input type="button" value="确定">
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="chart-list">
                        <p class="chart-list-title">投资行业类偏好</p>
                        <div class="chart">
                            <canvas width="200" height="200" class="can-chart"></canvas>
                            <div></div>
                            <div class="list-tips">
                                <i class="trans"></i>
                                <div class="layer-tips">
                                    <ul>
                                        <li>
                                            <span class="tips-list-title">技术密集度:</span>
                                            <span>5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">劳动密集度:</span>
                                            <span>5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">知识密集度:</span>
                                            <span>5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">资源密集度:</span>
                                            <span>5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">资本密集度:</span>
                                            <span>5</span>
                                        </li>
                                        <li>
                                            <span class="tips-list-title">历史相关投资:</span>
                                            <span class="tips-his">深圳诚勒达电力建设工程有限公司增信私募债</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="modify-nav">
                            <span class="mod-nav-tips">
                                <a href="javascript:void(0);">修正>></a>
                            </span>
                            <div class="modify">
                                <form>
                                    <ul>
                                        <li>
                                            <label class="mod-list">技术密集度:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="mod-list">劳动密集度:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="mod-list">知识密集度:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="mod-list">资源密集度:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label class="mod-list">资本密集度:</label>
                                            <select name="">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </li>
                                        <li>
                                            <input type="button" value="确定">
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="btn-list">
                <ul>
                    <li>
                        <a href="javascript:void(0);">
                            <span class="btn-list-tips" data-index="0">投资偏好推荐</span>
                        </a>
                        <span class="lr-trans active-list">
                            <i class="left-trans"></i>
                            <i class="right-trans"></i>
                       </span>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <span class="btn-list-tips" data-index="1">风险偏好推荐</span>
                        </a>
                        <span class="lr-trans">
                            <i class="left-trans"></i>
                            <i class="right-trans"></i>
                       </span>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <span class="btn-list-tips" data-index="2">回报偏好推荐</span>
                        </a>
                        <span class="lr-trans">
                            <i class="left-trans"></i>
                            <i class="right-trans"></i>
                       </span>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <span class="btn-list-tips" data-index="3">成长偏好推荐</span>
                        </a>
                        <span class="lr-trans">
                            <i class="left-trans"></i>
                            <i class="right-trans"></i>
                       </span>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <span class="btn-list-tips" data-index="4">行业偏好推荐</span>
                        </a>
                        <span class="lr-trans">
                            <i class="left-trans"></i>
                            <i class="right-trans"></i>
                       </span>
                    </li>
                </ul>
            </div>
            <div id="invest-info">
                <table cellspacing="0">
                    <thead>
                        <tr>
                            <th>产品名称</th>
                            <th>类型</th>
                            <th>地区</th>
                            <th>所属行业</th>
                            <th>金额</th>
                            <th>收益率</th>
                            <th>信用等级</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>大连IT外包增信私募债</td>
                            <td>单一</td>
                            <td>大连市</td>
                            <td>
                                <div class="industry-layer">
                                    <a href="javascript:void(0);">IT外包</a>
                                    <div class="indus">
                                        <i class="info-trans"></i>
                                        <div class="img-layer">
                                            <img src="/images/industry-level.png">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>10000万</td>
                            <td>年收益率</td>
                            <td>
                                <div class="credit-layer">
                                    <a href="javascript:void(0);">AAA</a>
                                    <div class="indus">
                                        <i class="info-trans"></i> 
                                        <div class="img-layer">
                                            <img src="/images/credit-level.jpg">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="comment">
                                    <div class="comment-layer">
                                        <div class="star">
                                            <p>我们推荐的评价您想要的吗?</p>
                                            <ul>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="black-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <form>
                                                <input type="button" value="确定">
                                            </form>
                                        </div>
                                        <i class="star-trans"></i>
                                    </div>
                                    <a href="javascript:void(0);">推荐评价</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>昆明爱旅游有限公司增信私募债</td>
                            <td>单一</td>
                            <td>昆明市</td>
                            <td>
                                <div class="industry-layer">
                                    <a href="javascript:void(0);">旅游</a>
                                    <div class="indus">
                                        <i class="info-trans"></i>
                                        <div class="img-layer">
                                            <img src="/images/industry-level.png">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>12000万</td>
                            <td>年收益率</td>
                            <td>
                                <div class="credit-layer">
                                    <a href="javascript:void(0);">AAA</a>
                                    <div class="indus">
                                        <i class="info-trans"></i> 
                                        <div class="img-layer">
                                            <img src="/images/credit-level.jpg">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="comment">
                                    <div class="comment-layer">
                                        <div class="star">
                                            <p>我们推荐的评价您想要的吗?</p>
                                            <ul>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="black-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <form>
                                                <input type="button" value="确定">
                                            </form>
                                        </div>
                                        <i class="star-trans"></i>
                                    </div>
                                    <a href="javascript:void(0);">推荐评价</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>北京无极限有限公司增信私募债</td>
                            <td>单一</td>
                            <td>北京市</td>
                            <td>
                                <div class="industry-layer">
                                    <a href="javascript:void(0);">交通建设</a>
                                    <div class="indus">
                                        <i class="info-trans"></i>
                                        <div class="img-layer">
                                            <img src="/images/industry-level.png">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>6000万</td>
                            <td>年收益率</td>
                            <td>
                                <div class="credit-layer">
                                    <a href="javascript:void(0);">AAA</a>
                                    <div class="indus">
                                        <i class="info-trans"></i> 
                                        <div class="img-layer">
                                            <img src="/images/credit-level.jpg">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="comment">
                                    <div class="comment-layer">
                                        <div class="star">
                                            <p>我们推荐的评价您想要的吗?</p>
                                            <ul>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="black-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <form>
                                                <input type="button" value="确定">
                                            </form>
                                        </div>
                                        <i class="star-trans"></i>
                                    </div>
                                    <a href="javascript:void(0);">推荐评价</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>深圳诚勒达电力建设工程有限公司增信私募债</td>
                            <td>单一</td>
                            <td>成都市</td>
                            <td>
                                <div class="industry-layer">
                                    <a href="javascript:void(0);">电力建设</a>
                                    <div class="indus">
                                        <i class="info-trans"></i>
                                        <div class="img-layer">
                                            <img src="/images/industry-level.png">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>13000万</td>
                            <td>年收益率</td>
                            <td>
                                <div class="credit-layer">
                                    <a href="javascript:void(0);">AAA</a>
                                    <div class="indus">
                                        <i class="info-trans"></i> 
                                        <div class="img-layer">
                                            <img src="/images/credit-level.jpg">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="comment">
                                    <div class="comment-layer">
                                        <div class="star">
                                            <p>我们推荐的评价您想要的吗?</p>
                                            <ul>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="black-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <form>
                                                <input type="button" value="确定">
                                            </form>
                                        </div>
                                        <i class="star-trans"></i>
                                    </div>
                                    <a href="javascript:void(0);">推荐评价</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>成都宜家有限公司增信私募债</td>
                            <td>单一</td>
                            <td>深圳市</td>
                            <td>
                                <div class="industry-layer">
                                    <a href="javascript:void(0);">建筑</a>
                                    <div class="indus">
                                        <i class="info-trans"></i>
                                        <div class="img-layer">
                                            <img src="/images/industry-level.png">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>120000万</td>
                            <td>年收益率</td>
                            <td>
                                <div class="credit-layer">
                                    <a href="javascript:void(0);">AAA</a>
                                    <div class="indus">
                                        <i class="info-trans"></i>
                                        <div class="img-layer">
                                            <img src="/images/industry-level.png">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="comment">
                                    <div class="comment-layer">
                                        <div class="star">
                                            <p>我们推荐的评价您想要的吗?</p>
                                            <ul>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="light-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                                <li class="black-star">
                                                    <a href="javascript:void(0);">
                                                        <span></span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <form>
                                                <input type="button" value="确定">
                                            </form>
                                        </div>
                                        <i class="star-trans"></i>
                                    </div>
                                    <a href="javascript:void(0);">推荐评价</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="risk">
                <div id="left-table">
                    <table>
                        <thead>
                            <tr>
                                <th>产品名称</th>
                                <th>类型</th>
                                <th>地区</th>
                                <th>所属行业</th>
                                <th>金额</th>
                                <th>收益率</th>
                                <th>信用等级</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>深圳诚勒达电力建设工程有限公司增信私募债</td>
                                <td>单一</td>
                                <td>深圳市</td>
                                <td>
                                    <div class="industry-layer">
                                        <a href="javascript:void(0);">电力建设</a>
                                        <div class="indus">
                                            <i class="info-trans"></i>
                                            <div class="img-layer">
                                                <img src="/images/industry-level.png">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>6000万</td>
                                <td>年收益率</td>
                                <td>
                                    <div class="credit-layer">
                                        <a href="javascript:void(0);">AAA</a>
                                        <div class="indus">
                                            <i class="info-trans"></i> 
                                            <div class="img-layer">
                                                <img src="/images/credit-level.jpg">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="comment">
                                        <div class="comment-layer">
                                            <div class="star">
                                                <p>我们推荐的评价您想要的吗?</p>
                                                <ul>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="black-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <form>
                                                    <input type="button" value="确定">
                                                </form>
                                            </div>
                                            <i class="star-trans"></i>
                                        </div>
                                        <a href="javascript:void(0);">推荐评价</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>深圳诚勒达电力建设工程有限公司增信私募债</td>
                                <td>单一</td>
                                <td>深圳市</td>
                                <td>
                                    <div class="industry-layer">
                                        <a href="javascript:void(0);">电力建设</a>
                                        <div class="indus">
                                            <i class="info-trans"></i>
                                            <div class="img-layer">
                                                <img src="/images/industry-level.png">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>6000万</td>
                                <td>年收益率</td>
                                <td>
                                    <div class="credit-layer">
                                        <a href="javascript:void(0);">AAA</a>
                                        <div class="indus">
                                            <i class="info-trans"></i> 
                                            <div class="img-layer">
                                                <img src="/images/credit-level.jpg">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="comment">
                                        <div class="comment-layer">
                                            <div class="star">
                                                <p>我们推荐的评价您想要的吗?</p>
                                                <ul>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="black-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <form>
                                                    <input type="button" value="确定">
                                                </form>
                                            </div>
                                            <i class="star-trans"></i>
                                        </div>
                                        <a href="javascript:void(0);">推荐评价</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>辽宁通达水利工程有限公司增信私募债</td>
                                <td>单一</td>
                                <td>大连市</td>
                                <td>
                                    <div class="industry-layer">
                                        <a href="javascript:void(0);">电力建设</a>
                                        <div class="indus">
                                            <i class="info-trans"></i>
                                            <div class="img-layer">
                                                <img src="/images/industry-level.png">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>9000万</td>
                                <td>年收益率</td>
                                <td>
                                    <div class="credit-layer">
                                        <a href="javascript:void(0);">AAA</a>
                                        <div class="indus">
                                            <i class="info-trans"></i> 
                                            <div class="img-layer">
                                                <img src="/images/credit-level.jpg">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="comment">
                                        <div class="comment-layer">
                                            <div class="star">
                                                <p>我们推荐的评价您想要的吗?</p>
                                                <ul>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="light-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                    <li class="black-star">
                                                        <a href="javascript:void(0);">
                                                            <span></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <form>
                                                    <input type="button" value="确定">
                                                </form>
                                            </div>
                                            <i class="star-trans"></i>
                                        </div>
                                        <a href="javascript:void(0);">推荐评价</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="r-info-list">
                    <ul>
                        <li>
                            <p class="r-info-list-title">OTC做市指数</p>
                            <div class="r-info-list-img">
                                <img src="/images/otc.png">
                            </div>
                        </li>
                        <li>
                            <p class="r-info-list-title">OTC整体挂牌</p>
                            <div class="r-info-list-img">
                                <img src="/images/otc11.JPG">
                            </div>
                        </li>
                        <li>
                            <p class="r-info-list-title">OTC做市指数</p>
                            <div class="r-info-list-img">
                                <img src="/images/otc22.JPG">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="page-partition">
                <div id="go-nav">
                    <ul>
                        <li>
                            <sapn>共有5页</sapn>
                        </li>
                        <li>
                            <form name="">
                                <label>转到第</label>
                                <input type="text" />
                                <label>页</label>
                                <input type="button" value="确定">
                            </form>
                        </li>
                    </ul>
                </div>
                <div id="page-list">
                    <ul>
                        <li id="last-page">
                            <a href="">
                                <span>
                                    <
                                </span>
                            </a>
                        </li>
                        <li class="page-index">
                            <a href="">
                                <span>
                                    1
                                </span>
                            </a>
                        </li>
                        <li class="page-index">
                            <a href="">
                                <span>
                                    2
                                </span>
                            </a>
                        </li>
                        <li class="page-index">
                            <a href="">
                                <span>
                                   3
                                </span>
                            </a>
                        </li>
                        <li class="page-index">
                            <a href="">
                                <span>
                                    4
                                </span>
                            </a>
                        </li>
                        <li class="page-index">
                            <a href="">
                                <span>
                                    5
                                </span>
                            </a>
                        </li>
                        <li class="next-page">
                            <a href="">
                                <span>></span>
                            </a>
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
    <script type="text/javascript" src="/javascripts/Chart.min.js"></script>
    <script type="text/javascript">
    window.onload = function() {
        var ct = document.getElementsByClassName('can-chart');
        var ctx = [];
        for (var i = 0; i < ct.length; i++) {
            ctx.push(ct[i].getContext('2d'));
        }

        var RadarData1 = {
            labels: ["信用风险", "道德风险", "市场风险", "流动性风险"],
            datasets: [{
                label: "风险偏好",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "#FF9369",
                pointColor: "#BDBDBD",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [15, 4, 10, 8]
            }]
        };

        var RadarData2 = {
            labels: ["收益情况", "投资推出年限", "收益率", "持股比", "投资门槛"],
            datasets: [{
                label: "风险偏好",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "#0D5878",
                pointColor: "#BDBDBD",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [6, 4, 10, 8, 5]
            }]
        };

        var RadarData3 = {
            labels: ["业务质量", "企业扩展能力", "企业增产潜能", "市场潜在竞争力"],
            datasets: [{
                label: "风险偏好",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "#FE5859",
                pointColor: "#BDBDBD",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [20, 60, 10, 5]
            }]
        };

        var RadarData4 = {
            labels: ["技术密集度", "劳动密集度", "知识密集度", "资源密集度", "资本密集度"],
            datasets: [{
                label: "风险偏好",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "#50FFFE",
                pointColor: "#BDBDBD",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [20, 60, 10, 5, 10]
            }]
        }


        new Chart(ctx[0]).Radar(RadarData1);
        new Chart(ctx[1]).Radar(RadarData2);
        new Chart(ctx[2]).Radar(RadarData3);
        new Chart(ctx[3]).Radar(RadarData4);

        var btnList = document.getElementsByClassName('btn-list-tips');
        var lrs = document.getElementsByClassName('lr-trans');
        var info = document.getElementById('invest-info');
        var risk = document.getElementById('risk');
        for (var k = 0; k < btnList.length; k++) {
            btnList[k].onclick = function(e) {
                var data = e.target.dataset.index;
                if (data === '0') {
                    info.style.display = 'flex';
                    risk.style.display = 'none';
                }

                if (data === '1') {
                    risk.style.display = 'flex';
                    info.style.display = 'none';
                }

                for (var j = 0; j < lrs.length; j++) {
                    if (lrs[j].className === 'lr-trans active-list') {
                        lrs[j].className = 'lr-trans';
                        break;
                    }
                }

                lrs[data].className = 'lr-trans active-list';

            }
        }

    }
    </script>
</body>

</html>
    