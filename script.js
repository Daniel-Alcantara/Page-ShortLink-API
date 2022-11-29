$(document).ready(function () {

    $("#gerator_encurtador").click(function () {
        var link = $("#text_value").val()
        shortlink(link)
    });

    $(".short_copy").click(function () {
        var palavra = $("#teste").text()
        navigator.clipboard.writeText(palavra)

        $(".short_copy button").text("Copied")
        $(".short_copy button").css("background", "#3a3053")
    });
    
});


function shortlink(valor) {
    var BaseUrl = "https://api.shrtco.de/v2/"
    var url = BaseUrl + "shorten?url=" + valor

    $.ajax({
        url: url,
        type: "GET",
    }).done(function (response) {
        var link_encurtado = response.result.short_link

        $(".short_generator").css("display", "block")
        $(".short_link_generator").text(valor)
        $(".short_gerator").text(link_encurtado)

    })

}