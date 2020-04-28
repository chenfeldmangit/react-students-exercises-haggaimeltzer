import DB from './DB'

export default class NotificationsApi{
    static firstNotifications(){
        return [
            {id : 1, avatar_imgs: ["https://pbs.twimg.com/profile_images/475721381443670016/-Usuvy6t_400x400.jpeg","https://pbs.twimg.com/profile_images/475721381443670016/-Usuvy6t_400x400.jpeg"], title: 'bla bla', text:'Whds gdsfig giosdog gmfsdgfdk k djkskfgv kdj vkdfv jkdf vkdf vjk vkfd vjkfd vjk fvjk vjk vkslf vjf vskjf vjks jksf vjks'},
            {id : 2, avatar_imgs: ["https://pbs.twimg.com/profile_images/475721381443670016/-Usuvy6t_400x400.jpeg"], title: 'bla bla2', text:'2Whds gdsfig giosdog gmfsdgfdk k djkskfgv kdj vkdfv jkdf vkdf vjk vkfd vjkfd vjk fvjk vjk vkslf vjf vskjf vjks jksf vjks'},
           ];
    };

    static async  getNotifications(){
        let notifications = await DB.getJSON("notifications");
        if(!notifications){
            notifications = NotificationsApi.firstNotifications();
            DB.setJSON(notifications);
        }
        return notifications;
    };

    static async  addNotificationJSON (notification){
        let notifications = await NotificationsApi.getNotifications();
        notifications.push(notification);
        DB.setJSON("notifications", notifications);
    };

    static async addNotification(title, text, avatar_imgs) {
        let notification = {
            title: title,
            text: text,
            avatar_imgs : avatar_imgs? avatar_imgs : [], 
        };
        await(NotificationsApi.addNotificationJSON(notification));
    };
}