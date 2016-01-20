'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {fetchFriends} from '../actions/user';

export default class Chat extends Component {
  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchFriends());
  }
  
  componentWillReceiveProps(nextProps) {
  	const {session: oldSession} = this.props;
  	const {session: newSession} = nextProps;
  	const path = '/chat';
  	if(oldSession !== newSession) {
  	  document.cookie = `${newSession}; path=${path}`;
  	}
  }

  renderTitle() {
  	const {username} = this.props;
  	return (<div id="chat-title">
      <div id="title">
        <span>
	      <a href="javascript:;">{username}，欢迎您进行业务洽谈</a>
	    </span>
      </div>
      <div id="show-hidden">
        <span>
	      <a href="javascript:;">隐藏业务洽谈信息</a>
	    </span>
      </div>
     </div>
  	)
  }
  
  renderTr(data, index) {
    return (<tr key={`list${index}`}>
      {data.map(data => (
        <td key={data.email}>
          <span className="to-one">
	       <span className="name">{data.companyName}</span>
	       <span className="connect-btn">
	        <a href="javascript:;" 
	          data-form={data.email}
	          data-nickname={data.companyName }>联系</a>
	       </span>
	      </span>
	    </td>
        )
      )}
     </tr>
    )
  }

  renderToList() {
  	const {friends} = this.props;
  	let dyadicArr = [],
  	    i = 0;
  	friends.forEach((data, index) => {
  	  if(!(dyadicArr[i] instanceof Array)) {
        dyadicArr[i] = [];
  	  }
      dyadicArr[i].push(data, index);
      if(i > 0 && index % 6 === 0) {
      	i++
      }
  	})
  	return (
  	  <table>
  	    <tbody>
  	     {dyadicArr.map(data => (
  	       this.renderTr(data)
  	     ))}
  	    </tbody>
  	  </table>
  	)
  }

  renderCurrentTo() {
  	const {userType} = this.props;
  	return (
  	  <div id="left-nav">
        <div id="current-to">
          <span>当前联系人</span>
        </div>
        <div id="current-list">
          <div id="to">
            <ul id="list-show">
            </ul>
          </div>
          <div id="historty">
            <span>
	          <Link to={`/${userType}/historyInquiry`}>查看历史消息</Link>
	        </span>
          </div>
        </div>
      </div>
  	)
  }
  
  renderSiteNav() {
  	const {userType} = this.props;
  	return (<div id="sub-nav">
      <ul>
        <li>
          <span>
			<Link 
			to={userType === 'investor' ? '/investor/resavation': '#'}>
			{userType === 'investor' ? '一键预约' : '修订合同'}</Link>
		  </span>
        </li>
        <li>
          <span>
		    <Link to={`/${userType}/modifyContract`}>查看合同</Link>
		  </span>
        </li>
        <li>
          <span id="upload">
            <input type="file" name=""/>
			<Link to="javascript:;">上传合同</Link>
		  </span>
        </li>
      </ul>
    </div>
  	)
  }
  
  rendermsg() {
  	return (<div className="msg-window">
      <div className="show-msg" data-form="">
        <ul id="msg-list">
        </ul>
      </div>
    </div>
  	)
  }

  renderSendMsg() {
  	return (<div id="send-msg">
      <div id="input">
        <input type="text" id="send" name="msg" />
      </div>
      <div id="send">
        <span id="send-btn" className="icon-send-btn"></span>
        <span id="fj" className="icon-fj"></span>
      </div>
    </div>
  	)
  }

  render() {
  	return (<div id="chat-content">
  	  <div id="chat-first-galance">
  	    {this.renderTitle()}
  	    {this.renderToList()}
  	  </div>
  	  <div id="chat-area">
  	    {this.renderCurrentTo()}
  	    <div id="right-nav">
  	      {this.renderSiteNav()}
          {this.rendermsg()}
          {this.renderSendMsg()}
  	    </div>
      </div>
    </div>
  	)
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  session: PropTypes.string.isRequired,
  friends: PropTypes.array.isRequired,
  userType: PropTypes.string.isRequired
}