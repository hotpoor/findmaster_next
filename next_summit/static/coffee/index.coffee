$ ->
    console.log "index.coffee"
    scrollIntoView_option =
        "behavior":"smooth"
        "block":"start"
        "inline":"nearest"
    $("body").on "click",".next_page_menu",(evt)->
        $(".next_page_menu").removeClass("next_page_menu_current")
        _data_name = $(this).attr("data-name")
        $(".next_page[data-name=#{_data_name}]")[0].scrollIntoView(scrollIntoView_option)
        $(this).addClass("next_page_menu_current")

    fix_menus = ()->
        _current_top = ($(window).height() - $(".next_page_menus").height())/2
        _current_right = ($(".next_top").width() - 1440)/2
        if _current_right < 0
            _current_right = 0
        _current_right +=10 
        $(".next_page_menus").css
            top:"#{_current_top}px"
            right:"#{_current_right}px"
    $(window).on "load",()->
        fix_menus()
    $(window).on "resize",()->
        fix_menus()
    $(window).on "scroll",()->
        console.log $(window).scrollTop(),$(window).height(),$("body").height()
        _current_scrollTop = $(window).scrollTop()
        _current_item = $(".next_page")[0]
        for item in $(".next_page")
            console.log $(item).offset()
            if _current_scrollTop >= parseInt($(item).offset()["top"])
                _current_item = item
            if _current_scrollTop < $(item).offset()["top"]
                break
        $(".next_page_menu").removeClass("next_page_menu_current")
        _data_name = $(_current_item).attr("data-name")
        console.log "_data_name",_data_name
        if _data_name == "About2"
            _data_name = "About"
        $(".next_page_menu[data-name=#{_data_name}]").addClass("next_page_menu_current")


        



