<?php
$MCjson = file_get_contents("./data.json");
$MCjson = mb_convert_encoding($MCjson, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$MCobj = json_decode($MCjson,true);

echo $MCobj['companyName'];                 //hoge.inc
echo $MCobj['CEO'];                         //Hara-chan
echo $MCobj['history']['born']['year'];     //1980
echo $MCobj['history']['born']['place'];    //Tokyo


$MCobj = [
  "companyName" => "hoge.inc",
  "CEO" => "Hara-chan",
  "history" => [
      "born" => [
          "year" => "1980",
          "place" => "Tokyo"
      ]
  ]
];

echo json_encode($MCobj);
 ?>

<!DOCTYPE html>
<html lang="ja">
  <head>
    <!-- <link data-n-head="ssr" rel="icon" type="image/x-icon" href="https://d291vdycu0ht11.cloudfront.net/nuxt/static/production.ico"> -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="icon" type="image/x-icon" href="https://maru-code.com/resources/images/favicon.ico">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
    <meta name="theme-color" content="#A72525">
    <!-- meta情報 -->
    <title>テンプレートタイトル</title>
    <!-- meta情報 -->
    <!-- common resources -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="resources/css/style.css">

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- common resources -->
  </head>
  <body>
    <div class="container">
      
    </div>


    <script src="main.js"></script>
  </body>
</html>
