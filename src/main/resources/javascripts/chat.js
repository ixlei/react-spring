// JavaScript Document

var chat = function() {

    var ichatConf = {
        wait: 2000,
        uid: null,
        newRoster: [],
        chatList: [],
        currentTo: null
    };


    return {
       
        upAnimation: function() {
            var flag = 1;
            $('#show-hidden').click(function() {
                if (flag == 1) {
                    $('#to-list').fadeOut();
                    $('#show-hidden a').html('显示业务洽谈信息')
                    flag = 0;
                } else {
                    $('#to-list').fadeIn();
                    flag = 1;
                    $('#show-hidden a').html('隐藏业务洽谈信息')
                }
            })
        },
        addCurrent: function() {
            $('#to-list').click(function(e) {
                var form = e.target.dataset.form,
                    nickname = e.target.dataset.nickname,
                    html = '',
                    liLength = 0,
                    info = {
                		id: form,
                		nickname: nickname
                };

                if (ichatConf.currentTo != null) {
                    liLength = $('#list-show li').length;
                }

                html = '<li class="newcoming" data-index= ' + '"' + liLength + '"' +
                    'data-form=' + '"' + form + '"' + '>' +
                    '<span class="tips">' +
                    '<a href="javascript:void(0)" title="" data-form=' + '"' + form + '"' + 'data-index=' + '"' + liLength + '"' + '>' + nickname + '</a>' +
                    '</span>' +
                    '<span data-form=' + '"' + form + '"' + 'class="close icon-close"' + 'data-index=' + '"' + liLength + '"' + '></span>' +
                    '</li>';
                if (liLength != 0) {
                    $('#list-show li').eq(ichatConf.currentTo.eq).removeClass('newcoming');
                }
                $('#list-show').append(html);

                ichatConf.chatList.push(info);
                ichatConf.currentTo = {
                    info: info,
                    eq: liLength
                }

            });
        },
        
        getCurrentChat: function() {
        	return ichatConf.currentTo.info;
        },
        
        replaceCurrent: function() {

            $('#to').click(function(e) {
                var index,
                    form;
                if (e.target.tagName == 'A' || e.target.tagName == 'LI') {
                    index = e.target.dataset.index;
                    form = e.target.dataset.form;
                    $('#list-show li').eq(ichatConf.currentTo.eq).removeClass('newcoming');
                    $('#list-show li').eq(index).addClass('newcoming');
                    ichatConf.currentTo = {
                        form: form,
                        eq: index
                    }
                }
            })
        },
        del: function() {
            $('#to').click(function(e) {
                var index,
                    length,
                    form;
                if (e.target.tagName == 'SPAN' && e.target.className.split(" ")[0] == 'close') {
                    index = e.target.dataset.index;
                    length = $('#list-show li').length;

                    if (0 == length - 1) {
                        ichatConf.currentTo = null;
                        $('#list-show li').eq(index).remove();
                        return;
                    }

                    if (length - 1 == index) {
                        if (ichatConf.currentTo.eq == index) {
                            $('#list-show li').eq(index - 1).addClass('newcoming');
                            form = $('#list-show li').eq(index - 1).data('form');
                            ichatConf.currentTo = {
                                form: form,
                                eq: index - 1

                            }
                        }
                        $('#list-show li').eq(index).remove();
                        return;
                    }

                    for (var i = index; i < $('#list-show li').length; i++) {
                        if (i == ichatConf.currentTo.eq) {
                            if (i == index) {
                                $('#list-show li').eq(i + 1).addClass('newcoming');
                                $('#list-show li').eq(index).remove();
                                continue;
                            }
                            if (i == ichatConf.currentTo.eq) {
                                ichatConf.currentTo.eq = ichatConf.currentTo.eq - 1;
                            }
                            $('#list-show li').eq(i).data('index', i - 1);
                            $('#list-show a').eq(i).data('index', i - 1);
                            $('.close').eq(i).data('index', i - 1);
                            $('#list-show li').eq(index).remove();
                        }
                    }

                }
            })
        }
    };
}()

