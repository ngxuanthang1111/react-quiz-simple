import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rdValue: '',
    }
  }


  //reset value
  reset = () => {
    this.setState({
      rdValue: ''
    })
  };

  //get multi value input tag
  onHandleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
    console.log(value);
  };

  //pass value got to parent component
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onHandleSubmit(this.state);
    this.reset();
  };

  render() {
    const {question} = this.props;
    //show list questions from dataQA.js
    const listChoices = question.choices.map(choice => {
      return (
        <FormGroup
          key={choice.id}
          check
          className="d-flex flex-column">
          <Label check
                 for={choice.id}>
            <Input type="radio"
                   id={choice.id}
                   name="rdValue"
                   checked={this.state.rdValue === choice.id}
                   value={choice.id}
                   onChange={this.onHandleChange}/>
            {choice.text}
          </Label>
        </FormGroup>
      )
    });

    return (
      <Fragment>
        <Form onSubmit={this.onHandleSubmit}>
          <FormGroup tag="fieldset">
            <legend>{question.text} ?</legend>
            {listChoices}
          </FormGroup>
          <div className="component--button__wrapped">
            {/*<ButtonGroup>*/}
              {/*<Button>Preve</Button>*/}
              {/*<Button>Next</Button>*/}
            {/*</ButtonGroup>*/}
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Fragment>
    );
  }
}

export default Questions;