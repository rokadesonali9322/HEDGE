function SendEmail() {
  var Name = document.getElementById('name').value
  var Email = document.getElementById('email').value
  var Message = document.getElementById('message').value

  const body = `{Name: ${Name}, Email: ${Email}, Message: ${Message}}`
  console.log(body)

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'rokadesonali808@gmail.com',
    Password: '6C4CAD486385A59A0CCB426746B56FBFB265',
    To: 'rokadesonali808@gmail.com',
    From: 'rokadesonali808@gmail.com',
    Subject: 'New Contact Form Enquiry',
    Body: body,
  }).then((message) => alert(message))
}
function scrollToContact() {
  var contactSection = document.getElementById('contact-us')
  if (contactSection) {
    contactSection.classList.add('scroll-transition')
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
