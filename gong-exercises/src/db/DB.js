
export default class DB{
    static async setJSON (key, jsonObject){
        localStorage.setItem(key, JSON.stringify(jsonObject));
    };
    static async getJSON (key){
        return JSON.parse(localStorage.getItem(key));
    };

    static async setStr (key, strObject){
        localStorage.setItem(key, strObject);
    };

    static async getStr (key, strObject){
        return localStorage.getItem(key);
    };
}