var name1 = document.getElementById("name");
var clgRoll = document.getElementById("clgRoll");
var clgName = document.getElementById("clgName");
var date = document.querySelector("#date");
let today = new Date();
window.onload =()=>{
    name1.innerText="Muskan Priya";
    clgRoll.innerText="201500419";
    clgName.innerText ="GLA University";
    date.innerText = today.toDateString();
}