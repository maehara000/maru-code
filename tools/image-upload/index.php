<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Zen+Maru+Gothic:wght@300;400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="resources/css/style.css">
  <title>画像リスト生成君</title>
</head>

<body>

  <?php
  if ($_POST) {
    // フォームから"POST"で送信された情報があったら発火
    // 日付とランダム数値からフォルダを作成
    $year = date("Y");
    $month = date("m");
    $rondamInt = $random_int = rand(0, 9999999999);
    $dir = './uploads/' . $year . '/' . $month . '/' . $rondamInt . '/';
    $imageListArray = array();

    if (file_exists($dir) === false) {
      // 同名フォルダが無かった場合に発火
      $postText = '無事処理が終わりました。';

      if (isset($_FILES["upload_file"])) {
        // 送信ファイルがあれば処理実行
        // ディレクトリを作成
        mkdir($dir, 0777, true);

        for ($i = 0; $i < count($_FILES["upload_file"]["name"]); $i++) {
          // アップロードされたファイルを処理

          if (is_uploaded_file($_FILES["upload_file"]["tmp_name"][$i])) {
            // アップロードされたファイルか検査
            // 配列変数に追加
            array_push($imageListArray, $_FILES["upload_file"]["name"][$i]);

            // ファイルを生成したディレクトリに移動
            move_uploaded_file($_FILES["upload_file"]["tmp_name"][$i], $dir . $_FILES["upload_file"]["name"][$i]);
          }
        }

        // phpの配列である画像ファイル名arrayを、jsonファイルに変換
        $json_imageListArray = json_encode($imageListArray);

        // Jsonファイルに書き出し
        file_put_contents($dir . "imageList.json", $json_imageListArray);

        // page関連ファイルをコピー
        copy('./temp/page.php', $dir . 'page.php');
      }
    } else {
      // もし奇跡的に同名フォルダがあった場合、処理をシない。
      $postText = '【失敗】奇跡的に同名フォルダがありました。お手数ですが開発者に報告してください。';
    }
  }
  ?>

  <form aciton="" method="post" enctype="multipart/form-data" id="uploadImage">
    <div class="upload-area">
      <img src="./resources/images/ei-picture.png" alt="" class="drag-image">
      <p>画像をここにドラッグ！</p>
      <input type="file" multiple name="upload_file[]" required id="inputFiles" onchange="fileChangeText()"/>
      <input name="hidden" hidden></input>
    </div>
  </form>

  <?php
  if ($_POST) {
    echo '<div class="overlay"><p class="complete">';
    echo $postText . '<br>';
    echo '<a href="' . $dir . 'page.php" target="_blank" class="button">画像リストページはこちら</a>';
    echo '</p></div>';
  }
  ?>

  <div id="fileChangeText">
    <p class="title">＼以下の画像が選択されました／</p>
    <div class="gray-block">
      <ul id="fileLists"></ul>
      <p id="jsNum" class="num-text"></p>
    </div>
  </div>

  <input type="submit" value="画像リストを作成！" id="submitBtn" form="uploadImage"/>


  <script src="resources/js/index.js"></script>


</body>

</html>