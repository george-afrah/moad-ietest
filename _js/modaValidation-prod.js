/*== Form Dynamic messages Start ==*/
$( document ).ready(function(){ 

/*===== activeBannersBoxDx Start=======*/
$("#CODFI").on('click', function() {
$(".boxDx-1.card").html(
'<div class="activeBannersBoxDx  activeBannerino card " style="width: 20rem; height:100%;">'+
'<div><img src="/_images/dLite-directa-hero.jpg" alt="image two"></div>' +
'</div>');      
    sliderInit();   
});//END 2nd include
/*===== active Sliding BannersBoxDx End=======*/


    $('[type="radio"].PROFE').on('click', function() {    
    $(".boxDx-2").hide().html('<div class="card-block">'+
    '<h4 class="card-title">Serve aiuto!</h4>'+              
        '<strong> qualsiasi momento puoi compilare il modulo insieme a noi: </strong>'+
            '<ul class="list-group">'+
            '<li class="card-text list-item">'+ 
        '<a href="http://www.directa.it/bridge/adesione/index.html" title="directa sim Help desk">'+
        '<i class="fa fa-address-book-o" aria-hidden="true"></i>'+'  '+
        'cliccando qui ti ricontattiamo subito  </a></li>'+
        '<li class="card-text list-item">'+ 
                'oppure chiamando la nostra assistenza telefonica allo'+
                '<a class="phone" href="tel:+39011530101"> <strong> 011 530101 </strong> </a>'+' </li></ul> </div>'                     
            ).fadeIn(1000);  
        });//END 2nd include
      
/*==Slick Slider begin===*/
function sliderInit(){
    $('.activeBannerino').slick({
    slidesToShow: 1,
      slidesToScroll: 1, 
      autoplay: true,
      infinite: true,  
      autoplaySpeed: 2000,
      dots: true, 
      centerMode: true,
      variableWidth: true
    });
}// slick sliderInit //END 
sliderInit();
/*==Slick Slider </END===*/
  })//===Main Ready event END===//>

/*== Form Dynamic messages && Banners END ==*/
/*==============================
* << JS Rgex Break Down >>Start >>
=================================*/
/*Example One >> Start*/
var EMAIL_REGEXP = new RegExp (['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
'|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
'[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
'[a-zA-Z]{2,}))$'].join(''));
/*Example One >> Start*/

/*Array Codice Fiscale  >> Start*/
  var codiceFiscaleRegex = new RegExp (["[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}"]);
/*Array Codice Fiscale >> END*/
/*New CodiceFiscale Regex */
   jQuery.validator.addMethod("codiceFiscale", function(value, element){
      if(codiceFiscaleRegex.test(value)) {
       return true; // PASS validation otherwise
      } else {
          return false;//FAIL validation when REGEX matches
      };
  }, "Error Codice Fiscale");

/* //domDiverso optioanal validation method == start> */
/* ===  domDiverso  CustomFN === START/> */
jQuery.validator.addMethod("DatiDomicilDiversi", function (value, element) {
      $("#Dom_diverso  :input").each(function () {
        if( $(this).val() != $(this).attr("placeholder") && $(this).val().length > 0)
         {        
        console.log('Please fill out all required fields.');
            return true;
        }
        else {
       /*  console.log('Everything has No value.'); */    } 

    });    

}, "Per favore compila tutti i campi del domicilio diverso ");
/* ===  domDiverso CustomFN === END/> */
/* //domDiverso optional validation method == END> */

/*
 * by George Afrah H.T>
 */
/*======================== Jquery Form validation :::: // END //>> */




/****************************************************
 * OTP AND SPID Section
 * 1st: SPDI
 * 2nd: SPID
 *****************************************************/

 //DOM Selection:
 const Lname = document.getElementById("COGNO");
 const Name = document.getElementById("NAME");
