'use strict';

import React, {Component, PropTypes} from 'react';
import {fetchReservation} from '../actions/news';

class ToReservation extends Component {

  componentWillMount() {
  	const {dispatch} = this.props;
    dispatch(fetchReservation('current'));
  }

  render() {
  	const {resvation} = this.props;
  	return (<div id="TableList">
      <table className="hovertable">
        <thead>
          <tr>
           <th>预约方</th>
           <th>联系方式</th>
           <th>预约时间</th>
           <th>预约提交时间</th>
           <th>操作</th>
          </tr>
        </thead>
        <tbody>
         {resvation.map((data, index) => (
         	<tr key={data.id}>
         	  <td>{data.appFromName}</td>
         	  <td>{data.phoneNumber}</td>
         	  <td>{data.postTime}</td>
         	  <td>{data.reservationTime}</td>
         	  <td>
         	    <a href="javascript:;" data-id={data.id}>完成</a>
         	  </td>
         	</tr>
          ))}
        </tbody>
      </table>
    </div>
    )
  }
}

ToReservation.propTypes = {
  resvation: PropTypes.array.isRequired
}

export default ToReservation;