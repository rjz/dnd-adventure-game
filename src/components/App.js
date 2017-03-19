import React, { Component } from 'react';
import BuildCombat from './BuildCombat.js';
// import adventureZones from './adventureZones';
import CurrentRoom from './CurrentRoom';
import RoomNavigation from './RoomNavigation';
import {connect} from 'react-redux';
import {setCurrentRoom, backToPrevRoom, roomNavError} from '../reducer';

const mapStateToProps = (state) => {
  return ({
    currentRoom: state.currentRoom,
    prevRoom: state.prevRoom,
    navError: state.navError,
  }
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.updateCurrentRoom = this.updateCurrentRoom.bind(this);
    this.backToPrevRoom = this.backToPrevRoom.bind(this);
  }

  backToPrevRoom(e) {
    e.preventDefault();
    this.props.dispatch(backToPrevRoom());
  }

  updateCurrentRoom(e) {
    e.preventDefault();
    console.log(e.target.value);
    if (!e.target.value) {
      this.props.dispatch(roomNavError());
      // this.setState({navError: true});
    } else {
      this.props.dispatch(setCurrentRoom(e.target.value));
    }
  }

  render() {
    return (
      <div>
        {this.props.navError && 
          <p>You can't go that way</p>
        }
        <CurrentRoom 
          currentRoom={this.props.currentRoom}
        />
    
        {this.props.currentRoom.enemy &&
          <BuildCombat 
            prevRoom={this.props.prevRoom}
            backToPrevRoom={this.backToPrevRoom}
          />
        }
        {!this.props.currentRoom.enemy &&
          <RoomNavigation 
          currentRoom={this.props.currentRoom}
          updateCurrentRoom={this.updateCurrentRoom}
        />
        }
      </div>
    );

  }
}

export default connect(mapStateToProps)(App);
