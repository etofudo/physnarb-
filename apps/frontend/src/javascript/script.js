function photoselection(){
    document.querySelector('label').innerHTML = '<div id="file-chooser">' + event.target.files[0].name + '<input type="file" name="" id="" onchange="photoselection()"><i></i></div>';
}
/*function showMenu(){
respMenu = document.querySelectorAll('.resp1');
for(let mj = 0; mj <= respMenu.length - 1; mj++){
    respMenu[mj].style="font-weight: lighter;display: block;";
}
}*/
function myFunction(x){
x.classList.toggle("change");
}