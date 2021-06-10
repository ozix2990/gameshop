$(`.header__mobile-menu`).on(`click`, function (e) {
    $(this).addClass(`header__mobile-menu_active`);
    $(`.header__menu`).addClass(`header__menu_active`).on(`click`, function() {
        $(this).removeClass(`header__menu_active`);
      $(`.header__mobile-menu`).removeClass(`header__mobile-menu_active`);
    })
});