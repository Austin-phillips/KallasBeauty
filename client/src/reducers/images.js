const images = (state = [], action) => {
  switch(action.type) {
    case 'SET_IMAGES':
      return action.images
    case 'ADD_IMAGE':
      return [action.image, ...state]
    case 'DELETE_IMAGE':
      return state.filter(image => image.id !== action.id)
    default:
      return state
  }
}

export default images;