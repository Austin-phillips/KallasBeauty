const services = (state = [], action) => {
  switch(action.type) {
    case 'GET_SERVICES':
      return action.services
    default:
      return state;
  }
}

export default services;