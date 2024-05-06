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
  const elemApplications = document.getElementById("applications");
  const elemAbout = document.getElementById("about");
  const buttonApplications = document.getElementById("buttonApplications");
  const buttonAbout = document.getElementById("buttonAbout");
  
  if (elemApplications) {
    elemApplications.style.display = "block";
    setTimeout(() => {
      elemApplications.classList.remove("invisible");
    }, 2000);
  }
  
  if (elemAbout) {
    elemAbout.classList.add("invisible");
    setTimeout(() => {
      elemAbout.style.display = "none";
    }, 2000);
  }
  
    buttonApplications?.setAttribute("disabled", "true");
    buttonAbout?.removeAttribute("disabled");
}

function goAbout() {
  const elemApplications = document.getElementById("applications");
  const elemAbout = document.getElementById("about");
  const buttonApplications = document.getElementById("buttonApplications");
  const buttonAbout = document.getElementById("buttonAbout");

  if (elemApplications) {
    elemApplications.classList.add("invisible");
    setTimeout(() => {
      elemApplications.style.display = "none";
    }, 2000);
  }

  if (elemAbout) {
    elemAbout.style.display = "block";
    setTimeout(() => {
      elemAbout.classList.remove("invisible");
    }, 2000);
  }
  buttonAbout?.setAttribute("disabled", "true");
  buttonApplications?.removeAttribute("disabled");
}

function setupModal(modalId) {
  // console.log("setupModal", modalId);
  let modalBg = document.getElementById(modalId);
  let modal = document.getElementById(modalId + "Content");

  if (!modalBg || !modal) {
    return
  }
  modalBg.addEventListener("click", () => closeModal(modalId));
  // modalBg.addEventListener("click", closeModal);
  // modal.addEventListener("click", modalClick);
}

function modalClick(event) {
  // event.preventDefault();
  event.stopImmediatePropagation();
  return false;
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  let body = document.querySelector("body");
  if (!body || !modal) {
    return
  }
  modal.style.display = "none";
  body.style.overflow = "auto";
}

function openModal(modalId) {
  let modal = document.getElementById(modalId);
  let body = document.querySelector("body");
  if (!body || !modal) {
    return
  }
  body.style.overflow = "hidden";
  modal.style.display = "block";
}

includeHTML("carousel")
includeHTML("navbar")
includeHTML("about")
// includeHTML("digitalDungeonsModal")
// includeHTML("keeprModal")
// includeHTML("groceriesModal")
// setTimeout(() => {
//   setupModal("digitalDungeonsModal")
//   setupModal("keeprModal")
//   setupModal("groceriesModal")
// }, 1000)