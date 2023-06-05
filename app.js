function sendEmail() {
  Email.send({
      SecureToken : "cda5bade-3bc4-43b9-94d0-1ee22736890b",
      To: "praveenpaulraj59@gmail.com",
      From: "praveenpaulraj59@gmail.com" ,
      Subject: "Enquiry from " + document.getElementById("name").value,
      Body: "Name :" +document.getElementById("name").value +
      " <br> Email :" +document.getElementById("email").value +
      " <br> Message :" +document.getElementById("message").value
  }).then(
      message => alert(message)
  );
}
