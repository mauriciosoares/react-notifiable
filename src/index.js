import React from 'react';
import {render} from 'react-dom';
import YellContainer from './container/index';
import yell from './hoc/index';

class Container extends React.Component {
  render() {
    return (
      <YellContainer>
        <YelledInnerComponent />
      </YellContainer>
    )
  }
}

class InnerComponent extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.yell}>Yell!</button>
      </div>
    );
  }
}

const YelledInnerComponent = yell(InnerComponent);

document.body.appendChild(document.createElement('div'));
render(<Container />, document.querySelector('div'));
