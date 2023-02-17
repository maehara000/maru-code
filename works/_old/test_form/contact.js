window.addEventListener('DOMContentLoaded', () => {
    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('#contact-submit');

    // エラーメッセージと赤枠の削除
    function reset(input_infomation, error_message){
        const input_info = document.querySelector(input_infomation);
        const err_message = document.querySelector(error_message);
        err_message.textContent ='';
        input_info.classList.remove('input-invalid');
    };

    // 「お名前」入力欄の空欄チェック関数
    function invalitName(input_target, error_target, error_message){

        const name = document.querySelector(input_target);
        const errMsgName = document.querySelector(error_target);

        if(!name.value){
            errMsgName.classList.add('form-invalid');
            errMsgName.textContent = error_message;
            name.focus();
            name.classList.add('input-invalid');          
            // 動作を止める
            return false;
        };
        // 動作を進める
        return true;
    };

    // 「ふりがな」入力欄の空欄チェック関数
    function invalitHurigana(input_target, error_target, error_message){

        const hurigana = document.querySelector(input_target);
        const errMsgHurigana = document.querySelector(error_target);

        if(!hurigana.value){
            errMsgHurigana.classList.add('form-invalid');
            errMsgHurigana.textContent = error_message;
            hurigana.focus();
            hurigana.classList.add('input-invalid');          
            // 動作を止める
            return false;
        };
        // 動作を進める
        return true;

    };

    // 「郵便番号」入力欄の空欄チェック関数
    function invalitPostal(input_target, error_target, error_message){

        const postal = document.querySelector(input_target);
        const errMsgPostal = document.querySelector(error_target);

        if(!postal.value){
            errMsgPostal.classList.add('form-invalid');
            errMsgPostal.textContent = error_message;
            postal.focus();
            postal.classList.add('input-invalid');          
            // 動作を止める
            return false;
        };
        // 動作を進める
        return true;

    };

    // 「住所」入力欄の空欄チェック関数
    function invalitAddress(input_target, error_target, error_message){

        const address = document.querySelector(input_target);
        const errMsgAddress = document.querySelector(error_target);

        if(!address.value){
            errMsgAddress.classList.add('form-invalid');
            errMsgAddress.textContent = error_message;
            address.focus();
            address.classList.add('input-invalid');          
            // 動作を止める
            return false;
        };
        // 動作を進める
        return true;
    };

    // 「電話番号」入力欄の空欄チェック関数
    function invalitTel(input_target, error_target, error_message){

        const tel = document.querySelector(input_target);
        const errMsgTel = document.querySelector(error_target);

        if(!tel.value){
            errMsgTel.classList.add('form-invalid');
            errMsgTel.textContent = error_message;
            tel.focus();
            tel.classList.add('input-invalid');          
            // 動作を止める
            return false;
        };
        // 動作を進める
        return true;
    };

    // 「メールアドレス」入力欄の空欄チェック関数    
    function invalitEmail(input_target, error_target, error_message){

        const email = document.querySelector(input_target);
        const errMsgEmail = document.querySelector(error_target);

        if(!email.value){
            errMsgEmail.classList.add('form-invalid');
            errMsgEmail.textContent = error_message;
            email.focus();
            email.classList.add('input-invalid');          
            // 動作を止める
            return false;
        };
        // 動作を進める
        return true;
    };

    // 「会社名」入力欄の空欄チェック関数
    function invalitCompany(input_target, error_target, error_message){

        const company = document.querySelector(input_target);
        const errMsgCompany = document.querySelector(error_target);

        if(!company.value){
            errMsgCompany.classList.add('form-invalid');
            errMsgCompany.textContent = error_message;
            company.focus();
            company.classList.add('input-invalid');          
            // 動作を止める
            return false;
        };
        // 動作を進める
        return true;
    };

    // 「お問い合わせ内容」入力欄の空欄チェック関数
    function invalitContent(input_target, error_target, error_message){

        const content = document.querySelector(input_target);
        const errMsgContent = document.querySelector(error_target);

        if(!content.value){
            errMsgContent.classList.add('form-invalid');
            errMsgContent.textContent = error_message;
            content.focus();
            content.classList.add('input-invalid');          
            // 動作を止める
            return false;
        };
        // 動作を進める
        return true;
    };


    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        reset('#name-js', '#err-msg-name');
        reset('#hurigana-js', '#err-msg-hurigana');
        reset('#postal-js', '#err-msg-postal');
        reset('#address-js', '#err-msg-address');
        reset('#tel-js', '#err-msg-tel');
        reset('#email-js', '#err-msg-email');
        reset('#company-js', '#err-msg-company');
        reset('#content-js', '#err-msg-content');

        const focus = () => document.querySelector('#name-js').focus();

        // 「お名前」入力欄の空欄チェック
        if(invalitName('#name-js', '#err-msg-name', 'お名前が入力されていません')===false){
            return;
        };
        // 「ふりがな」入力欄の空欄チェック
        if(invalitHurigana('#hurigana-js', '#err-msg-hurigana', '入力必須です')===false){
            return;
        };

        // ひらがなチェック
        const hurigana = document.querySelector("#hurigana-js");
        const errMsgHurigana = document.querySelector("#err-msg-hurigana");
        const huriganaCheck = /[^ぁ-んー 　]/u; 
        if(hurigana.value.match(huriganaCheck)){
            errMsgHurigana.classList.add('form-invalid');
            errMsgHurigana.textContent = 'ひらがなで入力してください';
            hurigana.focus();
            hurigana.classList.add('input-invalid');
            return;
        }else{
            errMsgHurigana.textContent ='';
            hurigana.classList.remove('input-invalid');
            hurigana.blur();
        };

        // 「郵便番号」入力欄の空欄チェック
        if(invalitPostal('#postal-js', '#err-msg-postal', '入力必須です')===false){
            return;
        };

        // 郵便番号形式チェック
        const postal = document.querySelector("#postal-js");
        const errMsgPostal = document.querySelector("#err-msg-postal");
        const postalCheck = /([0-9]{7})$/; 
        // const postalCheck = /^\d{7}$/; 
        if(postal.value.match(postalCheck)){
            errMsgPostal.textContent ='';
            postal.classList.remove('input-invalid');
            postal.blur();
        }else{
            errMsgPostal.classList.add('form-invalid');
            errMsgPostal.textContent = '郵便番号の形式が違います';
            postal.focus();
            postal.classList.add('input-invalid');
            return;
        };

        // 「住所」入力欄の空欄チェック
        if(invalitAddress('#address-js', '#err-msg-address', '入力必須です')===false){
            return;
        };
        // 「電話番号」入力欄の空欄チェック
        if(invalitTel('#tel-js', '#err-msg-tel', '入力必須です')===false){
            return;
        };

        //電話番号形式チェック
        const tel = document.querySelector("#tel-js");
        const errMsgTel = document.querySelector("#err-msg-tel");
        const telCheck = /0\d{1,4}\d{1,4}\d{4}/; 
        if(tel.value.match(telCheck)){
            errMsgTel.textContent ='';
            tel.classList.remove('input-invalid');
            tel.blur();
        }else{
            errMsgTel.classList.add('form-invalid');
            errMsgTel.textContent = '電話番号の形式が違います';
            tel.focus();
            tel.classList.add('input-invalid');
            return;
        };

        // 「メールアドレス」入力欄の空欄チェック
        if(invalitEmail('#email-js', '#err-msg-email', '入力必須です')===false){
            return;
        };

        // Email形式チェック
        const email = document.querySelector("#email-js");
        const errMsgEmail = document.querySelector("#err-msg-email");
        const emailCheck = /^[-a-z0-9~#&'*/?`\|!$%^&*_=+}{\'?]+(\.[-a-z0-9~#&'*/?`\|!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)|(docomo\ezweb\softbank)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i; 
        if(email.value.match(emailCheck)){
            errMsgEmail.textContent ='';
            email.classList.remove('input-invalid');
            email.blur();
        }else{
            errMsgEmail.classList.add('form-invalid');
            errMsgEmail.textContent = 'Emailの形式で入力してください';
            email.focus();
            email.classList.add('input-invalid');
            return;
        };

        // 「会社名」入力欄の空欄チェック
        if(invalitCompany('#company-js', '#err-msg-company', '入力必須です')===false){
            return;
        };
        // 「お問い合わせ内容」入力欄の空欄チェック
        if(invalitContent('#content-js', '#err-msg-content', '入力必須です')===false){
            return;
        };

        document.customerinfo.submit();

    }, false);  
}, false);