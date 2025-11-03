let user={
    username:"Kavi",
    isLoggedIn:false,

    login:function(){
        this.isLoggedIn=true;
        console.log(`${this.username} logged In`);
        
    },

    logout:function(){
        this.isLoggedIn=false;
        console.log(`${this.username}logged out`);
        
    }
};
user.login();
user.logout();
