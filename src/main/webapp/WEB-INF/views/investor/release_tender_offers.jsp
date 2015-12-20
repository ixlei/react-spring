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
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/release_tender_offers.css">
    <title>股权发布</title>
</head>
<body>
<jsp:include page="investor-header.jsp"></jsp:include>
<div id="main_body_m">
    <div id="swap">
        <div id="list">
            <div id="list-title">
                <span>意向发布</span>
            </div>
            <jsp:include page="release-debt-left-nav.jsp"></jsp:include>

        </div>

        <div class="main_body">
            <div id="main_first">
                <div class="body_title">
                    基本信息
                </div>
                <hr >
                <div class="first">
                    <p >
                        姓名：${username }<br/>
                        所在地区：${companyAddress }<br/>
                        产品类型：股权投资<br/>
                    </p>
                </div>
                <div class="first">
                    <p >
                        投资地区：${investorAddress }<br/>
                        资金主体：${legalRepresentative }<br/>
                        投资行业：${investFiled }<br/>
                    </p>
                </div>
               <div class="input_text">
	                 <form class="input_form" action="/springmvc/investor/releaseTender" method="post" name="form">
	                     <label>投资金额：</label>
	                     <input class="input" type="text" name="investmentMin" />
	                     <label>-</label>
	                     <input class="input" type="text" name="investmentMax" />
	                     <label>万</label>
	                     <br/>
	                     <label>投资年限：</label>
	                     <input class="input" type="text" name="investmentTimeOut" />
	                     <label> &nbsp;年 </label>
	                     <br/>
	                     <div class="main_first">
	                         <div class="body_title">
	                             更多信息
	                         </div>
	                         <hr>
	                         <div class="input_text">
	                             <div class="input_form">
	                                 <label>参股比例:</label>
	                                 <input class="input" type="text" name="investmentProportionMin" />
	                                 <label>-</label>
	                                 <input class="input" type="text" name="investmentProportionMax" />
	                                 <label>&nbsp;%</label>
	                             </div>
	                             <div>
	                                 <label>投资阶段:</label>
	                                 <select name="investmentStage">
	                                     <option value="看书">看书</option>
	                                     <option value="旅游" >种子</option>
	                                     <option value="运动">运动</option>
	                                     <option value="购物">购物</option>
	                                 </select>
	                             </div>
	                             <div class="input_form">
	                                 <label>要求提供文件:</label>
	                                 <select name="fileProvideRequest">
	                                     <option value="是">是</option>
	                                     <option value="否">否</option>
	                                 </select>
	                                 <br/>
	                                 <div class="input_textarea"> 投资要求概述: </div>
	                                 <textarea rows="7" cols="60" name="investmentRequest"></textarea>
	                             </div>
	                         </div>
	                     </div>
	                     <div id="button">
	                         <input type="button" value="发布" id="btn" />
	                     </div>
	                 </form>
                    </div>
                </div>
            </div>
        </div>
    </div>



<div id="footer">
</div>
<script type="text/javascript" src="/javascripts/imd.js"></script>
<script type="text/javascript">
imd.initDocReady(function() {
	  var flag = ${flag};
	  var navItemList = document.getElementsByClassName('nav-item');
	  navItemList[flag].className = navItemList[flag].className + ' active';
	  
	 
	  
	imd.Event('#btn').on('click', function(e) {
		 var form = document.forms.form;
		 var data = new FormData(form);
		 imd.ajax({
			  url:'/springmvc/investor/releaseTender',
			  receiveType: 'json',
			  type:'POST',
			  async: true,
			  success: function(res) {
				  alert(res.res);
			  },
			  data: data,
			  error: function(res) {
				  alert('网络错误，稍后再试');
			  }
		  });
	  });
  });
</script>
</body>
</html>