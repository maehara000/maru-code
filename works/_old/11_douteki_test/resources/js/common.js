window.addEventListener('load', function () {
  const body = document.getElementsByTagName('body'); // body[0]で要素として使える
  body[0].classList.add('form-confirm');
  
  const parentElm = document.createElement('dl');
  parentElm.classList.add('parent');

  const createDtElm = document.createElement('dt');
  const createDdElm = document.createElement('dd');
  
  const dtElm = createDtElm; // createしたものをそのまま使ってたら実務と状況が変わるかもしれないので、一旦別の変数に入れる
  const ddElm = createDdElm;

  dtElm.innerHTML += '山田';
  ddElm.innerHTML += '花子';

  parentElm.append(dtElm, ddElm);
  body[0].append(parentElm);

  // const body = document.getElementsByTagName('body');
  if (body[0].classList.contains('form-confirm')) {
    /*
    dtElm と ddElm を取得する処理をここに書いて、
    以下のコードで追加すれば行けるんじゃないか。
    */
    dtElm.innerHTML += ' ' + ddElm.innerHTML;
  }
});