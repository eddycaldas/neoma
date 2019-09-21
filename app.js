




$('.carousel').carousel({
    interval: 2000
  })
$(document).ready(function() {
  $('.btn').click(function(event){
    const name = $('.name').val()
    const email = $('.email').val()
    const comment = $('.comment').val()
    const statusElm = $('.status')
    statusElm.empty()
    if(name.length >= 2) {
      } else {
        event.preventDefault()
        statusElm.append(`<div class='status'>not valid name</div>`)
      }
    if(email.length > 5 && email.includes('@') && email.includes('.')){
      } else {
        event.preventDefault()
        statusElm.append(`<div class='status'> not valid email</div>`)
      }
      if(comment.length > 10 ) {
        } else {
          event.preventDefault()
          statusElm.append(`<div class='status'> not valid comment</div>`)
        }
  })
})


