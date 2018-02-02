$(".multiple-items").slick({
    infinite: !0,
    vertical: !0,
    arrows: !0,
    dots: !1,
    slidesToShow: 6,
    slidesToScroll: 6,
    focusOnSelect: !0,
    asNavFor: ".fade"
}), $(".fade").slick({
    dots: !0,
    infinite: !0,
    arrows: !1,
    speed: 500,
    fade: !0,
    cssEase: "linear",
    asNavFor: ".multiple-items"
}), $(".single-item").slick({
    dots: !0,
    infinite: !0,
    arrows: !0,
    speed: 500,
    fade: !0,
    cssEase: "linear",
    asNavFor: ".slider-nav"
}), $(".slider-nav").slick({
    dots: !0,
    vertical: !0,
    infinite: !0,
    autoplay: 0,
    arrows: !1,
    speed: 500,
    slidesToShow: 2,
    cssEase: "linear",
    asNavFor: ".single-item"
}), $(".gallery_carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: !0,
    dots: !0,
    autoplaySpeed: 2e3,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 560,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
var size = '<div class="form-group" id="form-group-size">\n<select class="form-control"><option>Размер</option><option>40р 26.5 см</option><option>41р 27.5 см</option><option>42р 28 см</option><option>43р 28.5 см</option><option>44р 29 см</option><option>45р 29.5 см</option></select>\n</div>';
$("form input[name=phone]").closest(".form-group").after(size), $(".form-group:first-child").attr("id", "form-group-name"), $(".form-group:last-child").addClass("form-group-btn"), $(".form-group:nth-child(2)").attr("id", "form-group-phone");
var $i_sel_list = "<div class='i-sel-list'></div>";
$("#form-group-name").before($i_sel_list);
var $name = $("#form-group-name"),
    $phone = $("#form-group-phone"),
    $size = $("#form-group-size");
$(".i-sel-list").append($name, $phone, $size), $(".containerForPolitic").fancybox({
    selector: '[data-fancybox="#politic"]',
    loop: !0
}), $.fancybox.defaults.animationEffect = "fade";