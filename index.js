function confirmDownload() {
    var userConfirmation = confirm("Do you want to see my certificates file?");

    if (userConfirmation) {
        href = "./ilovepdf_merged.pdf";
    }else{
        href = "#";
    }
}


//  scroll navbar style change
var body = document.body;
const navbar = document.getElementById("navbar");

// function clicks(){
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
function handelscroll(){

    var ScrollBody = document.body.scrollTop;
    var  ScrollElement = document.documentElement.scrollTop;
    if(ScrollBody === 0 &&  ScrollElement === 0){
        navbar.style.backgroundColor = "";

    }else{ 
        navbar.style.backgroundColor = "rgba(0,0,0,0.5)";

    }
    body.addEventListener("scroll", handelscroll);

}
body.addEventListener("scroll", handelscroll);


  