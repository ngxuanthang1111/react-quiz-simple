import React, {Component} from 'react';
import {Alert, Card, CardBody, CardSubtitle, CardText, CardTitle} from 'reactstrap';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messPassed: "Passed",
      messFailed: "Failed"
    }
  }

  render() {

    const {score, total} = this.props;
    const {messPassed, messFailed} = this.state;
    const percent = (score / total * 100).toFixed(1);
    return (
      <div>
        <Card>
          {/*Title Result*/}
          <CardBody>
            <CardTitle>
              <h1 className="text-capitalize text-center">your result</h1>
            </CardTitle>
            <CardSubtitle className="quiz--component__score">
              {percent >= 50 ?
                <Alert color="success">
                  {score}/{total}
                </Alert> :
                <Alert color="danger">
                  {score}/{total}
                </Alert>}
            </CardSubtitle>
          </CardBody>

          {/*Percent Correct Result*/}
          <CardBody>
            <CardText>
              {percent}% - {percent >= 50 ? messPassed : messFailed}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Result;