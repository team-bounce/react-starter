import React from 'react';
import { Component1 } from './component1';
import './index.css';

type oProps = {};
type oState = {};

export class Approot extends React.Component<oProps, oState> {
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
        <div className="divApproot">
          <div className="font-chilanka">
            <h3>Welcome to react-starter</h3>
            <p>...this is font Chilanka</p>
          </div>
          <div className="font-droidsans">
            <p>I am Approot</p>
            <p>I have my own stylesheet</p>
            <p>...this is font Droid Sans</p>
          </div>
        </div>
        <Component1 />
      </React.Fragment>
    );
  }
}
