import UserActionTypes from "../reducer/user/user-type";

const setCurrentUser = user =>({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
});

export const googleSigninStart = () =>({
    type:UserActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSigninStart = emailAndPassword =>({
    type:UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
})

export const signinSuccess = user =>({
    type:UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
})

export const signinFail = error =>({
    type:UserActionTypes.SIGN_IN_FAIL,
    payload:error
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})
  
export const signOutFail = error =>({
    type:UserActionTypes.SIGN_OUT_FAIL,
    payload:error
})

export const signUpStart = userCredentials =>({
    type:UserActionTypes.SIGN_UP_START,
    payload:userCredentials
})

export const signUpSuccess = ({user,additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload:{ user, additionalData }
})
  
export const signUpFail = error =>({
    type:UserActionTypes.SIGN_UP_FAIL,
    payload:error
})

export const checkUserSession = () =>({
    type:UserActionTypes.CHECK_USER_SESSION,
})

export default setCurrentUser;