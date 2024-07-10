document.addEventListener("DOMContentLoaded", function () {
  // menu click event
  const menuBtn = document.querySelector(".menuBtn");
  const mainMenu = document.querySelector(".mainMenu");
  const mainWrapperMenu = document.querySelector(".mainMenuWrapper");
  const body = document.querySelector("body");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("act");
    if (menuBtn.classList.contains("act")) {
      mainMenu.classList.add("act");
      body.style.overflow = "hidden";
      mainWrapperMenu.classList.add('active')
    } else {
      mainMenu.classList.remove("act");
      mainWrapperMenu.classList.remove('active')
      body.style.overflow = "visible";
    }
  });
});





document.addEventListener('DOMContentLoaded', function () {
  if(document.querySelectorAll('.input-group input, .input-group textarea')){
    const inputs = document.querySelectorAll('.input-group input, .input-group textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.classList.add('filled');
        });
  
        input.addEventListener('blur', function () {
            if (this.value === '') {
                this.classList.remove('filled');
            }
        });
  
        // Initial check in case the input already has value on page load
        if (input.value !== '') {
            input.classList.add('filled');
        }
    });



   
      const uploadFile = document.querySelector('#file-upload');
      const uploadButton = document.querySelector('#upload-btn');
      const uploadText = document.querySelector('#name__file');
      const removeButton = document.querySelector('#remove_file');
      const fileIcon = document.querySelector('.file-icon');
      const fileWrapper = document.querySelector('.file__wrapper');
      uploadButton.addEventListener('click', function () {
        uploadFile.click()
      });
      uploadFile.addEventListener('change', function () {
        if(uploadFile.value) {
          uploadText.innerText =  uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1]
          removeButton.style.display = "block"
          uploadButton.classList.add('active')
          fileIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 19.9528L12.7952 19.1575C13.2344 18.7183 13.2344 18.0062 12.7952 17.5669C12.356 17.1277 11.6438 17.1277 11.2046 17.5669L10.4093 18.3622C9.09166 19.6799 6.95527 19.6799 5.63759 18.3622C4.31992 17.0445 4.31992 14.9082 5.63759 13.5905L6.43287 12.7952C6.8721 12.356 6.8721 11.6438 6.43287 11.2046C5.99367 10.7654 5.28152 10.7654 4.84229 11.2046L4.04701 11.9999C1.85087 14.196 1.85087 17.7567 4.04701 19.9528C6.24313 22.1489 9.80377 22.1489 11.9999 19.9528ZM18.3622 10.4093L17.5669 11.2046C17.1277 11.6438 17.1277 12.356 17.5669 12.7952C18.0062 13.2344 18.7183 13.2344 19.1575 12.7952L19.9528 11.9999C22.1489 9.80376 22.1489 6.24314 19.9528 4.047C17.7567 1.85087 14.196 1.85087 11.9999 4.047L11.2046 4.84229C10.7654 5.28151 10.7654 5.99364 11.2046 6.43287C11.6438 6.87209 12.356 6.87209 12.7952 6.43287L13.5905 5.63758C14.9082 4.31989 17.0445 4.31989 18.3622 5.63758C19.6799 6.95526 19.6799 9.09164 18.3622 10.4093ZM13.5905 8.81873C14.0297 8.37951 14.7418 8.37951 15.1811 8.81873C15.6203 9.25797 15.6203 9.97009 15.1811 10.4093L10.4093 15.1811C9.9701 15.6203 9.25796 15.6203 8.81876 15.1811C8.37952 14.7418 8.37952 14.0297 8.81876 13.5905L13.5905 8.81873Z" fill="white"/>
          </svg>
          `
          buttonWidth = uploadButton.offsetWidth;
          fileWrapper.classList.add('active')
        } else {
          uploadText.innerText = 'Attach your resume';
          removeButton.style.display = "none"
          uploadButton.classList.remove('active')
          fileIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 19.9528L12.7952 19.1575C13.2344 18.7183 13.2344 18.0062 12.7952 17.5669C12.356 17.1277 11.6438 17.1277 11.2046 17.5669L10.4093 18.3622C9.09166 19.6799 6.95527 19.6799 5.63759 18.3622C4.31992 17.0445 4.31992 14.9082 5.63759 13.5905L6.43287 12.7952C6.8721 12.356 6.8721 11.6438 6.43287 11.2046C5.99367 10.7654 5.28152 10.7654 4.84229 11.2046L4.04701 11.9999C1.85087 14.196 1.85087 17.7567 4.04701 19.9528C6.24313 22.1489 9.80377 22.1489 11.9999 19.9528ZM18.3622 10.4093L17.5669 11.2046C17.1277 11.6438 17.1277 12.356 17.5669 12.7952C18.0062 13.2344 18.7183 13.2344 19.1575 12.7952L19.9528 11.9999C22.1489 9.80376 22.1489 6.24313 19.9528 4.047C17.7567 1.85087 14.196 1.85087 11.9999 4.047L11.2046 4.84229C10.7654 5.28151 10.7654 5.99364 11.2046 6.43287C11.6438 6.87209 12.356 6.87209 12.7952 6.43287L13.5905 5.63758C14.9082 4.31989 17.0445 4.31989 18.3622 5.63758C19.6799 6.95526 19.6799 9.09164 18.3622 10.4093ZM13.5905 8.81873C14.0297 8.37951 14.7418 8.37951 15.1811 8.81873C15.6203 9.25797 15.6203 9.97009 15.1811 10.4093L10.4093 15.1811C9.9701 15.6203 9.25796 15.6203 8.81876 15.1811C8.37952 14.7418 8.37952 14.0297 8.81876 13.5905L13.5905 8.81873Z" fill="#40820D"/>
          </svg>
          `
          fileWrapper.classList.remove('active')
        }
      })
      removeButton.addEventListener('click', function (event) {
        event.preventDefault();
        uploadFile.value = ''; // Clear the input value
        uploadText.innerText = 'Attach your resume'; // Reset to default file name
        removeButton.style.display = "none"
        uploadButton.classList.remove('active')
        fileIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 19.9528L12.7952 19.1575C13.2344 18.7183 13.2344 18.0062 12.7952 17.5669C12.356 17.1277 11.6438 17.1277 11.2046 17.5669L10.4093 18.3622C9.09166 19.6799 6.95527 19.6799 5.63759 18.3622C4.31992 17.0445 4.31992 14.9082 5.63759 13.5905L6.43287 12.7952C6.8721 12.356 6.8721 11.6438 6.43287 11.2046C5.99367 10.7654 5.28152 10.7654 4.84229 11.2046L4.04701 11.9999C1.85087 14.196 1.85087 17.7567 4.04701 19.9528C6.24313 22.1489 9.80377 22.1489 11.9999 19.9528ZM18.3622 10.4093L17.5669 11.2046C17.1277 11.6438 17.1277 12.356 17.5669 12.7952C18.0062 13.2344 18.7183 13.2344 19.1575 12.7952L19.9528 11.9999C22.1489 9.80376 22.1489 6.24313 19.9528 4.047C17.7567 1.85087 14.196 1.85087 11.9999 4.047L11.2046 4.84229C10.7654 5.28151 10.7654 5.99364 11.2046 6.43287C11.6438 6.87209 12.356 6.87209 12.7952 6.43287L13.5905 5.63758C14.9082 4.31989 17.0445 4.31989 18.3622 5.63758C19.6799 6.95526 19.6799 9.09164 18.3622 10.4093ZM13.5905 8.81873C14.0297 8.37951 14.7418 8.37951 15.1811 8.81873C15.6203 9.25797 15.6203 9.97009 15.1811 10.4093L10.4093 15.1811C9.9701 15.6203 9.25796 15.6203 8.81876 15.1811C8.37952 14.7418 8.37952 14.0297 8.81876 13.5905L13.5905 8.81873Z" fill="#40820D"/>
        </svg>
        `
        fileWrapper.classList.remove('active')
    });
  }
  
});



