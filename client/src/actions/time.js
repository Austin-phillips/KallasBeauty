import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getAllTimes = (id) => {
  return (dispatch) => {
    axios.get(`/api/days/${id}/time_slots`)
      .then(res => {
        const { data: time, headers } = res;
        dispatch({ type: 'SET_TIME', time, headers });
      })
      .catch(res => {
        setFlash('Error Loading Times', 'red');
        dispatch(setHeaders(res.headers));
      })
  }
}

export const updateService = (time, dayId, timeId, history) => {
  return (dispatch) => {
    axios.put(`/api/days/${dayId}/time_slots/${timeId}`, { time })
      .then(res => {
        dispatch({ type: 'UPDATE_TIME', time: res.data, headers: res.headers })
      })
      .catch(err => {
        dispatch(setFlash('Failed to Make appointment', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}