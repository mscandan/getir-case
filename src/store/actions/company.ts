/* eslint-disable no-console */
import axios from 'axios';
import { Dispatch } from 'redux';
import ActionTypes from './types';

export const getCompanies = () => async (dispatch: Dispatch) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/companies`);
  try {
    dispatch({
      payload: data,
      type: ActionTypes.GET_ALL_COMPANIES,
    });
  } catch (error) {
    console.error(error);
  }
};
