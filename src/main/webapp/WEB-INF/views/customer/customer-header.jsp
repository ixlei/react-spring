<%@ page language="java" contentType="text/html; chareact-springet=utf-8"
	pageEncoding="utf-8"%>
<%@ page isELIgnored="false" %>
<div id="header">
	
	<div id="header-nav">
    	<div id="nav-logo">
           <span>
             <img src="/images/logo-last.png" alt="" id="logo"> 
          </span>
     	</div>
		<div id="nav-list">
			<ul>
				<li><a href="/react-spring/customer/index" title=""> <span class="nav-item">
							首页 </span>
				</a></li>
				<li><a href="/react-spring/customer/finance" title=""> <span class="nav-item">融资企业</span>
				</a></li>
				<li><a href="/react-spring/customer/invest" title=""> <span class="nav-item">投资中心</span>
				</a></li>
				<li id="service"><a href="/react-spring/customer/service" title=""> <span
						class="nav-item">企业服务</span>
				</a>
					<div id="service-subnav">
						<ul>
							<li><a href="/react-spring/customer/asset" title=""> <span>资产管理</span>
							</a></li>
							<li><a href="/react-spring/customer/assetgo" title=""> <span>电子签约</span>
							</a></li>
							<li><a href="/react-spring/customer/invest" title=""> <span>投/融资</span>
							</a></li>
						</ul>
					</div></li>
			</ul>
		</div>
		<div id="nav-login">
			<ul>
				<li>
				<a href="/react-spring/customer/login" title=""> <span>登陆</span></a>
				
				</li>
				<li><a href="/react-spring/customer/reg" title=""> <span>注册</span>
				</a>
				</li>
			</ul>
		</div>
	</div>
</div>
