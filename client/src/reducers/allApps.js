const allApps = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_APPOINTMENTS':
      return action.allApps
    default:
      return state;
  }
}

export default allApps;