/* 
 * @Author: anchen
 * @Date:   2017-11-09 16:30:58
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-11-09 20:35:02
 */
$(document).ready(function() {
    function myAddSwitch() {
        $(".questions").animate({
            left: '-=8.0rem'
        }, "fast");
    }
    
    $('.next1').click(function(event) {
       if ($.trim($('.Q1').val()) == '6460') {
                $(".questions").animate({
                    left: '-=8.0rem'
                }, "fast");
            }else{
                return;
            }
    });

    $('.next2').click(function(event) {
       if ($.trim($('.Q2').val()) == '8') {
                $(".questions").animate({
                    left: '-=8.0rem'
                }, "fast");
            }else{
                return;
            }
    });

    $('.next3').click(function(event) {
       if ($.trim($('.Q3').val()) == '2016年10月18日') {
                $(".questions").animate({
                    left: '-=8.0rem'
                }, "fast");
            }else{
                return;
            }
    });

     $('.next4').click(function(event) {
       if ($.trim($('.Q4').val()) == '183') {
                $(".questions").animate({
                    left: '-=8.0rem'
                }, "fast");
            }else{
                return;
            }
    });

     $('.next5').click(function(event) {
       if ($.trim($('.Q5').val()) == '12月24日') {
                $(".questions").animate({
                    left: '-=8.0rem'
                }, "fast");
            }else{
                return;
            }
    });

     $('.next6').click(function(event) {
       if ($.trim($('.Q6').val()) == '651、729、731') {
                $(".questions").animate({
                    left: '-=8.0rem'
                }, "fast");
            }else{
                return;
            }
    });

     $('.next7').click(function(event) {
       if ($.trim($('.Q7').val()) == '西区阿姨说喜欢你们') {
                $(".questions").animate({
                    left: '-=8.0rem'
                }, "fast");
            }else{
                return;
            }
    });

     $('.next8').click(function(event) {
       if ($.trim($('.Q8').val()) == '0') {
                $(".questions").animate({
                    left: '-=8.0rem'
                }, "fast");
            }else{
                return;
            }
    });

      $('.next9').click(function(event) {
       if ($.trim($('.Q9').val()) == '0') {
                $(".questions").animate({
                    left: '-=8.0rem'
                }, "fast");
            }else{
                return;
            }
    });

     $('.heart').click(function(event) {
         var i = $(this).index();
        //nav选中状态的切换
        $(this).siblings('span').css({
            display:'block'
        });
     });
});