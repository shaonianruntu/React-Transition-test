/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-08 16:15:44
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-08 16:57:10
 */
import React, { Component, Fragment } from "react";
// import { CSSTransition } from "react-transition-group";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import "./style.css";
import "./CSSTransition_style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: true
      list: []
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* <div>hello</div> */}
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEntered={el => {
                  el.style.color = "yellow";
                }}
                appear={true}
              >
                <div key={index}>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={this.handleAddItem}>Submit</button>
        {/* <CSSTransition
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
        </CSSTransition> */}
        {/* <div className={this.state.show ? "show" : "hide"}>hello</div> */}
        {/* <button onClick={this.handleToggle.bind(this)}>toggle</button> */}
      </Fragment>
    );
  }

  handleAddItem() {
    this.setState(prevState => ({
      list: [...prevState.list, "item"]
    }));
  }

  handleToggle() {
    this.setState(() => ({
      show: this.state.show ? false : true
    }));
  }
}

export default App;
