$(document).ready(() => {

    $(".linkviewcv").click(function(e){
      e.preventDefault();
      $('body').append($('<div/>')
        .attr("id", "popup")
        .addClass("popup")
        .append("<span/>")
          .html(`<script src="/javascript/popup.js"></script>
          <a class="closelink" href="#"><img class="close-icon" src="/images/close.svg" alt=""></a><br>
          <img class="cvimage" src="/images/cv.png" alt="">`));
    });

    $(".closelink").click(function(e){
        e.preventDefault();
        $('.popup').remove();
    });
});


// $(".popup").fadeIn(300,function(){$(this).focus();});
//     $()
// });
