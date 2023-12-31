// Generated by CoffeeScript 2.7.0
(function() {
  $(function() {
    var fix_menus, scrollIntoView_option;
    console.log("index.coffee");
    scrollIntoView_option = {
      "behavior": "smooth",
      "block": "start",
      "inline": "nearest"
    };
    $("body").on("click", ".next_page_menu", function(evt) {
      var _data_name;
      $(".next_page_menu").removeClass("next_page_menu_current");
      _data_name = $(this).attr("data-name");
      $(`.next_page[data-name=${_data_name}]`)[0].scrollIntoView(scrollIntoView_option);
      return $(this).addClass("next_page_menu_current");
    });
    fix_menus = function() {
      var _current_right, _current_top;
      _current_top = ($(window).height() - $(".next_page_menus").height()) / 2;
      _current_right = ($(".next_top").width() - 1440) / 2;
      if (_current_right < 0) {
        _current_right = 0;
      }
      _current_right += 10;
      return $(".next_page_menus").css({
        top: `${_current_top}px`,
        right: `${_current_right}px`
      });
    };
    $(window).on("load", function() {
      return fix_menus();
    });
    $(window).on("resize", function() {
      return fix_menus();
    });
    return $(window).on("scroll", function() {
      var _current_item, _current_scrollTop, _data_name, i, item, len, ref;
      console.log($(window).scrollTop(), $(window).height(), $("body").height());
      _current_scrollTop = $(window).scrollTop();
      _current_item = $(".next_page")[0];
      ref = $(".next_page");
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        console.log($(item).offset());
        if (_current_scrollTop >= parseInt($(item).offset()["top"])) {
          _current_item = item;
        }
        if (_current_scrollTop < $(item).offset()["top"]) {
          break;
        }
      }
      $(".next_page_menu").removeClass("next_page_menu_current");
      _data_name = $(_current_item).attr("data-name");
      console.log("_data_name", _data_name);
      if (_data_name === "About2") {
        _data_name = "About";
      }
      return $(`.next_page_menu[data-name=${_data_name}]`).addClass("next_page_menu_current");
    });
  });

}).call(this);
