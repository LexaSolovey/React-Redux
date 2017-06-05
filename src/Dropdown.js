import React, { Component } from 'react';


class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state = {isOpened: false};
  }
  toggleState(){
    this.setState({isOpened: !this.state.isOpened});
  }
  render() {
    console.log('isOpened', this.state.isOpened);
    let dropdowntext;
    if (this.state.isOpened) {
      dropdowntext = <div> menu</div>;
    }
    return (
      <div onClick={this.toggleState.bind(this)}>
      Its Dropdown
      {dropdowntext}
      </div>
    );

  }
}

export default Dropdown;
