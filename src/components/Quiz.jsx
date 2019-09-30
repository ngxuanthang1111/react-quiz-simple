import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Quiz.css'
import Header from "./Header/Header";
import Questions from "./Quiz/Questions";
import AlertMessage from "./Quiz/AlertMessage";


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      current: 1,
    }
  }

  onHandleSubmit = (choice) => {
    this.setState((prevState, props) => ({
      current: prevState.current + 1,
      score: choice.rdValue === props.questions[prevState.current - 1].correct ? prevState.score + 1 : prevState.score
    }));
  };

  render() {
    const {questions} = this.props;
    const {current, score} = this.state;
    const total = questions.length;

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="d-flex flex-column w-100">

            {/*Header Component*/}
            <Header/>

            {/*Content Component*/}
            <main className="quiz--component__wrapped">
              <div className="quiz--component__info">
                <AlertMessage current={current}
                              total={total}
                              score={score}
                              question={questions}/>
              </div>

              {/*Questions Component*/}
              <div className="quiz--component__question">
                {this.state.current <= questions.length &&
                <Questions {...this.state}
                           question={questions[this.state.current - 1]}
                           onHandleSubmit={this.onHandleSubmit}
                />}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;