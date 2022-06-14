const modal = document.querySelector(".modal");
const registerBtn = document.querySelector(".header__navbar-item--register");
const loginBtn = document.querySelector(".header__navbar-item--login");
const registerForm = document.querySelector('.auth-form--register');
const loginForm = document.querySelector('.auth-form--login');
const switchLoginBtn = document.querySelector(".switch--login");
const switchRegisterBtn = document.querySelector(".switch--register");


// open modal register form 
registerBtn.onclick = function () {
    modal.classList.add("modal--open")
    registerForm.style.display = "block";
    loginForm.style.display = "none";
}

// open modal login form
loginBtn.onclick = function () {
    modal.classList.add("modal--open")
    loginForm.style.display = "block";
    registerForm.style.display = "none";
}

// ngăn chặn nổi bọt của register form
registerForm.onclick = e => e.stopPropagation();

// ngăn chặn nổi bọt của login form
loginForm.onclick = e => e.stopPropagation();

// modal off
modal.onclick = function (e) {
    e.stopPropagation()
    modal.classList.remove("modal--open");
}

// switch register form
switchRegisterBtn.onclick = function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
}

// switch login form
switchLoginBtn.onclick = function () {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
}


// search select 
const searchSelect = document.querySelector(".header__search-select");
const searchOption = document.querySelector(".header__search-select-option");
let isSearchSelect = true;
if (searchSelect) {
    searchSelect.onclick = () => {
        if (isSearchSelect) {
            searchOption.style.display = "block";
            isSearchSelect = false;
        }
        else {
            searchOption.style.display = "none";
            isSearchSelect = true;
        }
    }
}


// click menu header mobile
const slideBarMenu = document.querySelector(".menu-sidebar-mobile-wrap");
let isMenuSlidebar = true;
const slidebarMobile = document.querySelector('.slidebar-mobile');
if (slideBarMenu) {
    slideBarMenu.onclick = () => {
        if (isMenuSlidebar) {
            slidebarMobile.style.opacity = 1;
            slidebarMobile.style.left = 0;
            isMenuSlidebar = false;

        } else {
            slidebarMobile.style.left = -180 + "px";
            slidebarMobile.style.opacity = 0;
            isMenuSlidebar = true;
        }

    }
}

// menu mobile itemlogin click 
const slidebarMbLogin = document.querySelector('.slidebar-mobile__item--login');
if (slidebarMbLogin) {
    slidebarMbLogin.onclick = () => {
        slidebarMobile.style.left = -180 + "px";
        modal.classList.add("modal--open");
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }
}

// menu mobile item register click 
const slidebarMbRegister = document.querySelector('.slidebar-mobile__item--register');
if (slidebarMbRegister) {
    slidebarMbRegister.onclick = () => {
        slidebarMobile.style.left = -180 + "px";
        modal.classList.add("modal--open");
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    }
}


// click sort bar mobile
const itemsBar = document.querySelectorAll(".header__sort-bar-item");
if (itemsBar) {
    itemsBar.forEach(item => {
        item.onclick = (e) => {
            e.preventDefault();
            const itemHasActive = document.querySelector(".header__sort-bar-item--active");
            itemHasActive.classList.remove("header__sort-bar-item--active");
            item.classList.add("header__sort-bar-item--active");
        }
    })
}


// click cart
const cart = document.querySelector(".header__cart");
const cartList = document.querySelector(".header__cart-all");
let isCart = true;
if (cart) {
    cart.onclick = () => {
        if (isCart) {
            cartList.style.display = "block";
            isCart = false;
        } else {
            cartList.style.display = "none";
            isCart = true;
        }
        
    }
}

// ngăn chặn hành vi nổi bọt
cartList.onclick = (e) => e.stopPropagation();  