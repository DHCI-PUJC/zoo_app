import React, { Component } from 'react';
import styles from'./AnimalCard.module.css';
import  { Link } from 'react-router-dom';

class AnimalCard extends Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.animalContainer}>
          <img 
            src={this.props.animal.img} 
            className={styles.animalImage} 
            alt='imagen del animal' />
          <h3>{ this.props.animal.name }</h3>
          <p>{ this.props.animal.description }</p>

          <Link 
            onClick={this.onAnimalCardSelect} 
            to='/details'>Ver más</Link>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.onAnimalCardSelect = this.onAnimalCardSelect.bind(this);
  }

  onAnimalCardSelect() {
    this.props.onAnimalsSelect(this.props.animal);
  }
}

export default AnimalCard;