<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page isELIgnored="false" %>
<!DOCTYPE html >
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
    <link rel="stylesheet" type="text/css" href="/stylesheets/invest-header.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/invest-chat.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/chat-fonts.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/customer-footer.css">
    <title>业务洽谈</title>
</head>

<body>
    <jsp:include page="investor-header.jsp"></jsp:include>
    <div id="main">
        <div id="content">
            <div id="first-galance">
                <div id="chat-title">
  
                    <div data-uid="${session}" id="title">
                        <span>
	    					<a href="" title="">${username }，欢迎您进行业务洽谈</a>
	    				</span>
                    </div>
                    <div id="show-hidden">
                        <span> 
	    					<a href="javascript:void(0)" title="">隐藏业务洽谈信息</a>
	    				</span>
                    </div>
                </div>
             	
                <div id="to-list">
                    <ul>
                    	
                        <li>
                        	 <c:forEach var="friendList" items="${friendList }">
	                           <span class="to-one">
	            				<span class="name" style=""><c:out value="${friendList.companyName }"></c:out> </span>
	                           <span class="connect-btn">
	            					<a href="javascript:void(0)" data-form="<c:out value="${ friendList.email}"></c:out>" data-nickname="<c:out value="${friendList.companyName }"></c:out>" >联系</a>
	            				</span>
	                           </span>
                             </c:forEach> 
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
              
            </div>
            <div id="chat-area">
                <div id="left-nav">
                    <div id="current-to">
                        <span>当前联系人</span>
                    </div>
                    <div id="current-list">
                        <div id="to">
                            <ul id="list-show">
                              
                            </ul>
                        </div>
                        <div id="historty">
                            <span>
	                    		<a href="/springmvc/investor/historyInquiry" title="">查看历史消息</a>
	                		</span>
                        </div>
                    </div>
                </div>
                <div id="right-nav">
                    <div id="sub-nav">
                        <ul>
                            <li>
                                <span>
                					<a href="/springmvc/investor/resavation" title="">一键预约</a>
            					</span>
                            </li>
                            <li>
                                <span>
                					<a href="/springmvc/investor/modifyContract" title="">查看合同</a>
            					</span>
                            </li>
                            <li>
                                <span id="upload">
                                	<input type="file" name=""/>
                					<a href="javascript:void(0);" title="">上传合同</a>
            					</span>
                            </li>
                        </ul>
                    </div>
                    <div id="ichat">
                        <div class="msg-window">
                            <div class="show-msg" data-form="">
                                <ul id="msg-list">
                                   
                                </ul>
                            </div>
                        </div>
                        <div id="send-msg">
                            <div id="input">
                                <input type="text" id="send" name="msg">
                            </div>
                            <div id="send">
                                <span id="send-btn" class="icon-send-btn">
	                        	</span>
                                <span id="fj" class="icon-fj">

	                        	</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="footer">
        <div id="foot-list">
        </div>
    </div>
    <script type="text/javascript" src="/javascripts/jq.js"></script>
  	<script type="text/javascript" src="/javascripts/chat.js"></script>
    <script type="text/javascript">
	var uid = $('#title').data('uid');
    var wsUrl = "ws://localhost:8090/springmvc/webSocketServer?session=" + uid;
    var webSocket = new WebSocket(wsUrl);
    $(document).ready(function() {
    	chat.upAnimation();
       	chat.addCurrent();
        chat.replaceCurrent();
        chat.del();
    webSocket.onopen = function(e) {
    	webSocket.onmessage = function(e) {
        
    		var html = '<li>' +
    				   '<div class="msg-from">' +
    				   '<span class="uesrname">' + chat.getCurrentChat().nickname + '</span>' +
    				   '</div>' + '<p class="msg">' + e.data + '</p>' +
    				   '</li>';
    		$('#msg-list').append(html);
    	}
    }
    
    var send = document.getElementById('send');
    send.onkeydown = function(e) {
    	if(e.keyCode == 13) {
    		if(e.keyCode == 13) {
        		var uid = chat.getCurrentChat().id;
        		
        		var msg = {
        				uid: uid,
        				data: e.target.value
        		};
        		
        		var html = '<li>' +
				   '<div class="msg-from">' +
				   '<span class="uesrname">我 </span>' +
				   '</div>' + '<p class="msg">' + e.target.value + '</p>' +
				   '</li>';
				$('#msg-list').append(html);
        		webSocket.send(JSON.stringify(msg));
        		e.target.value = '';
        	}
    	}
    }
  
   

});
</script>
    
</body>

</html>
    