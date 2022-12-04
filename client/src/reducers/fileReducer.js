const SET_FILES_COUNT = 'SET_FILES_COUNT';
const SET_FILES = 'SET_FILES';
const SET_CURRENT_DIR = 'SET_CURRENT_DIR';
const ADD_FILE = 'ADD_FILE';
const ADD_DIR = 'ADD_DIR';
const PUSH_TO_STACK = 'PUSH_TO_STACK';
const REPLACE_STACK = 'REPLACE_STACK';
const DELETE_FILE = 'DELETE_FILE';
const CHANGE_FILE_NAME = 'CHANGE_FILE_NAME';
const SET_VIEW = 'SET_VIEW';
const SET_FAVORITES = 'SET_FAVORITES';
const SET_IS_ALL_FILES = 'SET_IS_ALL_FILES';

const defaultState = {
  filesCount: 0,
  files: [],
  currentDir: { id: 'root', name: 'Моє сховище' },
  dirStack: [{ id: 'root', name: 'Моє сховище' }],
  view: 'list',
  isAllFiles: true,
};

export default function fileReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_FILES_COUNT:
      return { ...state, filesCount: action.payload };
    case SET_FILES:
      return { ...state, files: action.payload };
    case SET_CURRENT_DIR:
      return { ...state, isAllFiles: true, currentDir: action.payload };
    case ADD_FILE:
      return { ...state, files: [...state.files, action.payload] };
    case ADD_DIR:
      const dirs = state.files.filter(file => file.type === 'dir');
      const files = state.files.filter(file => file.type !== 'dir');
      return { ...state, files: [...dirs, action.payload, ...files] };
    case PUSH_TO_STACK:
      if (!state.isAllFiles) {
        return { ...state, dirStack: [state.dirStack[0], action.payload] };
      }
      return { ...state, dirStack: [...state.dirStack, action.payload] };
    case REPLACE_STACK:
      state.dirStack[state.dirStack.length - 1] = action.payload;
      return { ...state, dirStack: [...state.dirStack] };
    case DELETE_FILE:
      console.log(action.payload);
      return { ...state, files: [...state.files.filter(file => file._id !== action.payload)] };
    case CHANGE_FILE_NAME:
      return {
        ...state,
        files: [
          ...state.files.map(file => {
            return file._id === action.payload._id ? action.payload : file;
          }),
        ],
      };
    case SET_FAVORITES:
      return {
        ...state,
        files: [
          ...state.files.map(file => {
            if (file._id === action.payload._id) {
              file.isFavorite = action.payload.isFavorite;
            }
            return file;
          }),
        ],
      };
    case SET_VIEW:
      return { ...state, view: action.payload };
    case SET_IS_ALL_FILES:
      return { ...state, isAllFiles: action.payload };
    default:
      return state;
  }
}

export const setFilesCount = count => ({ type: SET_FILES_COUNT, payload: count });
export const setFiles = files => ({ type: SET_FILES, payload: files });
export const setCurrentDir = dir => ({ type: SET_CURRENT_DIR, payload: dir });
export const addFile = file => ({ type: ADD_FILE, payload: file });
export const addDir = dir => ({ type: ADD_DIR, payload: dir });
export const pushToStack = dir => ({ type: PUSH_TO_STACK, payload: dir });
export const replaceStack = dir => ({ type: REPLACE_STACK, payload: dir });
export const deleteFileAction = file => ({ type: DELETE_FILE, payload: file });
export const changeFileNameAction = file => ({ type: CHANGE_FILE_NAME, payload: file });
export const setFileView = payload => ({ type: SET_VIEW, payload });
export const setFavorites = file => ({ type: SET_FAVORITES, payload: file });
export const setIsAllFiles = bool => ({ type: SET_IS_ALL_FILES, payload: bool });
