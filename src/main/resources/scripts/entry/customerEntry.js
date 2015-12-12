'use strict';
import React, {Component} from 'react';
import {render} from 'react-dom';
import CustomerIndex from '../index/customerIndex';

require('../../styles/customerHeader.scss');

render(<CustomerIndex />, document.querySelector('#main'));