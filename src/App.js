import React, { Component } from 'react';
import { MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
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
    unselected: bears,
    weLost:false
  };
  
  componentDidMount() {

  }

  shuffleCards = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }

  selectCard = id => {
    const findId = this.state.unselected.find(item => item.id === id);

    if (findId === undefined) {
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        bears: bears,
        unselected: bears,
        weLost:true,

      })
    } else {
      const newBears = this.state.unselected.filter(item => item.id !== id);

      this.setState({
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
        bears: bears,
        unselected: newBears
      })
    }
    this.shuffleCards(bears)
  }
  render() {
    return (
      <React.Fragment>
        <Nav message={this.state.message} topScore={this.state.topScore} curScore={this.state.curScore} />
        <MDBContainer className="mt-5" className={this.state.weLost ? 'shakeScreen' : ''}>
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
              <GameCard id={bear.id} image={bear.image} selectCard={this.selectCard} curScore={this.state.curScore} />
            ))}
          </MDBRow>
        </MDBContainer>
      </React.Fragment>

    );
  }
}

export default App;
