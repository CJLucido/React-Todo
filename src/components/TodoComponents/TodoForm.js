import React, {Component} from 'react'

class TodoForm extends Component{
    constructor(){
        super();
        this.state={
            newItem: ""
        }
    }


    handleChange = e => {
        this.setState({
            newItem: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('it\'s working!!!')
    }

    handleClear = e => {
        e.preventDefault();
        console.log('it\'s also working!!!')
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='item'/>
                    <input type='text'
                    name="item"
                    id="item"
                    value={this.state.newItem}
                    onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
                <form onSubmit={this.handleClear}>
                    <button>Clear Completed</button>
                
                </form>
            </div>
        )
    }



}



export default TodoForm