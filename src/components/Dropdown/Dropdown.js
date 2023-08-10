import './Dropdown.css';
import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скрити' : 'Показати'}
        </button>

        {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Сховати
        </button> */}

        {this.state.visible && (
          <div className="Dropdown__menu">Мася - Колбася!!!!!!</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
