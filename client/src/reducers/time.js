const time = (state = [], action) => {
  switch (action.type) {
    case 'SET_TIME':
      return action.time
    case 'UPDATE_TIME':
      return state.map(s => {
        if (s.id === action.time.id)
          return action.time
        return s
      })
    default:
      return state;
  }
}

export default time;