
function scrollToSection(section) {
  const target = document.getElementById(section);
  target.scrollIntoView({
    behavior: 'smooth'
  });
}


// Add an event listener to the window scroll event
window.addEventListener('scroll', function() {

  // Calculate how many vh units the user has scrolled
  const scrolledVh = window.scrollY / window.innerHeight;
  // Log the percentage of the page that the user has scrolled through
  //console.log(`${scrolledVh.toFixed(2)}vh`);
  const sidebar = this.document.getElementById("sidenav_content");
  //console.log(sidebar)
  if(scrolledVh < 1){
    sidebar.style.top = ((1-scrolledVh) * 100) + "vh"
  }
});

// Add an event listener to the button "Saada"

const nupp = document.findElementById('send');
nupp.addEventListener('click', function(){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'send-email.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert('Email sent successfully!');
    } else {
      alert('Error sending email.');
    }
  };
  xhr.send();
});

const email = document.getElementById('email')
const linfo = document.getElementById('linfo')


function clearText()  
{
  const formData = new FormData()
  formData.append('email', email)
  formData.append('linfo', linfo)
    $.ajax({
      url: '/localhost/sendmail.php/',
      type: 'post',
      data: formData,
      success:function(){
        console.log('success')
      }
    });
  document.getElementById('email').value = "";
  document.getElementById('linfo').value = "";
}  