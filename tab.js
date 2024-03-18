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

// var car = '소나타';
// var carPrice = 50000;
// var calColor = 'white';
var car = ['소나타' , 50000, 'white']; // array 자료형
car[0] = '아반떼';
// console.log(car);

var car2 = {name : '소나타' , price : [50000, 3000, 4000]} // object 자료형 name : key 소나타 : value

// console.log(car2['name'])

document.getElementById('name').textContent = car2.name;
// document.getElementById('price').textContent = car2.price;

document.getElementById('price').innerHTML = car2.price[0];
// console.log(car2.price[2]);

//서버에서 보낸 데이터라 생각하자 서버안에 데이터가 변수안에 잘담겨서 올거다.
var pants = [28, 30, 32, 34]; // array자료형에만 붙일수 있는 forEach
var shirts = [95,100,105,110,115];

$('.form-select').eq(0).on('input', function() {
  var value = $('.form-select').eq(0).val();
  if ( value == '셔츠') {
  $('.form-select').eq(1).removeClass('form-hide');
  $('.form-select').eq(1).html('');
  // var 템플릿1 = `<option>95</option>
  //               <option>100</option>`;
  //               $('.form-select').eq(1).append(템플릿1);
  shirts.forEach(function(a) {
               
    $('.form-select').eq(1).append(`<option>${a}</option>`)
   });
} else if (value == '바지') {
  $('.form-select').eq(1).removeClass('form-hide');
  $('.form-select').eq(1).html('');
  // var 템플릿2 = `<option>28</option>
  //               <option>30</option>`;
  //               $('.form-select').eq(1).append(템플릿2);
               pants.forEach(function(a) {
               
                $('.form-select').eq(1).append(`<option>${a}</option>`)
               });
}
});

// for in --> object형 자료갯수만큼 반복문 돌릴라면쓰는것
var obj = {name :'kim', age : 20};
for (var key in obj) {
  console.log(obj[key]);

}

// $('.form-select').eq(2).on('input', function() {
//   var value = $('.form-select').eq(2).val();
//   if ( value == '바지'){
//     $('.form-select').eq(2).removeClass('form-hide');
//     $('#test').append(템플릿);
//   }
// })

  // var as = document.createElement('p');
  // as.innerHTML = '안녕';
  //  document.querySelector('#test').appendChild(as);

  var 템플릿 = '<p>28</p>'
  document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);
  //jquery버전
  $('#test').append(템플릿);

var 출석부 = ['흥민', '영희', '철수', '재석'];
function 이름찾기(이름) {
  for (var i = 0; i < 출석부.length; i++) {
    if (출석부[i] === 이름) {
      console.log(이름 + "은(는) 출석부에 있습니다.");
      return; // 이름을 찾았으므로 함수 종료
    }
  }
  console.log(이름 + "은(는) 출석부에 없습니다.");
}

// 구구단 만들기 
function 구구단출력() {
  for (var i = 2; i <= 9; i++) {
    console.log(i + "단");
    for (var j = 1; j <= 9; j++) {
      console.log(i + " * " + j + " = " + (i * j));
    }
    console.log(""); // 각 단 사이에 공백 출력
  }
}

// 함수 호출하여 