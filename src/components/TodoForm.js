import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.inputChange = this.inputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    inputChange(event) {
        this.setState({value: event.target.value});
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.add(this.state.value);
        this.setState({value: ''});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input className="form-control" value={this.state.value} onChange={this.inputChange} />
                </div>
                <button type="submit" className="btn">Add</button>
            </form>
        );
    }
};
export default TodoForm;
