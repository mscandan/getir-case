/* eslint-disable no-console */
import axios from 'axios';
import API_URL from 'constants/api';
import { AppDispatch } from 'store';
import ActionTypes from './types';

export const getCompanies = () => async (dispatch: AppDispatch) => {
  const { data } = await axios.get(`${API_URL}/companies`);
  try {
    dispatch({
      type: ActionTypes.GET_ALL_COMPANIES,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
