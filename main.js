$('.radio-buttons input').click(function(){
  
    // // stuff that happens when I click on an input
    
    $('#image-frame img').attr('src', this.value);
    
  })