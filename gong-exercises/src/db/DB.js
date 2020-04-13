
export default class DB{
    static async setJSON (key, jsonObject){
        localStorage.setItem(key, JSON.stringify(jsonObject));
    };
    static async getJSON (key){
        return JSON.parse(localStorage.getItem(key));
    };
}