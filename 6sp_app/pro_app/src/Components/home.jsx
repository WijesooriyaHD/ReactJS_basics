import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './home.css'
import Typist from 'react-typist';


class Home extends Component {
    
    
    render() { 
        return (
            <><div>
                <Typist cursor={{hideWhenDone: true , hideWhenDoneDelay:10}}>
  
                <h1> Welcome to Risk Predictor</h1>

                </Typist>
            </div>
            <div>
            <Link to="/form"><button>click here
            </button></Link>
            </div>
            </>
        );
    }
}
 
export default Home;