let app = new Vue({

    el: "#root",

    data: {

        slider_1: [

            {
                author: "Elodie David-Touboul",
                brand: "Self Service 54",
                title: "Covers",
                img: "img/covers.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Glen Luchford",
                brand: "Gucci",
                title: "Ouverture 2021",
                img: "",
                video: "video/ouverture-2021.mp4",
                width: "960",
                height: "540"
            },

            {
                author: "Zoë Ghertner",
                brand: "Chloé",
                title: "Brand Campaign 2021",
                img: "img/brand-campaign-2021.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Christopher Simmonds",
                brand: "Gucci",
                title: "Brilliant Beauty Lipstick 2021",
                img: "",
                video: "video/brilliant-beauty-lipstick-2021.mp4",
                width: "960",
                height: "540"
            },


            {
                author: "Elodie David-Touboul",
                brand: "Self Service 54",
                title: "Covers",
                img: "img/covers.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Glen Luchford",
                brand: "Gucci",
                title: "Ouverture 2021",
                img: "",
                video: "video/ouverture-2021.mp4",
                width: "960",
                height: "540"
            },

            {
                author: "Zoë Ghertner",
                brand: "Chloé",
                title: "Brand Campaign 2021",
                img: "img/brand-campaign-2021.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Christopher Simmonds",
                brand: "Gucci",
                title: "Brilliant Beauty Lipstick 2021",
                img: "",
                video: "video/brilliant-beauty-lipstick-2021.mp4",
                width: "960",
                height: "540"
            }

        ],

        slider_2: [

            {
                author: "Lachlan Bailey",
                brand: "Vogue Paris",
                title: "Joyaux De Nuit",
                img: "img/joyaux-de-nuit.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Ferdinando Verderi",
                brand: "Prada",
                title: "Galleria Bag 2021",
                img: "",
                video: "video/galleria-bag-2021.mp4",
                width: "960",
                height: "540"
            },

            {
                author: "Carlos Nazario",
                brand: "i-D Magazine",
                title: "Naomi Campbell",
                img: "img/naomi-campbell.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Ezra Petronio",
                brand: "GLEN LUCHFORD / PRADA 96-98",
                title: "BOOK ART DIRECTION & DESIGN",
                img: "",
                video: "video/book-art-direction-e-design.mp4",
                width: "810",
                height: "540"
            },

            {
                author: "Robbie Spencer",
                brand: "M Le Monde",
                title: "Masculin Pluriel",
                img: "img/masculin-pluriel.jpg",
                video: "",
                width: "",
                height: ""
            },


            {
                author: "Lachlan Bailey",
                brand: "Vogue Paris",
                title: "Joyaux De Nuit",
                img: "img/joyaux-de-nuit.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Ferdinando Verderi",
                brand: "Prada",
                title: "Galleria Bag 2021",
                img: "",
                video: "video/galleria-bag-2021.mp4",
                width: "960",
                height: "540"
            },

            {
                author: "Carlos Nazario",
                brand: "i-D Magazine",
                title: "Naomi Campbell",
                img: "img/naomi-campbell.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Ezra Petronio",
                brand: "GLEN LUCHFORD / PRADA 96-98",
                title: "BOOK ART DIRECTION & DESIGN",
                img: "",
                video: "video/book-art-direction-e-design.mp4",
                width: "810",
                height: "540"
            },

            {
                author: "Robbie Spencer",
                brand: "M Le Monde",
                title: "Masculin Pluriel",
                img: "img/masculin-pluriel.jpg",
                video: "",
                width: "",
                height: ""
            }

        ],

        slider_3: [

            {
                author: "Alasdair McLellan",
                brand: "Re-Edition Magazine:",
                title: "Linn 9000",
                img: "img/linn-9000.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "David Sims",
                brand: "Saint Laurent",
                title: "SS 2021",
                img: "",
                video: "video/ss-2021.mp4",
                width: "960",
                height: "540"
            },

            {
                author: "Colin Dodgson",
                brand: "American Vogue",
                title: "All In The Balance",
                img: "img/all-in-the-balance.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Mario Sorrenti",
                brand: "Calvin Klein",
                title: "Obsessed",
                img: "",
                video: "video/obsessed.mp4",
                width: "364",
                height: "204"
            },


            {
                author: "Alasdair McLellan",
                brand: "Re-Edition Magazine:",
                title: "Linn 9000",
                img: "img/linn-9000.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "David Sims",
                brand: "Saint Laurent",
                title: "SS 2021",
                img: "",
                video: "video/ss-2021.mp4",
                width: "960",
                height: "540"
            },

            {
                author: "Colin Dodgson",
                brand: "American Vogue",
                title: "All In The Balance",
                img: "img/all-in-the-balance.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Mario Sorrenti",
                brand: "Calvin Klein",
                title: "Obsessed",
                img: "",
                video: "video/obsessed.mp4",
                width: "364",
                height: "204"
            }

        ],

        slider_4: [

            {
                author: "Lachlan Bailey",
                brand: "British Vogue",
                title: "Golden Days",
                img: "img/golden-days.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Mario Sorrenti",
                brand: "Self Service 54",
                title: "Bold",
                img: "img/bold.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Dan Tobin Smith",
                brand: "Louis Vuitton",
                title: "Les Parfums",
                img: "",
                video: "video/les-parfums.mp4",
                width: "1920",
                height: "1080"
            },

            {
                author: "Angelo Pennetta",
                brand: "British Vogue",
                title: "Landmark Moment",
                img: "img/landmark-moment.jpg",
                video: "",
                width: "0",
                height: "0"
            },


            {
                author: "Lachlan Bailey",
                brand: "British Vogue",
                title: "Golden Days",
                img: "img/golden-days.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Mario Sorrenti",
                brand: "Self Service 54",
                title: "Bold",
                img: "img/bold.jpg",
                video: "",
                width: "",
                height: ""
            },

            {
                author: "Dan Tobin Smith",
                brand: "Louis Vuitton",
                title: "Les Parfums",
                img: "",
                video: "video/les-parfums.mp4",
                width: "1920",
                height: "1080"
            },

            {
                author: "Angelo Pennetta",
                brand: "British Vogue",
                title: "Landmark Moment",
                img: "img/landmark-moment.jpg",
                video: "",
                width: "0",
                height: "0"
            }

        ],


        staff_1: [

            "Mert Alas & Marcus Piggott",
            "Lachlan Bailey",
            "Anthony Cotsifas | Still Life",
            "Colin Dodgson",
            "Zoë Ghertner",
            "Glen Luchford",
            "Alasdair McLellan",
            "Tyler Mitchell",
            "Oliver Hadlee Pearch",
            "Angelo Pennetta",
            "David Sims",
            "Dan Tobin Smith | Still Life",
            "Mario Sorrenti",
            "Jacob Sutton",
            "Drew Vickers",
            "Harley Weir",
            "Theo Wenner"

        ],

        staff_2: [

            "Joe McKenna"

        ],

        staff_3: [

            "Lina Kutsovskaya",
            "Ezra Petronio",
            "Christopher Simmonds",
            "Ferdinando Verderi"

        ],

        staff_4: [

            "Anastasia Barbieri",
            "Beat Bolliger",
            "Francesca Burns",
            "Marie Chaix",
            "Lucinda Chambers",
            "Jane How",
            "Suzanne Koller",
            "Carlos Nazario",
            "Camilla Nickerson",
            "Robbie Spencer",
            "Elodie David-Touboul",
            "Melanie Ward"

        ],

        staff_5: [

            "Akki | Hair",
            "Shay Ashual | Hair",
            "Cyndia Harvey | Hair",
            "Jawara | Hair",
            "Thomas de Kluyver | Makeup",
            "Didier Malige | Hair",
            "Aaron de Mey | Makeup",
            "Lauren Parsons | Makeup",
            "Lucia Pica | Makeup",
            "Holli Smith | Hair",
            "Yadim | Makeup"

        ]

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
