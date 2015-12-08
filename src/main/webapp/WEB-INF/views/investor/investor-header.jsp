<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<div id="header">
	<div id="header-nav">
		<div id="nav-logo">
           <span>
             <img src="/images/logo-last.png" alt="" id="logo"> 
          </span>
     	</div>
		<div id="nav-list">
			<ul>
				<li><a href="/rs/investor/index" title=""> <span
						class="nav-item">首页</span>
				</a></li>
				<li id="finance"><a href="/rs/investor/investModel" title=""> 
				<span 	class="nav-item">投资板块</span>
				</a>
					<div id="finance-subnav">
						<ul>
							<li>
								<a href="/rs/investor/investModel" title=""> <span>撮合配对</span>
							</a>
							</li>
							<li><a href="/rs/investor/releaseTender" title=""> <span>意向发布</span>
							</a></li>
							<li><a href="/rs/investor/investorChat" title=""> <span>业务洽谈</span>
							</a></li>
							<li><a href="/rs/investor/appliedInvest" title=""> <span>电子签约</span>
							</a></li>
						</ul>
					</div></li>
				<li><a href="/rs/investor/infoCenter" title=""> <span class="nav-item">信息披露</span>
				</a></li>
				<li id="service">
				<a href="/rs/investor/investSituation" title=""> <span
						class="nav-item">资产管理</span>
				</a></li>
			</ul>
		</div>
		<div id="iciti">
			<ul id="i-column">
				<li id="user-photo"><span>
				 <a href="_target" title=""><img src="/images/user.png" alt="" /></a>
					</span>
				</li>
				<li id="go">
				<span id="text">&nbsp;我的账号<img src="/images/back-bottom.png"></span>
					<ul>
						<li><a href="/rs/investor/ifollow" title=""> <span>我关注的</span>
						</a></li>
						<li><a href="/rs/investor/inews" title=""> <span>我的消息</span>
						</a></li>
						<li><a href="/rs/investor/resourceAsset" title=""> <span>资料管理</span>
						</a></li>
						<li><a href="/rs/investor/logout" title=""> <span>退出</span>
						</a></li>
					</ul></li>
			</ul>
		</div>
	</div>
</div>