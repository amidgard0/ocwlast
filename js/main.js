"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

$(function () {
  $('.scroll-btn').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $('#scroll').offset().top
    }, 1000);
    e.preventDefault();
  });
});
//# sourceMappingURL=main.js.map
