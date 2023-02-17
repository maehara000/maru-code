<div id="lpContentsSource">
  <div class="lp-contents container" :class="lpPattern">
    <img v-if="lpPattern === 'type-a'" src="./resources/images/ptn_a/lp_temp.jpg" alt="" class="bg-image">
    <img v-if="lpPattern === 'type-b'" src="./resources/images/kv_type-b.jpg" alt="" class="bg-image">
    <img v-if="lpPattern === 'type-c'" src="./resources/images/kv_type-c.jpg" alt="" class="bg-image">
    
    <!-- first start -->
    <div class="text logo">BRAND LOGO</div>
    <div class="text mainCatch">
      {{ mainCatchText }}
    </div>
    <div class="text subCatch">
      {{ subCatchText }}
    </div>
    <ul class="text pointList">
      <li>
        {{ pointlist01 }}
      </li>
      <li>
        {{ pointlist02 }}
      </li>
      <li>
        {{ pointlist03 }}
      </li>
    </ul>
    <!-- first end -->

    <!-- second start -->
    <div class="text second_titleEn">{{ second_titleEn }}</div>
    <div class="text second_titleJa">{{ second_titleJa }}</div>
    <div class="text setDetail">
      {{ setDetail }}
    </div>
    <div class="text normalPrice">{{ normalPrice }}</div>
    <div class="text offPercent">{{ offPercent }}</div>
    <div class="text discountPrice">{{ discountPrice }}</div>
    <div class="text cvButton">{{ cvButton }}</div>
    <div class="text note_title">{{ note_title }}</div>
    <div class="text note_sentence">
      {{ note_sentence }}
    </div>
    <!-- /.second end -->
  </div>
  <!-- /.lp-contents -->
</div>
<!-- /#lpContentsSource -->