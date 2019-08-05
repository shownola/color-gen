import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  render(){
    const {level, changeLevel} = this.props;
    return(
      <header className="Navbar">
        <div className="logo">
        <a href="#">colorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
        <div className="slider">
          <Slider defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
            trackStyle={{ backgroundColor: 'transparent'}}
            handleStyle={{ backgroundColor: 'green', outline: 'none', border: '2px solid green', boxShadow: 'none', width: 13, height: 13, marginLeft: -7, marginTop: -2 }}
            activeHandleStyle={{backgroundColor: 'green', outline: 'none', border: '2px solid green', boxShadow: 'none', width: 13, height: 13}}
            hoverHandleStyle={{backgroundColor: 'green', outline: 'none', border: '2px solid green', boxShadow: 'none', height: 13, width: 13}}
            railStyle={{ height: 8 }}

            />
          </div>
        </div>
      </header>
    )
  };
}

export default Navbar;
