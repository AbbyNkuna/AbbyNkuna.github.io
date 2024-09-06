function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// email function
// function sendmail() 
// {
//   let parms ={
//    name : document.getElementById9("name").value,
//    email : document.getElementById9("name").value,
//    message : document.getElementById9("name").value,
//   }
//   emailjs.send("service_wn09czv","template_t5cwdvp",parms).then(alert("Email Sent!!"))
// }

// new email
// Initialize EmailJS
function initializeEmailJS() {
  emailjs.init('FeB50ICxVafGF6w_x'); // Replace 'YOUR_USER_ID' with your actual user ID from EmailJS dashboard
}

// Function to handle form submission
function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  emailjs.sendForm('service_wn09czv', 'template_t5cwdvp', event.target)
    .then(function () {
      alert('Email sent successfully!');
    }, function (error) {
      alert('Failed to send email: ' + JSON.stringify(error));
    });
}

// Add an event listener to the form after the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  initializeEmailJS();
  document.getElementById('contact_form').addEventListener('submit', sendEmail);
});
