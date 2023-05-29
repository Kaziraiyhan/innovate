$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 4000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});

// const e = document.createElement('div');
// e.className = 'hellow';

// e.setAttribute ('id', 'red');
// console.log(e)
// // e.textContent = "bismillah "
// const banner = document.querySelector('#banner');
// const banner_details = banner.querySelector('.banner_details')
// banner.insertBefore(e, banner_details)
