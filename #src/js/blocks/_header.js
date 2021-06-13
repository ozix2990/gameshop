$(`.header__mobile-menu`).on(`click`, function (e) {
    if (!$(this).hasClass(`header__mobile-menu_active`)) {
      $(this).addClass(`header__mobile-menu_active`);
      $(`.header__menu`).addClass(`header__menu_active`);
      $(`body`).addClass(`hidden`);
    }
    else {
      $(this).removeClass(`header__mobile-menu_active`);
      $(`.header__menu`).removeClass(`header__menu_active`);
      $(`body`).removeClass(`hidden`);
    
    }
  
});

$(`.header__menu`).on(`click`, function(){
  if($(this).hasClass(`header__menu_active`)) {
    $(this).removeClass(`header__menu_active`);
    $(`.header__mobile-menu`).removeClass(`header__mobile-menu_active`);
    $(`body`).removeClass(`hidden`);
  }
});