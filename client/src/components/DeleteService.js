import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';

class DeleteService extends Component {

  handleDelete = () => {
    console.log('Delete button clicked')
  }
  render() {
    return (
      <div>
        <Button 
          color='red'
          onClick={() => this.handleDelete()} 
        >Delete</Button>
      </div>
    );
  }
}

export default DeleteService;
