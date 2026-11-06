const text = "The design of Athenian is distinctly marked by Historicism. Its formal language references an idealized vision of antiquity: columns, capitals, monumentality. Strong, pointed serifs and a pronounced reverse contrast give the typeface an almost architectural stasis. The horizontals carry the weight, while the verticals lose dominance. This shift in the relationship between stroke weights amplifies the expression of historical grandeur, yet renders continuous text restless and unstable. The formal quality aims less at readability than at monumental impact."

const container = document.getElementById("container")

// Zeigen den gesamten Text im HTML Container an
// container.innerHTML = text

// Jedes Word wird ein Item in der Liste

// LIST OF WORDS
const listOfWords = text.split(" ")
// const anticipatedWordWidth = 


//Loop through all the word in our list
listOfWords.forEach(word => {
    //
    console.log(word)

const wordElement = document.createElement("span")

// SIZE
wordElement.style.fontSize = 100 * Math.random() + "px"

// COLOR
    // hier kann die die Farbe bestimmen. wenn man in einer Farbrange bleiben möchte, dann kann man die Color Variablen festsetzen
    // var background color
    const r = 147
    const g = 140
    const b = Math.random() * 255

    // var font color
    const fr = 0
    const fg = 0
    const fb = 0
    // const color = "rgb(" + r + ", " + g + ", " + b +  ")" 
    // color
    const background = `rgb(${r}, ${g}, ${b})`
    const color = `rgb(${fr}, ${fg}, ${fb})`

    //greyscale
    // const color = `rgb(${r}, ${r}, ${r})`
        wordElement.style.color = color
        wordElement.style.backgroundColor = background

    //TRANSFORM FONT

    // const scaleValueX = Math.random()
    // const scaleValueY = Math.random()

    //     wordElement.style.transform = `scaleX(0.5)`
    //     wordElement.style.transform = `scaleX(${scaleValueX}) scaleY(${scaleValueY})`


    //TRANSFORM FONT ROTATE
    const degreeRangeRotate = Math.random() * 180 - 90
    const degreeRangeSkew = Math.random() * 30 - 10
    
    wordElement.style.transform = `rotate(${degreeRangeRotate}deg) skew(${degreeRangeSkew}deg)`
    //wordElement.style.transform = `rotate(${Math.random() * 20}deg) skew(${Math.random() * 50}deg)`

   

    // VAR FONT
    
    const wghtRange = 1000 - 100
    const wghtValue = Math.random() * wghtRange + 100
    //WEIGHT min 100, max 1000, 1000 - 100 = RANGE 900, am Ende muss noch + MIN Wert hinzugefügt werden

    const wdthRange = 151 - 25
    const wdthValue = Math.random() * wdthRange + 25
    //WIDTH min 25, max 151, 151 - 25 = RANGE 126

    const slntValue = Math.random() * -10.0
    //SLANT bei Slant * den minimalwert
    
    const fontVariationSettings = `"wght" ${wghtValue}, "wdth" ${wdthValue}, "slnt" ${slntValue}`
    wordElement.style.fontVariationSettings = fontVariationSettings

    // const slntValue = Math.random() * 2
    // wordElement.style.fontVariationSettings = `"slnt" ${slntValue}`


    wordElement.innerHTML = word 

    // wordElement.innerHTML = word + " "

    container.appendChild (wordElement)
// Zeige im HTML Container die Wörter an ohne diese zu überschreiben und füge hinter jedem Wort ein Leerzeichen ein 
//     container.innerHTML += word + " "

const wordWidth = wordElement.getBoundingClientRect().width

// const scaleX = wordWidth / anticipatedWordWidth

// wordElement.style.transform = `scaleX (${scaleX})`

// für Animation benötigt




})





console.log(wordWith)