$(document).ready(function(){
$('#form-btn').on('click', function(event){
        event.preventDefault();
        const title = $('#title').val();
        const rating = $('#rating').val();
        const newMovie = 
          `<div id='movie'>
            <span>${title} </span>
            <span>${rating} </span>
            <button id='delete'>Delete</button>
          </div>`;
        $('#movies').append(newMovie);
        $('#form').trigger('reset');
    });

    $('#movies').on('click', '#delete', function(){
        $(this).closest('#movie').remove();
    });

});