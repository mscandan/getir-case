/* eslint-disable no-console */
import axios from 'axios';
import API_URL from 'constants/api';
import { Dispatch } from 'redux';
import ActionTypes from './types';

export const getCompanies = () => async (dispatch: Dispatch) => {
  const { data } = await axios.get(`${API_URL}/companies`);
  try {
    dispatch({
      payload: data,
      type: ActionTypes.GET_ALL_COMPANIES,
    });
  } catch (error) {
    console.error(error);
  }
};
