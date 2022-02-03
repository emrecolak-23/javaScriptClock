let userName = prompt("Kullanıcı Adınızı Giriniz?");

let myName = document.querySelector("#myName");

myName.innerHTML = `${userName}`;

function showTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";
  var days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  var dayName = days[date.getDay()-1]
  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + dayName;

  document.getElementById("myClock").innerHTML = time; 
  let t = setTimeout(function(){ showTime() }, 1000);
}
showTime();