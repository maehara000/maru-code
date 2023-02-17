<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- meta contents -->
  <title>LP簡易制作フォーム（Vue.js）</title>
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
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
  <link rel="stylesheet" href="./resources/css/style.css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <script src="./resources/js/common.js" defer></script>
</head>
<body>
  <!-- <form method="post" action=""></form> -->


  <div id="app">
    <div class="fixed-button-area">
      <div class="button window-change" @click="changeFullLp">LP<br>拡大/縮小</div>
    </div>

    <div class="double-column" id="wrapper" :class="{ fullWidth: fullLpMode }">
      <!-- フォーム start -->
      <div class="one-clumn one-clumn--form">
        <?php include('_inc/form-parts.php'); ?>
      </div>
      <!-- フォーム end -->

      <!-- LP Preview start -->
      <div class="one-clumn one-clumn--lp">
        <?php include('_inc/lp-parts.php'); ?>
      </div>
      <!-- LP Preview end -->

    </div>
    <!-- /.double-column -->
  </div>
  <!-- /#app -->

<script src="./resources/js/form-set.js"></script>


</body>
</html>