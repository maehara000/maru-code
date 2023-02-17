setTimeout(function() {
},0)


console.log('DOM fully loaded and parsed');

  /*  */
  let defaultCss = `
  .cs-controll-panel {
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(242, 238, 224, 0.9);
    border: 1px solid rgba(179, 170, 139, 0.8);
    padding: 20px;
    z-index: 10001;
    -webkit-transition: opacity 0.1s 0s;
    transition: opacity 0.1s 0s;
  }
  .cs-controll-panel .form-block {
    display: block;
    font-size: 14px;
    margin: 0;
  }
  .cs-controll-panel .form-block:not(:nth-of-type(1)) {
    margin-top: 10px;
  }
  .cs-controll-panel .form-block dt {
    font-weight: bold;
  }
  .cs-controll-panel .form-block dd {
    margin: 0;
  }
  .cs-controll-panel .block > .title {
    font-weight: bold;
    text-align: center;
    margin: 0;
  }
  .cs-controll-panel .block:not(:nth-of-type(1)) {
    margin-top: 40px;
  }
  .cs-controll-panel .end-text {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 12px;
    opacity: 0.8;
    margin: 0;
  }
  .cs-controll-panel.display-none {
    display: block !important;
    opacity: 0 !important;
    pointer-events: none;
    visibility: hidden;
    -webkit-transition: opacity 0.5s 0s;
    transition: opacity 0.5s 0s;
  }

  .guideline {
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 100vh;
    width: 1px;
    background-color: rgb(89, 253, 255);
  }

  .cover-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: auto;
    max-width: 100%;
    pointer-events: none;
    z-index: 9999;
    filter: saturate(50%);
  }

  .js-button-wrap {
    position: fixed;
    right: 10px;
    top: 50%;
    z-index: 10002;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  .js-button-wrap .cs-button {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 300px;
    background: rgba(0, 0, 0, 0.74);
    color: rgb(255, 255, 255);
    font-size: 10px;
    margin: 6px 0px 0px;
    cursor: pointer;
  }
  .js-button-wrap .js-button-guide {
    background: rgba(61, 166, 184, 0.74);
  }
  .js-button-wrap .js-button-picture {
    background: rgba(108, 184, 61, 0.74);
  }
  .js-button-wrap .js-button-anime {
    background: rgba(229, 222, 0, 0.74);
  }
  .js-button-wrap .js-button-hide {
    background: rgba(147, 61, 184, 0.74);
  }

  .display-none {
    display: none;
  }`;

  let defaultCssWrap = document.createElement('style');
  defaultCssWrap.append(defaultCss);

  const bodyElm = document.getElementsByTagName('body')[0];
  bodyElm.append(defaultCssWrap);

  /* 操作ボタン */
  let controllPanelElm = `
  <div class="cs-controll-panel display-none">
      <!-- <div class="block">
        <p class="title">URL</p>
        <dl class="form-block">
          <dt>開発するページのURL</dt>
          <dd>
            <input type="text" class="develop-url" placeholder="http:~">
          </dd>
        </dl>
      </div> -->
      <div class="block">
        <p class="title">ガイドライン</p>
        <dl class="form-block">
          <dt>左のガイドライン</dt>
          <dd>
            PC
            <input type="text" class="left-line-position" placeholder="センターからの距離">
            SP
            <input type="text" class="left-line-position-sp" placeholder="画面端からの距離">
          </dd>
        </dl>
        <dl class="form-block">
          <dt>右のガイドライン</dt>
          <dd>
            PC
            <input type="text" class="right-line-position" placeholder="センターからの距離">
            SP
            <input type="text" class="right-line-position-sp" placeholder="画面端からの距離">
          </dd>
        </dl>
      </div>
      <div class="block">
        <p class="title">カバー画像</p>
        <dl class="form-block">
          <dt>画像 URL</dt>
          <dd>
            <input type="text" class="image-url" placeholder="image url(http://~)">
          </dd>
        </dl>
        <dl class="form-block">
          <dt>ページ上部からの距離</dt>
          <dd>
            <input type="number" class="image-position" placeholder="50">
            <select class="image-position-unit" name="image-position-unit">
              <option value="px" selected>px</option>
              <option value="%">%</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
            </select>
          </dd>
        </dl>
        <dl class="form-block">
          <dt>透過度</dt>
          <dd>
            <input type="number" class="image-opacity" placeholder="0.7" step="0.1" min="0" max="1">
          </dd>
        </dl>
        <dl class="form-block">
          <dt>フィルター(css)</dt>
          <dd>
            <input type="text" class="image-filter" placeholder="saturate(50%)">
          </dd>
        </dl>
      </div>
      <div class="block">
        <p class="title">アニメーションclass操作</p>
        <dl class="form-block">
          <dt>トリガーclass</dt>
          <dd>
            <input type="text" class="anime-class-trigger" placeholder="class name(js-scroll)">
          </dd>
        </dl>
        <dl class="form-block">
          <dt>トグルclass</dt>
          <dd>
            <input type="text" class="anime-class-toggle" placeholder="class name(display)">
          </dd>
        </dl>
      </div>
      <p class="end-text">Developer: Sho Maehara</p>
    </div>
    `;
    let controllPanelWrap = document.createElement('div');
    controllPanelWrap.innerHTML = controllPanelElm;
    bodyElm.append(controllPanelWrap);




    
  // カバー画像関連valueの取得
  const imageUrlInput = document.getElementsByClassName('image-url')[0];
  const imagePosInput = document.getElementsByClassName('image-position')[0];
  
  const imagePosUnitInput = document.getElementsByClassName('image-position-unit')[0];
  const imageOpacityInput = document.getElementsByClassName('image-opacity')[0];
  const imageFilterInput = document.getElementsByClassName('image-filter')[0];

  // カバー画像用styleタグを追加
  const CoverImageStyle = document.createElement('style');
  // カバー画像styleの中身。実際は使わないので期値値を設定?
  let CoverImageStyleContents = 'css';


  // ユーザー側で変更可能なカバー画像設定値をローカルストレージに保存
  function coverImageSetToLocalStrage(){
    // 入力値をローカルストレージにセット
    localStorage.setItem('lsImageUrl', imageUrlInput.value);
    localStorage.setItem('lsImagePos', imagePosInput.value);
    localStorage.setItem('lsImagePosUnit', imagePosUnitInput.value);
    localStorage.setItem('lsImageOpacity', imageOpacityInput.value);
    localStorage.setItem('lsImageFilter', imageFilterInput.value);
  };

  // ローカルストレージにセットしたカバー画像入初期設定読み込む
  function coverImageIni() {
    imageUrlInput.value = localStorage.getItem('lsImageUrl');
    imagePosInput.value = localStorage.getItem('lsImagePos');
    imagePosUnitInput.value = localStorage.getItem('lsImagePosUnit');
    imageOpacityInput.value = localStorage.getItem('lsImageOpacity');
    imageFilterInput.value = localStorage.getItem('lsImageFilter');
  };


  // ロード完了時coverImageIniを初期化
  setTimeout(function() {
    coverImageIni();
  },0)
  
  

  // カバー画像入力フォーム変更直後の処理
  imageUrlInput.addEventListener('change', () => {
    localStorage.setItem('lsImageUrl', imageUrlInput.value);
    imageUrlInput.value = localStorage.lsImageUrl;
    imageElm.src = imageUrlInput.value;
  });

  imagePosInput.addEventListener('change', () => {
    localStorage.setItem('lsImagePos', imagePosInput.value);
    imagePosInput.value = localStorage.lsImagePos;
    customCoverImage();
  });
  
  imagePosUnitInput.addEventListener('change', () => {
    localStorage.setItem('lsImagePosUnit', imagePosUnitInput.value);
    imagePosUnitInput.value = localStorage.lsImagePosUnit;
    customCoverImage();
  });

  imageOpacityInput.addEventListener('change', () => {
    localStorage.setItem('lsImageOpacity', imageOpacityInput.value);
    imageOpacityInput.value = localStorage.lsImageOpacity;
    customCoverImage();
  });

  imageFilterInput.addEventListener('change', () => {
    localStorage.setItem('lsImageFilter', imageFilterInput.value);
    imageFilterInput.value = localStorage.lsImageFilter;
    customCoverImage();
  });

  // カバー画像入cssをセット
  function customCoverImage(){
    CoverImageStyleContents = `
      .cover-image {
        top: ${localStorage.lsImagePos}${localStorage.lsImagePosUnit};
        opacity: ${localStorage.lsImageOpacity};
        filter: ${localStorage.lsImageFilter};
      }

      @media screen and (max-width: 767px) {
      }
    `;

    CoverImageStyle.innerHTML = CoverImageStyleContents;
  }

  customCoverImage();

  // カバー画像を追加
  let imageElm = document.createElement('img');
  function displayCoverImage() {
    imageElm.classList.add('cover-image', 'display-none');
    imageElm.src = localStorage.lsImageUrl;

    bodyElm.append(CoverImageStyle,imageElm);
  }
  displayCoverImage();











  // 左ガイドラインの取得
  const leftLineInput = document.getElementsByClassName('left-line-position')[0];
  const spLeftLineInput = document.getElementsByClassName('left-line-position-sp')[0];

  // 右ガイドラインの取得
  const rightLineInput = document.getElementsByClassName('right-line-position')[0];
  const spRightLineInput = document.getElementsByClassName('right-line-position-sp')[0];

  // ガイドライン用styleタグを追加
  const guideStyle = document.createElement('style');
  // ガイドラインstyleの中身。実際は使わないので初期値を設定?
  let guideStyleContents = 'css';

  

  // ユーザー側で変更可能なガイドライン設定値をローカルストレージに保存
  function guideSetToLocalStrage(){
    // ガイドの入力値をローカルストレージにセット
    localStorage.setItem('lsLeftLinePos', leftLineInput.value);
    localStorage.setItem('lsSpLeftLinePos', spLeftLineInput.value);
    localStorage.setItem('lsRightLinePos', rightLineInput.value);
    localStorage.setItem('lsSpRightLinePos', spRightLineInput.value);
  };

  // ローカルストレージにセットしたガイドラインの初期設定読み込む
  function guideLineIni() {
    leftLineInput.value = localStorage.getItem('lsLeftLinePos');
    spLeftLineInput.value = localStorage.getItem('lsSpLeftLinePos');
    rightLineInput.value = localStorage.getItem('lsRightLinePos');
    spRightLineInput.value = localStorage.getItem('lsSpRightLinePos');
  }

  // ロード完了時にguideLineIniを初期化
  setTimeout(function() {
    guideLineIni();
  },0)
  
  

  // ガイドライン入力フォーム変更直後の処理
  leftLineInput.addEventListener('change', () => {
    localStorage.setItem('lsLeftLinePos', leftLineInput.value);
    leftLineInput.value = localStorage.lsLeftLinePos;
    customGuideLine();
  });

  spLeftLineInput.addEventListener('change', () => {
    localStorage.setItem('lsSpLeftLinePos', spLeftLineInput.value);
    spLeftLineInput.value = localStorage.lsSpLeftLinePos;
    customGuideLine();
  });

  rightLineInput.addEventListener('change', () => {
    localStorage.setItem('lsRightLinePos', rightLineInput.value);
    rightLineInput.value = localStorage.lsRightLinePos;
    customGuideLine();
  });

  spRightLineInput.addEventListener('change', () => {
    localStorage.setItem('lsSpRightLinePos', spRightLineInput.value);
    spRightLineInput.value = localStorage.lsSpRightLinePos;
    customGuideLine();
  });

  // ガイドラインのcssをセット
  function customGuideLine(){
    guideStyleContents = `
      .guideline.-left {
        transform: translate(-${localStorage.lsLeftLinePos}px, 0);
      }
      .guideline.-right {
        transform: translate(${localStorage.lsRightLinePos}px, 0);
      }

      @media screen and (max-width: 767px) {
        .guideline.-left {
          right: auto;
          transform: translate(${localStorage.lsSpLeftLinePos}px, 0);
        }
        .guideline.-right {
          left: auto;
          transform: translate(-${localStorage.lsSpRightLinePos}px, 0);
        }
      }
    `;

    guideStyle.innerHTML = guideStyleContents;
  }

  customGuideLine();

  // ガイドラインを追加
  function displayGuideLine() {
    guideWrapElm = document.createElement('div');
    guideWrapElm.classList.add('guideline-wrap', 'display-none');

    guideCenterElm = document.createElement('div');
    guideCenterElm.classList.add('guideline','-center');

    guideLeftElm = document.createElement('div');
    guideLeftElm.classList.add('guideline','-left');

    guideRightElm = document.createElement('div');
    guideRightElm.classList.add('guideline','-right');

    guideWrapElm.append(guideCenterElm,guideLeftElm,guideRightElm);

    bodyElm.append(guideStyle,guideWrapElm);
  }
  displayGuideLine();















  


  // 基本ボタン追加、基本要素の取得、append
  controllButtonArea = document.createElement('div');
  controllButtonArea.classList.add('js-button-wrap');

  controllGuideButton = document.createElement('div');
  controllGuideButton.classList.add('js-button-guide','cs-button');
  controllGuideButton.innerHTML = 'G';

  controllPictureButton = document.createElement('div');
  controllPictureButton.classList.add('js-button-picture','cs-button');
  controllPictureButton.innerHTML = 'P';

  controllAnimeButton = document.createElement('div');
  controllAnimeButton.classList.add('js-button-anime','cs-button');
  controllAnimeButton.innerHTML = 'A';

  controllHideButton = document.createElement('div');
  controllHideButton.classList.add('js-button-hide','cs-button');
  controllHideButton.innerHTML = 'H';

  controllButtonArea.append(controllGuideButton, controllPictureButton, controllAnimeButton, controllHideButton);
  bodyElm.append(controllButtonArea);

  /* ガイドのコントローラー */
  function guideController() {
    let guideWrap = document.getElementsByClassName('guideline-wrap')[0];

    controllGuideButton.addEventListener('click', () => {
      if(guideToggle === true) {
        guideWrap.classList.add('display-none');
        localStorage.setItem('guideDisplay', 'false');
      } else {
        guideWrap.classList.remove('display-none');
        localStorage.setItem('guideDisplay', 'true');
      }
      guideToggle = !guideToggle;
    });

    

    let guideToggle;
    setTimeout(function() {
      if(localStorage.getItem('guideDisplay') === 'true') {
        guideWrap.classList.remove('display-none');
        guideToggle = true;
      } else {
        guideWrap.classList.add('display-none');
        guideToggle = false;
      }
    },0)
  }






  /* カバーイメージのコントローラー */
  function coverImageController() {
    let coverImage = document.getElementsByClassName('cover-image')[0];

    controllPictureButton.addEventListener('click', () => {
      if(coverImageToggle === true) {
        coverImage.classList.add('display-none');
        localStorage.setItem('coverImageDisplay', 'false');
      } else {
        coverImage.classList.remove('display-none');
        localStorage.setItem('coverImageDisplay', 'true');
      }
      coverImageToggle = !coverImageToggle;
    });

    let coverImageToggle;
    setTimeout(function() {
      if(localStorage.getItem('coverImageDisplay') === 'true') {
        coverImage.classList.remove('display-none');
        coverImageToggle = true;
      } else {
        coverImage.classList.add('display-none');
        coverImageToggle = false;
      }
    },0)
  }


  
  /* アニメボタンのコントローラー */
  function animeController() {
    const animeTriggerInput = document.getElementsByClassName('anime-class-trigger')[0];
    const animeToggleInput = document.getElementsByClassName('anime-class-toggle')[0];

    function animeToggleClassSetToLocalStrage(){
      // 入力値をローカルストレージにセット
      localStorage.setItem('animeTriggerClassName', animeTriggerInput.value);
      localStorage.setItem('animeToggleClassName', animeToggleInput.value);
    };

    function animeToggleClassIni() {
      animeTriggerInput.value = localStorage.getItem('animeTriggerClassName');
      animeToggleInput.value = localStorage.getItem('animeToggleClassName');
    };

    setTimeout(function() {
      animeToggleClassIni();
    },0)

    animeTriggerInput.addEventListener('change', () => {
      localStorage.setItem('animeTriggerClassName', animeTriggerInput.value);
      animeTriggerInput.value = localStorage.animeTriggerClassName;
    });

    animeToggleInput.addEventListener('change', () => {
      localStorage.setItem('animeToggleClassName', animeToggleInput.value);
      animeToggleInput.value = localStorage.animeToggleClassName;
    });


    let targetClass = document.querySelectorAll('.' + localStorage.animeTriggerClassName);
        

    controllAnimeButton.addEventListener('click', function () {
      console.log('asd');
      targetClass.forEach(function(target){
        target.classList.toggle(localStorage.animeToggleClassName);
      });
    })
  }

  



  
  /* Hideボタンのコントローラー */
  function controllPanelHideController() {
    let controllPanel = document.getElementsByClassName('cs-controll-panel')[0];

    controllHideButton.addEventListener('click', () => {
      if(controllPanelHideToggle === true) {
        controllPanel.classList.add('display-none');
        localStorage.setItem('controllPanelDisplay', 'false');
      } else {
        controllPanel.classList.remove('display-none');
        localStorage.setItem('controllPanelDisplay', 'true');
      }
      controllPanelHideToggle = !controllPanelHideToggle;
    });

    let controllPanelHideToggle;
    setTimeout(function() {
      if(localStorage.getItem('controllPanelDisplay') === 'true') {
        controllPanel.classList.remove('display-none');
        controllPanelHideToggle = true;
      } else {
        controllPanel.classList.add('display-none');
        controllPanelHideToggle = false;
      }
    },0)
  }

  guideController();
  coverImageController();
  controllPanelHideController();
  animeController();
