document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.documentElement;

    let tabsParrent = document.querySelector(".form__wrapper--cards");
    let tabs = document.querySelectorAll(".form__card");
    let tabsContent = document.querySelectorAll(".form__card-content");

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.style.display = "none";
        });

        tabs.forEach((item) => {
            item.classList.remove("form__card--active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("form__card--active");
    }

    hideTabContent();
    showTabContent();

    tabsParrent.addEventListener("click", (e) => {
        const target = e.target;
        e.preventDefault();
        if (target && target.classList.contains("form__card")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    let inputEmail = document.querySelector("input[type=email]")
    let inputEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


    function validateEmail(value) {
        return inputEmailRegex.test(value);
    }
    function updateInput() {
        if (validateEmail(inputEmail.value)){
            inputEmail.style.borderColor = 'green';
        } else {
            inputEmail.style.borderColor = 'red';
        }
    }
    inputEmail.addEventListener('input', updateInput);

    console.log("DOM fully loaded and parsed");
})