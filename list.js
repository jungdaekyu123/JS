// console.log(products[0]['id']);

// document.getElementById('title').innerHTML = products[0].title;
// document.getElementById('price').innerHTML = products[0].price;

// document.getElementById('title1').innerHTML = products[1].title;
// document.getElementById('price1').innerHTML = products[1].price;

// document.getElementById('title2').innerHTML = products[2].title;
// document.getElementById('price2').innerHTML = products[2].price;
// console.log(document.querySelectorAll('.card-body h5'));



// document.querySelectorAll('.card-body h5')[0].innerHTML = products[0].title;
// document.querySelectorAll('.card-body p')[0].innerHTML = '가격 : ' + products[0].price;

// document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title;
// document.querySelectorAll('.card-body p')[1].innerHTML = '가격 : ' + products[1].price;

// document.querySelectorAll('.card-body h5')[2].innerHTML = products[2].title;
// document.querySelectorAll('.card-body p')[2].innerHTML = '가격 : ' + products[2].price; 

// 하나로 합쳐보자 뭔가 for를 써서 해야될거같다. tab.js참고해보고

// for (var i = 0; i < products.length; i++) {
//     document.querySelectorAll('.card-body h5')[i].innerHTML = products[i].title;
//     document.querySelectorAll('.card-body p')[i].innerHTML = '가격 : ' + products[i].price;
//   }
 

//   $.get('https://codingapple1.github.io/hello.txt').done(function(data) {
//       console.log(data);
//   }).fail(function() {
//     console.log('실패함');
//   })

//   $.get(' https://codingapple1.github.io/price.json').done(function(data) {
//     console.log(data.price);
// }).fail(function() {
//   console.log('실패함');
// })

// $.get('https://codingapple1.github.io/js/more1.json').done(function(data) {
//   console.log(data);
// }).fail(function() {
// console.log('실패함');
// }) // 데이터를 받아오는것 fetch 나 이런것도 있으니까 나중에 한번 해보기




// var 템플릿 = `<div class="col-sm-4">
// <img src="https://via.placeholder.com/600" class="w-100">
// <h5>${products[0].title}</h5>
// <p>${products[0].price}</p>
// </div>`;
// $('.row').append(템플릿);


// for (var i = 0 ; i < products.length; i++) {
//   var 템플릿 = `<div class="col-sm-4">
// <img src="https://via.placeholder.com/600" class="w-100">
// <h5>${products[i].title}</h5>
// <p>${products[i].price}</p>
// </div>`;
// $('.row').append(템플릿);
// }

// 장바구니 기능 localStorage

// var checkIndex = [];

// products.forEach((a,i) => {
    
//   var 템플릿 = `<div class="col-sm-4">
//   <img src="https://via.placeholder.com/600" class="w-100">
//   <h5>${products[i].title}</h5>
//   <p>${products[i].price}</p>
//   <button class="buy" data-index="${i}">구매</button>
//   </div>`;
//   $('.row').append(템플릿);
// });
// // "구매" 버튼 클릭 시 이벤트 핸들러
// $('.buy').click(function() {
//   // 클릭된 버튼의 인덱스를 가져옴
//   // console.log(this); //구매버튼?
//   var index = $(this).data('index');
//   checkIndex.push(products[index].title);
//   // localStorage에 선택한 인덱스들을 저장
//   localStorage.setItem('cart', JSON.stringify(checkIndex));
// });
//localStorage 쓰는방법 SessionStorage도 비슷함
// localStorage.setItem('이름','jung');
// localStorage.getItem('이름');
// localStorage.removeItem('이름');
// var arr = [1,2,3];
// var newArr = JSON.stringify(arr);
// // // console.log(arr);
// localStorage.setItem('num',newArr);
// var 꺼낸것 = localStorage.getItem('num');
// // JSON.parse(꺼낸것);
// // console.log(JSON.parse(꺼낸것));
// localStorage.removeItem('num');



