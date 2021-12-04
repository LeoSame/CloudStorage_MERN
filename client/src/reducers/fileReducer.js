const SET_FILES = 'SET_FILES';
const SET_CURRENT_DIR = 'SET_CURRENT_DIR';

const defaultState = {
  files: [],
  SET_CURRENT_DIR: null,
};

export default function fileReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_FILES:
      return { ...state, files: action.payload };
    case SET_CURRENT_DIR:
      return { ...state, currentDir: action.payload };
    default:
      return state;
  }
}

export const setFiles = fiels => ({ type: SET_FILES, payload: fiels });
export const setCurrentDir = currentDir => ({ type: SET_CURRENT_DIR, payload: currentDir });
