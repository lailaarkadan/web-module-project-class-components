import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.handlAdd('exploding kittens');

    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }
    render() {
        return( <form>
            <input/>
            <button onClick={this.handleSubmit}> Add</button>
            </form>);


    }
}
 export default TodoForm;