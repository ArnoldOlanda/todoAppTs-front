import {useEffect, useState} from 'react';
import {AxiosResponse} from 'axios';
import {AxiosCall} from '../models/axiosCall.model';

export const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;

    setLoading(true);

    let result = {} as AxiosResponse<any>;

    try {
      result = await axiosCall.call;
    } catch (error: any) {
      setLoading(false);
      throw error;
    }

    setLoading(false);
    return result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };
  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return {
    loading,
    callEndpoint,
  };
};
