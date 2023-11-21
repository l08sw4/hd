function btnPay() {
  alert('서비스 준비중 입니다.');
}

//사이드바
function show() {
  document.getElementById('sidebar').classList.toggle('act');
  document.getElementById('side-btn1').
  classList.toggle('active');
}


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/

          elmnt.removeAttribute("w3-include-html");
          includeHTML();

          // -------------------------------------------------------------------------
          let openss = document.querySelector("#opens");
          openss.addEventListener("click", function () {
            document.querySelector("#opens").style.opacity = "0";
            document.querySelector("#mobNav").style.width = "100%";
          });

          let closess = document.querySelector("#closes");
          closess.addEventListener("click", function () {
            document.querySelector("#mobNav").style.width = "0%";
            document.querySelector("#opens").style.opacity = "1";
          });

          // -------------------------------------------------------------------------

          // ---------------------------------
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      // -------------------------------------------------------------------------
      // -------------------------------------------------------------------------
      return;
    }
  }
};

//탭하면 컨텐츠가 바뀜
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tabmenu-color", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tabmenu-color";
}

//아코디언

function collapse(element) {
  var before = document.getElementsByClassName("active")[0] // 기존에 활성화된 버튼
  if (before && document.getElementsByClassName("active")[0] != element) { // 자신 이외에 이미 활성화된 버튼이 있으면
    before.nextElementSibling.style.maxHeight = null; // 기존에 펼쳐진 내용 접고
    before.classList.remove("active"); // 버튼 비활성화
  }
  element.classList.toggle("active"); // 활성화 여부 toggle

  var content = element.nextElementSibling;
  if (content.style.maxHeight != 0) { // 버튼 다음 요소가 펼쳐져 있으면
    content.style.maxHeight = null; // 접기
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; // 접혀있는 경우 펼치기
  }
}

//전체동의
function selectAll(selectAll)  {
  const checkboxes 
       = document.getElementsByName('all');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}


