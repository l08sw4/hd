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

          elmnt.removeAttribute("w3-include-html");
          includeHTML();

          //내비
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

        }

      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/

      return;
    }
  } //롤링
  $(document).ready(function () {
    var height = $(".roll-top").height();
    var num = $(".rolling li").length;
    var max = height * num;
    var move = 0;

    function noticeRolling() {
      move += height;
      $(".rolling").animate({
        "top": -move
      }, 600, function () {
        if (move >= max) {
          $(this).css("top", 0);
          move = 0;
        };
      });
    };
    noticeRollingOff = setInterval(noticeRolling, 1000);
    $(".rolling").append($(".rolling li").first().clone());

    $(".rolling_stop").click(function () {
      clearInterval(noticeRollingOff);
    });
    $(".rolling_start").click(function () {
      noticeRollingOff = setInterval(noticeRolling, 1500);
    });
  });
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