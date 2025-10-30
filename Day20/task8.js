function fun1(){
    console.log("Hi I am kavibalan");
    
}
function fun2(callback){
    console.log("from mayiladuthurai");
    setTimeout(function(){
        console.log("currently reside in vadapalani");
        callback();
        },5000)
    
}
fun2(fun1)