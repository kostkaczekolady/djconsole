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
  handleClick () {
    console.log("działam");
    //zmiana koloru
  }
  render() {
    return (
      <div>
          {/* <div className="player"> */}
          <PlayAudio id="player" url={'http://www.noiseaddicts.com/samples_1w72b820/4186.mp3'}/>    
          <div className='row secondSection'>
            <div className="col-5" >    
                {/* <Player src="https://www.soundeffectsplus.com/uploads/prod_audio/39398746_airplane-fly-over-large-airliner-03.mp3"/> */}
              <img src={music} className="music"/>
            </div>
             
            <div className="col-5" >    
              {/* <Player src="https://www.soundeffectsplus.com/uploads/prod_audio/39398746_airplane-fly-over-large-airliner-03.mp3"/> */}
              <img src={music} className="music"/>
            </div>
            <div className="col-1">
              <Slider className="volume" vertical={true} defaultValue={100} onChange={this.changeVolume.bind(this)}>
                  <p>Gain</p>
              </Slider>
            </div>
          </div>
          <div className='row thirdSection'>
            <div className="col-1">
              <Slider className="volume" vertical={true} defaultValue={100} onChange={this.changeVolume.bind(this)}>
                <p>Vol</p>
              </Slider>
            </div> 
            <div className="col-4" >    
            </div>
            <div className="col-1">
              <Slider className="volume" vertical={true} defaultValue={100} onChange={this.changeVolume.bind(this)}>
                <p>Vol</p>
              </Slider>
            </div> 
            <div className="col-4" >   
            </div>
          </div>

          <div className='row fourthSection'>
            <div className="col-2">
                <button className="effects" onClick={this.handleClick}>Delay</button>
            </div> 
            <div className="col-2">
                <button className="effects">Quad fuzz</button>
            </div>
            <div className="col-2">
                <button className="effects">Flanger</button>
            </div>
            <div className="col-2">
                <button className="effects">Distortion</button>
            </div>
            <div className="col-2">
                <button className="effects">Reverb</button>
            </div>
            <div className="col-2">
                <button className="effects"></button>
            </div>
          </div>

          
        
      </div>
      // <Player/>
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
