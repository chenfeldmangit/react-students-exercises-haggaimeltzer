
export default class LoginActions{
    static LOGIN = 'LOGIN';
    static LOGOUT = 'LOGOUT';
    static createLoggedInAction(username) {
        return {
            type: LoginActions.LOGIN,
            loginData: {
                username: username,
            }
        }
    };

    static createLoggedOutAction() {
        return {
            type: LoginActions.LOGOUT
        }
    };

}
