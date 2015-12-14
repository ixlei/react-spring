// JavaScript Document

var index = function() {

    imd.Event("#back-top").on('click', function() {
        $(document).scrollTop(0);
    });

    $(document).ready(function() {
        $('.dropdown').mouseover(function() {
            $(this).addClass('show');
        }).mouseout(function() {
            $(this).removeClass('show');
        });
    });

    $("#wb-main").css({
        height: $(document).height()
    });

    var doScroll = didScroll();

    $(window).scroll(function() {
        doScroll.setTrue();
    });

    setInterval(function() {
        if (doScroll.get()) {
            scrollCall();
            doScroll.setFalse();
        }
    }, 100);

    var scrollCall = function() {
        if (0 != $(document).scrollTop()) {
            $("#back-top").css({
                display: "inline-block"
            });
        } else {
            $("#back-top").css({
                display: "none"
            });
        }

        if ($(document).height() - $(window).height() - $(document).scrollTop() < 20) {

            var offsetVal = parseInt($('#page').data('offset')) + 1,
                pageIndex = parseInt($('#page').data('num')),
                count = parseInt($('#page').data('count')),
                pageNum = 30,
                size = 10;

            if ((typeof count != 'undefined') && (pageIndex * pageNum + offsetVal * size) < count) {
                imd.ajax({
                    type: 'GET',
                    url: '/pagenext/' + pageIndex + '/' + offsetVal + '/' + size,
                    data: null,
                    timeOut: 3000,
                    receiveType: 'html',
                    async: true,
                    success: function(text) {
                        $('#pageUpdate').before(text);
                        $("#wb-main").css({
                            height: $(document).height()
                        });
                        if (offsetVal == 2) {
                            $('#pageUpdate').remove();
                            return;
                        }
                        $('#page').data('offset', offsetVal.toString())
                    },
                    error: function(xmlhttp) {
                        alert('fuck');
                    }
                });
            }
        }
    };

    var data = formdata();

    $('#fun-area').click(function(e) {
        var value = imd.getElement('#write-area').value;
        if (e.target.id == 'post') {
            if (value != '') {
                if (data) {
                    var xhr = new XMLHttpRequest(),
                        url = '/xhrPost/' + data.getNum() + '/' + value,
                        Data = data.getData();
                    xhr.open("POST", url, true);
                    xhr.responseType = 'json';
                    xhr.onload = function() {
                        if (this.status == 200 || this.status == 304) {
                            if (xhr.response.status == 'success') {
                                window.location.href = '/';
                            }
                        } else {
                            alert('fuck error');
                        }
                    }
                    xhr.send(Data);
                } else {
                    alert('fuck');
                }
            }

            return;
        }
        if (e.target.id == 'image') {
            layer.open({
                type: 1,
                area: ["480px", "320px"],
                title: false,
                shade: 0.5,
                skin: 'layui-layer-molv',
                shift: 1,
                content: $("#layer-image")
            })
        }
    });

    imd.Event(document).on('dragover', function(e) {
        e = e || window.event;
        e.stopPropagation();
        e.preventDefault();
    });

    imd.Event(document).on('drop', function(e) {
        e = e || window.event;
        e.stopPropagation();
        e.preventDefault();
        data.addImage(e.dataTransfer.files);
        showFile(e.dataTransfer.files);
    });
}

imd.initDocReady(index);

var showFile = function(file) {
    for (var i = 0, f; i < file.length; i++) {
        f = file[i];
        var reader = new FileReader();
        reader.readAsDataURL(f);
        imd.Event(reader).on('load', function() {
            $('#layer-image-drop').append('<span><img src=' + "'" + this.result + "'" + "/></span>");
        });
    }
};

var offsetNum = function() {
    var offset = $('#page').data('offset');
    return function() {
        offset++;
        return offset;
    };
};

var didScroll = function() { //函数节流
    var scroll = false;
    return {
        setTrue: function() {
            scroll = true;
        },
        setFalse: function() {
            scroll = false;
        },
        get: function() {
            return scroll;
        }
    };
};

var waterfall = (function() {
    var container,
        minColumnNum,
        columnWidth,
        columnNum,
        columnArray = [],
        columnHeight = [];
    return {
        init: function(_container, _minColumnNum, _columnWidth) {
            container = _container;
            columnNum = _minColumnNum;
            columnWidth = _columnWidth;
            for (var i = 0; i < columnNum; i++) {
                columnArray.push(0);
                columnHeight.push(0);
            }
        },
        insert: function() {

        }
    }

})(jQuery);

var formdata = function() {
    var data = new FormData();
    var fileCount = 0;
    return {
        addImage: function(file) {
            for (var i = 0; i < file.length; i++) {
                data.append('file' + (fileCount + i), file[i]);
            }
            fileCount += file.length;
            return this;
        },
        addWb: function(wb) {
            data.append('wb', wb);
            return this;
        },
        getData: function() {
            return data;
        },
        getNum: function() {
            return fileCount;
        }
    };
};

/*var postEvent=function(_object){
    var object=_object;
    var postHxr={
        type:'GET',
        url:null,
        data:null,
        timeOut:3000,
        receiveType:'html',
        async:true,
        success:function(text){window.location.href='/'},
        error:function(xmlhttp){alert('fucks')}
    }
    function e(type,callback){
       if()
    }

    return e;*/
//}
