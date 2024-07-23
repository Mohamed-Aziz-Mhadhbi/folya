document.addEventListener('DOMContentLoaded', function () {
   // Preload
   window.addEventListener('load', function () {
      document.getElementById('preload').style.display = 'none';
   });

   // Smooth Scrolling for Navbar Links
   const menuLinks = document.querySelectorAll('.menu a');
   const scrollToTopButton = document.getElementById('scroll-top');
   const openMenuButton = document.getElementById('openmenu');
   const closeMenuButton = document.getElementById('closemenu');
   const nav = document.getElementById('nav');

   menuLinks.forEach(link => {
      link.addEventListener('click', function (event) {
         event.preventDefault();
         const targetId = this.getAttribute('href').substring(1);
         const targetElement = document.getElementById(targetId);
         window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
         });
      });
   });

   // Highlight Active Section
   window.addEventListener('scroll', function () {
      let scrollPos = window.scrollY + 100;
      menuLinks.forEach(link => {
         const targetId = link.getAttribute('href').substring(1);
         const targetElement = document.getElementById(targetId);
         if (targetElement.offsetTop <= scrollPos && targetElement.offsetTop + targetElement.offsetHeight > scrollPos) {
            menuLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
         } else {
            link.classList.remove('active');
         }
      });

      // Scroll Top Button Visibility
      if (window.scrollY > 50) {
         scrollToTopButton.style.display = 'block';
      } else {
         scrollToTopButton.style.display = 'none';
      }

      // Fixed Menu
      const headerTopHeight = document.querySelector('.wrapper-top-header').offsetHeight;
      const bottomHeader = document.querySelector('.wrapper-bottom-header');
      if (window.scrollY >= headerTopHeight) {
         bottomHeader.classList.add('fixedmenu');
      } else {
         bottomHeader.classList.remove('fixedmenu');
      }
   });

   // Scroll to Top Button
   scrollToTopButton.addEventListener('click', function () {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   });

   // Mobile Menu Toggle
   openMenuButton.addEventListener('click', function (event) {
      event.preventDefault();
      nav.style.left = '0';
   });

   closeMenuButton.addEventListener('click', function (event) {
      event.preventDefault();
      nav.style.left = '-320px';
   });

   document.querySelectorAll('#nav a').forEach(link => {
      link.addEventListener('click', function () {
         nav.style.left = '-320px';
      });
   });

   // Booking Ajax
   document.getElementById('sendbook').addEventListener('click', function (event) {
      event.preventDefault();

      const name = document.querySelector('input[name="name"]').value;
      const lastname = document.querySelector('input[name="lastname"]').value;
      const phone = document.querySelector('input[name="phone"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const date = document.querySelector('input[name="date"]').value;
      const time = document.querySelector('input[name="time"]').value;

      if (!name || !lastname || !phone || !email || !date || !time) {
         document.querySelector('.res-booking').innerHTML = '<span class="error">All fields must be filled.</span>';
         document.querySelector('.res-booking').style.display = 'block';
         document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function () {
               document.querySelector('.res-booking').style.display = 'none';
            });
         });
      } else {
         const xhr = new XMLHttpRequest();
         xhr.open('POST', '../booking.php', true);
         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
               if (xhr.responseText === 'Send') {
                  document.querySelector('.res-booking').innerHTML = '<span class="send">Thanks. We will contact you shortly.</span>';
                  document.querySelector('.res-booking').style.display = 'block';
                  document.querySelectorAll('input[name]').forEach(input => {
                     input.value = '';
                  });
               }
            }
         };
         xhr.send(`name=${name}&lastname=${lastname}&phone=${phone}&email=${email}&date=${date}&time=${time}`);
      }
   });
});