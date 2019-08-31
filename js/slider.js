jQuery(document).ready(function($) {
    "use strict";
    $('#customers-testimonials').owlCarousel( {
            loop: true,
            center: true,
            items: 3,
            margin: 30,
            autoplay: true,
            dots:false,
            autoplayTimeout: 8000,
            smartSpeed: 450,
            nav:true,
          navText: ['<i class="fa fa-angle-left icon-left"></i>','<i class="fa fa-angle-right icon-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });
    });