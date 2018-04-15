const lastDate = (state = [], action) => {
  switch (action.type) {
    case 'SET_LAST_DATE':
      return action.lastDate
    default:
      return state;
  }
}

export default lastDate;