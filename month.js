const birthstone=[
'ガーネット',
'アメジスト',
'アクアマリン',
'ダイヤモンド',
'エメラルド',
'パール',
'ルビー',
'ペリドット',
'サファイア',
'オパール',
'トパーズ',
'ターコイズ'
]

  $('.btn').on('click',function(){
    const i = $('#select_month').val();
    if(i==''){
      $('.no_choose').text('誕生月を選んでください');
      $('.choose').html('<img src="img/birthdaycake.png">');
    }else{
      $('.js-modal').fadeIn('slow');
      $('.result').text('あなたの誕生石は'+birthstone[i-1]+'です！');
      $('.result_img').html('<img src="img/'+birthstone[i-1]+'.png">');
      $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        location.reload();
      });
    }
  });
