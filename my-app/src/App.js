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

  updateHighScore = () => {
    if (this.state.score > this.state.highScore) {
      return this.state.score;
    } else {
      return this.state.highScore;
    }
  };

  clickCharacter = (characterName) => {
    if (this.state.charactersClicked.includes(characterName)) {
      const newHighScore = this.updateHighScore();
      this.setState({charactersClicked: [], score: 0, highScore: newHighScore});
    } else {
      const charactersClicked = this.state.charactersClicked;
      charactersClicked.push(characterName);
      const score = this.state.score + 1;
      this.setState({charactersClicked, score});
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
