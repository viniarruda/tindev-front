import { useState } from 'react';
import { useStateValue } from '../../index';
import { loadDevelopers } from '../../../sdk/matchProvider';
import { listDeveloper } from '../actions';

const useProducts = () => {
  const [{ developers }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const request = async () => {
    setIsLoading(true);

    const response = await loadDevelopers();

    if (response) {
      dispatch(listDeveloper(response));
    } else {
      dispatch(listDeveloper(response.error));
    }
    setIsLoading(false);
  };

  return [isLoading, request];
};

export default useProducts;
