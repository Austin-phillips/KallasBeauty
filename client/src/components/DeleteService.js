// import React, { Component } from 'react';
// import { Button } from 'semantic-ui-react';
// import { deleteService } from '../actions/service';
// import { connect } from 'react-redux';

// class DeleteService extends Component {

//   handleDelete = () => {
//     this.props.dispatch(deleteService(this.props.services.id))
//   }
//   render() {
//     const { id } = this.props.services;
//     return (
//       <div>
//         <Button 
//           color='red'
//           onClick={() => this.handleDelete(id)} 
//         >Delete</Button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { services: state.services}
// }

// export default connect(mapStateToProps)(DeleteService);