products.forEach((a,i) => {
    
  var 템플릿 = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5>
  <p>${products[i].price}</p>
  <button class="buy">구매</button>
  </div>`;
  $('.row').append(템플릿);
});


// $('.buy').click(function(e){
//   var title = $(e.target).siblings('h5').text();
//   //console.log(title) // title 나오는거 확인
//   if(localStorage.getItem('cart') !=null) {
//    var check = JSON.parse(localStorage.cart);
//    check.push(title);
//    localStorage.setItem('cart',JSON.stringify(check));
//   } else {
//     localStorage.setItem('cart',JSON.stringify([title]));
//   }
  
// });
$('.buy').click(function(e) {
  var title = $(e.target).siblings('h5').text(); // 클릭된 버튼의 상품명을 가져옴

  // localStorage에서 'cart' 키에 저장된 값을 가져옴
  var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  
  console.log('--->',cart); // [ {title : ??} , {title : ??}]
  // 장바구니에 추가할 상품을 찾음
  
  var existingItem = cart.find(item => item.title === title);
  // console.log(item);
//   var existingItem = cart.find(function(item) {
//     return item.title === title;
// });
  
  if (existingItem) {
      // 이미 장바구니에 있는 상품인 경우, 수량을 증가시킴
      existingItem.num += 1;
  } else {
      // 장바구니에 없는 상품인 경우, 새로 추가
      cart.push({ title: title, num: 1 });
  }
  
  // 업데이트된 장바구니 데이터를 localStorage에 저장
  localStorage.setItem('cart', JSON.stringify(cart));
});


//var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];



// $('#more').click(function(){
//   $.get('https://codingapple1.github.io/js/more1.json').done((data) => {
//    // console.log(data[1].price); // data[].price
//   for ( var i = 0; i < data.length; i++ ){
//     var 템플릿 = `<div class="col-sm-4">
// <img src="https://via.placeholder.com/600" class="w-100">
// <h5>${data[i].title}</h5>
// <p>${data[i].price}</p>
// </div>`;
// $('.row').append(템플릿);
//   }
//   })
// })

// var loadedDataCount = 1;

// $('#more').click(function() {
//   var jsonUrl = `https://codingapple1.github.io/js/more${loadedDataCount}.json`;

//   $.get(jsonUrl)
//   .done((data) => {
//     console.log(data)
//     if (data.length === 0) {
//       $('#more').hide();
//       console.log('버튼숨기기')
//     } else {
//       for (var i = 0; i < data.length; i++) {
//         // 특정 조건을 만족할 때만 실행
//         if (data[i].price > 5000) {
//           var 템플릿 = `<div class="col-sm-4">
//                           <img src="https://via.placeholder.com/600" class="w-100">
//                           <h5>${data[i].title}</h5>
//                           <p>${data[i].price}</p>
//                         </div>`;
//           $('.row').append(템플릿);
//         }
//       }
//       loadedDataCount++; // 불러온 데이터의 개수 증가
//     }
//   });
// });


var jsonNumber = 1;
var clickCount = 0; // 버튼 클릭 횟수를 저장하는 변수

$('#more').click(function() {
  if (clickCount < 3) { // 클릭 횟수가 3미만인 경우에만 실행
    var jsonUrl = `https://codingapple1.github.io/js/more${jsonNumber}.json`;

    // 해당 URL이 존재하는지 확인
    $.ajax({
      url: jsonUrl,
      type: 'HEAD',
      success: function() {
        // URL이 존재하는 경우 데이터 요청
        $.get(jsonUrl)
        .done((data) => {
          for (var i = 0; i < data.length; i++) {
            // 특정 조건을 만족할 때만 실행
            if (data[i].price > 5000) {
              var 템플릿 = `<div class="col-sm-4">
                              <img src="https://via.placeholder.com/600" class="w-100">
                              <h5>${data[i].title}</h5>
                              <p>${data[i].price}</p>
                            </div>`;
              $('.row').append(템플릿);
            }
          }
          // 다음 JSON 파일 번호 증가
          jsonNumber++;
          clickCount++; // 클릭 횟수 증가
        })
        .fail(() => {
          // 요청 실패 시에도 버튼 숨기기
          $('#more').hide();
        });
      },
      error: function() {
        // URL이 존재하지 않는 경우
        $('#more').hide();
      }
    });
  } else { // 클릭 횟수가 3이상이면 버튼 숨기기
    $('#more').hide();
  }
});



// var jsonNumber = 1;

// $('#more').click(function() {
//   // 현재까지 표시된 카드의 수
//   var displayedCardCount = $('.row > div').length;

//   var jsonUrl = `https://codingapple1.github.io/js/more${jsonNumber}.json`;

//   // 해당 URL이 존재하는지 확인
//   $.ajax({
//     url: jsonUrl,
//     type: 'HEAD',
//     success: function() {
//       // URL이 존재하는 경우 데이터 요청
//       $.get(jsonUrl)
//       .done((data) => {
//         if (data.length === 0) {
//           $('#more').hide(); // 데이터가 없는 경우 버튼 숨기기
//         } else {
//           for (var i = displayedCardCount; i < displayedCardCount + 3 && i < data.length; i++) {
//             // 특정 조건을 만족할 때만 실행
//             if (data[i].price > 5000) {
//               var 템플릿 = `<div class="col-sm-4">
//                               <img src="https://via.placeholder.com/600" class="w-100">
//                               <h5>${data[i].title}</h5>
//                               <p>${data[i].price}</p>
//                             </div>`;
//               $('.row').append(템플릿);
//             }
//           }
//           // 다음 JSON 파일 번호 증가
//           jsonNumber++;
//         }
//       })
//       .fail(() => {
//         // 요청 실패 시에도 버튼 숨기기
//         $('#more').hide();
//       });
//     },
//     error: function() {
//       // URL이 존재하지 않는 경우
//       $('#more').hide();
//     }
//   });
// });








// var 어레이 = [7,3,5,2,40];
// var 어레이2 = ['a','b','c']; // 숙제 
// 어레이.sort(function(a,b) {
//   return a - b
// });
// console.log(어레이);

// console.log(products);
// products.sort(function(a, b) {
//   return a.price - b.price;
// });

// $('#price').click(function() {
//   products.sort(function(a, b) {
//     return a.price - b.price
//   });
//   $('#row').html('');
//   for (var i = 0 ; i < products.length; i++) {
//     var 템플릿 = `<div class="col-sm-4">
//   <img src="https://via.placeholder.com/600" class="w-100">
//   <h5>${products[i].title}</h5>
//   <p>${products[i].price}</p>
//   </div>`;
//   $('.row').append(템플릿);
//   }
// })



$('#price').click(function() {
  products.sort(function(a, b) {
    return a.price - b.price
  });

  
  $('.row').html('');

  products.forEach((a,i) => {
    
    var 템플릿 = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>${products[i].price}</p>
    </div>`;
    $('.row').append(템플릿);
  })
}) // 코딩애플 선생이한거 array때만 foreach였나?


// var 어레이 = ['가', '나', '다'];
// 어레이.sort(function(a,b) {
  
//   console.log();
//   if(a < b) return 1;
//   if(a > b) return -1;
//   return 0;
  
// });



$('#sort1').click(function() {
  products.sort(function(a,b) {
  
    if(a.title < b.title) return 1;
    if(a.title > b.title) return -1;
    return 0;
    
  });
  $('.row').html('');

  products.forEach((a,i) => {
    
    var 템플릿 = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>${products[i].price}</p>
    
    </div>`;
    $('.row').append(템플릿);
  })


  
});

$('#filter').click(function() {
  var newProduct = products.filter(function(a) {
    return a.price <= 60000
  });
  console.log(newProduct);

  
  $('.row').html('');

  newProduct.forEach((a,i) => {
    
    var 템플릿 = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${newProduct[i].title}</h5>
    <p>${newProduct[i].price}</p>
    </div>`;
    $('.row').append(템플릿);
  })
})