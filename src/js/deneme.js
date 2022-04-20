// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("active");
//   }
// var dropdowns = document.getElementsByClassName("dropdown-content");
// window.onclick = function(event) {
//   if (!event.target.matches('.drop-btn')) {
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('active')) {
//         openDropdown.classList.remove('active');
//       }
//     }
//   }
// }


// dışarı click olunca kapanması için 1
// $('body, html').on('click', '.js-open-sub-menu', function () {
//     $('.js-open-sub-menu').removeClass('active');
// });

// dışarı click olunca kapaması için 2

// $('.js-open-sub-menu').click(function(e){
//     if(e.target.className !== '.js-open-sub-menu'){          
//         $(this).removeClass('active');
//     } else if( $(this).hasClass('active')){
//         $(this).removeClass('active');
//     } else{
//         $('.js-open-sub-menu').removeClass('active');
//         $(this).addClass('active')
//     }
// })