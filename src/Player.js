import React, {Component} from 'react';
import Slider from "rc-slider/es/Slider";
import 'rc-slider/assets/index.css';

class Player extends Component {
  constructor() {
    super();

    // this.pizzicato = new window.Pizzicato.Sound({
    //   source: 'input',
    // });
    // this.pizzicato.volume = 1;

   
    this.delay = new window.Pizzicato.Effects.Delay({
      feedback: 0.8,
      time: 0.22,
      mix: 0.75
    });

    this.quadrafuzz = new window.Pizzicato.Effects.Quadrafuzz({
      feedback: 0.8,
      time: 0.22,
      mix: 0.75
    });

    this.flanger = new window.Pizzicato.Effects.Flanger({
        time: 0.15,
        speed: 10.9,
        depth: 2,
        feedback: 0.3,
        mix: 1
    });

    this.distortion= new window.Pizzicato.Effects.Distortion({
        gain: 0.4
    });

    this.reverb  = new window.Pizzicato.Effects.Reverb ({
        time: 0.01,
        decay: 0.01,
        reverse: false,
        mix: 0.5
    });

   
    this.state = {
      is_playing: false,
      is_delay: false,
      is_flanger: false,
      is_quadrafuzz: false,
      is_distortion: false,
      is_reverb: false,
      
      in_set_progress_mode: false
    };

    this.is_progress_dirty = false;
    this.is_player_dirty = false;
  }


//   togglePlay() {
//     this.setState({is_playing: !this.state.is_playing});
//     this.is_player_dirty = true;
//   }

  toggleDelay() {
    this.setState({is_delay: !this.state.is_delay});
    this.is_player_dirty = true;
  }

  toggleFlanger() {
    this.setState({is_flanger: !this.state.is_flanger});
    this.is_player_dirty = true;
  }

  toggleQuadrafuzz() {
    this.setState({is_quadrafuzz: !this.state.is_quadrafuzz});
    this.is_player_dirty = true;
  }

  toggleDistortion() {
    this.setState({is_distortion: !this.state.is_distortion});
    this.is_player_dirty = true;
  }

  toggleReverb() {
    this.setState({is_reverb: !this.state.is_reverb});
    this.is_player_dirty = true;
  }
  

  render() {

    if (this.is_player_dirty) {
      this.is_player_dirty = false;

      if (this._player) {
       
        if (this.state.is_delay) {
          this.pizzicato.addEffect(this.delay);
        } else {
          this.pizzicato.removeEffect(this.delay);
        }
        if (this.state.is_quadrafuzz) {
           this.pizzicato.addEffect(this.quadrafuzz);
        } else {
           this.pizzicato.removeEffect(this.quadrafuzz);
        }

        if (this.state.is_flanger) {
          this.pizzicato.addEffect(this.flanger);
        } else {
          this.pizzicato.removeEffect(this.flanger);
        }
        if (this.state.is_distortion) {
           this.pizzicato.addEffect(this.distortion);
        } else {
           this.pizzicato.removeEffect(this.distortion);
        }

        if (this.state.is_reverb) {
            this.pizzicato.addEffect(this.reverb);
         } else {
            this.pizzicato.removeEffect(this.reverb);
         }

        if (this.state.is_playing) {
          this.pizzicato.play();
        }
        else {
          this.pizzicato.pause();
        }
      }
    }

    return (
      <div>
    
        <div className="effects">
          {/* Volume<Slider defaultValue={100} onChange={this.changeVolume.bind(this)}/> */}
          <ul>
            <li><input type="checkbox"  name="delay" onClick={this.toggleDelay.bind(this)}/><label for="delay">Delay</label></li>
            <li><input type="checkbox"  name="quad" onClick={this.toggleQuadrafuzz.bind(this)}/><label for="delay">Quad fuzz</label></li>
            <li><input type="checkbox"  name="flanger" onClick={this.toggleFlanger.bind(this)}/><label for="flanger">Flanger</label></li>
            <li><input type="checkbox"  name="distortion" onClick={this.toggleDistortion.bind(this)}/><label for="distortion">Distortion</label></li>
            <li><input type="checkbox"  name="reverb" onClick={this.toggleReverb.bind(this)}/><label for="reverb">Reverb</label></li>
          </ul>
        </div>
      </div>
    );
  }
}


function classnames(obj) {
  var css = [];
  Object.keys(obj).forEach((key) => {
    if (obj[key]) {
      css.push(key);
    }
  });
  return css.join(' ');
}

export default Player;
