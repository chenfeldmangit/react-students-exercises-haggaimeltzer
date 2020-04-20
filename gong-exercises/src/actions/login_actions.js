
export default class LoginActions{
    static LOGIN = 'LOGIN';
    static LOGOUT = 'LOGIN';
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
