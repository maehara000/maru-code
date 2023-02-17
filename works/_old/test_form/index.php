<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
  <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
  

<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
<?php 
    // require "header.php";
?>
<main>


  <section class="container container-ornament" id="contact">
    <h2 class="container-title"><span>お問い合わせ</span></h2>
    <div class="container-body">
        <div class="container-required">
        <p class="Required-title"><span class="Required">※</span>は入力必須項目になります。</p>
        </div>

      <form action="contact_db_connect.php" class="form form-m h-adr" method="post" name="customerinfo">
      <!-- <form action="" class="form form-m h-adr" method="post" name="customerinfo"> -->
          <table>

              <tr>
                  <th class="th sp-br"><span class="Required">※</span>メール<br>アドレス</th>
                    <td class="td">
                        <span class="err_msg" id="err-msg-email"><?php if(!empty($err_msg['email'])) echo $err_msg['email']; ?></span>
                        <input class="input input-l" id="email-js" name="email" type="email" placeholder="例）example@.com" value="<?php if(!empty($_POST['email'])) echo $_POST['email']; ?>" >
                    </td>
              </tr>

          </table>

        <button class="btn btn-corp btn-l" id="contact-submit">送信</button>
      </form>


    </div>
  </section>
</main>

<footer class="footer">
</footer>

  <script>
    $("input[name='email']").focusout(function(){
  if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
  //実行内容
  alert('メールアドレスが間違っているか、空白です。')
  } 
});
  </script>
</body>

</html>