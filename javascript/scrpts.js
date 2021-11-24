let sidenav = false;
function openNav() {
    document.getElementById("mySidenav").style.width = "40%";
    sidenav = true;
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
            
            document.getElementById("mySidenav").style.width = "0%";
            sidenav  = false;
        
  }
  function redirect()
  {
      window.location.href = "#";
  }
  const prevbutton = document.getElementById("carprev");
  setInterval(prevbutton.click() , 2000);


  