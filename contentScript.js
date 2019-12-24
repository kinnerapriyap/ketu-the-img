var textAreas = document.querySelectorAll("textArea[name*='[body]']")
textAreas.forEach(function(textArea) {
    textArea.style.background = 'red';
})