const CellPhone = document.getElementById("TELDO");
const moadCellphoneBox = document.querySelector(".moadCellphoneBox");
//2ND bundle
const OTPcontainer = document.querySelector(".OTPcontainer");
const reqOTPBTN = document.querySelector(".reqOTP");
const OTPInput = document.querySelector(".OTPInput");
const verificaOTP = document.querySelector(".verificaOTP");
const FormAdesione = document.getElementById("moduloAdesione");
const stitutoContoSelector2 = document.querySelector(".ORGAN");
//3rd bundle
const StatoOTPCheck = document.getElementById("StatoOTP");
const spidContainer = document.querySelector(".spidContainer");
const spidContainer2 = document.querySelector(".spidContainer2");
const spidRadio = document.querySelectorAll("input[name='SCEL1']");
const SPIDRadioBox = document.querySelector(".SPIDBox1");
const SpidRadioErrorLabel = document.querySelector(".spidErrLabel")


//MOAD language state
let moadLang = null;
const moadLangSetter = function () {
    if (FormAdesione.className === "moduloEN") {
         moadLang = "EN";
    } else if (FormAdesione.className === "moduloDE") {        
         moadLang = "DE";
    } else {        
        moadLang = "IT";
    }
}//moadLangSetter

//Prefisso TEL Italia Regex
const prefissoItaliaRegex = /^(39)/;
//Prefisso Cellulare iniziale:
let cellphoneInitialPrefix = '';
//deactivate verifica button:
window.addEventListener('DOMContentLoaded',function(e) {
    verificaOTP.setAttribute("disabled", "disabled");
//check && set language
    moadLangSetter();
//Get cellPhone prefisso from premodulo
cellphoneInitialPrefix = CellPhone.value.trim().slice(0, 2);
    console.log("The cellphoneInitialPrefix is: ", cellphoneInitialPrefix);
    //Scelta Apertura conto Banche Conv Oppure Directa
    displayStituto2();
});
//General OTP State:
let OTPState = "KO";
const OTPRe = /^\d{6,6}$/;
// filter values && update user input
let Cognome = Lname.value.trim();
let Nome = Name.value.trim();
let TLCellulare = CellPhone.value.trim();
//Handle OTP Empty Submit:
FormAdesione.addEventListener("submit", function () {
      if (OTPState !== 'OK') {
          showError();
    } 
    //SPID ERR Handling    
    setTimeout(function () {
        var SPIDRadioBoxClasses = SPIDRadioBox.classList;
        const innerSpans = SPIDRadioBox.querySelectorAll("span.custom-control-description");        
    if (SPIDRadioBoxClasses.contains("has-warning")) {     
        // show SPID ERROR P
        SpidRadioErrorLabel.classList.add("has-warning");
        //Reset color of the inputs:
            innerSpans.forEach(function (innerSpan) {
            innerSpan.style.color = "#292b2c";
        });
} }, 200);
});//submit Event

//base url building:
let getOTPURL = `https://www1.directatrading.com/trading/otpnewc?TEL=${TLCellulare}&COGN=${Cognome}&NOME=${Nome}`;
const the3formValues = [Lname,Name,CellPhone];
the3formValues.forEach(inputs => {
    inputs.addEventListener("change", function () {
        Cognome = Lname.value.trim();
        Nome = Name.value.trim();
        TLCellulare = CellPhone.value.trim();
        // Update URL:
        getOTPURL = `https://www1.directatrading.com/trading/otpnewc?TEL=${TLCellulare}&COGN=${Cognome}&NOME=${Nome}`;
    });
});
 
let OTPCode = OTPInput.value.trim();
let OTPResPartURL = [];
let OTPTentativi = [];
// TESTING Array
CellPhone.addEventListener("mouseenter", function () {
    console.log("OTPResPartURL Arr item now are: ", OTPResPartURL);
});
const the2Inputs = [reqOTPBTN, OTPInput];   

/******
 * Watch Phone changes:
 * Watch if the initial 39 is being removed
 */
CellPhone.addEventListener("change", function () {
//Controlli prefissi Cell senza 39
const prfissoCellAggiornato = CellPhone.value.slice(0, 2);
//console.log("The prfissoCellAggiornato is: ", prfissoCellAggiornato);  
if (cellphoneInitialPrefix == 39) {    
    if (prfissoCellAggiornato != 39) {
        console.log("[Attenzione!], inserire il prefisso nazionale(39) per la verifica OTP ");
        //show Error:
        ShowPrefissoError();
    } else { 
        ShowPrefissoSuccess();
    }//inner IF
}
    //set value to null
    OTPState = "KO";
    resetStatoOTP();
    showError();
    //reactivate them
the2Inputs.forEach(function (inputEl) {
        inputEl.removeAttribute("disabled"); 
});
// RESET THE OTPResPartURL:
    OTPResPartURL = [];
    // Reset OTPTentativi
    OTPTentativi = [];
});//cellphone change Event

