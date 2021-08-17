export const Types = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',

  SET_INFORMATION_USER: 'SET_INFORMATION_USER',
};

const INITIAL_STATE = {
  isLoggedIn: false,
  username: null,
  password: null,
  currentUser: {
    fullName: null,
    birthDate: null,
    gender: null,
    address: {
      city: null,
      state: null,
      country: null,
    },
  },
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.LOGOUT:
      return INITIAL_STATE;

    case Types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: payload.username,
        password: payload.password,
      };

    case Types.SET_INFORMATION_USER:
      return {
        ...state,
        currentUser: payload.currentUser,
      };

    default:
      return state;
  }
}

export const loginAction = (username, password) => ({
  type: Types.LOGIN,
  payload: {username, password},
});

export const logoutAction = () => ({
  type: Types.LOGOUT,
});

export const informationUserAction = (currentUser) => ({
  type: Types.SET_INFORMATION_USER,
  payload: {currentUser},
});
