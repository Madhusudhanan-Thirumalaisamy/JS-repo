function checkProduct(){
    let productid=document.getElementById("ptid").value;
    let span1=document.getElementById("spn1");
    if(productid){
        span1.innerHTML="Next";
    }
    else{
        span1.innerHTML="fill the blank";
    }
} 
function checkproductName(){
    let productName=document.getElementById("ptNa").value;
    let span2=document.getElementById("spn2");
    if(productName){
        span2.innerHTML="Happy to purchase";
    }
    else{
        span2.innerHTML="FILL THE BLANK"
    }
}
function checkquatity(){
    let productQuatity=document.getElementById("proQa").value;
    let span3=document.getElementById("spn3");
    if(productQuatity){
        span3.innerHTML="ok";
    }
    else{
        span3.innerHTML="ENTER THE QUATITY";
   }
}
function calculate(){
    let basicPrize=parseInt(document.getElementById("basPrize").value);
    let stateGst=document.getElementById("Gst").value=basicPrize*(6/100);
    let centralGst=document.getElementById("cGst").value=basicPrize*(3/100);
    let discountAmount=document.getElementById("disPro").value=basicPrize-(5/100);
    let Gst1=parseInt(stateGst);
    let cGst1=parseInt(centralGst);
    let disPro1=parseInt(discountAmount);
    let total=document.getElementById("totalAmt").value=(basicPrize+Gst1+cGst1);
    let total1=parseInt(total);
    document.getElementById("tbodyid").innerHTML="<tr><td>"+productid+"</td><td>"+productName+"</td><td>"+productquantity+"</td><td>"+basicPrize+"</td><td>"+stateGst+"</td><td>"+centralGst+"</td><td>"+discount+"</td><td>"+totalAmt1+"</td></tr>";
}	