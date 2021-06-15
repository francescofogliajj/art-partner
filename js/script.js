$(".hamburger-icon").click(
    function () {
        $(".menu").fadeToggle();
        $(".top").toggleClass("rotate-1");
        $(".middle").toggleClass("opacity");
        $(".bottom").toggleClass("rotate-2");
    }
);