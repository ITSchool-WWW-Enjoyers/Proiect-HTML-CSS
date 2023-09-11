// Toggle for dropdown
const dropdownActivation = () => {
  const navDropdown = document.getElementById("navDropdown");
  navDropdown.classList.toggle("show");
  navDropdown.classList.toggle("active");
};

// Toggles the dropmenu off if the user clicks outside it
window.onclick = (e) => {
  if (!e.target.matches('.dropbutton')) {
    const navDropdown = document.getElementById("navDropdown");
    if (navDropdown.classList.contains('show')) {
      navDropdown.classList.remove('show');
    }
  }
};