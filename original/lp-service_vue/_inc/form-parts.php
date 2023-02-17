<div class="form-area">
  <h1>LP疑似作成フォーム</h1>
  <div class="form-block" method="post" action="./result.php" target="_blank">
    <!-- LPパターン -->
    <fieldset>
      <legend>1.LPのパターンを選択してください。</legend>
      <div><label for="typeA"><input type="radio" id="typeA" name="lpTypeSelect" value="typeA" checked @click="lpPattern = 'type-a'" form="contactForm">スキンケア</label><a href="" target="_blank">（サンプル）</a></div>
      <div><label for="typeB"><input type="radio" id="typeB" name="lpTypeSelect" value="typeB" @click="lpPattern = 'type-b'" form="contactForm">資料請求</label><a href="" target="_blank">（サンプル）</a></div>
      <div><label for="typeC"><input type="radio" id="typeC" name="lpTypeSelect" value="typeC" @click="lpPattern = 'type-c'" form="contactForm">脱毛系</label><a href="" target="_blank">（サンプル）</a></div>
    </fieldset>
    <!-- LPパターン -->

    <!-- KV -->
    <fieldset hidden>
      <legend>2.「ファーストビュー（一番目の要素）」のテキストを入力してください。</legend>
      <div class="block">
        <p class="title">
          メインのキャッチフレーズ
          <span class="sub-title">例： 飲む美活。朝習慣で-5歳肌</span>
        </p>
        <textarea v-model="mainCatchText" name="mainCatch" id="" rows="3" placeholder="飲む美活。朝習慣で-5歳肌" form="contactForm"></textarea>
      </div>
      <div class="block">
        <p class="title">
          サブのキャッチフレーズ
          <span class="sub-title">例： 5万人が愛飲する、お肌に嬉しいビタミンドリンク。</span>
        </p>
        <textarea v-model="subCatchText"  name="subCatch" id="" placeholder="5万人が愛飲する、お肌に嬉しいビタミンドリンク。" form="contactForm"></textarea>
      </div>

      <div class="block">
        <p class="title">
          強み（1）
          <span class="sub-title">例： 3種の
            セラミド</span>
        </p>
        <input type="text" v-model="pointlist01" placeholder="3種のセラミド" form="contactForm">
      </div>
      <div class="block">
        <p class="title">
          強み（2）
          <span class="sub-title">例：高濃度ヒアルロン酸</span>
        </p>
        <input type="text" v-model="pointlist02" placeholder="高濃度ヒアルロン酸" form="contactForm">
      </div>
      <div class="block">
        <p class="title">
          強み（3）
          <span class="sub-title">例：フリー処方</span>
        </p>
        <input type="text" v-model="pointlist03" placeholder="フリー処方" form="contactForm">
      </div>
    </fieldset>
    <!-- KV -->

    <!-- SECOND -->
    <fieldset hidden>
      <legend>3.「商品オファー」のテキストを入力してください。</legend>
      <div class="block">
        <p class="title">
          英語タイトル
          <span class="sub-title">例： SPECIAL OFFER</span>
        </p>
        <input type="text" name="second_titleEn" v-model="second_titleEn" placeholder="SPECIAL OFFER" form="contactForm">
      </div>

      <div class="block">
        <p class="title">
          英語タイトル
          <span class="sub-title">例： 初回限定50％OFF</span>
        </p>
        <input type="text" name="second_titleJa" v-model="second_titleJa" placeholder="初回限定50％OFF" form="contactForm">
      </div>

      <div class="block">
        <p class="title">
          商品の詳細情報
          <span class="sub-title">例： 美白化粧水90mL（1ヶ月分）</span>
        </p>
        <textarea v-model="setDetail" name="setDetail" id="" placeholder="美白化粧水90mL（1ヶ月分）" form="contactForm"></textarea>
      </div>

      <div class="block">
        <p class="title">
          通常価格（税込）
          <span class="sub-title">例： 6,480</span>
        </p>
        <input type="text" name="normalPrice" v-model="normalPrice" placeholder="6,480" form="contactForm">
      </div>

      <div class="block">
        <p class="title">
          割引率
          <span class="sub-title">例： 50</span>
        </p>
        <input type="text" name="offPercent" v-model="offPercent" placeholder="50" form="contactForm"> %
      </div>

      <div class="block">
        <p class="title">
          割引後の価格（税込）
          <span class="sub-title">例： 3,240</span>
        </p>
        <input type="text" name="discountPrice" v-model="discountPrice" placeholder="3,240" form="contactForm">
      </div>

      <div class="block">
        <p class="title">
          購入ボタンの文言
          <span class="sub-title">例： お得に試してみる</span>
        </p>
        <input type="text" name="cvButton" v-model="cvButton" placeholder="お得に試してみる" form="contactForm">
      </div>

      <div class="block">
        <p class="title">
          購入に関する注意事項（タイトル）
          <span class="sub-title">例： お申し込みについて</span>
        </p>
        <input type="text" name="note_title" v-model="note_title" placeholder="お申し込みについて" form="contactForm">
      </div>

      <div class="block">
        <p class="title">
          購入に関する注意事項（タイトル）
          <span class="sub-title">例： 定期コースへの自動移行はありません。</span>
        </p>
        <textarea v-model="note_sentence" name="note_sentence" form="contactForm"></textarea>
      </div>
    </fieldset>
    <!-- SECOND -->
  </div>

  <div class="lp-set-button" id="lpSetButton">この内容で相談する！</div>

  <?php include('_inc/mail-form.php'); ?>
</div>