//모델 셀렉
  //모델 아티클 할부 계산기
  let bestTabs = [];
  let eTabs = [];
  let tab_serch = [];
  let colsecs = [];
  let ones = [];
  bestTabs = document.querySelectorAll('.bestTab');
  eTabs = document.querySelectorAll('.eTab');
  tab_serch = document.querySelectorAll('.tab1');
  colsecs = document.querySelectorAll('.colsec');
  ones = document.querySelectorAll('.one');

  for (let i = 0; i < bestTabs.length; i++) {
    bestTabs[i].addEventListener('click', () => tabschange(i));
  }
  for (let i = 0; i < eTabs.length; i++) {
    eTabs[i].addEventListener('click', () => tabschange1(i));
  }
  for (let i = 0; i < tab_serch.length; i++) {
    tab_serch[i].addEventListener('click', () => tabonoff(i));
  }
  for (let i = 0; i < colsecs.length; i++) {
    colsecs[i].addEventListener('click', () => fonsiup(i))
  }

  function tabonoff(i) {
    tab_serch[i].classList.toggle('check');
  }

  function fonsiup(i) {
    ones[i].classList.toggle('check');
  }


  function tabschange(i) {
    for (let j = 0; j < bestTabs.length; j++) {
      bestTabs[j].classList.remove('checked');
    }
    document.querySelector('#second').style.display = "none";
    document.querySelector('#three').style.display = "none";
    document.querySelector('#four').style.display = "none";
    document.querySelector('#five').style.display = "none";

    bestTabs[i].classList.add('checked');
    switch (i) {
      case 0:
        document.querySelector('#second').style.display = "block";
        break;
      case 1:
        document.querySelector('#three').style.display = "block";
        break;
      case 2:
        document.querySelector('#four').style.display = "block";
        break;
      case 3:
        document.querySelector('#five').style.display = "block";
        break;
    }
  }

  let thplus = window.matchMedia("screen and (min-width:1366px");

  function tabschange1(i) {
    for (let j = 0; j < eTabs.length; j++) {
      eTabs[j].classList.remove('checked');
    }
    document.querySelector('#cani').style.display = "none";
    document.querySelector('#ssona').style.display = "none";
    document.querySelector('#spo').style.display = "none";
    document.querySelector('#moha').style.display = "none";

    eTabs[i].classList.add('checked');
    switch (i) {
      case 0:
        document.querySelector('#cani').style.display = "flex";
        // if(thplus.matches) {
        // 	document.querySelector('#cani').style.flexDirection = "row";
        // }
        // else{
        // 	document.querySelector('#cani').style.flexDirection = "column";
        // }
        break;
      case 1:
        document.querySelector('#ssona').style.display = "flex";
        // if(thplus.matches) {
        // 	document.querySelector('#ssona').style.flexDirection = "row";
        // }
        // else{
        // 	document.querySelector('#ssona').style.flexDirection = "column";
        // }
        break;
      case 2:
        document.querySelector('#spo').style.display = "flex";
        // if(thplus.matches) {
        // 	document.querySelector('#spo').style.flexDirection = "row";
        // }
        // else{
        // 	document.querySelector('#spo').style.flexDirection = "column";
        // }
        break;
      case 3:
        document.querySelector('#moha').style.display = "flex";
        // if(thplus.matches) {
        // 	document.querySelector('#moha').style.flexDirection = "row";
        // }
        // else{
        // 	document.querySelector('#moha').style.flexDirection = "column";
        // }
        break;
    }
  }


  // 숫자 올리기 + 태그가 보여져야 작동하는 것.

  let isVisible = false;

  $(window).on('scroll', function () {
    if (checkVisible($('.nums')) && !isVisible) {
      $('.nums').each(function () {
        const $this = $(this),
          countTo = $this.attr('data-count');

        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 15000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
              ','));
            //3자리 마다 콤마 표시 적용
          }
        });
      });
      isVisible = true;
    }
  });


  let isVisible2 = false;

  $(window).on('scroll', function () {
    if (checkVisible($('.nums2')) && !isVisible2) {
      $('.nums2').each(function () {
        const $this = $(this),
          countTo = $this.attr('data-count');

        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 15000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
              ','));
            //3자리 마다 콤마 표시 적용
          }
        });
      });
      isVisible2 = true;
    }
  });


  // input lange 채우기

  function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
      scrolltop = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
  }

  document.querySelector('.rangeMoney').addEventListener('input', function (event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 ' + gradient_value * event
      .target.value + '%, rgb(236, 236, 236) ' + gradient_value * event.target.value +
      '%, rgb(236, 236, 236) 100%)';
  });


  document.querySelector('.rangeMonth').addEventListener('input', function (event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 ' + gradient_value * event
      .target.value + '%, rgb(236, 236, 236) ' + gradient_value * event.target.value +
      '%, rgb(236, 236, 236) 100%)';
  });

  document.querySelector('.rangeMoney1').addEventListener('input', function (event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 ' + gradient_value * event
      .target.value + '%, rgb(236, 236, 236) ' + gradient_value * event.target.value +
      '%, rgb(236, 236, 236) 100%)';
  });


  document.querySelector('.rangeMonth1').addEventListener('input', function (event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 ' + gradient_value * event
      .target.value + '%, rgb(236, 236, 236) ' + gradient_value * event.target.value +
      '%, rgb(236, 236, 236) 100%)';
  });

  document.querySelector('.rangeMoney2').addEventListener('input', function (event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 ' + gradient_value * event
      .target.value + '%, rgb(236, 236, 236) ' + gradient_value * event.target.value +
      '%, rgb(236, 236, 236) 100%)';
  });


  document.querySelector('.rangeMonth2').addEventListener('input', function (event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 ' + gradient_value * event
      .target.value + '%, rgb(236, 236, 236) ' + gradient_value * event.target.value +
      '%, rgb(236, 236, 236) 100%)';
  });

  document.querySelector('.rangeMoney3').addEventListener('input', function (event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 ' + gradient_value * event
      .target.value + '%, rgb(236, 236, 236) ' + gradient_value * event.target.value +
      '%, rgb(236, 236, 236) 100%)';
  });


  document.querySelector('.rangeMonth3').addEventListener('input', function (event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 ' + gradient_value * event
      .target.value + '%, rgb(236, 236, 236) ' + gradient_value * event.target.value +
      '%, rgb(236, 236, 236) 100%)';
  });


  /*레인지 값1*/
  let paymentRange = document.querySelector(".rangeMoney");
  let advanceTotal = document.querySelector(".rangeRead");
  let advanceTotalValue = Number(paymentRange.value);
  let Cayman718Price = Number(95000000);
  let advancePaymentValue = Cayman718Price - advanceTotalValue;

  let periodRange = document.querySelector(".rangeMonth");
  let installmentTotal = document.querySelector(".rangeSeb");
  let rangeSteps = [3, 12, 24, 36, 48, 60];
  let installmentTotalValue = Number(rangeSteps[periodRange.value]);

  let monthlyPaymentValue = advancePaymentValue / installmentTotalValue;



  paymentRange.oninput = function () {
    advanceTotalValue = Number(this.value);
    advanceTotal.value = advanceTotalValue.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    advancePaymentValue = Cayman718Price - advanceTotalValue;
    advancePayment.innerHTML = advancePaymentValue.toLocaleString('ko-KR');
    monthlyPaymentValue = advancePaymentValue / installmentTotalValue;
    monthlyPaymentValue = Math.floor(monthlyPaymentValue);
    monthlyPayment.innerHTML = monthlyPaymentValue.toLocaleString('ko-KR');
  }

  //함부 기간

  periodRange.oninput = function () {
    installmentTotalValue = Number(rangeSteps[this.value]);
    installmentTotal.value = installmentTotalValue.toLocaleString('ko-KR');
    monthlyPaymentValue = Math.floor(monthlyPaymentValue);
    monthlyPaymentValue = advancePaymentValue / installmentTotalValue;
    monthlyPayment.innerHTML = monthlyPaymentValue.toLocaleString('ko-KR');
  }


  /*레인지 값2*/
  let paymentRange1 = document.querySelector(".rangeMoney1");
  let advanceTotal1 = document.querySelector(".rangeRead1");
  let advanceTotalValue1 = Number(paymentRange1.value);
  let Cayman718Price1 = Number(3660);
  let advancePaymentValue1 = Cayman718Price1 - advanceTotalValue1;

  let periodRange1 = document.querySelector(".rangeMonth1");
  let installmentTotal1 = document.querySelector(".rangeSeb1");
  let rangeSteps1 = [3, 12, 24, 36, 48, 60];
  let installmentTotalValue1 = Number(rangeSteps1[periodRange1.value]);

  let monthlyPaymentValue1 = advancePaymentValue1 / installmentTotalValue1;

  paymentRange1.oninput = function () {
    advanceTotalValue1 = Number(this.value);
    advanceTotal1.value = advanceTotalValue1.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    advancePaymentValue1 = Cayman718Price1 - advanceTotalValue1;
    advancePayment1.innerHTML = advancePaymentValue1.toLocaleString('ko-KR');
    monthlyPaymentValue1 = advancePaymentValue1 / installmentTotalValue1;
    monthlyPaymentValue1 = Math.floor(monthlyPaymentValue1);
    monthlyPayment1.innerHTML = monthlyPaymentValue1.toLocaleString('ko-KR');
  }

  //함부 기간

  periodRange1.oninput = function () {
    installmentTotalValue1 = Number(rangeSteps1[this.value]);
    installmentTotal1.value = installmentTotalValue1.toLocaleString('ko-KR');
    monthlyPaymentValue1 = Math.floor(monthlyPaymentValue1);
    monthlyPaymentValue1 = advancePaymentValue1 / installmentTotalValue1;
    monthlyPayment1.innerHTML = monthlyPaymentValue1.toLocaleString('ko-KR');
  }


  /*레인지 값3*/
  let paymentRange2 = document.querySelector(".rangeMoney2");
  let advanceTotal2 = document.querySelector(".rangeRead2");
  let advanceTotalValue2 = Number(paymentRange2.value);
  let Cayman718Price2 = Number(4780);
  let advancePaymentValue2 = Cayman718Price2 - advanceTotalValue2;

  let periodRange2 = document.querySelector(".rangeMonth2");
  let installmentTotal2 = document.querySelector(".rangeSeb2");
  let rangeSteps2 = [3, 12, 24, 36, 48, 60];
  let installmentTotalValue2 = Number(rangeSteps2[periodRange2.value]);

  let monthlyPaymentValue2 = advancePaymentValue2 / installmentTotalValue2;


  paymentRange2.oninput = function () {
    advanceTotalValue2 = Number(this.value);
    advanceTotal2.value = advanceTotalValue2.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    advancePaymentValue2 = Cayman718Price2 - advanceTotalValue2;
    advancePayment2.innerHTML = advancePaymentValue2.toLocaleString('ko-KR');
    monthlyPaymentValue2 = advancePaymentValue2 / installmentTotalValue2;
    monthlyPaymentValue2 = Math.floor(monthlyPaymentValue2);
    monthlyPayment2.innerHTML = monthlyPaymentValue2.toLocaleString('ko-KR');
  }

  //함부 기간

  periodRange2.oninput = function () {
    installmentTotalValue2 = Number(rangeSteps2[this.value]);
    installmentTotal2.value = installmentTotalValue2.toLocaleString('ko-KR');
    monthlyPaymentValue2 = Math.floor(monthlyPaymentValue2);
    monthlyPaymentValue2 = advancePaymentValue2 / installmentTotalValue2;
    monthlyPayment2.innerHTML = monthlyPaymentValue2.toLocaleString('ko-KR');
  }


  /*레인지 4*/
  let paymentRange3 = document.querySelector(".rangeMoney3");
  let advanceTotal3 = document.querySelector(".rangeRead3");
  let advanceTotalValue3 = Number(paymentRange3.value);
  let Cayman718Price3 = Number(5580);
  let advancePaymentValue3 = Cayman718Price3 - advanceTotalValue3;

  let periodRange3 = document.querySelector(".rangeMonth3");
  let installmentTotal3 = document.querySelector(".rangeSeb3");
  let rangeSteps3 = [3, 12, 24, 36, 48, 60];
  let installmentTotalValue3 = Number(rangeSteps3[periodRange3.value]);

  let monthlyPaymentValue3 = advancePaymentValue3 / installmentTotalValue3;


  paymentRange3.oninput = function () {
    advanceTotalValue3 = Number(this.value);
    advanceTotal3.value = advanceTotalValue3.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    advancePaymentValue3 = Cayman718Price3 - advanceTotalValue3;
    advancePayment3.innerHTML = advancePaymentValue3.toLocaleString('ko-KR');
    monthlyPaymentValue3 = advancePaymentValue3 / installmentTotalValue3;
    monthlyPaymentValue3 = Math.floor(monthlyPaymentValue3);
    monthlyPayment3.innerHTML = monthlyPaymentValue3.toLocaleString('ko-KR');
  }

  //함부 기간

  periodRange3.oninput = function () {
    installmentTotalValue3 = Number(rangeSteps3[this.value]);
    installmentTotal3.value = installmentTotalValue3.toLocaleString('ko-KR');
    monthlyPaymentValue3 = Math.floor(monthlyPaymentValue3);
    monthlyPaymentValue3 = advancePaymentValue3 / installmentTotalValue3;
    monthlyPayment3.innerHTML = monthlyPaymentValue3.toLocaleString('ko-KR');
  }
