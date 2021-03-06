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

export const updateService = (service, id, history) => {
  return (dispatch) => {
    axios.put(`/api/services/${id}`, { service })
      .then(res => {
        dispatch({ type: 'UPDATE_SERVICE', service: res.data, headers: res.headers })
      })
      .catch(err => {
        dispatch(setFlash('Failed to update service', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}

export const deleteService = (id) => {
  return (dispatch) => {
    axios.delete(`/api/services/${id}`)
      .then(res => {
        dispatch({ type: 'DELETE_SERVICE', id, headers: res.headers });
      })
      .catch(err => {
        dispatch(setFlash('Error Deleting Service. Try Again,', 'red'));
        dispatch(setHeaders(err.headers));
      });
  }
}

export const addService = (service) => {
  return (dispatch) => {
    axios.post(`/api/services`, { service })
      .then(res => {
        dispatch({ type: 'ADD_SERVICE', service: res.data, headers: res.headers })
      })
      .catch(err => {
        dispatch(setFlash('Failed to add service', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}