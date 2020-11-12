import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectErrorMessage = createSelector(
    [selectUser],
    user => user.error
)

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)
