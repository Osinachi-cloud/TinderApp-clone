// import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            Url:"image/Elon-Musk.jpg"
        },
        {
            name: 'Bill Gates',
            Url:"image/Billgates.jpg"
        },
        {
            name: 'Steve Jobs',
            Url:"image/steve.jpg"
        }, 
        {
            name: 'Mark Zuckerberg',
            Url:"image/Mark.jpg"
        },
        {
            name: 'Ellen',
            Url:"image/ellen.jpg"
        }
        ,
        {
            name: 'Jeff Bezos',
            Url: 'image/Jeff-Bezos.jpg'
        },
        {
            name: 'Ogbodo Osinachi',
            Url:"image/Osinachi1.png"
        }
    ]);
    const swiped = (direction, nameToDelete)=>{
        console.log("removing:" + nameToDelete);
    };
    const outOfFrame =(name)=>{
        console.log(name + "left the screen")
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
           
              {people.map((person)=>(
                  <TinderCard
                      className="swipe"
                      key={person.name}
                      preventSwipe={["up","down"]}
                      onSwipe={(dir)=>swiped(dir, person.name)}
                      onCardLeftScreen={()=>outOfFrame(person.name)}
                      >
                      <div 
                      style={{background: `url(${ person.Url} )`}}
                      className="card"    
                      >
                        <h3>{person.name}</h3>
                      </div>
                  </TinderCard>
            ))}
            </div>
            
            
        </div>
    )
}

export default TinderCards
 