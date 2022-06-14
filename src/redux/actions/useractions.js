import { AsyncStorage } from '@react-native-async-storage/async-storage';

export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_JWT = 'SET_USER_JWT';
export const SET_USER_ATTENDENCE = 'SET_USER_ATTENDENCE';
export const SET_USER_LEAVE_TYPES = 'SET_USER_LEAVE_TYPES';
export const SET_APP_URL = 'SET_APP_URL';
export const SET_LEAVE_LIST = 'SET_LEAVE_LIST';


export const setDetails = details => dispatch => {
    dispatch({
        type: SET_USER_DETAILS,
        payload: details,
    });
};
export const setToken = token => dispatch => {
    dispatch({
        type: SET_USER_TOKEN,
        payload: token,
    });
};
export const setJWT = jwt => dispatch => {
    dispatch({
        type: SET_USER_JWT,
        payload: jwt,
    });
};
export const setAttendence = attendence => dispatch => {
    dispatch({
        type: SET_USER_ATTENDENCE,
        payload: attendence,
    });
};
export const setLeavetype = leavetypes => dispatch => {
    // console.log("gfghsdf",leavetypes);
    dispatch({
        type: SET_USER_LEAVE_TYPES,
        payload: leavetypes,
    });
};
export const setAppUrl = appUrl => dispatch => {
    console.log("here");
    dispatch({
        type: SET_APP_URL,
        payload: appUrl,
    });
};
export const setLeavelist = leavelist => dispatch => {
    console.log("gfghsdf");
    dispatch({
        type: SET_LEAVE_LIST,
        payload: leavelist,
    });
};