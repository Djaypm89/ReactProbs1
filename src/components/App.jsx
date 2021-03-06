import React, { Component } from 'react';
import DisplayNames from './DisplayNames/DisplayNames';
import AlertButton from './AlertButton/AlertButton';



// 1. Create a DisplayName component that renders a person’s first name and last name to the web page.
//      a. Insert the Exercise 1 state object from the ComponentExercisesSeedData.txt file into
//         your App.js component.
//      b. Pass the first name and last name as props to the component you created to be
//          displayed as <h1> tag in the web page.

// 2. Create a NamesList component that renders a list of names to the web page.
//      a. Insert the Exercise 2 state object from the ComponentExercisesSeedData.txt file into
//         your App.js component.
//      b. From the App.js component, pass the array of strings as props to the component you
//         created to be displayed in a list (use an <ol> or <ul> tag)
// 3. Create a AlertUser component that renders a button that says “Click Me”
//      a. When the button is clicked it will pop up an alert box that says “devCodeCamp”
//      b. IMPORTANT: the function that is responsible for the alert() must be defined in the
//         App.js component and passed as a prop to the AlertUser component, so that when the
//         button is clicked it triggers the function that is being passed as a prop.
// 4. Create a SuperheroTable component that renders a table of superheroes to the web page.
//      a. Insert the Exercise 4 state object from the ComponentExercisesSeedData.txt file into
//         your App.js component.
//      b. Pass the array of objects as props to the SuperheroTable component you created to be
//         displayed in a table (use a <table> tag and any other tags that are required to be nested
//         inside a table tag)
//      c. HINT: think about what higher-order array method could be useful for this particular
//         problem


class App extends Component {

    constructor(props) {
        super(props);
        this.namesList = [
            'Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'
        ]
        
        this.state = {  }
    }


    buttonAlert(){
        alert("devCodeCamp");
    }

    render() { 
        return ( 
            <React.Fragment>
                <DisplayNames listedNames={this.namesList} />
                <AlertButton userClick={this.buttonAlert} />
            </React.Fragment>   
                    
         );
    }
}
 
export default App;

