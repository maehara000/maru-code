(function () {
  const lpWrapElm = document.getElementById('lpContentsSource');
  const textarea = document.getElementById('lpContentsIn');
  const lpSetButton = document.getElementById('lpSetButton');

  lpSetButton.addEventListener('click', setLpContents);




  function setLpContents () {
    textarea.value = '※こちらは開発に必要な文字列です。無視してください。' + lpWrapElm.innerHTML;
  }


  
  
})();