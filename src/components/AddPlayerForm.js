import React, { Component } from 'react';

class AddPlayerForm extends Component{
  constructor(props) {
    super(props);
    this.state = {name: ""};
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
  }
  onNameChange(e) {
    this.setState({name: e.target.value});
  }
  
  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({name: ""});
  }

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

AddPlayerForm.propTypes =  {
      onAdd: React.PropTypes.func.isRequired
};

export default AddPlayerForm;