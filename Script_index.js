
let menubtn = document.getElementById("menu_btn")
menubtn.addEventListener("click",()=>{
    opnsdmenu(true);
})

const opnsdmenu = (flag)=>{
    let sidemenu = document.getElementById("side_menu")
    sidemenu.className = flag ? "active" : ""
}

let menuclosebtn = document.getElementById("menu_close_btn")
menuclosebtn.addEventListener("click",()=>{
    opnsdmenu(false);
})
