// JavaScript Document
var citi = (function() {
    var conf = {

    };
    return {
        init: function() {

        },

        countUp: function(o) {
            if (isNaN(o.digital)) {
                return;
            }
            var intReg = /[0-9]+/,
                floatReg = /[0-9]+\.[0-9]+/,
                digital;
            var start = 0,
                upTimes = upTimes = o.upTimes || 40,
                upSpeed = o.digital.upSpeed || 5;

            if (intReg.test(o.digital)) {
                digital = parseInt(o.digital);
                var end = digital - (digital % upTimes);
                var timer = setInterval(function() {
                    if (start == end) {
                        $(o.obj).html(digital);
                        clearInterval(timer);
                        return;
                    }
                    start += upTimes;
                    $(o.obj).html(start);
                }, upSpeed);

            } else if (floatReg.test(o.digital)) {
                digital = parseFloat(o.digital);
                var decimal = digital.replace(/[0-9]+\./, ""),
                    int = parseInt(o.digital),
                    decimLength = 0;
                var times = parseInt(int / upTimes),
                    decimalTimes = (parseInt(decimal) / times);
                decimal = decimal.toString();
                decimLength = decimal.length;
                decimal = decimal / decimLength;

                var timer = setInterval(function() {
                    if (start == end) {
                        $(o.obj).html(digital);
                        clearInterval(timer);
                        return;
                    }
                    start += upTimes;
                    $(o.obj).html(start);
                }, upSpeed);
            }
            return this;
        },

        circle: function(o, callback) {
            if (!o) {
                return;
            }
            var pie = d3.layout.pie(),
                color = d3.scale.category20(),
                dataSet = o.dataSet,
                innerWidth = o.arc.innerWidth,
                outerWidth = o.arc.outerWidth,
                svgTranslate = {
                    x: o.svg.translate.x || 0,
                    y: o.svg.translate.y || 0
                },
                gTranslate = {
                    x: o.g.translate.x || 0,
                    y: o.g.translate.y || 0
                },
                svgWidth = o.svg.width || 640,
                svgHeight = o.svg.height || 320,
                svgText = o.svg.text,
                g = o.g;
            var colorArr = [],
                gd = [];
            var arc = d3.svg.arc()
                .outerRadius(outerWidth)
                .innerRadius(innerWidth);
            var svg = d3.select(o.obj).append('svg')
                .attr('width', svgWidth)
                .attr('height', svgHeight)
                .attr('class', 'svg-circle')
                .attr('transform', 'translate(' + svgTranslate.x + ',' + svgTranslate.y + ')');
            if (svgText) {
                svg.append('text')
                    .attr('transform', 'translate(' + svgText.translate.x + ',' + svgText.translate.y + ')')
                    .style('color', svgText.color || 'black')
                    .style('font-size', svgText.fontSize || '2em')
                    .text(svgText.text);
            }
            var arcs = svg.selectAll('g')
                .data(pie(dataSet))
                .enter()
                .append('g')
                .attr('class', 'svg-circle-g')
                .style('stroke', g.stroke || 'white')
                .style('stroke-width', g.strokeWidth || 1)
                .style('display', 'none')
                .attr('transform', 'translate(' + gTranslate.x + ',' + gTranslate.y + ')');

            arcs.append('path')
                .transition()
                .duration(2000)
                .ease('circle')
                .delay(function(d, i) {
                    return 200 * i;
                })
                .attr("fill", function(d, i) {
                    colorArr.push(color(i));
                    return color(i);
                })
                .attr("d", function(d) {
                    gd.push(d);
                    return arc(d);
                });
            if (g.text) {
                arcs.append('text')
                    .attr("transform", function(d) {
                        console.log(arc.centroid(d));
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("text-anchor", "middle")
                    .text(function(d) {
                        return d.value;
                    })
                    .style("color", g.text.color || 'white');
            }
            var gArr = [],
                n = 0;
            $('.svg-circle-g').each(function() {
                gArr.push(this);
            });
            var timer = setInterval(function() {
                if (n == dataSet.length) {
                    clearInterval(timer);
                    return;
                }
                gArr[n++].style.display = "block";

            }, g.animation.time || 60);
            if (typeof callback != 'undefined') {
                callback();
            }
            return colorArr;

        },

        mouseover: function() {
            $('.mouseover').mouseover(function(e) {
                $(this).addClass('show');
            }).mouseout(function(e) {
                $(this).removeClass('show');
            });
            return this;
        },

        debounce: function(o) {
            var time = o.time,
                timer = null;

            return function(callback) {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(callback, time);
            };
        },

        axis: function(o) {
            return this;
        },

        scrollUp: function(o) {
            if (!o || !o.parent || !o.scroll) {
                return;
            }

            var parentHeight = o.parent.height,
                parent = o.parent.obj,
                speedUp = o.scroll.speedUp || 80,
                firstScroll = o.scroll.firstScroll,
                secondScroll = o.scroll.secondScroll,
                scrollHeight = $(firstScroll).height();
            scrollHeight = scrollHeight - scrollHeight % 4;
            scrollHeight = parseInt(scrollHeight);
            $(parent).css({
                position: 'relative',
                overflow: 'hidden',
                height: parentHeight
            });
            $(firstScroll).css({
                position: 'absolute',
                top: 0,
                left: 0
            });
            $(secondScroll).css({
                position: 'absolute',
                top: scrollHeight,
                left: 0
            });
            var flag = 0,
                distance = 0,
                arrDistance = [],
                timer;
            for (var i = 0; i < 2; i++) {
                arrDistance.push(0);
            }

            function scroll() {
                timer = setInterval(function() {
                    distance -= 4;
                    arrDistance[0] = distance;
                    arrDistance[1] = scrollHeight + distance;
                    if ((scrollHeight + distance) == 0) {
                        distance = 0;
                        flag += 1;
                        setTimeout(function() {
                            $(firstScroll).css({
                                top: arrDistance[flag % 2]
                            });
                            $(secondScroll).css({
                                top: arrDistance[(flag + 1) % 2]
                            });

                        }, speedUp);

                        if (flag % 2 == 0) {
                            flag = 0;
                        } else {
                            flag = 1;
                        }
                    }
                    $(firstScroll).css({
                        top: arrDistance[flag % 2]
                    });
                    $(secondScroll).css({
                        top: arrDistance[(flag + 1) % 2]
                    });
                }, speedUp);
            };
            scroll();
            $(parent).mouseover(function(e) {
                clearInterval(timer);
            }).mouseout(function(e) {
                scroll();
            });
            return this;
        },

        ellipsis: function(o) {
            var str = o.tag.toString(),
                charArr = str.split(""),
                html;
            if (charArr[0] == '#') {
                html = $(o.tag).html().toString();
                if (html.length > o.length) {
                    $(o.tag).html(html.substring(0, o.length) + '...');
                }
            } else if (charArr[0] == '.') {
                $(o.tag).each(function() {
                    html = this.innerHTML.toString();
                    if (html.length > o.length) {
                        this.innerHTML = html.substring(0, o.length) + '...';
                    }
                });
            }
            return this;
        },

        rect: function(o) {
            var xAxis = o.xAxis;
            var yAxis = o.yAxis;

            var svgWidth = o.svg.width,
                svgHeight = o.svg.height,
                svgTranslate = {
                    x: o.svg.translate.x || 20,
                    y: o.svg.translate.y || 20
                },

                axisxTranslate = xAxis.translate,
                axisyTranslate = yAxis.translate,

                axisxText = xAxis.text,
                axisyText = yAxis.text,

                dataSet = o.dataSet,

                rectPadding = o.rect.padding;

            var scalex = d3.scale.ordinal()
                .domain(d3.range(dataSet.length))
                .rangeRoundBands(xAxis.scale.range);

            var scaley = d3.scale.linear()
                .domain(yAxis.scale.domain)
                .range(yAxis.scale.range);

            var axisx = d3.svg.axis()
                .scale(scalex)
                .tickSize(4)
                .orient('bottom');

            var axisy = d3.svg.axis()
                .scale(scaley)
                .tickSize(4)
                .orient('left');

            var xScale = d3.scale.ordinal()
                .domain(d3.range(dataSet.length))
                .rangeRoundBands(xAxis.scale.range);


            var yScale = d3.scale.linear()
                .domain([0, d3.max(dataSet)])
                .range([yAxis.scale.range[1], yAxis.scale.range[0]]);

            var svg = d3.select(o.obj)
                .append('svg')
                .attr('width', svgWidth)
                .attr('height', svgHeight)
                .attr('transform', 'translate(' + svgTranslate.x + ',' + svgTranslate.y + ')')
                .attr('class', 'svg-rect');


            svg.append('g')
                .attr('transform', 'translate(' +
                    axisxTranslate.x + ',' + axisxTranslate.y + ')')
                .attr("class", "axis")
                .call(axisx)
                .append('text')
                .attr('x', axisxText.x)
                .attr('y', axisxText.y)
                .attr('class', 'axis-x-text')
                .style('text-anchor', 'end')
                .text(axisxText.text);


            svg.append('g')
                .attr('transform', 'translate(' +
                    axisyTranslate.x + ',' + axisyTranslate.y + ')')
                .attr("class", "axis")
                .call(axisy)
                .append('text')
                .attr('x', axisyText.x)
                .attr('y', axisyText.y)
                .attr('class', 'axis-y-text')
                .style('text-anchor', 'end')
                .text(axisyText.text);


            svg.selectAll('rect')
                .data(dataSet)
                .enter()
                .append('rect')
                .transition()
                .duration(3000)
                .ease("bounce")
                .delay(function(d, i) {
                    return 200 * i;
                })
                .attr('x', function(d, i) {
                    return xScale(i);
                })
                .attr('y', function(d, i) {
                    return axisxTranslate.y - yScale(d);
                })
                .attr('width', function(d, i) {
                    return xScale.rangeBand() - rectPadding;
                })
                .attr('height', yScale)
                .attr('fill', '#00cbfe')
                .attr('class', 'rect')
                .attr('transform', 'translate(' + (axisyTranslate.x + rectPadding / 2) + ',' + '0)');
            return this;
        },

        scrollRight: function(o) {
            if (!o || !o.parent || !o.scroll) {
                return;
            }
            var parentWidth = o.parent.width,
                parentHeight = o.parent.height,
                parent = o.parent.obj,
                speedUp = o.scroll.speedUp || 80,
                firstScroll = o.scroll.firstScroll,
                secondScroll = o.scroll.secondScroll,
                scrollWidth = $(firstScroll).width(),
                scrollHeight = o.scroll.height || parentHeight;
            scrollWidth = scrollWidth - scrollWidth % 4;
            scrollWidth = parseInt(scrollWidth);
            $(parent).css({
                position: 'relative',
                overflow: 'hidden',
                width: parentWidth,
                height: parentHeight
            });
            $(firstScroll).css({
                position: 'absolute',
                width: scrollWidth,
                top: 0,
                left: 0
            });
            $(secondScroll).css({
                position: 'absolute',
                top: 0,
                left: (-scrollWidth),
                width: scrollWidth
            });
            var flag = 0,
                distance = 0,
                arrDistance = [],
                timer;
            for (var i = 0; i < 2; i++) {
                arrDistance.push(0);
            }

            function scroll() {
                timer = setInterval(function() {
                    distance -= 4;
                    arrDistance[0] = distance;
                    arrDistance[1] = scrollWidth + distance;
                    if ((scrollWidth + distance) == 0) {
                        distance = 0;
                        flag += 1;
                        setTimeout(function() {
                            $(firstScroll).css({
                                top: arrDistance[flag % 2]
                            });
                            $(secondScroll).css({
                                top: arrDistance[(flag + 1) % 2]
                            });

                        }, speedUp);

                        if (flag % 2 == 0) {
                            flag = 0;
                        } else {
                            flag = 1;
                        }
                    }
                    $(firstScroll).css({
                        top: arrDistance[flag % 2]
                    });
                    $(secondScroll).css({
                        top: arrDistance[(flag + 1) % 2]
                    });
                }, speedUp);
            };
            scroll();
            $(parent).mouseover(function(e) {
                clearInterval(timer);
            }).mouseout(function(e) {
                scroll();
            });
            return this;
        },
        imgLoad: function(img, callback) {
            imer = null;
            img.each(function() {
                if (!this.complete) {
                    notLoad.push(this);
                }
            });
            if (notLoad.length) {
                timer = setInterval(function() {
                    for (var i in notLoad) {
                        if (notLoad[i].complete) {
                            notLoad.splice(notLoad.indexOf(notLoad[i]), 1);
                        }
                    }
                    if (!notLoad.length) {
                        clearInterval(timer);
                        callback();
                    }
                }, 0);
            } else {
                callback();
            }
            return this;
        }
    };

})();
