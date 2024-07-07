// Nav bar
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden');
    });
});

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden');
});

navClose.addEventListener("click", () => {
    navMenu.classList.add('hidden');
});

// Tabs
const tabs = document.querySelectorAll(".tabs__wrap ul li");
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const beverages = document.querySelectorAll('.beverage');
const snacks = document.querySelectorAll('.snack');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        })

        tab.classList.add("active");
        
        const tabVal = tab.getAttribute('data-tabs');

        all.forEach(item => {
            item.style.display = 'none'
        })

        if(tabVal == 'food'){
            foods.forEach(item => {
                item.style.display = 'block'
            })  
        }else if(tabVal == 'beverage'){
            beverages.forEach(item => {
                item.style.display = 'block'
            })  
        }else if(tabVal == 'snack'){
            snacks.forEach(item => {
                item.style.display = 'block'
            })  
        }else{
            all.forEach(item => {
                item.style.display = 'block'
            })   
        }
    })
});

//Swiper
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
        }
      }
});