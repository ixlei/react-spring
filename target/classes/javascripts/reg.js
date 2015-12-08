// JavaScript Document

var reg = (function(citi) {
	var status = [];

	var flag = [];

	$('.reg-input').each(function() {
		flag.push(false);
		status.push({
			obj : '#' + this.style.id,
			success : false
		});
	});

	return {
		focus : function() {

			if (document.addEventListener) {
				imd.getElement('#reg').addEventListener(
						'focus',
						function(e) {
							var id = '';
							id = '#' + e.target.id;

							if (e.target.name != 'auth'
									&& e.target.name != 'iagree') {
								$(id).next().removeClass(
										'icon-error icon-success').addClass(
										'icon-tips');
							}
							
							if (e.target.name == 'email') {
								$(id).next().html('请输入你的邮箱');
							}
							if (e.target.name == 'password') {
								$(id).next().html('必须包含字母和数字,长度6-12位');
							}

							if (e.target.name == 're-password') {
								$(id).next().html('再次输入密码');
							}

							if (e.target.name == 'auth') {
								$('#check-auth').removeClass(
										'icon-error icon-success')
										.html('输入验证码');
							}
							if (e.target.name == 'username') {
								$(id).next().html('输入用户名');
							}

							if (e.target.name == 'IdCard') {
								$(id).next().html('请输入省份证号');
							}
							
							if(e.target.name == 'companyName') {
								$(id).next().html('输入企业名');
							}
							
							if(e.target.name == 'code') {
								$(id).next().html('输入组织代码');
							}

						}, true);
			} else {
				imd.getElement('#reg').onfocusin = function(e) {
					var id = '';
					id = '#' + e.target.id;

					if (e.target.name != 'auth' && e.target.name != 'iagree') {
						$(id).next().removeClass('icon-error icon-success')
								.addClass('icon-tips');
					}

					if (e.target.name == 'email') {
						$(id).next().html('请输入正确的邮箱');
					}
					if (e.target.name == 'password') {
						$(id).next().html('必须包含字母和数字,长度6-12位');
					}

					if (e.target.name == 're-password') {
						$(id).next().html('再次输入密码');
					}

					if (e.target.name == 'auth') {
						$('#auth').removeClass('icon-error icon-success')
								.addClass('icon-tips').html('输入验证码');
					}
					if (e.target.name == 'username') {
						$(id).next().html('输入用户名')
					}

					if (e.target.name == 'IdCard') {
						$(id).next().html('输入省份证号');
					}
					if(e.target.name == 'companyname') {
						$(id).next().html('输入企业名');
					}
					
					if(e.target.name == 'code') {
						$(id).next().html('输入组织代码');
					}
				}

			}
		},

		blur : function() {
			if (document.addEventListener) {
				imd
						.getElement('#reg')
						.addEventListener(
								'blur',
								function(e) {
									var id = '#' + e.target.id, url = null, success, error, eval, e, i, Xhr = {
										type : 'GET',
										url : '',
										data : null,
										timeOut : 3000,
										receiveType : 'json',
										async : true,
									};

									if (e.target.name == 'email') {

										eval = $(id).val();
										e = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+/;

										if (eval == '' || !e.test(eval)) {
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
										}
										if (eval == '') {
											return $(id).next().addClass(
													'icon-error')
													.html('邮箱不能为空');
										}
										if (!e.test(eval)) {
											return $(id).next().addClass(
													'icon-error').html('邮箱错误');
										}
										
										var typeList = document.reg.type;
										
										for(var i = 0; i < typeList.length; i++) {
											if(typeList[i].checked) {
												if(typeList[i].value == '投资者') {
													
													url = '/springmvc/customer/echeck';
												} else {
													url = '/springmvc/customer/cecheck';
												}
											}
										}
										

										success = function(text) {
											if (text.check == 'valid') {
												for (i = 0; i < status.length; i++) {
													if (status[i].obj == id) {
														status[i].success = true;
													}
												}
												$(id).next().addClass(
														'icon-success')
														.html('');
											} else {
												for (i = 0; i < status.length; i++) {
													if (status[i].obj == id) {
														status[i].success = false;
													}
												}
												$(id).next().addClass(
														'icon-error').html(
														'此邮箱已被注册');
											}
										};

										error = function() {
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
											$(id).next().addClass('icon-error')
													.html('网络错误，稍后重试');
										};

										$.ajax({
											type : "POST",
											url : url,
											data : {
												"data" : eval
											},
											dataType : "json",
											success : success,
											error : error
										});

										return;
									}

									if (e.target.name == 'password') {
										eval = $(id).val();

										e = /(([a-zA-Z]+[0-9]+)?([0-9]+[a-zA-Z]+)?)+/;

										if (eval == '' || !e.test(eval)
												|| eval.toString().length < 6
												|| eval.toString().length > 12) {
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
										}
										if (eval == '') {
											return $(id).next().addClass(
													'icon-error')
													.html('密码不能为空');
										}
										if (!e.test(eval)) {
											return $(id).next().addClass(
													'icon-error').html(
													'必须包含字母和数字');
										}

										if (eval.toString().length < 6
												|| eval.toString().length > 12) {
											return $(id).next().addClass(
													'icon-error').html(
													'密码必须6-12位');
										}

										for (i = 0; i < status.length; i++) {
											if (status[i].obj == id) {
												status[i].success = true;
											}
										}
										$(id).next().addClass('icon-success')
												.html('');
										return;
									}

									if (e.target.name == 're-password') {
										var passwordVal = $('#password').val(), rePasswordVal = $(
												'#re-password').val();
										if (passwordVal == ''
												|| passwordVal != rePasswordVal) {
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
										}

										if (passwordVal == '') {
											return $(id).next().addClass(
													'icon-error').html('请输入密码');
										}
										if (passwordVal != rePasswordVal) {
											return $(id).next().addClass(
													'icon-error').html(
													'两次密码不一致');
										}
										$(id).next().addClass('icon-success')
												.html('');
										for (i = 0; i < status.length; i++) {
											if (status[i].obj == id) {
												status[i].success = true;
											}
										}
										return;
									}

									if (e.target.name == 'auth') {
										eval = $(id).val();
										if (eval == '') {
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
											return $('#check-auth').addClass(
													'icon-error').html(
													'验证码不能为空');
										}
										var now = new Date();
										url = '/auth/' + now.getTime();
										success = function() {
											if (text.check == 'success') {
												$('#check-auth').addClass(
														'icon-success')
														.html('');
											} else {
												$('#check-auth').addClass(
														'icon-error').html(
														'验证码错误');
											}
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = true;
												}
											}
										};
										error = function() {
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
											$('#check-auth').addClass(
													'icon-error').html(
													'网络错误，稍后重试');
										}

										$.ajax({
											type : "POST",
											url : url,
											data : {
												"data" : eval
											},
											dataType : "json",
											success : success,
											error : error
										});
									}

									if (e.target.name == 'companyName') {
										eval = $(id).val();

										if (eval == '') {
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
											return $(id).next().addClass(
													'icon-error').html(
													'企业名不能为空');
										}

										url = '/springmvc/customer/cnameCheck';

										success = function(text) {
											if (text.check == 'valid') {
												$(id).next().addClass(
														'icon-success')
														.html('');
											} else {
												$(id).next().addClass(
														'icon-error').html(
														'此企业已被注册');
											}
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = true;
												}
											}
										};

										error = function() {
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
											$(id).next().addClass('icon-error')
													.html('网络错误，稍后重试');
										};

										$.ajax({
											type : "POST",
											url : url,
											data : {
												"data" : eval
											},
											dataType : "json",
											success : success,
											error : error
										});

										return;
									}
									
									if (e.target.name == 'IdCard') {

										eval = $(id).val();
										e = /\d+/;

										if (eval == '' || !e.test(eval)
												|| eval.toString().length != 18) {
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
										}

										if (eval == '') {
											return $(id).next().addClass(
													'icon-error').html(
													'身份证号代码不能为空');
										}

										if (!e.test(eval)
												|| eval.toString().length != 18) {
											return $(id).next().addClass(
													'icon-error').html(
													'输入18位身份证号')
										}

										url = '/springmvc/customer/IdCardCheck';

										success = function(text) {
											if (text.check == 'valid') {
												$(id).next().addClass(
														'icon-success')
														.html('');
											} else {
												$(id).next().addClass(
														'icon-error').html(
														'已被注册');
											}
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = true;
												}
											}
										};
										error = function() {
											$(id).next().addClass('icon-error')
													.html('网络错误，稍后重试');
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
										}

										$.ajax({
											type : "POST",
											url : url,
											data : {
												"data" : eval
											},
											dataType : "json",
											success : success,
											error : error
										});

									}
									
									if (e.target.name == 'code') {

										eval = $(id).val();
										e = /\d+/;

										if (eval == '' || !e.test(eval)
												|| eval.toString().length != 15) {
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
										}

										if (eval == '') {
											return $(id).next().addClass('icon-error').html(
													'组织机构代码不能为空');
										}

										if (!e.test(eval) || eval.toString().length != 15) {
											return $(id).next().addClass('icon-error').html(
													'输入10位组织机构代码')
										}

										url = '/springmvc/customer/cCodec';

										success = function(text) {
											if (text.check == 'valid') {
												$(id).next().addClass('icon-success').html('');
											} else {
												$(id).next().addClass('icon-error')
														.html('已被注册');
											}
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = true;
												}
											}
										};
										error = function() {
											$(id).next().addClass('icon-error').html(
													'网络错误，稍后重试');
											for (i = 0; i < status.length; i++) {
												if (status[i].obj == id) {
													status[i].success = false;
												}
											}
										}

										$.ajax({
											type : "POST",
											url : url,
											data : {
												"data" : eval
											},
											dataType : "json",
											success : success,
											error : error
										});

									}

								}, true);
			} else {
				imd.getElement('#reg').onfocusout = function(e) {
					var id = '#' + e.target.id, url = null, success, error, eval, e, i, Xhr = {
						type : 'GET',
						url : '',
						data : null,
						timeOut : 3000,
						receiveType : 'json',
						async : true,
					};

					if (e.target.name == 'username') {

						eval = $(id).val();
						e = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+/;

						if (eval == '' || !e.test(eval)) {
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
						}
						if (eval == '') {
							return $(id).next().addClass('icon-error').html(
									'邮箱不能为空');
						}
						if (!e.test(eval)) {
							return $(id).next().addClass('icon-error').html(
									'邮箱错误');
						}

						url = '/echeck';

						success = function(text) {
							if (text.check == 'success') {
								for (i = 0; i < status.length; i++) {
									if (status[i].obj == id) {
										status[i].success = true;
									}
								}
								$(id).next().addClass('icon-success').html('');
							} else {
								for (i = 0; i < status.length; i++) {
									if (status[i].obj == id) {
										status[i].success = false;
									}
								}
								$(id).next().addClass('icon-error').html(
										'此邮箱已被注册');
							}
						};

						error = function() {
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
							$(id).next().addClass('icon-error').html(
									'网络错误，稍后重试');
						};

						$.ajax({
							type : "POST",
							url : url,
							data : {
								"data" : eval
							},
							dataType : "json",
							success : success,
							error : error
						});
						return;
					}

					if (e.target.name == 'password') {
						eval = $(id).val();
						e = /([0-9]+[a-zA-Z]+)+/;
						if (eval == '' || !e.test(eval)
								|| eval.toString().length < 6
								|| eval.toString().length > 12) {
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
						}
						if (eval == '') {
							return $(id).next().addClass('icon-error').html(
									'密码不能为空');
						}
						if (!e.test(eval)) {
							return $(id).next().addClass('icon-error').html(
									'必须包含字母和数字');
						}

						if (eval.toString().length < 6
								|| eval.toString().length > 12) {
							return $(id).next().addClass('icon-error').html(
									'密码必须6-12位');
						}

						for (i = 0; i < status.length; i++) {
							if (status[i].obj == id) {
								status[i].success = true;
							}
						}
						$(id).next().addClass('icon-success').html('');
						return;
					}

					if (e.target.name == 're-password') {
						var passwordVal = $('#password').val(), rePasswordVal = $(
								'#re-password').val();
						if (passwordVal == '' || passwordVal != rePasswordVal) {
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
						}

						if (passwordVal == '') {
							return $(id).next().addClass('icon-error').html(
									'请输入密码');
						}
						if (passwordVal != rePasswordVal) {
							return $(id).next().addClass('icon-error').html(
									'两次密码不一致');
						}
						$(id).next().addClass('icon-success').html('');
						for (i = 0; i < status.length; i++) {
							if (status[i].obj == id) {
								status[i].success = true;
							}
						}
						return;
					}

					if (e.target.name == 'auth') {
						eval = $(id).val();
						if (eval == '') {
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
							return $(id).next().addClass('icon-error').html(
									'验证码不能为空');
						}
						var now = new Date();
						url = '/auth/' + now.getTime();
						success = function() {
							if (text.check == 'success') {
								$(id).next().addClass('icon-success').html('');
							} else {
								$(id).next().addClass('icon-error').html(
										'验证码错误');
							}
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = true;
								}
							}
						};
						error = function() {
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
							$(id).next().addClass('icon-error').html(
									'网络错误，稍后重试');
						}

						$.ajax({
							type : "POST",
							url : url,
							data : {
								"data" : eval
							},
							dataType : "json",
							success : success,
							error : error
						});
					}

					if (e.target.name == 'username') {
						eval = $(id).val();

						if (eval == '') {
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
							return $(id).next().addClass('icon-error').html(
									'企业名不能为空');
						}

						url = '/namecheck';

						success = function(text) {
							if (text.check == 'success') {
								$(id).next().addClass('icon-success').html('');
							} else {
								$(id).next().addClass('icon-error').html(
										'此企业已被注册');
							}
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = true;
								}
							}
						};

						error = function() {
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
							$(id).next().addClass('icon-error').html(
									'网络错误，稍后重试');
						};

						$.ajax({
							type : "POST",
							url : url,
							data : {
								"data" : eval
							},
							dataType : "json",
							success : success,
							error : error
						});

						return;
					}

					if (e.target.name == 'IdCard') {

						eval = $(id).val();
						e = /\d+/;

						if (eval == '' || !e.test(eval)
								|| eval.toString().length != 15) {
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
						}

						if (eval == '') {
							return $(id).next().addClass('icon-error').html(
									'身份证号不能为空');
						}

						if (!e.test(eval) || eval.toString().length != 15) {
							return $(id).next().addClass('icon-error').html(
									'输入18位身份证号')
						}

						url = '/codecheck';

						success = function(text) {
							if (text.check == 'success') {
								$(id).next().addClass('icon-success').html('');
							} else {
								$(id).next().addClass('icon-error')
										.html('已被注册');
							}
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = true;
								}
							}
						};
						error = function() {
							$(id).next().addClass('icon-error').html(
									'网络错误，稍后重试');
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
						}

						$.ajax({
							type : "POST",
							url : url,
							data : {
								"data" : eval
							},
							dataType : "json",
							success : success,
							error : error
						});

					}
					
					if (e.target.name == 'code') {

						eval = $(id).val();
						e = /\d+/;

						if (eval == '' || !e.test(eval)
								|| eval.toString().length != 15) {
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
						}

						if (eval == '') {
							return $(id).next().addClass('icon-error').html(
									'组织机构代码不能为空');
						}

						if (!e.test(eval) || eval.toString().length != 15) {
							return $(id).next().addClass('icon-error').html(
									'输入10位组织机构代码')
						}

						url = '/cCodec';

						success = function(text) {
							if (text.check == 'success') {
								$(id).next().addClass('icon-success').html('');
							} else {
								$(id).next().addClass('icon-error')
										.html('已被注册');
							}
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = true;
								}
							}
						};
						error = function() {
							$(id).next().addClass('icon-error').html(
									'网络错误，稍后重试');
							for (i = 0; i < status.length; i++) {
								if (status[i].obj == id) {
									status[i].success = false;
								}
							}
						}

						$.ajax({
							type : "POST",
							url : url,
							data : {
								"data" : eval
							},
							dataType : "json",
							success : success,
							error : error
						});

					}
				}
			}
		},
		isubmit : function() {
			$('#form')
					.submit(
							function(e) {
								if ($('#agree').attr('checked') == undefined) {
									e.preventDefault();
								}
								for (var i = 0; i < status.length; i++) {
									if (!status[i].success) {
										break;
									}

									if (!(i == status.length)) {

										var checkVal = $(status[i].obj).val(), text = '';

										if (checkVal == '') {
											if (status[i].obj == '#email') {
												text += '邮箱不能为空';
											} else if (status[i].obj == '#password') {
												text += '密码不能为空';
											} else if (status[i].obj === '#re-password') {
												text += '再次确认密码';
											} else if (status[i].obj == '#auth') {
												text += '验证码不能为空';
											} else if (status[i].obj == 'name') {
												text += '企业名不能为空';
											} else if (status[i].obj == 'code') {
												text += '代码不能为空';
											}

										} else {
											if (status[i].obj == '#email') {
												text += '邮箱错误';
											} else if (status[i].obj == '#password') {
												text += '密码错误';
											} else if (status[i].obj === '#re-password') {
												text += '再次密码不一致';
											} else if (status[i].obj == '#auth') {
												text += '验证码错误';
											} else if (status[i].obj == 'name') {
												text += '该企业名已被注册';
											} else if (status[i].obj == 'code') {
												text += '代码错误';
											}

											$(status[i].obj).next().addClass(
													'icon-error').html(text);
										}

										e.preventDefault();
									}

								}
							});
		},
		refresh : function() {
			$('refresh').click(
					function(e) {
						$.ajax({
							type : "GET",
							url : url,
							dataType : "json",
							success : function(text) {
								$('#auth-image').remove();
								var html = '<img src=' + '"'
								text.check + '"' + '>'
								$('#auth-list').append(html);
							},
							error : function(xhhr) {
								$('#check-auth').addClass('icon-error').html(
										'网络错误，稍后重试')
							}
						});
					})
		},
		regChoose: function() {
			var form = document.reg;
			form.onclick = function(e) {
				if(e.target.name == 'type') {
					var investor = document.getElementsByClassName('investor');
					var company = document.getElementsByClassName('company');
					if(e.target.value == '投资者') {
						for(var i = 0; i<investor.length; i++) {
							investor[i].className = 'investor';
							company[i].className = 'company none';
						}
					} else {
						for(var i = 0; i<investor.length; i++) {
							investor[i].className = 'investor none';
							company[i].className = 'company';
						}
					}
				}
				
			}
		}
	};

})();

$(document).ready(function() {
	reg.focus();
	reg.blur();
	reg.regChoose();

})
