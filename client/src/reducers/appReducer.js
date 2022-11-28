const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';
const SET_MODAL_CREATE_DIR_OPEN = 'SET_MODAL_CREATE_DIR_OPEN';

const defaultState = {
  loader: false,
  modalCreateDirOpen: false,
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loader: true };
    case HIDE_LOADER:
      return { ...state, loader: false };
    case SET_MODAL_CREATE_DIR_OPEN:
      return { ...state, modalCreateDirOpen: action.payload };
    default:
      return state;
  }
}

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const setModalCreateDirOpen = display => ({ type: SET_MODAL_CREATE_DIR_OPEN, payload: display });
