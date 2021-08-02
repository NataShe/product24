// slider-slick

$(document).ready(function () {
    $('.slider-slick').slick({
        mobileFirst: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/arrow-next.svg" alt="next arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/arrow-prev.svg" alt="previous arrow"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick",
                slidesToShow: 1,
                arrows: false,
            }
        ]
    });
});

//accordeon

const featuresLinkElems = document.querySelectorAll('.features__link');
const featuresItemTextElems = document.querySelectorAll('.features__item__text');

featuresLinkElems.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('features__link_active')) {
            btn.classList.remove('features__link_active');
            featuresItemTextElems[index].classList.add('hidden');        
        } else {
            featuresItemTextElems.forEach((featuresItemTextElem) => {
            featuresItemTextElem.classList.add('hidden');
        });
            featuresLinkElems.forEach((featuresLinkElem) => {
            featuresLinkElem.classList.remove('features__link_active');
        });
        featuresItemTextElems[index]. classList.remove('hidden');
        btn.classList.add('features__link_active');
        
        }
    });
});
