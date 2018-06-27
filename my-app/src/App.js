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
    highScore: undefined
  };

  render() {
    return (
      <div>
        <Header />
        <Main>
          <Wrapper>
          {this.state.characters.map((character, i) => (
          <Image
            key={i}
            name={character.name}
            image={character.image}
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
