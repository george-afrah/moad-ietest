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

const FormAdesione = document.getElementById("moduloAdesione");
const prefixFisrtOptionEl = document.getElementById("FirstOption");
/* const stitutoContoSelector2 = document.querySelector(".ORGAN"); */
//3rd bundle
const cellphoneContainr = document.querySelector(".cellphone_group");
const prefissoContainer = document.querySelector(".prefissoContainer");
const prefissoSelect = document.querySelector(".prfisso_select");
const prfixLabel = document.querySelector(".prfixLabel");



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
//check && set language
    moadLangSetter();
    //update phone number from premodulo form:
    preModuloPhonenumber = CellPhone.value.trim();
    console.log("The Prefisso From DOMContentLoaded is: ", prefissoSelect.value);
    prefixInitialTXTHandleer();   
    //Handle Domicilio Diverso UI
    DomicilDiversoHandler()
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
            if (I18nRegex.test(CellPhone.value)) {
                prefissoSelect.value = prefissoSelect.value.trim();
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
    console.log("The Prefix is: ", prefissoSelect.value);    
});
 
CellPhone.addEventListener("input", function () {
    //Watch phone number changes:
    watchPhoneUpdates();
});
/******
 * Watch Phone changes:
 * Watch if the initial 39 is being removed
 */
CellPhone.addEventListener("change", function () {
//Watch phone number changes:
    watchPhoneUpdates();
//SEE THe current Phone value:
console.log("The PHONE VALUE after change is: ", TLCellulare);
});//cellphone change Event









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
	httpRequest.open('GET', "../_include/prefissi.json", true);
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
