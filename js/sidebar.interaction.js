function pressDropDownButton(x){
  if (!x.style.borderBottom || x.style.borderBottom === "none") {
      x.style.borderBottom= "2px solid #f22f27";
	  x.style.color="#ffffff";
  } else {
      x.style.borderBottom = "none";
	  x.style.color= "#9d9d9c";
  }
  
  var dropdownContent = x.nextElementSibling;
  if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
  } else {
      dropdownContent.style.display = "block";
  }
}

function showSidebar(x) {
  x.style.width="250px";
}

function hideSidebar(x) {
  x.style.width="6px";
}