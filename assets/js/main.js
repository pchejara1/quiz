function openNav() {
    document.getElementById("mobileNav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mobileNav").style.width = "0";
  }

  function openProfile() {
    document.getElementById("mobileProfile").style.width = "320px";
  }
  
  function closeProfile() {
    document.getElementById("mobileProfile").style.width = "0%";
  }

  var myModal = document.getElementById('myModal')
  var myInput = document.getElementById('myInput')
  
  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  })