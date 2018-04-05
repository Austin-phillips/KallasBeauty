const day = (state = [], action) => {
  switch (action.type) {
    case 'SET_DAY':
      return action.day
    default:
      return state;
  }
}

export default day;