<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<div id="nav-boder">
	<div id="nav">
		<span id="tab1"
			style="border-style: none solid none none; border-color: lightgray; border-width: 1px;">
			<a href="/springmvc/investor/manage">投资概况</a>
		</span> <span id="tab2"> <a href="/springmvc/investor/stockManage">股权管理</a>
		</span> <span id="tab3"> <a
			href="/springmvc/investor/stockRightManage">债权管理</a>
		</span> <span id="search"> <label for="search-content">搜索:</label> <input
			type="text" id="search-content"> <input type="button"
			id="search-button">
		</span>
	</div>
	<div id="selected1">投资概况</div>
</div>
<div id="filter">
	<div>筛选条件</div>
	<div>
		<form>
			<span>发布时间：</span> <input id='one-month' type="radio"
				name="radio-group" checked="checked" /> <label for="one-month">近一个月</label>
			<input id='three-month' type="radio" name="radio-group" /> <label
				for="three-month">近三个月</label> <input id='six-month' type="radio"
				name="radio-group" /> <label for="six-month">近六个月</label> <input
				id='one-year' type="radio" name="radio-group" /> <label
				for="one-year">近一年</label> <input id='two-year' type="radio"
				name="radio-group" /> <label for="two-year">近两年</label>
		</form>
	</div>
</div>