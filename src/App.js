import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Image from './components/Image';
import Footer from './components/Footer';
import characters from './characters.json';

class App extends Component {
  state = {
    characters,
    charactersClicked: [],
    score: 0,
    highScore: 0
  };

  updateHighScore = (score) => {
    if (score > this.state.highScore) {
      return score;
    } else {
      return this.state.highScore;
    }
  };

  clickCharacter = (characterName) => {
    if (this.state.charactersClicked.includes(characterName)) {
      const updatedHighScore = this.updateHighScore(this.state.score);
      this.setState({charactersClicked: [], score: 0, highScore: updatedHighScore});
    } else {
      const score = this.state.score + 1;
      if (score === 12) {
        const updatedHighScore = this.updateHighScore(score);
        this.setState({charactersClicked: [], score: 0, highScore: updatedHighScore});
      } else {
        const charactersClicked = this.state.charactersClicked;
        charactersClicked.push(characterName);
        this.setState({charactersClicked, score});
      }
    }
  };

  render() {
    return (
      <div>
        <Header 
          score={this.state.score} 
          highScore={this.state.highScore}
        />
        <Main>
          <Wrapper>
          {this.state.characters.sort((a, b) => (0.5 - Math.random())).map((character, i) => (
          <Image
            key={i}
            name={character.name}
            image={character.image}
            clickCharacter={this.clickCharacter}
          />
        ))}
          </Wrapper>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
