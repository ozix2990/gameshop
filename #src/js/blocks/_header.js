$(`.header__mobile-menu`).on(`click`, function (e) {
    $(this).addClass(`header__mobile-menu_active`);
    $(`.promo__scroll`).addClass(`promo__scroll_no-animate`);
    $(`.header__menu`).addClass(`header__menu_active`).on(`click`, function() {
        $(this).removeClass(`header__menu_active`);
      $(`.header__mobile-menu`).removeClass(`header__mobile-menu_active`);
      setTimeout(() => {
        $(`.promo__scroll`).removeClass(`promo__scroll_no-animate`);
      }, 500);
    });
});