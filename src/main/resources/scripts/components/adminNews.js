'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class AdminNews extends Component {
  render() {
  	const {inews} = this.props;
  	return (<div id="TableList">
      <table className="hovertable">
        <thead>
         <tr>
           <th>日期</th>
           <th>内容</th>
           <th>更多操作</th>
         </tr>
        </thead>
        <tbody>
         {inews.map((data, index) => (
           <tr key={data.id}>
             <td>{data.date}</td>
             <td>{data.content}</td>
             <td>
               <button value="删除" data-id={data.id} />
               <Link to={`/companyDetail/${data.cid}`}>企业详情</Link>
             </td>
           </tr>
          ))}
        </tbody>
      </table>
     </div>
  	)
  }
}

AdminNews.propTypes = {
  inews: PropTypes.array.isRequired
}

export default AdminNews;