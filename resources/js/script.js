$(document).ready(function() {
    console.log("Pagina cargada!");

    $("#btnLanding").on("click", function() {
        $("#SectionOne").hide();
        $("#SectionTwo").show();
    })

    $("#idHome").on("click", function() {
        $("#SectionOne").show();
        $("#SectionTwo").hide();
    });

});

function actionPage() {




}