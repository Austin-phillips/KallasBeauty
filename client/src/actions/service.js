import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

const setServices = (services) => {
  return { type: 'GET_SERVICES', services }
}

export const getServices = () => {
  return dispatch => {
    axios.get('/api/services')
    .then( res => {
      dispatch(setServices(res.data))
    })
    .catch( err => {
      dispatch(setFlash('Error loading services, please try again.', 'red'))
    })
  }
}

export const getSingleService = (id) => {
  return (dispatch) => {
    axios.get(`/api/services/${id}`)
    .then( res => {
      dispatch({ type: 'GET_SERVICE', service: res.data, headers: res.headers })
    })
    .catch( err => {
      dispatch(setFlash('Failed to update Service', 'red'))
      dispatch(setHeaders(err.headers))
    });
  }
}

export const deleteService = (id) => {
  return (dispatch) => {
    axios.delete(`/api/services/${id}`)
      .then(res => {
        const { data: headers } = res;
        dispatch({ type: 'DELETE_SERVICE', id, headers: res.headers });
      })
      .catch(err => {
        dispatch(setFlash('Error Deleting Service. Try Again,', 'red'));
        dispatch(setHeaders(err.headers));
      });
  }
}