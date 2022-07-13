let Email;
let Student_Name;
let Collage_Name;
let Branch;
let Phone_No;
let Address;
let Password;

function reg() {
    Email=document.getElementById("Email").value;
    Password=document.getElementById("Password").value;
    Student_Name=document.getElementById("Student_Name").value;
    Collage_Name=document.getElementById("Collage_Name").value;
    Branch=document.getElementById("Branch").value;
    Phone_No=document.getElementById("Phone_No").value;
    Address=document.getElementById("Address").value;
   

    
    document.write("<br/>Email =" +Email )
    document.write("<br/>Password ="+Password)
    document.write("<br/> Student Name ="+Student_Name)
    document.write("</br> Collage Name ="+Collage_Name)
    document.write("<br/> Branch ="+Branch)
    document.write("<br/> Phone No ="+Phone_No)
    document.write("<br/> Address ="+Address)
}