$("i.fas.fa-bars").click(
    function () {
        $(".menu").fadeToggle();
        $(".fa-times").show();
        $(".fa-bars").hide();
    }
);

$("i.fas.fa-times").click(
    function () {
        $(".menu").fadeToggle();
        $(".fa-times").hide();
        $(".fa-bars").show();
    }
);
