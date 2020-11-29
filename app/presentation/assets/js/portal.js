$(function() {
  $(".thsr-jumbotron .content-action .action-btn").click(function (e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('.thsr-station-section').offset().top
    }, 1000, 'swing');
  });



  // station menu
  $('.thsr-station-menu').on('click', '.item', function() {
    $(this).addClass('active');
    $(this).siblings('.item').removeClass('active');

    var selectedStationName = $(this).text();

    let updateStationInfo = (imgSrc, stationName, photoBy) => {
      // update img
      var imageDom = $('.station-img');
      imageDom.fadeOut(200, function () {
        imageDom.attr('src', imgSrc);
        imageDom.fadeIn('fast');
      });

      // update text
      var textDom = $('.content-text');
      textDom.text(stationName)

      // update sub-text
      var subTextDom = $('.content-sub-text');
      subTextDom.text('photo by ' + photoBy)
    }
    
    if (selectedStationName == '桃園') {
      updateStationInfo('https://i.imgur.com/CBgoTja.jpg', '桃園高鐵站', '航空城青埔人');
    } else if (selectedStationName == '新竹') {
      updateStationInfo('https://storage.googleapis.com/smiletaiwan-cms-cwg-tw/article/201808/article-5b7a9d363047d.jpg', '新竹高鐵站', '微笑台灣');
    } else if (selectedStationName == '苗栗') {
      updateStationInfo('https://lh3.googleusercontent.com/proxy/qy01p4VRPa8HiL9BRBkaWrJ7qqRcDarqp_vNZOR5K09SsqMMENx2hX4YhB_TvMsD_hj037nMK6rLPumYgFUVaB_GQ0yFR19x-99w29iNRo4ezfRgxA7eOvUg0LME6yMaaIfsZddrPQ', '苗栗高鐵站', '建築師雜誌');
    } else if (selectedStationName == '台中') {
      updateStationInfo('https://www.rb.gov.tw/public/files/artsinfo/1576133676-m3.jpg', '台中高鐵站', '交通部鐵道局');
    } else if (selectedStationName == '彰化') {
      updateStationInfo('https://i.ytimg.com/vi/9R3uYZWlyJc/maxresdefault.jpg', '彰化高鐵站', 'BENNY BABU');
    } else if (selectedStationName == '雲林') {
      updateStationInfo('https://photo.travelking.com.tw/scenery/41FB8DDA-5243-45B9-8AA8-72DE25928422_e.jpg', '雲林高鐵站', 'Travek King');
    } else if (selectedStationName == '嘉義') {
      updateStationInfo('https://www.thsrc.com.tw/ArticleContent/60831846-f0e4-47f6-9b5b-46323ebdcef7/assets/36c8f9a3-ebc6-4949-aa03-ec05626aef8b.jpg', '嘉義高鐵站', '台灣高鐵');
    } else if (selectedStationName == '台南') {
      updateStationInfo('https://s.newtalk.tw/album/news/132/5b4d8ed78ed34.jpg', '台南高鐵站', '頭殼網');
    } else if (selectedStationName == '左營') {
      updateStationInfo('https://upload.wikimedia.org/wikipedia/commons/c/cb/HSR_Zuoying_Station.JPG', '左營高鐵站', '維基百科');
    }
  });

  
  // click search btn
  $('.thsr-station-section .content-action .action-btn').click(function(event) {
    var text = $('.content-text').text();
    text = text.replace('高鐵站', '');
    baseUrl = '/result/city?city_name=';
    window.location.href = baseUrl + text;
  });
});