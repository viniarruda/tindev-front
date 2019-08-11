import authReducer from './auth/reducers';
import matchReducer from './matchs/reducers';

export default ({ auth, developers }, action) => ({
  auth: authReducer(auth, action),
  developers: matchReducer(developers, action),
});
