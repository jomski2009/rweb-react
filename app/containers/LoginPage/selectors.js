import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = () => state => state.get('loginPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginPage
 */

const selectLoginPage = () => createSelector(
  selectLoginPageDomain(),
  (substate) => substate.toJS()
);

const selectUsername = () => createSelector(
  selectLoginPageDomain(), (substate) => substate.get('username')
)

const selectPassword = () => createSelector(
  selectLoginPageDomain(), (substate) => substate.get('password')
)

export default selectLoginPage;
export {
  selectLoginPageDomain,
  selectPassword,
  selectUsername
};
