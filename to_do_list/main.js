//===================//
//====Get the name===//
//===================//
var myFunction_to_get_name_from_page = document.querySelector(
  "#myFunction_to_get_name"
);

myFunction_to_get_name_from_page.addEventListener(
  "click",
  myFunction_to_get_name,
  false
);
function myFunction_to_get_name() {
  // alert(1)
  var name_from_user = document.getElementById("myName").value;

  // alert(name_from_user)

  if (name_from_user === "") {
    alert("You forget to type");
  } else {
    saveName();
  }
}

function saveName() {
  var first_letter = document.getElementById("myName").value;
  var capital_first_letter = first_letter[0].toUpperCase();
  first_letter = first_letter.replace(first_letter[0], capital_first_letter);

  localStorage.setItem("User", first_letter);
  location.reload();
}

var name_from_user_from_storage = localStorage.getItem("User");

if (name_from_user_from_storage === null) {
  // alert(1)
  //*===============================
  //==		if there is no name then custom name added
  //=========================================
  var custum_name = "Friend";
  localStorage.setItem("User", custum_name);
  var name_from_user_from_storage_for_temp = localStorage.getItem("User");

  // This will add the li value to html DOM :)
  document.getElementById("Name_of_user").innerHTML +=
    '<h1 class="name_header_tag" style="color: white; ">You can do it ' +
    name_from_user_from_storage_for_temp +
    "</h1>";
} else {
  var name_from_user_from_storage = localStorage.getItem("User");
  // console.log(name_from_user_from_storage)

  // This will add the li value to html DOM :)
  document.getElementById("Name_of_user").innerHTML +=
    '<h1 style="color: white;">You can do it ' +
    name_from_user_from_storage +
    "</h1>";
}

//===========================================//
//==========Here the add task is added======//
//==========================================//
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("myFunction")
    .addEventListener("click", myFunction_custom_by_user);
});

// The handler also must go in a .js file
function myFunction_custom_by_user() {
  // This is when the add button is ADD button is clicked

  var inputValue = document.getElementById("myInput").value;
  inputValue = inputValue.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // alert(1)
  // console.log(inputValue)

  if (inputValue === "") {
    alert("You forget to type !");
  } else {
    // This will add the li value to html DOM :)

    // Adding Date and Time of Note
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var Time = hours + ':' + minutes + ' ' + ampm;
    document.getElementById("list-group").innerHTML +=
      `<li style="color:white;border-radius: 25px;list-style-type: none;width: 750px;cursor: pointer;position: relative;padding: 14px 12px 14px 50px;margin: 0px 15px 10px 0px;background: rgba(102, 26, 97, 0.8);font-size: 15px;transition: 0.2s;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;" class="items_to_do_list" id="Done_task">
      ${inputValue}
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="material-icons" style="position: absolute;right: 0;top: 0;padding: 15px 20px;">Delete</span><br>${days[now.getDay()] +" "+ now.getDate()+" "+months[now.getMonth()]+","+now.getFullYear()+"\t"+Time}</li > `;
    saveState();
  }

  document.getElementById("myInput").value = "";
}

//=================================================================//
//====If user press enter then list data will be added as button===//
//=================================================================//

$("#myInput").keypress(function (event) {
  if (event.keyCode === 13) {
    var inputValue = document.getElementById("myInput").value;
    // alert(1)
    // console.log(inputValue)

    if (inputValue === "") {
      alert("You forget to type !");
    } else {
      // This will add the li value to html DOM :)
      document.getElementById("list-group").innerHTML +=
        '<li style="color:white;border-radius: 25px;list-style-type: none;width: 750px;cursor: pointer;position: relative;padding: 14px 12px 14px 50px;margin: 0px 15px 10px 0px;background: rgba(102, 26, 97, 0.8);font-size: 15px;transition: 0.2s;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;" class="items_to_do_list" id="Done_task">' +
        inputValue +
        '&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-icons" style="position: absolute;right: 0;top: 0;padding: 15px 20px;">Delete</span></li>';
      saveState();
    }

    document.getElementById("myInput").value = "";
  }
});

document.getElementById("myInput").focus();
// This will save the HTML to localStorage with key

function saveState() {
  localStorage.setItem(
    "DO_TASK",
    document.getElementById("list-group").innerHTML
  );
}

