$(document).ready(function () {

  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav && closeMenu) {
    const navLinks = mainNav.querySelectorAll('a');

    const openSidebar = () => {
      mainNav.classList.add('active');
      document.body.classList.add('sidebar-is-active');
    };

    const closeSidebar = () => {
      mainNav.classList.remove('active');
      document.body.classList.remove('sidebar-is-active');
    };

    menuToggle.addEventListener('click', openSidebar);
    closeMenu.addEventListener('click', closeSidebar);

    if (navLinks) {
      navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
      });
    }

    document.addEventListener('click', (event) => {
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target) && mainNav.classList.contains('active')) {
        closeSidebar();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mainNav.classList.contains('active')) {
        closeSidebar();
      }
    });

    console.log("Sidebar listeners attached successfully.");

  } else {
    console.error("Sidebar elements (#menu-toggle, #main-nav, #close-menu) not found. Menu functionality may be broken. Check HTML IDs.");
  }


  $('#contactForm').on('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    $('.error-message').text('');
    $('#contactForm .input-error').removeClass('input-error');

    const fullNameInput = $('#fullName');
    const emailInput = $('#email');
    const phoneInput = $('#phone');
    const messageInput = $('#message');

    const fullName = fullNameInput.val().trim();
    const email = emailInput.val().trim();
    const phone = phoneInput.val().trim();
    const message = messageInput.val().trim();

    if (fullName === '') {
      isValid = false;
      $('#fullNameError').text('Nama lengkap wajib diisi.');
      fullNameInput.addClass('input-error');
    } else if (fullName.length > 100) {
      isValid = false;
      $('#fullNameError').text('Nama lengkap maksimal 100 karakter.');
      fullNameInput.addClass('input-error');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      isValid = false;
      $('#emailError').text('Email wajib diisi.');
      emailInput.addClass('input-error');
    } else if (!emailPattern.test(email)) {
      isValid = false;
      $('#emailError').text('Format email tidak valid.');
      emailInput.addClass('input-error');
    } else if (email.length > 100) {
      isValid = false;
      $('#emailError').text('Email maksimal 100 karakter.');
      emailInput.addClass('input-error');
    }

    const phonePattern = /^(?=.*\d)[\d\s+()-]{9,20}$/;
    if (phone === '') {
      isValid = false;
      $('#phoneError').text('Nomor handphone wajib diisi.');
      phoneInput.addClass('input-error');
    } else if (!phonePattern.test(phone)) {
      isValid = false;
      $('#phoneError').text('Format nomor handphone tidak valid (min 9 digit).');
      phoneInput.addClass('input-error');
    } else if (phone.length > 20) {
      isValid = false;
      $('#phoneError').text('Nomor handphone maksimal 20 karakter.');
      phoneInput.addClass('input-error');
    }

    if (message === '') {
      isValid = false;
      $('#messageError').text('Pesan wajib diisi.');
      messageInput.addClass('input-error');
    } else if (message.length > 500) {
      isValid = false;
      $('#messageError').text('Pesan maksimal 500 karakter.');
      messageInput.addClass('input-error');
    }

    if (isValid) {
      alert('Formulir Terkirim!');

      $('#contactForm')[0].reset();
      $('#contactForm .input-error').removeClass('input-error');

    } else {
      $('#contactForm .input-error').first().focus();
    }
  });

}); 
