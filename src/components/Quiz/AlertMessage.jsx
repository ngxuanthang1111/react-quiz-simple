import React, {Component, Fragment} from 'react';
import {Alert, Progress} from "reactstrap";
import Result from './Result'

class AlertMessage extends Component {
  render() {
    const {current, total, score, question} = this.props;
    const progress = (current / total * 100).toFixed(0);

    return (
      <Fragment>
        {current > question.length ? "" : <Progress
          value={progress}
          className="component--progress">
          {progress}%</Progress>}
        {current <= question.length &&
        <Alert color="primary"
               className="d-flex justify-content-between quiz--component__question">
          <span>Questions {current} / {total}</span>
        </Alert>}
        {current > question.length &&
        <Result score={score}
                total={total}/>}

      </Fragment>
    );
  }
}

export default AlertMessage;