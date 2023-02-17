<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta content="IE=edge" http-equiv="X-UA-Compatible">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>画像確認</title>
	<link href="../../../../list-page_resources/style.css" rel="stylesheet">
	<!-- <link href="../list-page_resources/style.css" rel="stylesheet"> -->
	<script src="https://code.jquery.com/jquery-3.6.0.js">
	</script>
</head>
<body>
	<div class="main-content" id="mainContent">
		<div class="header" id="header">
			<label for="resize100"><input id="resize100" name="resize" type="radio" value="100"> 100px</label>
      <label for="resize150"><input id="resize150" name="resize" type="radio" value="150"> 150px</label>
      <label for="resize250"><input id="resize250" name="resize" type="radio" value="250"> 250px</label>
      <label for="resize500"><input id="resize500" name="resize" type="radio" value="500"> 500px</label>
      <label for="resize700"><input id="resize700" name="resize" type="radio" value="700"> 700px</label>
      <label for="resize1000"><input id="resize1000" name="resize" type="radio" value="1000"> 1000px</label>
      <label for="resize2000"><input checked id="resize2000" name="resize" type="radio" value="2000"> Default</label>
      <!-- <label for="resizeUser"><input checked id="resizeUser" name="resize" type="radio" value="2000"> <input type="text">px</label> -->
		</div>
		<h1 class="picture-count" id="pictureCount">合計 <span class="js-num01 big">0</span> 枚</h1>
		<div class="image-block" id="imageBlock"></div>
	</div>
	<div class="index-nav" id="side">
		<div class="picture-count">合計 <span class="js-num02 big">0</span> 枚</div>
		<ul class="index-nav_list" id="jsIndexNav"></ul>
	</div>
	<div class="side-toggle-button" id="sideToggle">
		←
	</div>
	<script>
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
          let dom = `
              <div class="image" id="id_${e}">
                <p class="image_title">${e}</p>
                <a href="./${e}?${param}" target="_blank"><img src="./${e}?${param}" alt="${e}" id="id_${e}_img" class="image-element"></a>
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
      });

      // 画像の枚数を追加
      function displayImageLength () {
        let imgElm = $('.image-block > .image')
        let imgLength = imgElm.length;
        $('.js-num01, .js-num02').text(imgLength);
      }
      
      
      // 目次サイドナビ追加
      
      window.addEventListener('load', function() {

        function createIndex () {
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
        }
        
      
      
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

        
        setTimeout( function() {
          createIndex ();
          displayImageLength();
          displayImageSize();
      }, 500);
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
	</script>
</body>
</html>