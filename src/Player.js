// import React, {Component} from 'react';

// class Player extends Component {
//     constructor() {
//       super();
//       this.state = {
//         is_playing: false,
//       }
  
//     }
//     togglePlay() {
//         this.setState({is_playing: !this.state.is_playing});
//         // this.is_player_dirty = true;
//       }
//     render () {
//       var playerClsName = {
//         "fa": true,
//         "fa-play-circle": !this.state.is_playing,
//         "fa-pause": this.state.is_playing
//       };
//       return (
//         <div>
//           <div className="player">
//             <div className="controls">
//               <a onClick={this.togglePlay.bind(this)}>
//                 <i className={classnames(playerClsName)} aria-hidden="true"></i>
//               </a>
//             </div>
//             <audio ref={(ref) => this._player = ref} autoPlay={this.state.is_playing}>
//             <source src={this.props.src}/>
//             <source/>
//           </audio>
  
//            </div>
//         </div>
//       )
//     }
//   }
  
// function classnames(obj) {
//     var css = [];
//     Object.keys(obj).forEach((key) => {
//       if (obj[key]) {
//         css.push(key);
//       }
//     });
//     return css.join(' ');
//   }

// export default Player;
