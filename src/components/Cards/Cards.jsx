import React from 'react'
import './Cards.css'
import '../../App.css'
import CardItem from './CardItem'

export default function Cards () {
  return (
    <div className='cards'>
          <h1> Check out this Unstopable Destinations </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep insite the great Amazon"
              label='Adventure'
              path='/services'
              />
                <CardItem
              src="images/img-2.jpg"
              text="Explore the hidden waterfall deep insite the great Amazon"
              label='Adventure'
              path='/services'
              />
                <CardItem
              src="images/img-5.jpg"
              text="Explore the hidden waterfall deep insite the great Amazon"
              label='Adventure'
              path='/services'
              />
                <CardItem
              src="images/img-3.jpg"
              text="Explore the hidden waterfall deep insite the great Amazon"
              label='Adventure'
              path='/services'
              />
                <CardItem
              src="images/img-4.jpg"
              text="Explore the hidden waterfall deep insite the great Amazon"
              label='Adventure'
              path='/services'
              />
            </ul>
          </div>
        </div>
    </div>
  )
}
