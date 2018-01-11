import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';

class EditService extends Component {

  handleEdit = () => {
    console.log('Edit button clicked')
  }

  render() {
    return (
      <div>
        <Button
          primary
          onClick={() => this.handleEdit()}
        >Edit</Button>
      </div>
    );
  }
}

export default EditService;
