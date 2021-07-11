alert("Instructions? you can find it navigation bar")
var input = document.querySelector(".input_text");
var date1 = document.querySelector(".date1");
// var date2 = document.querySelector('.date2');

var head = document.querySelector(".head");
var head1 = document.querySelector(".head1");
var head2 = document.querySelector(".head2");
var head3 = document.querySelector(".head3");
var head4 = document.querySelector(".head4");
var head5 = document.querySelector(".head5");
var head6 = document.querySelector(".head6");
var head7 = document.querySelector(".head7");
var head8 = document.querySelector(".head8");
var head9 = document.querySelector(".head9");

var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var conditions = document.querySelector(".conditions");

var temp1 = document.querySelector(".temp1");
var desc1 = document.querySelector(".desc1");
var conditions1 = document.querySelector(".conditions1");

var temp2 = document.querySelector(".temp2");
var desc2 = document.querySelector(".desc2");
var conditions2 = document.querySelector(".conditions2");

var temp3 = document.querySelector(".temp3");
var desc3 = document.querySelector(".desc3");
var conditions3 = document.querySelector(".conditions3");

var temp4 = document.querySelector(".temp4");
var desc4 = document.querySelector(".desc4");
var conditions4 = document.querySelector(".conditions4");

var temp5 = document.querySelector(".temp5");
var desc5 = document.querySelector(".desc5");
var conditions5 = document.querySelector(".conditions5");

var temp6 = document.querySelector(".temp6");
var desc6 = document.querySelector(".desc6");
var conditions6 = document.querySelector(".conditions6");

var temp7 = document.querySelector(".temp7");
var desc7 = document.querySelector(".desc7");
var conditions7 = document.querySelector(".conditions7");

var temp8 = document.querySelector(".temp8");
var desc8 = document.querySelector(".desc8");
var conditions8 = document.querySelector(".conditions8");

var temp9 = document.querySelector(".temp9");
var desc9 = document.querySelector(".desc9");
var conditions9 = document.querySelector(".conditions9");

var button = document.querySelector(".submit");

var tempinfo = document.querySelector(".tempInfo");
var info = document.querySelector(".info");
var info2 = document.querySelector(".info2");

function datector(dayi, monthi, yeari, plus) {
  if (monthi == 8 || monthi == 10 || monthi == 12 || monthi % 2 != 0) {
    if (monthi == 12) {
      if (dayi > 31 - plus) {
        yeari++;
        monthi = 1;
        dayi = dayi - (31 - plus);
      } else {
        dayi = dayi + plus;
      }
    } else {
      if (dayi > 31 - plus) {
        monthi++;
        dayi = dayi - (31 - plus);
      } else {
        dayi = dayi + plus;
      }
    }
  } else {
    if (monthi == 2) {
      if (yeari % 400 == 0 || (yeari % 4 == 0 && yeari % 100 != 0)) {
        if (dayi > 29 - plus) {
          monthi++;
          dayi = dayi - (29 - plus);
        } else {
          dayi = dayi + plus;
        }
      } else {
        if (dayi > 28 - plus) {
          monthi++;
          dayi = dayi - (28 - plus);
        } else {
          dayi = dayi + plus;
        }
      }
    } else {
      if (dayi > 30 - plus) {
        monthi++;
        dayi = dayi - (30 - plus);
      } else {
        dayi = dayi + plus;
      }
    }
  }
  let strine1 = yeari.toString();
  let strine2 = monthi.toString();
  let strine3 = dayi.toString();
  if (monthi < 10) {
    strine2 = "0".concat(strine2);
  }
  let strineL = strine1.concat("-").concat(strine2).concat("-").concat(strine3);
  return strineL;

}

