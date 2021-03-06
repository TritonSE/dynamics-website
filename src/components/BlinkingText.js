/**
 * Sources: (React Bullets) https://stackoverflow.com/questions/56339450/how-to-render-bullet-character-in-react-native
 */

import React, { Component } from 'react';
//import { Html5Entities } from 'html-entities'; 
import '../css/BlinkingColors.css';

class BlinkingText extends Component {
	// area where functions are defined (See FormExample.js)
	
	// render function takes care of displaying component
	render() {
        
        //used to display the bullet point properly
        //const entities = new Html5Entities();

        // function changeColor() {
        //     //reference the text in headers
        //     var x = document.getElementById("dynamicsTxt");
        //     //dynamics color is black --> turn pink with green bullet
        //     if (x.style.color === "black") {
        //       x.style.color = "#E42B6E";
        //     }
        //     //dynamics color is pink --> turn black with pink bullet
        //     else{
        //         x.style.color = "black";
        //     }
        //   }
        //changeColor of "Dynamics" every 1 second
        // setInterval(changeColor, 1000)
        
    
        // component will render JSX (react's version of html) inside return statement
		return (
            <div className="Body-Header">
              <p className="Pink" id="dynamicsTxt"> Dynamics </p> 
              <p> Performance </p>
              <p> Team </p>
        </div>
        );
	}
}

// always export to allow importing in other files
export default BlinkingText;