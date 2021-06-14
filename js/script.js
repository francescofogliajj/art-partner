$("i.fas.fa-bars").click(
    function () {
        $(".menu").slideDown();
        $(".fa-times").show();
        $(".fa-bars").hide();
    }
);

$("i.fas.fa-times").click(
    function () {
        $(".menu").slideUp();
        $(".fa-times").hide();
        $(".fa-bars").show();
    }
);
