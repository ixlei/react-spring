<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE HTML >
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="/stylesheets/business-header.css" />
	<link rel="stylesheet" type="text/css" href="/stylesheets/service-chat-reservation.css" />
    <title>预约</title>
</head>

<body marginheight=0 marginwidth=0 topmargin=0 rightmargin=0 leftmargin=0>
	<jsp:include page="investor-header.jsp"></jsp:include>
    <div class="wrap">
        <p class="title" id="to" data-to="test">您当前预约的是：渤海黑山集团公司</p>
        <p class="select_time">请选择时间：</p>
        <form action="/springmvc/investor/appointment" method="POST" name="form">
            <table>
                <tr>
                    <td align=left id="calOne" valign=top>
                        loading calendar one...
                    </td>
                </tr>
                <tr>
                    <td>
                        <button class="time_button first_but">一周之内</button>
                        <button class="time_button">一个月内</button>
                        <button class="time_button">三个月内</button>
                        <button class="time_button">半年内</button>
                        <button class="time_button">一年</button>
                        <button class="time_button">中秋</button>
                        <button class="time_button">国庆</button>
                    </td>
                </tr>
            </table>
            <p class="notice" >
                您的姓名:
            </p>
            <input type="text" name="name" />
            <p class="notice">
                您的联系方式:
            </p>
            <input type="text" name="phoneNumber" />
            <input class="reservation" type="button" value="确认预约" id="btn">
        </form>
    </div>
    <script  type="text/javascript" src="/javascripts/imd.js"></script>
    <script  type="text/javascript" src="/javascripts/jq.js"></script>
    <script  type="text/javascript" src="/javascripts/jquery.color.js"></script>
    <script  type="text/javascript" src="/javascripts/jquery.animate.clip.js"></script>
    <script  type="text/javascript" src="/javascripts/jCal.js"></script>
    
    
    <script>
    $(document).ready(function() {
        $('#calOne').jCal({
            day: new Date(),
            days: 1,
            showMonths: 2,
            monthSelect: true,
            drawBack: function() {
                return false;
            },
            dCheck: function(day) {
                if (day.getTime() == (new Date('8/7/2008')).getTime())
                    return 'invday';
                else if (day.getDate() != 3)
                    return 'day';
                else
                    return 'day';
            },
            callback: function(day, days) {
                $('#calOneDays').val(days);
                $(this._target).find('.dInfo').remove();
                var dCursor = new Date(day.getTime());
                for (var di = 0; di < days; di++) {
                    var currDay = $(this._target).find('[id*=d_' + (dCursor.getMonth() + 1) + '_' + dCursor.getDate() + '_' + dCursor.getFullYear() + ']');
                    if (currDay.length) currDay.append('<div class="dInfo"><span style="color:#ccc">$</span>1231</div>');
                    dCursor.setDate(dCursor.getDate() + 1);
                }
                // if calling the function on already selected day(s)
                if (typeof $(this._target).data('day') == 'object' &&
                    $(this._target).data('day').getTime() == day.getTime() &&
                    $(this._target).data('days') == days) {
                    $('#calOneResult').append('<div style="clear:both; font-size:7pt;">' + days + ' days starting ' +
                        (day.getMonth() + 1) + '/' + day.getDate() + '/' + day.getFullYear() + ' RECLICKED</div>');
                } else {
                    $('#calOneResult').append('<div style="clear:both; font-size:7pt;">' + days + ' days starting ' +
                        (day.getMonth() + 1) + '/' + day.getDate() + '/' + day.getFullYear() + '</div>');
                }
                return true;
            }
        });
        
        var app = (function() {
            var time, to, data;

            return {
                resavationTime: function() {
                    $('.jCalMo').click(function(e) {
                        if (e.target.className == 'day selectedDay') {
                            var id = e.target.id;
                            var timeArr = id.split('_');
                            time = timeArr[3] + '-' + timeArr[2] + '-' + timeArr[1];
                        }
                    });
                },

                _to: function() {
                    to = $('#to').data('to');
                },

                getTime: function() {
                    return time;
                },

                getTo: function() {
                	this._to();
                    return to;
                },

                formData: function() {
                    var form = document.forms.form;
                    data = new FormData(form);
                    data.append('to', this.getTo());
                    data.append('resavationTime', this.getTime());
                },

                getData: function() {
                	this.formData();
                    return data;
                },

                postApp: function() {
                    var self = this;
                    $('#btn').click(function(e) {
                        imd.ajax({
                            type: 'POST',
                            url: '/springmvc/investor/appointment',
                            receiveType: 'json',
                            async: true,
                            data: self.getData(),
                            success: function(res) {
                                alert(res.res);
                            },
                            error: function(e) {
                                alert(e);
                            }
                        });
                    });

                }
            };
        })();

        app.resavationTime();
        app.postApp();
        
    });
    
    </script>
</body>

</html>
    