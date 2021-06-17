let app = new Vue({

    el: "#root",

    data: {

        slider_1: [

            {
                author: "Elodie David-Touboul",
                brand: "Self Service 54",
                title: "Covers",
                img: "https://www.artpartner.com/propeller/uploads/2021/05/AP0295549_-615x803.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Glen Luchford",
                brand: "Gucci",
                title: "Ouverture 2021",
                img: "",
                video: "https://www.artpartner.com/propeller/uploads/2021/05/PRE_GL_GUCCI_OUVERTURE_2021_2.mp4.mp4",
                width: "960",
                height: "540"
            },

            {
                author: "Zoë Ghertner",
                brand: "Chloé",
                title: "Brand Campaign 2021",
                img: "https://www.artpartner.com/propeller/uploads/2021/06/AP0294781_-615x778.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Christopher Simmonds",
                brand: "Gucci",
                title: "Brilliant Beauty Lipstick 2021",
                img: "",
                video: "https://www.artpartner.com/propeller/uploads/2021/04/PRE_CS_GUCCI_BEAUTY-LIPSTICK_2021.mp4",
                width: "960",
                height: "540"
            },


            {
                author: "Elodie David-Touboul",
                brand: "Self Service 54",
                title: "Covers",
                img: "https://www.artpartner.com/propeller/uploads/2021/05/AP0295549_-615x803.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Glen Luchford",
                brand: "Gucci",
                title: "Ouverture 2021",
                img: "",
                video: "https://www.artpartner.com/propeller/uploads/2021/05/PRE_GL_GUCCI_OUVERTURE_2021_2.mp4.mp4",
                width: "960",
                height: "540"
            },

            {
                author: "Zoë Ghertner",
                brand: "Chloé",
                title: "Brand Campaign 2021",
                img: "https://www.artpartner.com/propeller/uploads/2021/06/AP0294781_-615x778.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Christopher Simmonds",
                brand: "Gucci",
                title: "Brilliant Beauty Lipstick 2021",
                img: "",
                video: "https://www.artpartner.com/propeller/uploads/2021/04/PRE_CS_GUCCI_BEAUTY-LIPSTICK_2021.mp4",
                width: "960",
                height: "540"
            }

        ],

    }

});

$(".hamburger-icon").click(
    function () {
        $(".menu").fadeToggle();
        $(".top").toggleClass("rotate-1");
        $(".middle").toggleClass("opacity");
        $(".bottom").toggleClass("rotate-2");
    }
);
