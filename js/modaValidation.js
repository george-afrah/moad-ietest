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

//2ND bundle
const OTPcontainer = document.querySelector(".OTPcontainer");
const reqOTPBTN = document.querySelector(".reqOTP");
const OTPInput = document.querySelector(".OTPInput");
const verificaOTP = document.querySelector(".verificaOTP");
const FormAdesione = document.getElementById("moduloAdesione");
const prefixFisrtOptionEl = document.getElementById("FirstOption");
/* const stitutoContoSelector2 = document.querySelector(".ORGAN"); */
//3rd bundle
const cellphoneContainr = document.querySelector(".cellphone_group");
const prefissoContainer = document.querySelector(".prefissoContainer");
const prefissoSelect = document.querySelector(".prfisso_select");
const prfixLabel = document.querySelector(".prfixLabel");
const AttesaOPT = document.querySelector(".AttesaOPT");
//4th bundle
const StatoOTPCheck = document.getElementById("StatoOTP");
const spidContainer = document.querySelector(".spidContainer");
//const spidContainer2 = document.querySelector(".spidContainer2");
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
    return moadLang;
}//moadLangSetter


//DOMContentLoaded Checks:
let preModuloPhonenumber = ''; 
window.addEventListener('DOMContentLoaded',function(e) {
    verificaOTP.setAttribute("disabled", "disabled");
//check && set language
    moadLangSetter();
    //update phone number from premodulo form:
    preModuloPhonenumber = CellPhone.value.trim();
    console.log("The Prefisso From DOMContentLoaded is: ", prefissoSelect.value);
    //Build initial OTP URL String:   
   makeURL.buildURL(Lname.value.trim(), Name.value.trim(), TLCellulare);
    OTPWaitDialogHide(); 
    prefixInitialTXTHandleer();  
    //Handle Domicilio Diverso UI
    DomicilDiversoHandler()
    //STOP IE user From opening MOAD Form:
    handleIE();
});//WINDOW EVENT
function prefixInitialTXTHandleer() {
    let selectOptionTXT = prefissoSelect.options[prefissoSelect.selectedIndex];
    if (prefissoSelect.value === "+39") {  
        selectOptionTXT.text = "+ 39 Italia";       
    } else {
        selectOptionTXT.text =  prefissoSelect.value;  
    }
}
function Hide1stDefaultPrefixOption(){
    prefixFisrtOptionEl.style.display = "none";
}


//Multi-language Error MSG building
const ErrorMSGs = {
    localLang: moadLangSetter(),
    MSGPicker1() {
        //switch them
    switch (this.localLang) {
        case "IT":
            return  "Il numero di cellulare deve contenere almeno 9 cifre";
        case "EN":
            return "Mobile phone number must be at least 9 digits";
        case "DE":
            return "Die Handynummer muss mindestens 9-stellig sein"; 
    }//switch   
    },
    MSGPicker2() {
        switch (this.localLang) {
        case "IT":
            return "Numero internazionale errato!";
        case "EN":
            return "Incorrect international number!";
        case "DE":
            return "Falsche internationale Nummer!"; 
    }//switch   
    },
    MSGPicker3() {
        switch (this.localLang) {
        case "IT":
            return "Seleziona il prefisso del paese (Italia = 39) per favore";
        case "EN":
            return "Select country prefix please(Italia = 39)";
        case "DE":
            return "Wählen Sie bitte das Länderpräfix (Italia = 39) aus"; 
    }//switch   
    }
}//ErrorMSGs OBJ

const OTPWaitWaitDialog = {
    localLang: moadLangSetter(),
    waitDialog() {
        switch (this.localLang) {
            case "IT":
                return "Attendi il codice OTP sul tuo cellulare prego";
            case "EN":
                return "Please wait the OTP Code on your mobile phone";
            case "DE":
                return " Bitte warten Sie den OTP-Code auf Ihrem Telefon";
        }
    },
}
//Handle OTP Wait Dialog;
function OTPWaitDialogHide() {
    //OTP Dialog Hide:
    AttesaOPT.classList.remove("showIT");
    AttesaOPT.classList.add("hideIT");
}
function OTPWaitDialogShow() {
    const small = AttesaOPT.querySelector("small");
    AttesaOPT.classList.remove("hideIT");
    AttesaOPT.classList.add("showIT");
    small.innerText = OTPWaitWaitDialog.waitDialog();
}

function showPhoneError(errorMessage){
	cellphoneContainr.classList.remove("success");
	cellphoneContainr.classList.add("error");
	let small = cellphoneContainr.querySelector(".small")
	small.innerText = errorMessage;
}

function showSucess2(){
	cellphoneContainr.classList.remove("error");
	cellphoneContainr.classList.add("success");
}

/***********************************
 * Phone data sanitization
 * cellphoneControl || Cellphone State
 */
