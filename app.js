function includeHTML(componentName) {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute(componentName);
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute(componentName);
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function goApplications() {
  const elemApplications = document.getElementById("applications")
  const elemAbout = document.getElementById("about")
  const buttonApplications = document.getElementById("buttonApplications")
  const buttonAbout = document.getElementById("buttonAbout")  

  elemApplications?.classList.remove("invisible")
  elemAbout?.classList.add("invisible")
  buttonApplications?.setAttribute("disabled", "true")
  buttonAbout?.removeAttribute("disabled")
}

function goAbout() {
  const elemApplications = document.getElementById("applications")
  const elemAbout = document.getElementById("about")
  const buttonApplications = document.getElementById("buttonApplications")
  const buttonAbout = document.getElementById("buttonAbout")  

  elemAbout?.classList.remove("invisible")
  elemApplications?.classList.add("invisible")
  buttonAbout?.setAttribute("disabled", "true")
  buttonApplications?.removeAttribute("disabled")
}

includeHTML("carousel")
includeHTML("navbar")
includeHTML("about")