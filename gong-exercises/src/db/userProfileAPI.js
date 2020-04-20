
export default class UserProfileApi{
    static async getProfileData(){
        return profile_data;
    };

    static async getLastTweets(){
        return lastTweets;
    };

    static profile_data = {
        username : 'MeltzerMan',
        twitterHandle : '@meltzerman',
        profileImage: 'https://pbs.twimg.com/profile_images/475721381443670016/-Usuvy6t_400x400.jpeg',
        bgImage: 'https://picsum.photos/300/200?random=7',
        joinedTime: '1/1/1999',
        numFollowing: 5, 
        numFollowers: 9999,
    };

    static lastTweets = [
        {
            timestamp : "1/1/1999",
            text : "this is my last tweet",
            img : "https://picsum.photos/300/200?random=8",
            numComments : 1,
            numRetweets : 2,
            numLikes : 3,
        },    
        {
            timestamp : "1/1/1999",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam ad dolor. Eveniet laborum officiis recusandae praesentium pariatur iure minus quod illum, aut, consec",
            img : "https://picsum.photos/300/200?random=3",
            numComments : 1,
            numRetweets: 2,
            numLikes : 3,
        } ,      
        {
            timestamp : "1/1/1999",
            text : "this is another tweet",
            img : "https://picsum.photos/300/200?random=87",
            numComments : 1,
            numRetweets : 2,
            numLikes : 3,
        } ,        
    ] ;
    
}