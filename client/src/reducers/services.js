const services = (state = [], action) => {
  switch(action.type) {
    case 'GET_SERVICES':
      return action.services
    case 'DELETE_SERVICE':
      return state.filter(service => service.id !== action.id)
    case 'GET_SERVICE':
      return action.service
    default:
      return state;
  }
}

export default services;