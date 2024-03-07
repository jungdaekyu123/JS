// 버튼0 누르면 
// - 모든버튼  에 붙은 orange 클래스명 제거
// -버튼0에 orange 클래스명 추가 
// -모든 div에 붙은 show  클래스명 제거
// -div0에 show 클래스명 추가

// $('.tab-button').eq(0).on('click', function() {
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').eq(0).show();
// });

// $('.tab-button').eq(1).on('click', function() {
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').eq(1).show();
// });

// $('.tab-button').eq(2).on('click', function() {
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').eq(2).show();
// });



// $('.tab-button').eq(0).on('click', function() {
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(0).addClass('orange');

//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(0).addClass('show');
// });



// 버튼.eq(0).on('click', function() {
//     버튼.removeClass('orange');
//     버튼.eq(0).addClass('orange');
  
//     컨텐츠.removeClass('show');
//     컨텐츠.eq(0).addClass('show');
//   });

  
// var 버튼 = $('.tab-button');
// var 컨텐츠 = $('.tab-content');
//   for ( let i = 0; i < 3; i++  ) {
//     버튼.eq(i).on('click', function() {
//         버튼.removeClass('orange');
//         버튼.eq(i).addClass('orange');
      
//         컨텐츠.removeClass('show');
//         컨텐츠.eq(i).addClass('show');
//       });
//   }

function 탭열기(구멍){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(구멍).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(구멍).addClass('show');
}

// $('.list').click(function(e){
//   if (e.target == document.querySelectorAll('.tab-button')[0]) {
//     탭열기(0)
//   }

//   if (e.target == document.querySelectorAll('.tab-button')[1]) {
//     탭열기(1)
//   }

//   if (e.target == document.querySelectorAll('.tab-button')[2]) {
//     탭열기(2)
//   }

// });

$('.list').click(function(e) {
  탭열기(e.target.dataset.id)
  console.log(e.target.dataset.id)
})