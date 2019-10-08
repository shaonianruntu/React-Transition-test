/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-08 16:15:44
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-08 16:45:55
 */
import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";

// import "./style.css";
import "./CSSTransition_style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEntered={el => {
            el.style.color = "yellow";
          }}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        {/* <div className={this.state.show ? "show" : "hide"}>hello</div> */}
        <button onClick={this.handleToggle.bind(this)}>toggle</button>
      </Fragment>
    );
  }

  handleToggle() {
    this.setState(() => ({
      show: this.state.show ? false : true
    }));
  }
}

export default App;
