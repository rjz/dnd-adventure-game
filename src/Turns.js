import React, {Component} from 'react';

/*function Turns(props) {
  let hitNotification;
  if(props.turns.roll) {
    hitNotification = <p>You Rolled</p>;
  }
  
  return (
    <div>
      {hitNotification}
    </div>
  );
}
export default Turns;*/

class Turns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: true,
    };
  }

  enemyHitOrMiss(turn) {
    if(turn.hit) {
      return (
        <div>
          <p>
            The orc smacks you and does {turn.damage} damage. 
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            The orc misses
          </p>
        </div>
      );
    }
  }
  
  playerHitOrMiss(turn) {
    if(turn.hit) {
      return (
        <div>
          <p>
            You hit! You rolled a {turn.roll} and did {turn.damage} damage. 
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            You missed
          </p>
        </div>
      );
    }
  }

  rollResult() {
    let turns = this.props.turns;
    let currentTurn = turns[turns.length - 1];
    if(currentTurn.whoTurn === 'You') {
      return this.playerHitOrMiss(currentTurn);
    } else {
      return this.enemyHitOrMiss(currentTurn);
    }
  }

  render() {
    let hitNotification = <p>A giant Orc is charging at you</p>;

    if(this.props.turns.length) {
      hitNotification = this.rollResult();
    }
    return (
    <div>
      {hitNotification}
    </div>
    );  
  }
}

export default Turns;
