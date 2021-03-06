﻿"use strict";

var React = require('react');
var EventEmitter = require('events').EventEmitter;

var voteEvents = require('../VoteEvents');

require('../../css/components/VotesAnswer.css');

class VoteAnswer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      code:this.props.code,
      count:this.props.count,
      text:this.props.text,
      showMode:this.props.showMode,
      freeinput:this.props.freeinput,
      selected:this.props.selected
      };
  }

  componentWillReceiveProps(newProps) { 
    this.setState({ 
      count: newProps.count,
      showMode: newProps.showMode,
      selected: newProps.selected
      }); 
  }

  changed(EO) {
    voteEvents.emit('AnswerChanged',EO.target.value);
  }

  render(){
    return (
      (this.state.showMode==1)
      ?
        <div className="Answer">
          <div className="Count">{this.state.count}</div>
          <div className="Text">{this.state.text}</div>
        </div>
      :
        <div>
          <label className='Answer'>
            <input type='radio' value={this.state.code} name='voteanswer' defaultChecked={this.state.selected} onClick={this.changed} />
            <span>{this.state.text}</span>
          </label>
          {this.state.freeinput
            ?<input type='text' name='votefreeinput' className='FreeInput' disabled={!this.state.selected} />
            :null
            }
        </div>
    );
  }

}

module.exports = VoteAnswer;
