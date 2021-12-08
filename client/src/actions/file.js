import axios from 'axios';
import { API_URL } from '../config';
import { hideLoader, showLoader } from '../reducers/appReducer';
import { addFile, deleteFileAction, setFiles } from '../reducers/fileReducer';
import { addUploadFile, changeUploadFile, showUploader } from '../reducers/uploadReducer';

export const getFiles = (dirId, sort) => {
  return async dispatch => {
    try {
      dispatch(showLoader());
      let url = new URL(`${API_URL}api/files`);

      if (dirId) {
        url.searchParams.append('parent', dirId);
      }
      if (sort) {
        url.searchParams.append('sort', sort);
      }

      const response = await axios.get(url.toString(), {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      console.log(response.data);
      dispatch(setFiles(response.data));
    } catch (e) {
      console.log(e.response.data.message);
    } finally {
      dispatch(hideLoader());
    }
  };
};

export const createDir = (dirId, name) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${API_URL}api/files`,
        { name, parent: dirId, type: 'dir' },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      dispatch(addFile(response.data));
    } catch (e) {
      console.log(e.response.data.message);
    }
  };
};

export const uploadFile = (file, dirId) => {
  return async dispatch => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      if (dirId) {
        formData.append('parent', dirId);
      }

      const uploadFile = { name: file.name, progress: 0, id: Date.now() };
      dispatch(showUploader());
      dispatch(addUploadFile(uploadFile));

      const response = await axios.post(`${API_URL}api/files/upload`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },

        onUploadProgress: progressEvent => {
          const totalLength = progressEvent.lengthComputable
            ? progressEvent.total
            : progressEvent.target.getResponseHeader('content-length') ||
              progressEvent.target.getResponseHeader('x-decompressed-content-length');

          if (totalLength) {
            uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength);
            dispatch(changeUploadFile(uploadFile));
          }
        },
      });

      dispatch(addFile(response.data));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export const downloadFile = async file => {
  try {
    const response = await fetch(`${API_URL}api/files/download?id=${file._id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    if (response.status === 200) {
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  } catch (e) {
    console.log(e.response.data.message);
  }
};

export const deleteFile = file => {
  return async dispatch => {
    try {
      const response = await axios.delete(`${API_URL}api/files?id=${file._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(response.data);
      dispatch(deleteFileAction(file._id));
    } catch (e) {
      alert(e?.response?.data?.message);
    }
  };
};

export const searchFiles = search => {
  return async dispatch => {
    try {
      dispatch(showLoader());
      let url = new URL(`${API_URL}api/files/search`);
      url.searchParams.append('search', search);

      const response = await axios.get(url.toString(), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      dispatch(setFiles(response.data));
    } catch (e) {
      alert(e?.response?.data?.message);
    } finally {
      dispatch(hideLoader());
    }
  };
};
