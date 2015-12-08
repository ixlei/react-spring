// JavaScript Document
var imd = (function() {
    var isReady = false;
    var xhrPool = [];
    return {
        initDocReady: function(callback, tag) {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", function() {
                    document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                    isReady = true;
                    if (tag != "undefined") {
                        callback(tag);
                    } else {
                        callback();
                    }
                }, false);
            } else if (document.attachEvent) { //ie
                document.attchEvent("onreadystatechange", function() {
                    if (document.readyState == 'complete') {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        isReady = true;
                        if (tag != "undefined") {
                            callback(tag);
                        } else {
                            callback();
                        }
                    }
                });
                if (document.documentElement.doScroll && typeof window.frameElement === "undefined") {
                    (function() {
                        if (isReady) {
                            return;
                        }
                        try {
                            document.documentElement.doScroll("left");
                        } catch (err) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                        isReady = true;
                        if (tag != "undefined") {
                            callback(tag);
                        } else {
                            callback();
                        }
                    })();
                }
            } else {
                if (!isReady) {
                    window.addEventListener("load", function() {
                        isReady = true;
                        if (tag != "undefined") {
                            callback(tag);
                        } else {
                            callback();
                        }
                    }, false);
                }
            }
        },

        ajax: function(__xhr) {
            var xmlHttp = {
                getXhr: function() {
                    for (var i = 0; i < xhrPool.length; i++) {
                        if (xhrPool[i].readyState >= 1) {
                            return xhrPool[i];
                        }
                    }
                    var newXhr = this.createXhr();
                    xhrPool.push(newXhr);
                    return xhrPool[xhrPool.length - 1];
                },
                createXhr: function() {
                    var _xhr;
                    try {
                        _xhr = new XMLHttpRequest();
                    } catch (tryMicrosoft) {
                        try {
                            _xhr = new ActiveXObject("Msxml2.XMLHTTP");
                        } catch (other) {
                            _xhr = new ActiveXObjective("Microsoft.XMLHTTP");
                        }
                    }
                    return _xhr;
                },
                xhrReq: function(xhr) {
                    var _xhr = this.getXhr();
                    var _self = _xhr;
                    var isTimeOut = false;
                    var timeFlag = setTimeout(function() {
                        isTimeOut = true;
                        _xhr.abort();
                        clearTimeout(timeFlag);
                    }, xhr.timeOut || 3000);
                    var res = function() {
                        if (!isTimeOut && (_self.status == 200 || _self.status == 304)) {
                            if (xhr.receiveType) {
                                var recType = xhr.receiveType.toLocaleLowerCase();
                            } else {
                                recType = "html";
                            }
                            if (recType == "html") {
                                xhr.success(_self.responseText);
                            } else if (recType == 'xml') {
                                xhr.success(_self.responseXML);
                            } else {
                                try {
                                    var obj = JSON.parse(_self.responseText);
                                    xhr.success(obj);
                                } catch (err) {
                                    var str = '(' + _self.responseText + ')';
                                    xhr.success(str);
                                }
                            }
                        } else {
                            xhr.error(_self);
                        }
                    };
                    if (xhr.async || xhr.async == "undefined") {
                        _xhr.open(xhr.type, xhr.url, true);
                        _xhr.onreadystatechange = function() {
                            if (_self.readyState == 4) {
                                clearTimeout(timeFlag);
                                res();
                            }
                        };
                        if (xhr.data) {
                        	console.log(xhr.data);
                            _xhr.send(xhr.data);
                        } else {
                            _xhr.send(null);
                        }
                    } else {
                        _xhr.open(xhr.type, url, false);
                        if (xhr.data) {
                            _xhr.send(xhr.data);
                        } else {
                            _xhr.send(null);
                        }
                        res();
                    }
                }
            };
            if (typeof __xhr === 'undefined') {
                return xmlHttp.getXhr();
            }
            xmlHttp.xhrReq(__xhr);
        },
        _getElement: function(tag) {
            var nodeAttribute,
                self = this,
                nodeObject;
            if (typeof tag == 'object') {
                nodeObject = tag;
            } else {
                (function() {
                    nodeAttribute = tag.split(/\s+/);
                })();
                (function() {
                    for (var i = 0; i < nodeAttribute.length; i++) {
                        var obj,
                            re = /(\s)*#./,
                            rep = /(\s)*#/;
                        if (re.test(nodeAttribute[i])) {
                            nodeObject = document.getElementById(nodeAttribute[i].replace(rep, ""));
                            break;
                        }
                        if (re.test(nodeAttribute[i])) {
                            re = /\s*\../;
                            var objClass = [];
                            if (i == 0) {
                                if (document.getElementsByClassName) {
                                    objClass.push(document.getElementsByClassName(
                                        nodeAttribute[i].replace(/\s*\./, "")));
                                } else {
                                    var queue = [],
                                        front = 0,
                                        tails = 0,
                                        _node = document.body;
                                    queue.push(_node);
                                    while (fornt <= tails) {
                                        _node = queue[front++];
                                        if (_node.className == nodeAttribute[i]) {
                                            objClass.push(_node);
                                        }
                                        for (i = 0; i < _node.children.length; i++) {
                                            queue.push(_node.children[i])
                                        }
                                        tails = queue.length - 1;
                                    }
                                }
                                nodeObject = objClass;
                            } else {

                            }
                            break;
                        }
                        nodeObject = document.getElementsByTagName(nodeAttribute[i]);
                    }
                    return nodeObject;
                })();
            }
            return {
                get: function() {
                    return nodeObject;
                },

                on: function(eventType, callback) { //事件代理
                    if (typeof nodeObject.length == "undefined") {
                        if (document.addEventListener) {
                            nodeObject.addEventListener(eventType, callback, false);
                        } else if (document.attchEvent) {
                            nodeObject.attchEvent('on' + eventType, callback);
                        }
                    } else {
                        for (i = 0; i < nodeObject.length; i++) {
                            if (document.addEventListener) {
                                nodeObject[i].addEventListener(eventType, callback, false);
                            } else if (document.attachEvent) {
                                nodeObject[i].attachEvent('on' + eventType, callback);
                            }
                        }

                    }
                    return this;

                }
            }
        },

        getElement: function(tag) {
            return this._getElement(tag).get();
        },

        Event: function(tag) {
            return this._getElement(tag);
        },

        windowSize: function() {
            var width,
                height;
            if (window.innerWidth) {
                width = window.innerWidth;
            } else if (document.body && document.body.clientWidth) {
                width = document.body.clientWidth;
            }
            if (window.innerHeight) {
                height = window.innerHeight;
            } else if (document.body && document.body.clientHeight) {
                height = docuemnt.body.clientHeight;
            }
            if (document.documentElement && document.documentElement.clientHeight &&
                document.documentElement.clientWidth) {
                width = document.documentElement.clientWidth;
                height = document.documentElement.clientHeight;
            }
            width = parseInt(width);
            height = parseInt(height);
            return {
                width: width,
                height: height
            };
        }
    }
})();
