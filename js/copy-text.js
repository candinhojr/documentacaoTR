
var $j = jQuery.noConflict();

var copyTextareaBtn = document.querySelector('.copiar');

$j(document).ready(function(){
    $j('[data-toggle="popover"]').popover();
});

function copiar(id, botao){
  console.log("#"+botao);
  var copyTextarea = document.querySelector("#"+id).innerText;
  var textarea = document.createElement("textarea");
  textarea.value = copyTextarea;
  document.body.appendChild(textarea);
  // console.log(textarea);
  textarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'O script foi copiado!' : 'O script não foi copiado!';
    $('#'+botao).attr('data-content', msg)
    $j('#'+botao).val("Script Copiado");

    $('#'+botao).attr('class', 'copiar btn btn-success')
    setTimeout(function() {
      $j("#"+botao).popover('hide');
      $j('#'+botao).val("Copiar Script");
      $("#"+botao).attr('class', 'copiar btn')
    }, 2000);
  } catch (err) {
    console.error(err);
  }


}
