var textAreas = document.querySelectorAll("textArea[name*='[body]']")
textAreas.forEach(function(textArea) {
    var defaultPatt = /\!\[\w+\]\(\w+\)/gm
    var newPatt = '<img src="$2" width=300/>'
    textArea.value = textArea.value.replace(defaultPatt, newPatt)
})