// This is used to remove the choosen list from html and saveState is called to store the list from html DOM

document.getElementById("list-group").addEventListener(
  "click",
  function (e) {
    if (e.target.className == "material-icons") {
      var listItem = e.target.parentElement;
      document.getElementById("list-group").removeChild(listItem);
      // alert(1)
      saveState();

      // alert(1)
    } else if (e.target.tagName === "LI") {
      //When the list is checked as done then it's done :)
      e.target.classList.toggle("checked");
      // alert(2)
      saveState();
    }
  },
  false
);

/* =========================================================
	Retrieve Saved Items in the To Do List and show in HTML
============================================================== */

let savedToDoList = localStorage.getItem("DO_TASK");
if (savedToDoList === null) {
  document.getElementById(
    "list-group"
  ).innerHTML = `<li style="color:white;list-style-type: none;border-radius: 25px;width: 750px;cursor: pointer;position: relative;padding: 14px 12px 14px 50px;margin: 0px 15px 10px 0px;background: rgba(102, 26, 97, 0.8);font-size: 15px;transition: 0.2s;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;" class="items_to_do_list" id="Done_task">Try harder :) &nbsp;&nbsp;&nbsp;&nbsp;<span class="material-icons" style="position: absolute;right: 0;top: 0;padding: 15px 20px;">Delete</span></li>
													   <li style="color:white;list-style-type: none;border-radius: 25px;width: 750px;cursor: pointer;position: relative;padding: 14px 12px 14px 50px;margin: 0px 15px 10px 0px;background: rgba(102, 26, 97, 0.8);font-size: 15px;transition: 0.2s;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;" class="items_to_do_list" id="Done_task">Celebrate your hardwork with a nap &nbsp;&nbsp;&nbsp;&nbsp;<span class="material-icons" style="position: absolute;right: 0;top: 0;padding: 15px 20px;">Delete</span></li>`;
} else {
  document.getElementById("list-group").innerHTML =
    localStorage.getItem("DO_TASK");
}

// if the image_path is empty

var image_path_from_storage = localStorage.getItem("image_path");
// console.log("image_path = " + image_path_from_storage)
if (image_path_from_storage === null) {
  // alert(1)
  //*===============================
  //==		if there is no photo then custom photo added
  //=========================================
  var custum_url = "image/1.jpg";
  localStorage.setItem("image_path", custum_url);
  var url_parameter = (document.body.style.backgroundImage =
    "url(" + custum_url + ")");
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "1400px 800px";
} else {
  // alert(2)
}

//=======================//
//=====Image set =======//
//======================//

var myFunction_image_from_url = document.querySelector("#myFunction_image");

myFunction_image_from_url.addEventListener("click", myFunction_image, false);

function myFunction_image() {
  var url_store = document.getElementById("image_url").value;
  if (url_store === "") {
    alert("You didn't submit the image path");
  } else {
    // console.log(url_store)
    document.body.style.backgroundColor = "#f3f3f3";
    var url_parameter = (document.body.style.backgroundImage =
      "url('" + url_store + "')");
    // console.log(url_parameter)
    save_image_path();
    document.getElementById("image_url").value = "";
  }
}

// This will save the HTML to localStorage with key

function save_image_path() {
  var url_store = document.getElementById("image_url").value;
  localStorage.setItem("image_path", url_store);
}
var image_url_form_storage = localStorage.getItem("image_path");
// console.log(image_url_form_storage)
localStorage.setItem("image_path", image_url_form_storage);

document.body.style.backgroundColor = "#f3f3f3";
var url_parameter = (document.body.style.backgroundImage =
  "url('" + image_url_form_storage + "')");
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "1400px 800px";
// document.body.style.width = "100px";

document.getElementById("image_url").value = "";

