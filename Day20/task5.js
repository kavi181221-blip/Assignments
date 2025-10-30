function f1(name){
    console.log("My name is",name);
}
function f2(callback){
    let name="Kavibalan";
    callback(name);
}
f2(f1)