//2ND url
let checkOTPURL = '';
OTPInput.addEventListener("change", function () {
    //Check if it's a number && and long atleast 6 digits
    if (OTPRe.test(OTPInput.value.trim()) ) {
        OTPCode = OTPInput.value.trim(); 
        OTPResPartURL.forEach(function (otpresponseURLItem) {
            
        });
        //2ND url
        checkOTPURL = `${OTPResPartURL[0]}${OTPCode}`;
        //remove err msg
        semiSuccess();
    } else {
        //show error MSG:
        showError2();
    }
});

/******************
 ******** httpReqRes
 */
const httpReqRes = function (method, url) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
  xhr.onload = function () {
    const parseddata = JSON.parse(xhr.response);
      console.log("OTP response DATA is: ", parseddata.result); 
      OTPResPartURL.push(parseddata.result);
      
      //last call response:
      if (parseddata.result === 'OK') {
          //update THEOTP State:
          OTPState = parseddata.result;
          console.log("All Good, OTPState OK: ", OTPState);
          //Show Total success:
          showSuccess();
          //SET STATO OTP TO 1, that's passed
          StatoOTPCheck.value = 1;
          // Reset OTPTentativi
          OTPTentativi = [];
      } else if (parseddata.result === 'KO') {
          showError1();
          //increment OTPTentativi
          OTPTentativi.push(1);
          //Deactivate OTPVerifica button
          if (OTPTentativi.length > 1) {
              setTimeout(function () {
                  verificaOTP.setAttribute("disabled", "disabled");             
                  verificaOTP.classList.remove("activated")
              }, 200)
              showError(); 
              // RESET THE OTPResPartURL:
                OTPResPartURL = [];

          }
      }
    }//xhr.onload
    //sending XHR
    xhr.send( );
}//httpReqRes
function resetStatoOTP() {
    StatoOTPCheck.value = '';
}
/*************************
 * OTP controllo && Sanificazione codice OTP
 * AJAX calls
 */

const errUIBuilder = function(ErrMSG) {
        OTPcontainer.classList.remove("success");
        OTPcontainer.classList.add("error");
        small = OTPcontainer.querySelector(".small");
        small.innerText = ErrMSG;
}
//Run on verifica
const showError1 = function () {    
        //switch them
    switch (moadLang) {
        case "IT":
            return  errUIBuilder('Codice OTP inserito non corretto, hai ancora un secondo tentativo con lo stesso, poi dovrai richiederne uno nuovo');
        case "EN":
            return  errUIBuilder('Incorrect OTP code entered, you still have a second attempt with it, then you will have to request a new one');
        case "DE":
            return  errUIBuilder('Wenn ein falscher OTP-Code eingegeben wurde, haben Sie noch einen zweiten Versuch damit, dann müssen Sie einen neuen anfordern');
    }//switch    
}
 //run on input change
const showError2 = function () {  
    //switch them
    switch (moadLang) {
        case "IT":
            return errUIBuilder('Codice OTP inserito non corretto, riprova! ');
        case "EN":
            return errUIBuilder('Incorrect OTP code entered, try again! ');
        case "DE":
            return errUIBuilder('Falscher OTP-Code eingegeben, erneut versuchen! '); 
    }//switch   
 }
