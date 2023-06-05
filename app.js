function sendEmail() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "praveenpaulraj59@gmail.com",
    Password : ".102013.",
    To : '211501067@rajalakshmi.edu.in',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}