const cellRegex = /^\d{9,12}/;
const I18nRegex = /^\d{6,16}/;
// filter values && update user input
let Cognome = Lname.value.trim();
let Nome = Name.value.trim();
let TLCellulare = prefissoSelect.value.trim() + CellPhone.value.trim();
const makeURL = {
    OTPURLSRT: '',
buildURL(Cognome,Nome,TLCellulare) {
     this.OTPURLSRT = `https://www1.directatrading.com/trading/otpnewc?TEL=${TLCellulare}&COGN=${Cognome}&NOME=${Nome}`;   
    console.log("From makeURL OBJECT, OTPURLSRT is: ", this.OTPURLSRT );  
}    
}//makeurl Obj
makeURL.buildURL(Lname.value.trim(), Name.value.trim(), TLCellulare);

function cellphoneController(){
	if (prefissoSelect.value !== ''){
		if (prefissoSelect.value === '+39' || prefissoSelect.value === '39')	{
			if (cellRegex.test(CellPhone.value)){
				TLCellulare = 39 + CellPhone.value;
				showSucess2();
			}
			else{
				showPhoneError(ErrorMSGs.MSGPicker1());
			}

		}else {
			if (I18nRegex.test(CellPhone.value)){
				const cleanPrefix = prefissoSelect.value.slice(1, );
                TLCellulare = cleanPrefix.trim() + CellPhone.value;
                console.log("The Number + I18N prfix is: ", TLCellulare);
				showSucess2();
			}else	{
				TLCellulare = '';
				showPhoneError(ErrorMSGs.MSGPicker2());
			}
		} //2ndLIF 
    } else {
        //Empty phone value and showError:
        CellPhone.value = null;
		showPhoneError(ErrorMSGs.MSGPicker3());
    } //1stLIF 
    //rebuild OPTURLAgain    
    makeURL.buildURL(Lname.value.trim(), Name.value.trim(), TLCellulare);
    
}//cellphoneController


//Phone Changes update watch
function watchPhoneUpdates() {
        TLCellulare = CellPhone.value.trim();
    if (TLCellulare !== preModuloPhonenumber) {              
/*         console.log("TLCellulare IS NOT equal to preModuloPhonenumber");
        console.log("TLCellulare is: ", TLCellulare);
        console.log("preModuloPhonenumber is: ",preModuloPhonenumber); */
    } else {
        console.log("The Numbers ARE now Equal");
    }
     cellphoneController(); 
}
CellPhone.addEventListener("keyup", function (e){
	e.stopPropagation();   
    //Watch phone number changes:
    watchPhoneUpdates();

})
//Watch prefisso changes:
prefissoSelect.addEventListener("change", function () {
    Hide1stDefaultPrefixOption();
    cellphoneController();
    
});


//General OTP State:
let OTPState = "KO";
const OTPRe = /^\d{6,6}$/;
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
        }
    }, 200);
    
});//submit Event

//Base url building:
const the3formValues = [Lname,Name];
the3formValues.forEach(inputs => {
    inputs.addEventListener("change", function () {
        // Update URL:       
        makeURL.buildURL(Lname.value.trim(), Name.value.trim(), TLCellulare);
    });
});
 
let OTPCode = OTPInput.value.trim();
let OTPResPartURL = [];
let OTPTentativi = [];
// TESTING Array
CellPhone.addEventListener("input", function () {
    //Watch phone number changes:
    watchPhoneUpdates();
});
const the2Inputs = [reqOTPBTN, OTPInput];   

/******
 * Watch Phone changes:
 * Watch if the initial 39 is being removed
 */
CellPhone.addEventListener("change", function () {
//Watch phone number changes:
    watchPhoneUpdates();
//Reset OTPState to unverified initial state 
    OTPState = "KO";
    resetStatoOTP();
    showError();
//Reactivate OTP Button && OTP input
the2Inputs.forEach(function (inputEl) {
        inputEl.removeAttribute("disabled"); 
});
// RESET THE OTPResPartURL:
    OTPResPartURL = [];
    // Reset OTPTentativi
    OTPTentativi = [];

//SEE THe current Phone value:
console.log("The PHONE VALUE after change is: ", TLCellulare);
});//cellphone change Event

