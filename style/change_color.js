$(document).ready(function () {

                $("#green").on("click", function() {
                    $("#upperNavbar").css("background", "#61bd6d");
                    $("#horizontal_bar").css("background", "#61bd6d");
                      $("#imp_link").css("background", "#61bd6d");
                       $("#copy_footer").css("background", "#61bd6d");
                        $("#mlist").css("background", "#61bd6d");
                        $("#notice_link").css("background", "#61bd6d");
                       $("#search_button").css("background", "#61bd6d"); 
                       $("#nameEng").css("color", "#61bd6d");
                       $("#nameHin").css("color", "#61bd6d");
                      $("#horizontal_bar1").css("background", "#61bd6d");
                       
                    
                });
                $("#blue").on("click", function() {
                    $("#upperNavbar").css("background", "#0000fb");
                    $("#horizontal_bar").css("background", "#0000fb");
                    $("#imp_link").css("background", "#0000fb");
                     $("#copy_footer").css("background", "#0000fb");
                      $("#mlist").css("background", "#0000fb");
                      $("#notice_link").css("background", "#0000fb");
                       $("#search_button").css("background", "#0000fb"); 
                        $("#nameEng").css("color", "#0000fb");
                       $("#nameHin").css("color", "#0000fb");
                  $("#horizontal_bar1").css("background", "#0000fb");
                });
                $("#gray").on("click", function() {
                    $("#upperNavbar").css("background", "#a38f84");
                    $("#horizontal_bar").css("background", "#a38f84");
                    $("#imp_link").css("background", "#a38f84");
                     $("#copy_footer").css("background", "#a38f84");
                      $("#mlist").css("background", "#a38f84");
                      $("#notice_link").css("background", "#a38f84");
                       $("#search_button").css("background", "#a38f84"); 
                        $("#nameEng").css("color", "#a38f84");
                       $("#nameHin").css("color", "#a38f84");
                        $("#horizontal_bar1").css("background", "#a38f84");
                 
                });

                    $("#sizeUp").click(function () {

                        var current = parseInt($("body").css('font-size'));
                        current += 2;
                        $("body").css('font-size', current + 'px');

                    });

                    $("#normal").click(function () {

                        $("body").css("font-size", "14px");

                    })

                    $("#sizeDown").click(function () {

                        var current = parseInt($("body").css('font-size'));
                        current -= 2;
                        $("body").css('font-size', current + 'px');


                    })
   });  
   
    function increaseFont() {
                    var el = document.getElementById('forFont');
                    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
                    var fontSize = parseFloat(style);
                    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
                    el.style.fontSize = (fontSize + 10) + 'px';

                }