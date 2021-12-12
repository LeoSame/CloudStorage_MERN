const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';
const SET_MODAL_DISPLAY = 'SET_MODAL_DISPLAY';

const defaultState = {
  loader: false,
  modalDisplay: 'none',
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loader: true };
    case HIDE_LOADER:
      return { ...state, loader: false };
    case SET_MODAL_DISPLAY:
      return { ...state, modalDisplay: action.payload };
    default:
      return state;
  }
}

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const setModalDisplay = display => ({ type: SET_MODAL_DISPLAY, payload: display });
