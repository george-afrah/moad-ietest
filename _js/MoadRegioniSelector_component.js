//keep this copy of the componet while test
// the rest in production
// NB: reunite the code back and delete this version
// if deployment is seccessful


//Target Element da cercare:  id="row_dim">
//Regione Selector:
const regioniListContainer = document.getElementById('row_dim');
regioniListContainer.style.display = "none";
const RegionSelector = document.getElementById('N6');
RegionSelector.addEventListener("mouseleave", showRegion);

var ItaliaInLingueDiverse = ["italia", "italy", "italie", "italien"];
function showRegion(){   
    var LingunaInput = RegionSelector.value.toLowerCase(); 
    console.log("the LingunaInput from global is: ", LingunaInput);    
ItaliaInLingueDiverse.forEach( inputLang => {
    if(inputLang.indexOf(LingunaInput) > -1 ){
    console.log("User selected language is: ", LingunaInput)
    regioniListContainer.style.display = "block";
    } else {
        console.log("I'm gonna hide the region selector");         
    }
    });
//hide regione selector
    hideRegion(LingunaInput);                    
}//showRegion
function hideRegion(country){
    let HandleHide = ItaliaInLingueDiverse.length;
    for(let i = 0; i < ItaliaInLingueDiverse.length; i++){
         console.log("lingueDiverse  is: ", ItaliaInLingueDiverse[i]);
         console.log("the LingunaInput is: ", country)
        if(country != ItaliaInLingueDiverse[i]){
            HandleHide--;           
            console.log("the HandleHide value is:", HandleHide );
                 }
    }// the for loop
    if(HandleHide <= 0){
        console.log(" ItaliaInLingueDiverse.length is: ", ItaliaInLingueDiverse.length);
        regioniListContainer.style.display = "none";
    }
    console.log("the Total HandleHide value is:", HandleHide );
}//hideRegion


//CLIENTI INDIRETTI > Email riferente Bancario
const mailRiferentebancario = document.querySelector(".emailReferenteBancario_row");
mailRiferentebancario.style.display = "none";
const stitutoContoSelector = document.querySelector(".ORGAN");
stitutoContoSelector.addEventListener("change", displayStituto)
function displayStituto(){
    if(stitutoContoSelector.value != "D"){
        console.log("conto tramite: ", stitutoContoSelector.value);
        mailRiferentebancario.style.display = "block";
    }else if(stitutoContoSelector.value == "D"){
        mailRiferentebancario.style.display = "none";
        console.log("conto tramite: ", stitutoContoSelector.value);
    } 
}
