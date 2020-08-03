import { UserActionTypes } from "../reducer/user/user-type";

const setCurrentUser = user =>({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
});

export default setCurrentUser;