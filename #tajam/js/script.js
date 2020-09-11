function myFunction() {
    let burger = document.getElementsByClassName("headerBurger")
    burger[0].classList.toggle("active");

    let menu = document.getElementsByClassName("headerMenu")
    menu[0].classList.toggle("active");

    let body = document.getElementsByTagName("body")
    body[0].classList.toggle("lock");
}

