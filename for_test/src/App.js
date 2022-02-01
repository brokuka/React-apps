import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

const DynamicGreeting = (props) => {
  return (
    <div className={"mt-3"}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {className: 'shadow p-3 border rounded'})
        })
      }
    </div>
  )
}

const HelloGreetings = () => {
  return (
    <div style={{'margin': '0 auto'}}>
      <DynamicGreeting>
        <h2>Hello world</h2>
      </DynamicGreeting>
    </div>
  )
}

const Message = (props) => {
  return (
    <h2>The counter is {props.counter}</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    return (
      <>
        <button
          className={'btn btn-primary'}
          onClick={this.changeCounter}>
            Click me
        </button>
        {this.props.render(this.state.counter)}
      </>
    )
  }
}

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node)

  return ReactDOM.createPortal(props.children, node);
}

const Msg = () => {
  return (
    <div style={{'width': '500px',
    'height': '150px',
    'backgroundColor': 'red',
    'position': 'absolute',
    'right': '0',
    'bottom': '0'}}>Hello</div>
  )
}

class Form extends Component {
  render() {
      return (
        <form className="w-50 border mt-5 p-3"
        style={{'overflow': 'hidden',
                'position': 'relative'}}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <Portal>
              <Msg/>
            </Portal>
        </form>
      )
  }
}

const App = () => {
  return (
    <div className="App container">
      <Form/>
    </div>
  )
}

export default App;
