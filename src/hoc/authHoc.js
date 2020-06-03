import React, { useContext, useEffect } from 'react';
import { useAsync } from 'react-hook-async';

import authCtx from '../components/context/auth';
import Auth from '../components/auth';
import Loading from '../components/loadingIndicator';

import { me } from '../api/profile';

const withAuth = (WrappedComponent) => (props) => {
  const { authUser, setAuthUser } = useContext(authCtx);

  const [profileApi, fetchProfile] = useAsync(null, me);

  useEffect(() => {
    if (!authUser) {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        fetchProfile(jwt).then((user) => setAuthUser(user));
      }
    }
  }, [authUser, fetchProfile, setAuthUser]);

  if (profileApi.loading) {
    return <Loading />;
  }
  if (authUser !== null) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Auth {...props} />;
};

export default withAuth;
