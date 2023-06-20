// function bioData()//local variable 
// {
// var Name='Madhusudhanan';
// var rollNo="RWD04004";
// var Gender='Male';
// var FatherName='Thirumalaisamy';
// var MotherName='Maheshwari';
// var Age='27';
// var DOB='31.03.1996';
// var Qualification='B.sc.Computer Science';
// document.getElementById('biodata').innerHTML='<tr><td>NAME</td><td>'+Name+'</td></tr>'+'<tr><td>ROLLNO</td><td>'+rollNo+'</td></tr>'+'<tr><td>Gender</td><td>'+Gender+'</td></tr>'+'<tr><td>Fathername</td><td>'+FatherName+'</td></tr>'+'<tr><td>Mothername</td><td>'+MotherName+'</td></tr>'+'<tr><td>AGE</td><td>'+Age+'</td></tr>'+'<tr><td>DOB</td><td>'+DOB+'</td></tr>'+'<tr><td>Qualification</td><td>'+Qualification+'</td></tr>';
// }
// bioData();

var Name='Madhusudhanan';
var rollNo="RWD04004";
var Gender='Male';
var FatherName='Thirumalaisamy';
var MotherName='Maheshwari';
var Age='27';
var DOB='31.03.1996';
var Qualification='B.sc.Computer Science';
function bioData()
{
    document.getElementById('biodata').innerHTML='<tr><td>NAME</td><td>'+Name+'</td></tr>'+'<tr><td>ROLLNO</td><td>'+rollNo+'</td></tr>'+'<tr><td>Gender</td><td>'+Gender+'</td></tr>'+'<tr><td>Fathername</td><td>'+FatherName+'</td></tr>'+'<tr><td>Mothername</td><td>'+MotherName+'</td></tr>'+'<tr><td>AGE</td><td>'+Age+'</td></tr>'+'<tr><td>DOB</td><td>'+DOB+'</td></tr>'+'<tr><td>Qualification</td><td>'+Qualification+'</td></tr>';  
}
bioData();
