import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const fetchImages = () => {
  return (dispatch) => {
    axios.get('/api/images')
      .then( res => {
        dispatch({ type: 'SET_IMAGES', images: res.data })
      })
      .catch( err => {
        dispatch(setFlash('Error Loading Photos, Please Try Again.', 'red'))
      })
  }
}

export const handleUpload = ( image, callback ) => {
  return(dispatch) => {
    let data = new FormData();
    data.append(image.name, image);
    axios.post('/api/images', data)
      .then( res => {
        dispatch(setFlash('Photo uploaded successfully', 'green'))
        dispatch({ type: 'ADD_IMAGE', image: res.data, headers: res.headers})
        callback();
      })
      .catch( err => {
        dispatch(setFlash('Error uploading photo', 'red'))
        callback();
      })
  }
}

export const deleteImage = (id) => {
  return (dispatch) => {
    axios.delete(`/api/images/${id}`)
      .then(res => {
        dispatch({ type: 'DELETE_IMAGE', id, headers: res.headers });
      })
      .catch(err => {
        dispatch(setFlash('Error Deleting Service. Try Again,', 'red'));
        dispatch(setHeaders(err.headers));
      });
  }
}