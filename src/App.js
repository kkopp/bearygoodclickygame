import React, { Component, Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import GameCard from './components/GameCard.js';
import Title from './components/Title.js';
import Nav from './components/NavBar.js';
import './index.css';
import bears from './bears.json';

class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    bears: bears,
    lastSelectedIndex: null,
    weLost: false
  };

  componentDidMount() {

  }

  shuffleCards = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  selectCard = id => {
    const newBears = this.shuffleCards(this.state.bears);

    if (id === this.state.lastSelectedIndex) {
      //user just lost
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        bears: newBears,
        weLost: true,
        lastSelectedIndex: null
      });
    }
    else {
      //user continues playing and winning
      this.setState({
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
        bears: newBears,
        lastSelectedIndex: id,
        weLost: false
      });
    }
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Nav message={this.state.message} topScore={this.state.topScore} curScore={this.state.curScore} />
        <MDBContainer className={`${this.state.weLost ? 'shakeScreen' : ''} mt-5`}>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard
                color="mdb-color #0288d1 light-blue darken-3"
                text="white"
                className="text-center"
              >
                <MDBCardBody>
                  <Title />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {this.state.bears.map(bear => (
              <GameCard key={bear.id} id={bear.id} image={bear.image} selectCard={this.selectCard} curScore={this.state.curScore} />
            ))}
          </MDBRow>
        </MDBContainer>
      </Fragment>

    );
  }
}

export default App;
