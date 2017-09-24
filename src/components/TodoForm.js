import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.inputChange = this.inputChange.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    inputChange(event) {
        this.setState({value: event.target.value});
    }
    onClickHandler(event) {
        this.props.add(this.state.value);
        this.setState({value: ''});
    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <input className="form-control" value={this.state.value} onChange={this.inputChange} />
                </div>
                <button type="button" className="btn" onClick={(event) => this.onClickHandler(event)} >Add</button>
            </form>
        );
    }
};
export default TodoForm;
