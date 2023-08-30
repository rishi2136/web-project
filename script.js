let prod_option = document.querySelector(".head_option1");
let products = document.querySelector(".head_product_option");
prod_option.addEventListener("mouseenter", () => {
    products.classList.add("visible");
});
prod_option.addEventListener("mouseout", () => {
    setTimeout(()=>{
        products.classList.remove("visible");
    },1000);
});

let exp_option = document.querySelector(".head_option2");
let explorers = document.querySelector(".head_explorer_option");
exp_option.addEventListener("mouseenter",()=>{
    explorers.classList.add("visible2");
});
exp_option.addEventListener("mouseout", ()=> {
setTimeout(()=>{
    explorers.classList.remove("visible2");
},1000);
});

let login_btn = document.querySelector(".head_login_btn");
let logins = document.querySelector(".login_link");
login_btn.addEventListener("mouseenter", () => {
    logins.classList.add("visible");
});
login_btn.addEventListener("mouseout", () => {
    setTimeout(()=>{
        logins.classList.remove("visible");
    },1000);
});
