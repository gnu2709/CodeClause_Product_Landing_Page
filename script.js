// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
  );
  
  // Form submission
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    var name = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var message = document.querySelector('textarea').value;
  
    // Validate form data
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulate form submission (replace with your own logic)
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('textarea').value = '';
  });
  