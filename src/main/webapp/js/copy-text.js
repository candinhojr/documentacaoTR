var copyTextareaBtn = document.querySelector('.copiar');

function copiar(id){
  var copyTextarea = document.querySelector("#"+id).innerText;
  var textarea = document.createElement("textarea");
  textarea.value = copyTextarea;
  document.body.appendChild(textarea);
  console.log(textarea);
  textarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'Texo foi copiado!' : 'Texto não foi copiado!';
    alert(msg);
  } catch (err) {
    alert('Opa, Não conseguimos copiar o texto, é possivel que o seu navegador não tenha suporte, tente usar Crtl+C.');
  }
}
