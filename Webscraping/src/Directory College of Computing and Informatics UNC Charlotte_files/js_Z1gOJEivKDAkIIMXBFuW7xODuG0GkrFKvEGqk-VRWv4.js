/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.2.1
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
;(function ($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function (options) {
        // don't do anything if touch is supported
        // (plugin causes some issues on mobile)
        if('ontouchstart' in document) return this; // don't want to affect chaining

        // the element we really care about
        // is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function () {
            var $this = $(this),
                $parent = $this.parent(),
                defaults = {
                    delay: 500,
                    hoverDelay: 0,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    hoverDelay: $(this).data('hover-delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                showEvent   = 'show.bs.dropdown',
                hideEvent   = 'hide.bs.dropdown',
                // shownEvent  = 'shown.bs.dropdown',
                // hiddenEvent = 'hidden.bs.dropdown',
                settings = $.extend(true, {}, defaults, options, data),
                timeout, timeoutHover;

            $parent.hover(function (event) {
                // so a neighbor can't open the dropdown
                if(!$parent.hasClass('open') && !$this.is(event.target)) {
                    // stop this event, stop executing any code
                    // in this callback but continue to propagate
                    return true;
                }

                openDropdown(event);
            }, function () {
                // clear timer for hover event
                window.clearTimeout(timeoutHover)
                timeout = window.setTimeout(function () {
                    $this.attr('aria-expanded', 'false');
                    $parent.removeClass('open');
                    $this.trigger(hideEvent);
                }, settings.delay);
            });

            // this helps with button groups!
            $this.hover(function (event) {
                // this helps prevent a double event from firing.
                // see https://github.com/CWSpear/bootstrap-hover-dropdown/issues/55
                if(!$parent.hasClass('open') && !$parent.is(event.target)) {
                    // stop this event, stop executing any code
                    // in this callback but continue to propagate
                    return true;
                }

                openDropdown(event);
            });

            // handle submenus
            $parent.find('.dropdown-submenu').each(function (){
                var $this = $(this);
                var subTimeout;
                $this.hover(function () {
                    window.clearTimeout(subTimeout);
                    $this.children('.dropdown-menu').show();
                    // always close submenu siblings instantly
                    $this.siblings().children('.dropdown-menu').hide();
                }, function () {
                    var $submenu = $this.children('.dropdown-menu');
                    subTimeout = window.setTimeout(function () {
                        $submenu.hide();
                    }, settings.delay);
                });
            });

            function openDropdown(event) {
                if($this.parents(".navbar").find(".navbar-toggle").is(":visible")) {
                    // If we're inside a navbar, don't do anything when the
                    // navbar is collapsed, as it makes the navbar pretty unusable.
                    return;
                }

                // clear dropdown timeout here so it doesnt close before it should
                window.clearTimeout(timeout);
                // restart hover timer
                window.clearTimeout(timeoutHover);

                // delay for hover event.
                timeoutHover = window.setTimeout(function () {
                    $allDropdowns.find(':focus').blur();

                    if(settings.instantlyCloseOthers === true)
                        $allDropdowns.removeClass('open');

                    // clear timer for hover event
                    window.clearTimeout(timeoutHover);
                    $this.attr('aria-expanded', 'true');
                    $parent.addClass('open');
                    $this.trigger(showEvent);
                }, settings.hoverDelay);
            }
        });
    };

    $(document).ready(function () {
        // apply dropdownHover to all elements with the data-hover="dropdown" attribute
        $('[data-hover="dropdown"]').dropdownHover();
    });
})(jQuery, window);
;
/* Epsilon Theme specific JS */
(function ($) {
   Drupal.behaviors.uncc_epsilon = {
      attach: function (context, settings) {
         $('#collapseOne.collapse').removeClass('in');
         $('.panel-title a').addClass('collapsed');

         /* Scroll to bottom of footer */
         $('footer.footer .panel-collapse').on('shown.bs.collapse', function() {
           var scroll = $(this).parent().offset().top - ( $(window).height() - $(this).parent().height() );
           $('html, body').animate({
              scrollTop: scroll
           }, 500);  
         });

         /* Collapse top navs */
         $('#main-nav-collapse').on('show.bs.collapse', function () {
            $('#main-nav-collapse').append($('#top_header_menu').html());
         });
         $('#main-nav-collapse').on('hidden.bs.collapse', function () {
            $('#main-nav-collapse #print_inner').remove();
         });

         $(window).on('resize', function () {
            if (window.innerWidth > 768) {$('#main-nav-collapse').collapse('hide');}
         });

         /* Homepage flyout region */
         $(".region-frontpage-flyout").hide();
         $(".slider").show();

         $('.slider').click(function(event){
            event.stopPropagation();
            $(".region-frontpage-flyout").slideToggle();
         });
    
         $('div.region-frontpage-flyout').prepend('<div class="close">X</div>');
    
         $('.close').click(function(){
            $(".region-frontpage-flyout").hide();
         });
         /* Close when clicking outside of flyout */
         $(document).click(function(){
            $(".region-frontpage-flyout").hide();
         });

         /* Quicklinks */
         $(".search.dropdown").on("hide.bs.dropdown", function(){
            $(this).find('.uncc-dropdown-menu').first().stop(true, true).slideUp();
            $(".search .dropdown-toggle").html('Campus Resources <span class="glyphicon glyphicon-plus-sign"></span>');
         });
         $(".search.dropdown").on("show.bs.dropdown", function(){
            $(this).find('.uncc-dropdown-menu').first().stop(true, true).slideDown();
            $(".search .dropdown-toggle").html('Campus Resources <span class="glyphicon glyphicon-minus-sign"></span>');
         });

         /* Remove links to "nolink" from breadcrumbs */
         $('ol.breadcrumb > li > a[href=\'/nolink\']').each(function() {
             $(this).parent().remove();
         });
          
         /* Gateway links hide */
         // $('#top_header_menu ul').each(function(){
         // var max = 3
         // if ($(this).find('li').length > max) {
         //   $(this).find('li:gt('+max+')').hide().end().append('<li class="sub_accordian"><span class="show_more">(see more)</span></li>');
         //   $('.sub_accordian').click( function(){
         //      $(this).siblings(':gt('+max+')').toggle().addClass("transparent");
         //      if ( $('.show_more').length ) {
         //         $(this).html('<span class="show_less">Less</span>');
         //      } else {
         //         $(this).html('<span class="show_more">More</span>');
         //      };
         //   });
         //};
         //});

         /* Make links to documents open in a new window */
         $('a[href$=".pdf"]').attr('target', '_blank');
         $('a[href$=".doc"]').attr('target', '_blank');
         $('a[href$=".docx"]').attr('target', '_blank');
         $('a[href$=".xls"]').attr('target', '_blank');
         $('a[href$=".xlsx"]').attr('target', '_blank');

         /* make drive.google.com links open in a new window */
         $('a[href*="drive.google.com"]').attr('target', '_blank');

         /* Style "OneIT" to override all UPPERCASE */
       }
   };
})(jQuery);
;
