// alert("loading")
function addNewWEField(){
    // console.log("Adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")

    let weOb = document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");


    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");


    aqOb.insertBefore(newNode, aqAddButtonOb);

}
function addNewskField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")

    let skOb = document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");


    skOb.insertBefore(newNode, skAddButtonOb);

}

function addNewciField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")

    let ciOb = document.getElementById("ci");
    let ciAddButtonOb=document.getElementById("ciAddButton");


    ciOb.insertBefore(newNode, ciAddButtonOb);

}

//generating Resume
function generateCV()
{
    // console.log("generating CV");
    let nameField = document.getElementById("nameField").value;

    let naemT1 = document.getElementById('nameT1');

    nameT1.innerHTML = nameField;

    //direct

    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById(
        "contactField"
    ).value;

    //Address
    document.getElementById("addressT").innerHTML = document.getElementById("AddressField").value;

    //links
    document.getElementById("fbT").innerHTML = document.getElementById("FbField").value;

    document.getElementById("inT").innerHTML = document.getElementById("InstagramField").value;

    document.getElementById("liT").innerHTML = document.getElementById("LinkedInField").value;

    document.getElementById("ghT").innerHTML = document.getElementById("GitHubField").value;

    document.getElementById("twT").innerHTML = document.getElementById("TwitterField").value;

    document.getElementById("gmT").innerHTML = document.getElementById("GmailField").value;


    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("ObjectiveField").value;

    //we
    let wes = document.getElementsByClassName("weField");

    let str="";


    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //aq
    let aqs=document.getElementsByClassName("eqField");

    let str1 = "";

    for( let e of aqs)
    {
        str1= str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    //ci
    let cis=document.getElementsByClassName("ciField");

    let str2 = "";

    for( let e of cis)
    {
        str2= str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("ciT").innerHTML=str2;

    //sk
    let sks=document.getElementsByClassName("skField");

    let str3 = "";

    for( let e of sks)
    {
        str3= str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML=str3;

    //code for setting 
    
    let file=document.getElementById("imageField").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image to template
    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    };


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}

//print Resume
function printCV(){
    window.print();
}