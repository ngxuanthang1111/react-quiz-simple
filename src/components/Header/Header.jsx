import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <header className="header--component">
        <div className="header--component--wrapped">
          <Card>
            <CardImg top
                     src="/images/react.png"
                     alt="Card image cap"/>
            <CardBody>
              <CardTitle><h1 className='text-center'>React Quiz</h1></CardTitle>
              <CardText> A simple quiz application written in ReactJS
              </CardText>
            </CardBody>
          </Card>
          
        </div>
      </header>
    );
  }
}

export default Header;