// let se=s.join("-");
// console.log(se);
button.addEventListener("click", function (name) {
  let str = date1.value;
  let s = str.split("-");
  console.log(s);

  let int1 = parseInt(s[0]); //2021
  let int2 = parseInt(s[1]); //07
  let int3 = parseInt(s[2]); //19

  let inte1=int1;
  let inte2=int2;
  let inte3=int3;

  if (int2 == 8 || int2 == 10 || int2 == 12 || int2 % 2 != 0) {
    if (int2 == 12) {
      if (int3 > 22) {
        int1++;
        int2 = 1;
        int3 = int3 - 22;
      } else {
        int3 = int3 + 9;
      }
    } else {
      if (int3 > 22) {
        int2++;
        int3 = int3 - 22;
      } else {
        int3 = int3 + 9;
      }
    }
  } else {
    if (int2 == 2) {
      if (int1 % 400 == 0 || (int1 % 4 == 0 && int1 % 100 != 0)) {
        if (int3 > 20) {
          int2++;
          int3 = int3 - 20;
        } else {
          int3 = int3 + 9;
        }
      } else {
        if (int3 > 19) {
          int2++;
          int3 = int3 - 19;
        } else {
          int3 = int3 + 9;
        }
      }
    } else {
      if (int3 > 21) {
        int2++;
        int3 = int3 - 21;
      } else {
        int3 = int3 + 9;
      }
    }
  }

  // console.log(int1,int2,int3);

  let strin1 = int1.toString();
  let strin2 = int2.toString();
  let strin3 = int3.toString();
  if (int2 < 10) {
    strin2 = "0".concat(strin2);
  }
  let strinL = strin1.concat("-").concat(strin2).concat("-").concat(strin3);
  // date2.value=strinL;

  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      input.value +
      "/" +
      date1.value +
      "/" +
      strinL +
      "?unitGroup=uk&key=XQKX6JU6JDXVAW3CVSDU5R7VQ&options=nonulls&include=obs%2Cfcst%2Cstats%2Calerts%2Ccurrent%2Chistfcst"
  )
    .then((response) => response.json())
    .then((data) => {
      var tempValue = data["days"][0]["temp"];
      var conditionsValue = data["days"][0]["conditions"];
      var descValue = data["days"][0]["description"];
      
     
      head.innerHTML=datector(inte3, inte2, inte1, 0);
      head1.innerHTML=datector(inte3, inte2, inte1, 1);
      head2.innerHTML=datector(inte3, inte2, inte1, 2);
      head3.innerHTML=datector(inte3, inte2, inte1, 3);
      head4.innerHTML=datector(inte3, inte2, inte1, 4);
      head5.innerHTML=datector(inte3, inte2, inte1, 5);
      head6.innerHTML=datector(inte3, inte2, inte1, 6);
      head7.innerHTML=datector(inte3, inte2, inte1, 7);
      head8.innerHTML=datector(inte3, inte2, inte1, 8);
      head9.innerHTML=datector(inte3, inte2, inte1, 9);

      temp.innerHTML = "Temperature - " + tempValue;
      conditions.innerHTML = conditionsValue;
      desc.innerHTML = descValue;

      var tempValue1 = data["days"][1]["temp"];
      var conditionsValue1 = data["days"][1]["conditions"];
      var descValue1 = data["days"][1]["description"];

      temp1.innerHTML = "Temperature - " + tempValue1;
      conditions1.innerHTML = conditionsValue1;
      desc1.innerHTML = descValue1;

      var tempValue2 = data["days"][2]["temp"];
      var conditionsValue2 = data["days"][2]["conditions"];
      var descValue2 = data["days"][2]["description"];

      temp2.innerHTML = "Temperature - " + tempValue2;
      conditions2.innerHTML = conditionsValue2;
      desc2.innerHTML = descValue2;

      var tempValue3 = data["days"][3]["temp"];
      var conditionsValue3 = data["days"][3]["conditions"];
      var descValue3 = data["days"][3]["description"];

      temp3.innerHTML = "Temperature - " + tempValue3;
      conditions3.innerHTML = conditionsValue3;
      desc3.innerHTML = descValue3;

      var tempValue4 = data["days"][4]["temp"];
      var conditionsValue4 = data["days"][4]["conditions"];
      var descValue4 = data["days"][4]["description"];

      temp4.innerHTML = "Temperature - " + tempValue4;
      conditionsValue4.innerHTML = conditionsValue4;
      desc4.innerHTML = descValue4;

      var tempValue5 = data["days"][5]["temp"];
      var conditionsValue5 = data["days"][5]["conditions"];
      var descValue5 = data["days"][5]["description"];

      temp5.innerHTML = "Temperature - " + tempValue5;
      conditions5.innerHTML = conditionsValue5;
      desc5.innerHTML = descValue5;

      var tempValue6 = data["days"][6]["temp"];
      var conditionsValue6 = data["days"][6]["conditions"];
      var descValue6 = data["days"][6]["description"];

      temp6.innerHTML = "Temperature - " + tempValue6;
      conditions6.innerHTML = conditionsValue6;
      desc6.innerHTML = descValue6;

      var tempValue7 = data["days"][7]["temp"];
      var conditionsValue7 = data["days"][7]["conditions"];
      var descValue7 = data["days"][7]["description"];

      temp7.innerHTML = "Temperature - " + tempValue7;
      conditions7.innerHTML = conditionsValue7;
      desc7.innerHTML = descValue7;

      var tempValue8 = data["days"][8]["temp"];
      var conditionsValue8 = data["days"][8]["conditions"];
      var descValue8 = data["days"][8]["description"];

      temp8.innerHTML = "Temperature - " + tempValue8;
      conditions8.innerHTML = conditionsValue8;
      desc8.innerHTML = descValue8;

      var tempValue9 = data["days"][9]["temp"];
      var conditionsValue9 = data["days"][9]["conditions"];
      var descValue9 = data["days"][9]["description"];

      temp9.innerHTML = "Temperature - " + tempValue9;
      conditions9.innerHTML = conditionsValue9;
      desc9.innerHTML = descValue9;

      let cloudy = 0;
      let sunny = 0;
      let rainy = 0;
      let snowy = 0;
      let tempy = 0;
      for (let i = 0; i < 10; i++) {
        tempy = tempy + parseInt(data["days"][i]["temp"]);
        if (data["days"][i]["conditions"].includes("cloud")) {
          cloudy++;
        }
        if (data["days"][i]["conditions"].includes("sun")) {
          sunny++;
        }
        if (data["days"][i]["conditions"].includes("rain")) {
          rainy++;
        }
        if (data["days"][i]["conditions"].includes("snow")) {
          snowy++;
        }
      }

      tempy = tempy / 10;

      if (tempy > 35) {
        tempinfo.innerHTML =
          "> temperature is around " +
          tempy.toString() +
          " this week its seems to hot";
      } else if (tempy > 26 && tempy <= 35) {
        tempinfo.innerHTML =
          "> temperature is around " +
          tempy.toString() +
          " its a nice temperature for a vacation";
      } else {
        tempinfo.innerHTML =
          "> its cool this week and temperature is around " + tempy.toString();
      }

      let maxy = Math.max(cloudy, sunny, rainy, snowy);
      let maxyer;
      if (maxy == cloudy) {
        if (cloudy > 5) {
          info.innerHTML =
            "> its very cloudy week and may rain MountainMunch suggests to plan your holiday in another week and if you love rainy then dont forget to carry an umbrella.. ;)";
        }
        maxyer = Math.max(sunny, rainy, snowy);
        if (maxyer == sunny) {
          info2.innerHTML =
            "> its " +
            cloudy.toString() +
            " days cloudy and " +
            sunny.toString() +
            " days sunny";
        } else if (maxyer == rainy) {
          info2.innerHTML =
            "> its " +
            cloudy.toString() +
            " days cloudy and " +
            rainy.toString() +
            " days rainy MountainMunch suggests to plan your holiday in another week and if you love rainy then dont forget to carry an umbrella.. ;)";
        } else if (maxyer == snowy) {
          info2.innerHTML =
            "> its " +
            cloudy.toString() +
            " days cloudy and " +
            snowy.toString() +
            " days snowy MountainMunch suggests to plan your holiday in another week";
        }
      } else if (maxy == sunny) {
        if (sunny > 5) {
          info.innerHTML = "> its a sunny week hope you enjoy your holiday.. ;)";
        }
        maxyer = Math.max(cloudy, rainy, snowy);
        if (maxyer == cloudy) {
          info2.innerHTML =
            "> its " +
            sunny.toString() +
            " days sunny and " +
            cloudy.toString() +
            " days cloudy its a good week";
        } else if (maxyer == rainy) {
          info2.innerHTML =
            "> its " +
            sunny.toString() +
            " days sunny and " +
            rainy.toString() +
            " MountainMunch suggests to carry an umbrella.. ;)";
        }
      } else if (maxy == rainy) {
        if (rainy > 5) {
          info.innerHTML =
            "> its very cloudy week and may rain MountainMunch suggests to plan your holiday in another week and if you love rainy then dont forget to carry an umbrella.. ;)";
        }
        maxyer = Math.max(cloudy, sunny, snowy);
        if (maxyer == cloudy) {
          info2.innerHTML =
            "> its " +
            cloudy.toString() +
            " days cloudy and " +
            rainy.toString() +
            " days rainy MountainMunch suggests to plan your holiday in another week and if you love rainy then dont forget to carry an umbrella.. ;)";
        } else if (maxyer == sunny) {
          info2.innerHTML =
            "> its " +
            sunny.toString() +
            " days sunny and " +
            rainy.toString() +
            " MountainMunch suggests to carry an umbrella.. ;)";
        } else {
          info2.innerHTML =
            "> its snowy and rainy MountainMunch suggests not to make journey";
        }
      } else {
        if (snowy > 5) {
          info.innerHTML =
            "> its very snowy MountainMunch suggests to plan holiday on another week;)";
        }
        info2.innerHTML = "> its " + snowy.toString() + " days snowy..";
      }

      console.log(cloudy, sunny, rainy, snowy, tempy / 10);

      input.value = "";
      date1.value = "";
    })

    .catch((err) => alert("Please enter inputs clearly!"));
});
