import { useState } from 'react';
import { useStateValue } from '../../index';
import { likeDeveloper } from '../../../sdk/matchProvider';
import { listDeveloper } from '../actions';

const useLikeDeveloper = () => {
  const [{ developers, auth }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const request = async devId => {
    setIsLoading(true);

    const response = await likeDeveloper(auth.user.id, devId);

    if (response) {
      const filtered = developers.list.filter(dev => dev.id !== devId);

      dispatch(listDeveloper(filtered));
    } else {
      console.log(response.error);
    }
    setIsLoading(false);
  };

  return [isLoading, request];
};

export default useLikeDeveloper;
