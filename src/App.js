import React, { Component } from 'react';
import music from './music.svg';
import './App.css';
import Player from './Player';
import PlayAudio from 'react-simple-audio-player'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';



class App extends Component {
  changeVolume(value) {
    // this.pizzicato.volume = value / 100;
  }
  render() {
    return (
      <div>
        {/* <div className="player"> */}
          <PlayAudio id="player" url={'http://www.noiseaddicts.com/samples_1w72b820/4186.mp3'}/>    
          <Slider className="volume" vertical={true} defaultValue={100} onChange={this.changeVolume.bind(this)}>
            <p>Volume</p>
          </Slider>
        {/* <Player src="https://www.soundeffectsplus.com/uploads/prod_audio/39398746_airplane-fly-over-large-airliner-03.mp3"/> */}
          <img src={music} className="music"/>
          <Player/>
        
      </div>
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}


export default App;
