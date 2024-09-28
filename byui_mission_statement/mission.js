// <!-- Theme Select Dropdown -->
  
 // <script>
    // Get the select element
    const themeSelector = document.getElementById('theme_selector');
    themeSelector.addEventListener("change", applyTheme)
    const logo = document.querySelector("img")
    // Function to apply the selected theme
    function applyTheme() {
      const selectedTheme = themeSelector.value;
      
      if (selectedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        logo.src = "byui-logo_dark.png";
      } else {
        document.body.classList.remove('dark-mode');
        logo.src = "byui-logo_blue.webp";
      }
    }