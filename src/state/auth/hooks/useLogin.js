import { useState } from 'react';
import { useStateValue } from '../../index';
import { login } from '../actions';
import { createDeveloper } from '../../../sdk/matchProvider';

const useProducts = () => {
  const [{ auth }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const formData = async ({ values }) => {
    setIsLoading(true);

    const response = await createDeveloper(values.username);

    if (values.username !== '' && response) {
      dispatch(login(response));
      localStorage.setItem('user', JSON.stringify(response));
    }

    setIsLoading(false);
  };

  return [auth, formData, isLoading];
};

export default useProducts;