const showError = function () {
    //case: no OTP requested:
     //switch them
    switch (moadLang) {
        case "IT":
            return errUIBuilder("Per favore richiedi il codice OTP e inseriscilo nell'apposita casella");
        case "EN":
            return errUIBuilder("Please request an OTP code and enter it in the appropriate box");
        case "DE":
            return errUIBuilder("Bitte fordern Sie einen OTP-Code an und geben Sie ihn in das entsprechende Feld ein");
    }//switch   
}
//Prefisso Italia Error builder
const prefissoErrUIBuilder = function (ErrMSG) {
    let small = document.createElement("small");
    small.classList.add("error");
    small.innerText = ErrMSG;
    //add error class to container   
    moadCellphoneBox.classList.add("has-warning");
    moadCellphoneBox.appendChild(small);
}
const ShowPrefissoError = function () {
    //switch them
    switch (moadLang) {
        case "IT":
            return prefissoErrUIBuilder('Inserire prefisso nazionale(39) più numero di cellulare per la verifica OTP per favore');
        case "EN":
            return prefissoErrUIBuilder('Enter country code (39) plus mobile number please');
        case "DE":
            return prefissoErrUIBuilder('Geben Sie bitte die Landesvorwahl (39) und die Handynummer ein'); 
    }//switch   
}
const ShowPrefissoSuccess = function () {
    const small = moadCellphoneBox.querySelectorAll("small");   
    if (small) {
        small.forEach(function (small) {
            small.style.display = "none";
        });
    } }
const sucessBuilder = function (successMSG) {
        OTPcontainer.classList.remove("error");
        OTPcontainer.classList.add("success");
        small = OTPcontainer.querySelector(".small");
        small.innerHTML = `<i class="successCheck fa fa-check-square-o mr-2 " aria-hidden="true"></i>  ${successMSG}`;
}
const showSuccess = function () {
    switch (moadLang) { 
        case "IT":
            return sucessBuilder("Numero di cellulare verificato con successo ");
        case "EN":
            return sucessBuilder("Mobile number verified successfully");
        case "DE":
            return sucessBuilder("Handynummer erfolgreich verifiziert");
    }//switch  
}
const semiSuccess = function () {
        OTPcontainer.classList.remove("error");
         small = OTPcontainer.querySelector(".small");
    small.innerText = '';
}
//Aspetta tuo OTP Code
function aspettaTuoOTP() {
    reqOTPBTN.setAttribute("disabled", "disabled");
    //Atendi  x 10 secondi
    setTimeout(function () {
        //reactivate the button
         reqOTPBTN.removeAttribute("disabled");
    }, 10000);
}

//gather input OTP Inputs Els:
const OTPInputEls = [reqOTPBTN, OTPInput, verificaOTP];
reqOTPBTN.addEventListener("click", function () {
    httpReqRes('GET', getOTPURL);
    semiSuccess();
    // RESET THE OTPResPartURL:
    OTPResPartURL = [];
    // Reset OTPTentativi
    OTPTentativi = [];
    aspettaTuoOTP();
});

//Activate Verifica button
OTPInput.addEventListener("keyup", function () {    
    if ( OTPRe.test(OTPInput.value.trim())) {
        verificaOTP.removeAttribute("disabled");
        verificaOTP.classList.add("activated");
    } else {
         verificaOTP.classList.remove("activated");
    }   
});

verificaOTP.addEventListener("click", function () {
      //check if OTPCode is not null
    if (OTPCode !== '') {
       // XHR verifica call    
        httpReqRes('GET', checkOTPURL);       
    } else {
        showError(); 
      }
 //Deactivate OTPState
    setTimeout(function () {
        if (OTPState === "OK") {
            OTPInputEls.forEach(function (inputEl) {
                inputEl.setAttribute("disabled", "disabled");
                verificaOTP.classList.remove("activated");
            });
            
        } else {
            OTPInputEls.forEach(function (inputEl) {
            inputEl.removeAttribute("disabled"); 
            
            });
           
        }        
    }, 1000);
   
});



/******************
 * SPID Box control section
 */

stitutoContoSelector2.addEventListener("change", displayStituto2)
function displayStituto2(){
    if(stitutoContoSelector2.value != "D"){        
        spidContainer.style.display = "none";
        spidContainer2.style.display = "block";
    }else if(stitutoContoSelector2.value == "D"){
        spidContainer.style.display = "block"; 
        spidContainer2.style.display = "none";       
    } 
}
/******************
 * SPID Box Error handling
 */
spidRadio.forEach(function (RadioInput) {
    RadioInput.addEventListener("click", function (e) {       
        SpidRadioErrorLabel.classList.remove("has-warning");
    });
});

