<form method="post" action="mail.php" id="contactForm" accept-charset=”utf-8”>
  <table class="formTable">
    <tr>
      <th>検討中のLPプラン</th>
      <td>
        <select name="ご用件">
          <option value="">選択してください</option>
          <option value="最安プラン（5万円）">最安プラン（5万円）</option>
          <option value="普通プラン（15万円）">普通プラン（15万円）</option>
          <option value="最高級プラン（150万円）">最高級プラン（150万円）</option>
        </select>
        <p class="note"><a href="">プラン内容を見る</a></p>
      </td>
    </tr>
    <tr>
      <th>会社名</th>
      <td>
        <input size="20" type="text" name="会社名"> ※必須
      </td>
    </tr>
    <tr>
      <th>お名前</th>
      <td>
        <input size="20" type="text" name="お名前"> ※必須
      </td>
    </tr>
    <tr>
      <th>電話番号（半角）</th>
      <td>
        <input size="30" type="text" name="電話番号">
      </td>
    </tr>
    <tr>
      <th>Mail（半角）</th>
      <td>
        <input size="30" type="text" name="Email"> ※必須
      </td>
    </tr>
    <tr>
      <th>お問い合わせ内容
        <br>
      </th>
      <td>
        <textarea name="お問い合わせ内容" cols="50" rows="5"></textarea>
      </td>
    </tr>
    <tr>
      <th>LPコンテンツ
        <br>
      </th>
      <td>
        <textarea name="LPコンテンツ" cols="50" rows="5" id="lpContentsIn"></textarea>
      </td>
    </tr>
  </table>
  <p align="center">
    <input type="submit" value="　 確認 　">
  </p>
</form>