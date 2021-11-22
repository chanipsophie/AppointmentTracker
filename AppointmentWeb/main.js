window.onload = function(){
    setupRegisterButton();   
    setupResetButton();
}

/**
 * Set up reset button to reset form and error messages
 * when the reset button is clicked
 */
 function setupResetButton() {
    let resetBtn = document.getElementById("reset_form");
    resetBtn.onclick = resetForm;
}

/**
 * Set up register button to submit form
 * if all data is valid, otherwise error messages are displayed
 */
function setupRegisterButton() {
    let regBtn = document.getElementById("submit");
    regBtn.onclick = validateRegistration;
}

/**
 * Reset all form inputs back to the defualts
 */
function resetForm(){
    //alert("You clicked reg");
    console.log("You clicked Reset");

    let confirmation =  confirm("Do you want to reset the form");

    if (confirmation){    
        //Get the form
        let regForm = document.getElementById("registration_form");
        regForm.reset();
        
    }
}


const sname = document.getElementById("name")
const appointmentDate = document.getElementById("appday")
const appointmentTime = document.getElementById("apptime")
const form = document.getElementById("registration_form")

const errorElement = document.getElementById("error1")
const result1 = document.getElementById("output1");
const result2 = document.getElementById("output2");
const result3 = document.getElementById("output3");


//form.addEventListener("submit", (e) => {
function validateRegistration(e){

    let messages = []
    if (sname.value === "" || sname.value == null) {
        messages.push("Name is required")
    }
    else {
        document.getElementById('output1').innerHTML = sname.value;
        alert("Name is: "  +sname.value); 
        
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(",")
    } 
    
        
    
  

 //form.addEventListener("submit", (e) => {
    //let messages = []
    if (appointmentDate.value === "" || appointmentDate.value == null) {
        messages.push("Appointment date is required")
    }
    else {
        
        document.getElementById('output2').textContent = appointmentDate.value;
        alert("Appointment Date is: "  + appointmentDate.value); 
        
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(",\n")
    }  

  //form.addEventListener("submit", (e) => {
    //let messages = []
    if (appointmentTime.value === "" || appointmentTime.value == null) {
        messages.push("Time is required")
    }
    else {
               
        document.getElementById('output3').textContent = appointmentTime;
        alert("Appointment Time is: "  + appointmentTime.value); 
        
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(",\n")
    }  
}  