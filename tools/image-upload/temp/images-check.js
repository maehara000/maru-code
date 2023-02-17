(function() {
  // キャッシュクリア用のパラメータ作成
  let now = new Date();
  let Year = now.getFullYear();
  let Month = now.getMonth() + 1;
  let Dates = now.getDate();
  let Hour = now.getHours();
  let Min = now.getMinutes();
  let Sec = now.getSeconds();
  let param = Month + '' + Dates + '' + Hour + '' + Min + '' + Sec;

  // Localstrage
  let ls = localStorage;

  // 変数
  const $sideToggle = $('#sideToggle');
  const $side = $('#side');
  const $mainContent = $('#mainContent');
  const imageBlock = document.getElementById('imageBlock');

  let jsonData = [];

  // JSONデータをjsで扱えるようにする
  $.getJSON('./imageList.json', (data) => {
    // 変数jsonDataにjsonファイルの配列を入れる
    Array.prototype.push.apply(jsonData, data);

    // jsonデータをわかりやすい変数名に格納
    allImages = jsonData;
    
    /* 画像情報arrを基にDOMを作成しhtmlに追加 */
    // 申し送りの有無の処理
    allImages.forEach(e => {
      let DomNote = '';
      if (e[1] === '') {
        DomNote = '';
      } else {
        DomNote = `
            <div class="image-note"><span class="title">申し送り</span><p>${e[1]}</p></div>
            `;
      }
      let dom = `
          <div class="image" id="id_${e[0]}">
            <p class="image_title">${e[0]}</p>
            ${DomNote}
            <a href="./${e[0]}?${param}" target="_blank"><img src="./${e[0]}?${param}" alt="${e[0]}" id="id_${e[0]}_img" class="image-element"></a>
          </div>
          `;
      imageBlock.innerHTML += dom;
    });
   }); // getJSON






  // サイズ変更の処理
  $(document).ready(function() {
    $("input[name='resize']").click(function() {
      value = $("input[name='resize']:checked").val();
      $('.image-block').css({
        'maxWidth': value + 'px',
      });
    });
    let imgElm = $('.image-block > .image')
    let imgLength = imgElm.length;
    $('.js-num')[0].innerHTML = imgLength;
  });
  
  // 画像枚数追加
  window.addEventListener('load', function() {
    document.getElementById('fixedTitle').innerHTML = document.getElementById('pictureCount').innerHTML;
  });
  
  // 目次サイドナビ追加
  window.addEventListener('load', function() {
    const navList = $('#jsIndexNav');
    const imageNames = $('.image_title');
    let liDom = '';
  
    for (imageName of imageNames) {
      liDom = `
      <li><a href="#id_${imageName.innerHTML}"><img src="./${imageName.innerHTML}">${imageName.innerHTML}</a></li>
      `;
  
      navList.append(liDom);
    }
  
  
    // サイドの開閉
    $sideToggle.on('click', function() {
      $side.toggleClass('-hide');
      $mainContent.toggleClass('-hide');

      if(ls.getItem('toggleSidebar') === 'open') {
        ls.setItem('toggleSidebar', 'close');
      } else {
        ls.setItem('toggleSidebar', 'open');
      }
    });
  
  
    // 画像のサイズを取得して表示
    function displayImageSize() {
      const elements = document.querySelectorAll('.image-element');
  
      elements.forEach(function(e) {
        let imageWidth = e.naturalWidth;
        let imageHeight = e.naturalHeight;
        let imageNoteElm = document.createElement('div');
        imageNoteElm.classList.add('image-ratio');
        imageNoteElm.innerHTML = `横幅：${imageWidth}px / 縦幅：${imageHeight}px`;
        e.after(imageNoteElm);
      });
    };
    displayImageSize();
  });


  // ページ読み込み時、localstrageの内容により初期表示を変更する処理
  function sidebarIni() {
    if(ls.getItem('toggleSidebar') === 'close') {
      $side.addClass('-hide');
      $mainContent.addClass('-hide');
    }
  };
  sidebarIni();
})();
