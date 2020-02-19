import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent/ValidationComponent';
import CharComponent from './Components/CharComponent/CharComponent';
import Char from './Components/Char/Char';

export default class App extends Component {
  state = {
    paragraph: null,
    arrofchar: null,
    maxarr: ''
  }
  onChangeHandler = (event) => {
    const needArr = event.target.value.split(' ');
    const objArr = needArr.map((el) => {return {id: el, text: el}});
    // console.log(obArr);
    this.setState({
      paragraph: event.target.value.length,
      // arrofchar: event.target.value.split(' ')
      arrofchar: objArr,
      maxarr: event.target.value
    })
  };
  deleteChar = (charIndex) => {
    // const persons = this.state.persons.slice();
    const chars = [...this.state.arrofchar];
    chars.splice(charIndex, 1);
    this.setState({arrofchar:chars})
  };
  delChar = (index) => {
    const text = this.state.maxarr.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({maxarr: updatedText});
  }

  render() {
    const styleForH1 = {
      border: '1px solid #ccc',
      padding: '10px'
    };

    const charList = this.state.maxarr.split('').map((ch, index) => {
      return <Char clicked={() => this.delChar(index)} char={ch} key={index} />;
    })

    return (
      <div className="App">
        <h1 style={styleForH1}>Lists & Conditionals</h1>
        <input type="text" onChange={this.onChangeHandler} />
        <input type="text" onChange={this.onChangeHandler} value={this.state.maxarr} />
        <p>{this.state.paragraph ? this.state.paragraph : null }</p>
        <ValidationComponent lengthofchar={this.state.paragraph} />
        <CharComponent deletechar={this.deleteChar} arrofchar={this.state.arrofchar} />
        {charList}
      </div>
    );
  }
}