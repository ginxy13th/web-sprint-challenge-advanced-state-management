import React from 'react';
import SmurfCard from './smurfCard.js';
import SmurfForm from './smurfForm';

const SmurfContainer = (props) => {
    
    return (
        <div>
          {props.characters.map(each => {
              return (
                <SmurfCard key={each.id} characters={each} />   
              )
                
                })}  
                <SmurfForm />
        </div>
    )
}
 export default SmurfContainer