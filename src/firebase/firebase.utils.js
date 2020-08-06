import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCssFkasakm5PbhFWahb5YHooeBpN-hJEM",
    authDomain: "ecommerce-db-b9987.firebaseapp.com",
    databaseURL: "https://ecommerce-db-b9987.firebaseio.com",
    projectId: "ecommerce-db-b9987",
    storageBucket: "ecommerce-db-b9987.appspot.com",
    messagingSenderId: "19868329927",
    appId: "1:19868329927:web:aa64baa6b78cc20535dbe2",
    measurementId: "G-BS8K65VEBP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if(!userAuth)   return;
    const userRef=firestore.doc(`/user/${userAuth.uid}`);
    const snapShot=await userRef.get();
    //const collectionRef=firestore.collections("/user");
    //const querySnapShot=await collectionRef.add({cat:true}).get();
    if(!snapShot.exists){
        const {displayName, email} =userAuth;
        const createAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...addtionalData
            })
        }catch(error){
            console.log('error while creating user' ,error.message);
        }
    }
    console.log(snapShot);
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
