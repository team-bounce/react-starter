import React from 'react';
import './index.css';

type oProps = {};
type oState = {};

export class Component1 extends React.Component<oProps, oState> {
  constructor(props: oProps) {
    super(props);
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  componentDidMount() {}

  clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    // const button: HTMLButtonElement = event.currentTarget;
    // console.info('App.click', button.name);
  }

  callbackHandler(data: object): void {
    // console.info('callback', JSON.stringify(data));
  }

  render() {
    const {} = this.state;
    return (
      <React.Fragment>
        <div className="divComponent1 font-roboto">
          <p>I am Component1</p>
          <p>I have my own stylesheet</p>
          <p>...this is font Droid Sans</p>
        </div>
      </React.Fragment>
    );
  }
}
