import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signinSuccess, signinFail, signOutSuccess, signOutFail, signUpSuccess, signUpFail } from "../action/user-action"
import { createUserProfileDocument, googleProvider, auth, getCurrentUser } from "../../firebase/firebase.utils";
import UserActionTypes from "../reducer/user/user-type";
import CartActionTypes from "../reducer/cart/cart-type";

export function* getSnapshotFromUserAuth(userAuth,addtionalData){
    try{
        const userRef= yield call(createUserProfileDocument, userAuth,addtionalData);
        const userSnapShot=yield userRef.get();
        yield put(signinSuccess({id:userSnapShot.id,...userSnapShot.data()}))
    }catch(error){
        yield put(signinFail(error.message))
    }
}

export function* signInWithGoogle(){
    try{
        const {user} =yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    }catch(error){
        yield put(signinFail(error.message))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try{
        const {user} =yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user)
    }catch(error){
        yield put(signinFail(error.message))
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFail(error));
    }
}

export function* signUp({payload:{ email, password, displayName}}){
    try{
        const {user}=yield auth.createUserWithEmailAndPassword(email,password);
        const additionalData={password, displayName}
        yield put(signUpSuccess({user,additionalData}));
    }catch(error){
        yield put(signUpFail(error));
    }
}

export function* signInAfterSignUp({payload:{user,additionalData}}){
    console.log(user,additionalData)
    yield getSnapshotFromUserAuth(user,additionalData)
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
      } catch (error) {
        yield put(signinFail(error));
      }
}

export function* onGoogleSigninStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSigninStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export default function* userSaga (){
    yield all([
        call(onGoogleSigninStart),
        call(onEmailSigninStart),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onCheckUserSession)
    ])
}