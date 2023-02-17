<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- meta contents -->
  <title>LP生成ページ</title>
  <!-- <meta name="description" content="ディスクリプション" /> -->
  <!-- meta contents -->

  <!-- icon -->
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" href="android-touch-icon.png" sizes="192x192">

  <!-- OG option -->
  <meta property="og:url" content="ページのURL" />
  <meta property="og:title" content="ページタイトルが入ります。" />
  <meta property="og:site_name" content="サイト名" />
  <meta property="og:type" content="website blog article product（のいずれか）">
  <meta property="og:description" content="ディスクリプション" />
  <meta property="og:image" content="画像のURL（画像の推奨サイズ：1200 * 630px）" />
  <meta property="og:locale" content="ja_JP" />

  <!-- Resources -->
  <link rel="stylesheet" href="./resources/css/style.css">

  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->

  <!-- <script src="./resources/js/common.js"></script> -->
</head>
<body>
  <div class="body-image">
    <img src="./resources/images/bg.jpg" alt="" class="">
  </div>
  
  <div class="lp-contents">
    <?php
      $bg_image = '';
      if ($_POST['lpTypeSelect'] === 'typeA') {
        $bg_image = 'kv_type-a.jpg';
      } else if ($_POST['lpTypeSelect'] === 'typeB') {
        $bg_image = 'kv_type-b.jpg';
      } else if ($_POST['lpTypeSelect'] === 'typeC') {
        $bg_image = 'kv_type-c.jpg';
      }
     ?>


    <img src="./resources/images/<?php echo $bg_image; ?>" alt="" class="bg-image">

    <div class="text-block">
      <div class="text main-catch">
        <?php echo nl2br($_POST['mainCatch']); ?>
      </div>
      <div class="text sub-catch">
        <?php echo nl2br($_POST['subCatch']); ?>
      </div>
    </div>
  </div>


  <div class="fixed-area">
    <p class="main">この内容で相談する！</p>
    <p class="sub">当社では複数のプランを用意しております。簡易的、本格的問わず承りますので、是非一度ご相談ください</p>
    <a href="" class="button">相談する</a>
    <a href="" class="button -small">3つの料金プランを見る</a>
  </div>
  
  
</body>
</html>