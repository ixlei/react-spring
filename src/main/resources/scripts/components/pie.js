'use strict';

import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';
import d3 from 'd3';
import {disDataSetColors} from '../actions/fetchCompany';

class PieData extends Component {

  componentDidMount() {
    let ele = this.pie;
    this.createSvg(ele);
  }

  createSvg(ele) {
  	let {svg: {width, height, text: {title}}} = this.props;
    let svg = d3.select(ele).append('svg')
        .attr('class', 'svg-circle')
        .attr('width', width)
        .attr('heigth', height);
    if (title) {
      svg.append('text')
         .attr('class', 'svg-text')
         .text(title);
    }
    this.createG(svg);
  }
  
  createArc() {
  	let {arc: {innerWidth, outerWidth}} = this.props;
    let arc = d3.svg.arc()
        .outerRadius(outerWidth)
        .innerRadius(innerWidth);
    return arc;
  }
  
  createG(svg) {
  	let {dataSet, g: {title}, dispatch} = this.props;
  	let colors = [],
  	    arc = this.createArc(),
  	    color = d3.scale.category20(),
  	    pie = d3.layout.pie();
    dataSet = [10, 50, 25, 20, 80];

  	let arcs = svg.selectAll('g')
        .data(pie(dataSet))
        .enter()
        .append('g')
        .attr('class', 'svg-circle-g')
        .style('stroke', 'white')
        .style('stroke-width', 1)
        .style('display', 'none');
    arcs.append('path')
        .transition()
        .duration(2000)
        .ease('circle')
        .delay(function(d, i) {
          return 200 * i;
        })
        .attr("fill", function(d, i) {
          colors.push(color(i));
          return color(i);
        })
        .attr("d", function(d) {
          return arc(d);
        });
    if (title) {
      arcs.append('text')
          .attr('class', 'g-text')
          .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
          })
         .attr("text-anchor", "middle")
         .text(function(d) {
            return d.value;
         });
      }
      
      this.gAnimation();
      console.log('dis', disDataSetColors(colors));
      dispatch(disDataSetColors(colors));
  }

  gAnimation() {
    let gList = document.querySelectorAll('.svg-circle-g');
    let {dataSet} = this.props;
    for(let i = 0, ii = 5; i < ii; i++) {
      ((i) => {
         setTimeout(() => {
         	gList[i].style.display = 'block';
         }, i * 12);
      })(i);
    }
  }
  
  render() {
  	return (<div id="circle-image" ref={(ref) => this.pie = ref}></div>);
  }
}

PieData.propTypes = {
  dataSet: PropTypes.array.isRequired,
  svg: PropTypes.object.isRequired,
  g: PropTypes.object.isRequired,
  arc: PropTypes.object.isRequired
};

export default PieData;