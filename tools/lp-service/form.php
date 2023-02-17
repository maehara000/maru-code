<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LP疑似作成フォーム</title>


  <style>
    body * {
      box-sizing: border-box;
      font-family: "YakuHanJPs","-apple-system","BlinkMacSystemFont","Segoe UI","Hiragino Sans","Hiragino Kaku Gothic ProN","Meiryo",sans-serif;
    }
    .form-area {
      background-color: #FFF;
      max-width: 90%;
      width: 800px;
      margin: auto;
      padding: 40px;
      box-sizing: border-box;
    }

    fieldset {
    }

    legend {
      margin-bottom: 10px;
    }

    .form-area form fieldset:not(:first-of-type) {
      margin-top: 40px;
    }

    label {
      display: block;
      margin: 1rem;
    }

    .block {
      width: 90%;
      margin: auto;
    }

    .block:not(:first-of-type) {
      margin-top: 30px;
    }

    .block .title {
      margin: 0;
    }

    .block .title .sub-title {
      display: block;
      font-size: 0.8em;
    }

    textarea {
      width: 100%;
      padding: 10px;

    }
    
  </style>
</head>
<body>
  <div class="form-area">
    <h1>LP疑似作成フォーム</h1>
    <form class="login-container" method="post" action="./result.php" target="_blank">

      <fieldset>
        <legend>LPのパターンを選択してください。</legend>
        <label for="typeA"><input type="radio" id="typeA" name="lpTypeSelect" value="typeA" checked>美容系（typeA）</label>
        <label for="typeB"><input type="radio" id="typeB" name="lpTypeSelect" value="typeB">資料請求系（typeB）</label>
        <label for="typeC"><input type="radio" id="typeC" name="lpTypeSelect" value="typeC">脱毛系（typeC）</label>
      </fieldset>
    
      <fieldset>
        <legend>ファーストビューのテキストを入力してください。</legend>
        <div class="block">
          <p class="title">
            メインのキャッチフレーズ
            <span class="sub-title">例： 飲む美活。朝習慣で-5歳肌</span>
          </p>
          <textarea name="mainCatch" id="" rows="3" placeholder="飲む美活。朝習慣で-5歳肌">飲む美活。朝習慣で-5歳肌</textarea>
        </div>
        <div class="block">
          <p class="title">
            メインのキャッチフレーズ
            <span class="sub-title">例： 5万人が愛飲する、お肌に嬉しいビタミンドリンク。</span>
          </p>
          <textarea name="subCatch" id="" rows="5" placeholder="5万人が愛飲する、お肌に嬉しいビタミンドリンク。">5万人が愛飲する、お肌に嬉しいビタミンドリンク。</textarea>
        </div>
      </fieldset>
      <p><input type="submit" value="LPのイメージを見る"></p>
    </form>
  </div>
</body>
</html>