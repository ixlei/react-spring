<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>


<div id="nav-boder">
	<div id="nav">
		<span id="tab1"	style="border-style: none solid none none; border-color: lightgray; border-width: 1px;">
			<a href="/springmvc/investor/investSituation">投资概况</a>
		</span>
		<span id="tab2">
			 <a href="/springmvc/investor/stockManage">股权管理</a>
		</span>
		<span id="tab3">
			<a href="/springmvc/investor/stockRightManage">债权管理</a>
		</span> 
		<span id="search">
			<label for="search-content">搜索:</label>
		<input 	type="text" id="search-content">
			<input type="button" id="search-button" value="搜索">
		</span>
	</div>
	<div id="selected1">投资概况</div>
</div>