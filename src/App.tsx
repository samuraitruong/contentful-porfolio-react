import * as React from "react";
import logo from "./logo.svg";
import { clearText, sayHello } from "./reducers/actions";
import { connect } from "react-redux";
import "./App.css";
interface IAppProp {
  hi : any;
  hello : () => void;
  clear : () => void;
}
class App extends React.Component < IAppProp > {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.tsx</code>
          and save to reload. {this.props.hi.text}

          <button
            onClick={this
            .props
            .hello
            .bind(this, "say something")}>Say Hello</button>

          <button
            onClick={this
            .props
            .clear
            .bind(this, null)}>Clear</button>

        </p>
      </div>
    );
  }
}
const mapStateToProps = (state : any, ownProps : any) => {
  console.log("aaa", state);
  return {hi: state.sayHello}
}
const mapDispatchToProps = (dispatch : any, ownProps : any) => {
  return {
    clear: () => dispatch(clearText()),
    hello: (text : string) => {
      dispatch(sayHello(text))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
