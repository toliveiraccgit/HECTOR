function openTabTipografia(event, nomeTab) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-tipografia");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].style.opacity = "0";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-tipografia");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-tipografia", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(nomeTab).style.display = "flex";
    document.getElementById(nomeTab).style.opacity = "1";
    event.currentTarget.className += " active-tipografia";


}
document.getElementById("defaultOpen-tipografia").click()