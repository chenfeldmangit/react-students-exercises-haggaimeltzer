import DB from "./DB"

export default class UserAPI{
    static async login(username, password){
        let user = await DB.getJSON("user-"+username);
        if (user?.password === password){
            await DB.setStr("loggedIn", username);
            return true;
        }
        return false;
    };

    static async logout(){
        await DB.setStr("loggedIn", null);
    };

    static async signup(username, password){
        let user = await DB.getJSON("user-"+username);
        if (user){
            return false;
        }
        await DB.setJSON("user-"+username, {username: username, password: password});
        return true;
    };

};