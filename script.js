words = "ffff ddd jjjj kkkk df df jk jk jjj fff ddff jjkk kkdd fdfd jkjk dfjk dfjk\
kkdd jkjk dfdf dfjj jjfd kkjj dfjk ddkd kkdf"

const wordBox = document.querySelector('.words-box')
const main = document.querySelector('.main')

let counter = 0

for (i = 0; i < words.length; i++) {
    const createSpanTag = document.createElement('span')
    createSpanTag.innerText = words[i]
    wordBox.appendChild(createSpanTag)
}
let allSpan = document.querySelectorAll('span')

document.addEventListener('keydown', e => {
    e.preventDefault()
    let find = e.key
    main.innerHTML = find

    if (find == 'Backspace') {
        if (counter > 0){
            counter--
        }
        else{
            ""
        }
        main.style.display = "none"
        let buttonClicked = document.querySelector('#buttonClick')
        buttonClicked.playbackRate = 2.5
        buttonClicked.volume = '1.0'
        buttonClicked.play()
        allSpan[counter].style.color = 'black'
        allSpan[counter].style.background = ''
        
        return
    }

    if (find == words[counter]) {
        main.style.display = "block"
        let buttonClicked = document.querySelector('#buttonClick')
        buttonClicked.playbackRate = 2.5
        buttonClicked.volume = '1.0'
        buttonClicked.play()
        allSpan[counter].style.color = "green"
        allSpan[counter].style.margin = '2px'
        allSpan[counter].style.padding = 'auto'
        allSpan[counter].style.borderRadius = '5px'
        allSpan[counter].style.backgroundColor = 'rgba(139, 223, 126, 0.44)'
        allSpan[counter].style.color = 'green'  
    }
    else {
        main.style.display = "block"
        let wrongClick = document.querySelector('#wrongClick')
        wrongClick.playbackRate = 2
        wrongClick.volume = '1.0'
        wrongClick.play()
        allSpan[counter].style.color = 'red'
        allSpan[counter].style.margin = '2px'
        allSpan[counter].style.borderRadius = '5px'
        allSpan[counter].style.backgroundColor = 'rgba(245, 0, 0, 0.10)'
        allSpan[counter].style.color = 'red'
    }
    counter++
})