//*==================================//
//======Motivational Quote===========//
//==================================*//
var cars = [
  "Make sure you're dedicating your time to something worthwhile.",
  "Accomplish something today and be proud of it.",
  "You have total control.",
  "The road to success is probably paved with facepalms.",
  "Put forth your best effort as much as possible.",
  "Work with a purpose: to be successful.",
  "Don't listen to the haters; they're usually your competition.",
  "Keep it to yourself until it speaks for itself.",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var i = getRandomInt(7);
document.getElementById("motivational_quote").innerHTML = cars[i];

//*========================================================================//
//====Image by developer if incase user confused what to choose ===========//
//==========================================================================//

var myFunction_to_get_image_name = document.querySelector("#i_1");

myFunction_to_get_image_name.addEventListener("click", f_1, false);

var myFunction_to_get_image_name = document.querySelector("#i_2");

myFunction_to_get_image_name.addEventListener("click", f_2, false);

var myFunction_to_get_image_name = document.querySelector("#i_3");

myFunction_to_get_image_name.addEventListener("click", f_3, false);

var myFunction_to_get_image_name = document.querySelector("#i_4");

myFunction_to_get_image_name.addEventListener("click", f_4, false);

var myFunction_to_get_image_name = document.querySelector("#i_5");

myFunction_to_get_image_name.addEventListener("click", f_5, false);

var myFunction_to_get_image_name = document.querySelector("#i_6");

myFunction_to_get_image_name.addEventListener("click", f_6, false);

var myFunction_to_get_image_name = document.querySelector("#i_7");

myFunction_to_get_image_name.addEventListener("click", f_7, false);

var myFunction_to_get_image_name = document.querySelector("#i_8");

myFunction_to_get_image_name.addEventListener("click", f_8, false);

var myFunction_to_get_image_name = document.querySelector("#i_9");

myFunction_to_get_image_name.addEventListener("click", f_9, false);

function f_1() {
  var image_by_developer_1 = document
    .getElementById("img_name_1")
    .getAttribute("src");
  // alert(image_by_developer_1)
  // alert(1)
  localStorage.setItem("image_path", image_by_developer_1);
  document.body.style.backgroundImage = "url(" + image_by_developer_1 + ")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "1400px 800px";
}

function f_2() {
  var image_by_developer_2 = document
    .getElementById("img_name_2")
    .getAttribute("src");
  // alert(image_by_developer_2)

  localStorage.setItem("image_path", image_by_developer_2);
  document.body.style.backgroundImage = "url(" + image_by_developer_2 + ")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "1400px 800px";
}
function f_3() {
  var image_by_developer_3 = document
    .getElementById("img_name_3")
    .getAttribute("src");
  // alert(image_by_developer_3)

  localStorage.setItem("image_path", image_by_developer_3);
  document.body.style.backgroundImage = "url(" + image_by_developer_3 + ")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "1400px 800px";
}

function f_4() {
  var image_by_developer_4 = document
    .getElementById("img_name_4")
    .getAttribute("src");
  // alert(image_by_developer_4)

  localStorage.setItem("image_path", image_by_developer_4);
  document.body.style.backgroundImage = "url(" + image_by_developer_4 + ")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "1400px 800px";
}
function f_5() {
  var image_by_developer_5 = document
    .getElementById("img_name_5")
    .getAttribute("src");
  // alert(image_by_developer_4)

  localStorage.setItem("image_path", image_by_developer_5);
  document.body.style.backgroundImage = "url(" + image_by_developer_5 + ")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "1400px 800px";
}
function f_6() {
  var image_by_developer_6 = document
    .getElementById("img_name_6")
    .getAttribute("src");
  // alert(image_by_developer_4)

  localStorage.setItem("image_path", image_by_developer_6);
  document.body.style.backgroundImage = "url(" + image_by_developer_6 + ")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "1400px 800px";
}
function f_7() {
  var image_by_developer_7 = document
    .getElementById("img_name_7")
    .getAttribute("src");
  // alert(image_by_developer_4)

  localStorage.setItem("image_path", image_by_developer_7);
  document.body.style.backgroundImage = "url(" + image_by_developer_7 + ")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "1400px 800px";
}
function f_8() {
  var image_by_developer_8 = document
    .getElementById("img_name_8")
    .getAttribute("src");
  // alert(image_by_developer_4)

  localStorage.setItem("image_path", image_by_developer_8);
  document.body.style.backgroundImage = "url(" + image_by_developer_8 + ")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "1400px 800px";
}
function f_9() {
  var image_by_developer_9 = document
    .getElementById("img_name_9")
    .getAttribute("src");
  // alert(image_by_developer_4)

  localStorage.setItem("image_path", image_by_developer_9);
  document.body.style.backgroundImage = "url(" + image_by_developer_9 + ")";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "1400px 800px";
}