//2ND url
let checkOTPURL = '';
OTPInput.addEventListener("change", function () {
    //Check if it's a number && and long atleast 6 digits
    if (OTPRe.test(OTPInput.value.trim()) ) {
        OTPCode = OTPInput.value.trim(); 
        OTPResPartURL.forEach(function (otpresponseURLItem) {
            console.log("OTP Response URL item is: ",otpresponseURLItem );
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
    console.log("The StatoOTPCheck value is", StatoOTPCheck.value);
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
    httpReqRes('GET', makeURL.OTPURLSRT);
    semiSuccess();
    // RESET THE OTPResPartURL:
    OTPResPartURL = [];
    // Reset OTPTentativi
    OTPTentativi = [];
    aspettaTuoOTP();
    //Show "Aspetta OTP" Dialog:
    OTPWaitDialogShow();
});

//TEMP CODE To BE removed:
reqOTPBTN.addEventListener("mouseleave", function () {
    console.log("THe makeURL.OTPURLSRT IS: ", makeURL.OTPURLSRT);   
    
});

//Activate Verifica button
OTPInput.addEventListener("keyup", function () {    
    if ( OTPRe.test(OTPInput.value.trim())) {
        verificaOTP.removeAttribute("disabled");
        verificaOTP.classList.add("activated");
    } else {
         verificaOTP.classList.remove("activated");
    }
    //hide dialogo attessa OTP:
    OTPWaitDialogHide();
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

/*****************************
 *Build Prefisso options
 */
const updateUISuccess = function (data){
	const apiResponseData = JSON.parse(data);
	apiResponseData.forEach(prfixSet =>	{
		let option = document.createElement("option")
		option.value = `${prfixSet.value}`;
		option.innerText = `${prfixSet.description}`;
		prefissoSelect.appendChild(option);

	});
}
const updateUIError = function (errorMessage) {
    console.log("Error from calling the 'Prefissi json file': ",errorMessage );
}
//XHR build
const responseMethod = function (httpRequest){
	if (httpRequest.readyState == 4 && httpRequest.status == 200){
		updateUISuccess(httpRequest.responseText);
	}
	else{
		updateUIError(httpRequest.status + ': ' + httpRequest.responseText)
	}
}
const createRequest = function (){
	const httpRequest = new XMLHttpRequest();
	httpRequest.addEventListener('load', function (){
		return responseMethod(httpRequest);

	});  //  ../include/prefissi.json
	httpRequest.open('GET', "../include/prefissi.json", true);
	httpRequest.send();
}

let SelectedOption = null;
function refillOptions(){
	SelectedOption = prefissoSelect.options[prefissoSelect.selectedIndex].value
	prefissoSelect.value = SelectedOption;
	let SelectedopzioneText = prefissoSelect.options[prefissoSelect.selectedIndex].text;
	prefissoSelect.options[prefissoSelect.selectedIndex].text = SelectedopzioneText;
} //refillOptions

//Safari fix:
prefissoContainer.addEventListener("mouseenter", function (e) {
	e.stopPropagation();
	createRequest();
	
});

prefissoSelect.addEventListener("click", function (e){
	e.stopPropagation();
	
});

prefissoSelect.addEventListener("change", function (e){
		refillOptions();
})


/******************
 * SPID Box control section
 */
/* stitutoContoSelector2.addEventListener("change", displayStituto2) */
/* function displayStituto2(){
    if(stitutoContoSelector2.value != "D"){        
        spidContainer.style.display = "none";
        spidContainer2.style.display = "block";
    }else if(stitutoContoSelector2.value == "D"){
        spidContainer.style.display = "block"; 
        spidContainer2.style.display = "none";       
    } 
} */

/******************
 * SPID Box Error handling
 */
spidRadio.forEach(function (RadioInput) {
    RadioInput.addEventListener("click", function (e) {       
        SpidRadioErrorLabel.classList.remove("has-warning");
    });
});

/****
 * Domicilio Diverso Collapse | No Collapse
 */
const domicilioDiversoToggler = document.querySelector(".domicilioDiverso");
const domDiversoFieldsContainer = document.getElementById("Dom_diverso");
//get the ".Dom_diverso" inputs flds:
const domDiversoInputFields = domDiversoFieldsContainer.querySelectorAll("input");


const DomicilDiversoHandler = function () {
    //show me the input fld values
    domDiversoInputFields.forEach(function (domDivrValue) {
        console.log("Dom diverso inputs value is: ", domDivrValue.value.trim());
        if (domDivrValue.value.trim() !== '') {
            console.log("Dom diverso FLDs have values, Show container"); 
            domDiversoFieldsContainer.style.display = "block"
        } 
    });
}

domicilioDiversoToggler.addEventListener("click", DomicilDiversoHandler);

/****
 * Gestione IE, Internet Explorer, all versions
 */
//DOM SELECTION:
var IEModalWarning = document.querySelector(".warnigModal");
var IEHelperBTN = document.querySelector(".safariHelper");
var UserAG = window.navigator.userAgent;
console.log("The User Agent is: ", UserAG);

//TESTING:
var isIE = false;
var ua = window.navigator.userAgent;
var old_ie = ua.indexOf('MSIE ');
var new_ie = ua.indexOf('Trident/');

if ((old_ie > -1) || (new_ie > -1)) {
    isIE = true;
    console.log("OPPS, IT IE! found one!");
    alert("OPPS, IT IE! found one!");
}

var isMSIE = /MSIE|Trident/.test(UserAG);
var handleIE = function () {
    if(isIE){
        IEModalWarning.style.display = "block"
    console.log("YOU ARE USING INTERNET EXPLORER, NOT GOOD!");
    }   
}
//close the modal box:
IEHelperBTN.addEventListener('click', function(e){
    IEModalWarning.style.display = "none"
});
console.log("what browser: ", isIE)