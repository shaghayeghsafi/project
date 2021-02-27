const name1 =document.getElementById("name")
const email1 =document.getElementById("email")
const massege =document.getElementById("massege")
const text1 =document.getElementById("text")
const button = document.getElementById("btn-submit")
const form =document.getElementById("mainform")

name1.value =" "
        email1.value = " "
        massege.value =" "
        text1.value =" "
    /*valid form start.....................................................*/
    function validateForm(evt) {
    evt.preventDefault()
  let x = document.forms["myForm"]["name"].value;
  let y = document.forms["myForm"]["email"].value;
  let z = document.forms["myForm"]["massege"].value;
    if (x == "" ||y == ""|| z == "") {
      alert("Name must be filled out");
      name1.value =" "
      email1.value = " "
      massege.value =" "
      text1.value =" "
      
      return false;
    }
    else{
        submit
        
        name1.value =" "
        email1.value = " "
        massege.value =" "
        text1.value =" "
        alert("Submission completed");
        console.log(submit)
    }
    
} 

function submit(){

fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
    title: name1.value,
    body: massege.value,
    userId: email1.value,
    
}),
headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));
}
button.addEventListener('click',validateForm)

 /*valid form end.....................................................*/
    
    



























