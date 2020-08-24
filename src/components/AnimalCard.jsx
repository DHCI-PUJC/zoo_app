import React, { Component } from 'react';
import styles from'./AnimalCard.module.css';

class AnimalCard extends Component {
  render() {
    return (
      <div className={styles.animal}>
        <div className={styles.animal__container}>
          <img 
            src={this.props.img} 
            className={styles.animal__image} 
            alt='imagen del animal' />
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    console.log('Contructor');
  }

  componentDidMount() {
    console.log('Did Mount!');
  }

  componentDidUpdate() {
    console.log('Did Update!');
  }

  componentWillUnmount() {
    console.log('Will Unmount!')
  }
}

export default AnimalCard;