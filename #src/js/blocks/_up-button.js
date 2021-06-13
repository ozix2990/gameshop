$(window).on(`scroll`, function(e){
    if($(this).scrollTop() > 700) {
        $(`.up-button`).addClass(`up-button_active`);
    }
    else {
        $(`.up-button`).removeClass(`up-button_active`);
    }
})