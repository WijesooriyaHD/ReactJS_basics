import React, { Component } from 'react';
class Form extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            username : '',
            language:''
        }
    }

    handleusernameChange = event =>{
        this.setState({
            username:event.target.value
        })

    }

    handleLan= event =>{

        this.setState({
            language:event.target.value
        })

        

    }

    handleSubmit= event =>{
        alert(`${this.state.username} ${this.state.language}`)
        event.preventDefault()
    }
    

    render() { 
        return (
            <><div>
                <h1>Submit form</h1>
            </div>
            <div>
            <form onSubmit={this.handleSubmit}>
                    <div>
                        <label> user name</label>
                        <input type='text'
                            value={this.state.username}
                            onChange={this.handleusernameChange}>

                        </input>

                    </div>

                    <div>
                        <label> language</label>
                        <select value={this.state.language} onChange={this.handleLan}>
                            <option value='1'> 1 </option>
                            <option value='2'> 2 </option>

                        </select>
                    </div>
                    <button type='submit'>submit</button>


                </form>
                </div></>
        );
    }
}
 
export default Form;