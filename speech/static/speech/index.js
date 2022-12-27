document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#text-result').style.display = "none";
    document.querySelector('#mic').onclick = Mic; 
    document.querySelector('#btn-search').onclick = TextForm;

    document.querySelector('#text-input').onclick = () => {
        document.querySelector('#text-result').style.display = "none";
    }

});

const Mic = () => {
    document.querySelector('#text-result').style.display = "none";
    const textInput = document.querySelector('#text-input');
    //animation
    textInput.value = "Recording....";
    textInput.style.fontWeight = '900'
    textInput.style.letterSpacing = '10px'
    textInput.style.textAlign = 'center'
    textInput.style.animationName = 'listening';
    textInput.style.animationDuration = '2s';
    textInput.style.animationFillMode = 'forward';
    textInput.style.animationIterationCount = 'infinite'

    //call record api
    fetch('/record') 
    .then(respnse => respnse.json())
    .then(response => {
        textInput.value = ''
        textInput.style.fontWeight = 'normal'
        textInput.style.letterSpacing = null
        textInput.style.textAlign = 'start'
        textInput.style.animation = null
        console.log(response)
    })
    .catch(err => {
        console.log(err)
        textInput.value = ''
        textInput.style.fontWeight = 'normal'
        textInput.style.letterSpacing = null
        textInput.style.textAlign = 'start'
        textInput.style.animation = null
    })
    
}

const TextForm = () => {

    const text = document.querySelector('#text-input').value;

    fetch('/text_result', {
        method: 'POST',
        body: JSON.stringify({
            text: text 
        })
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const message = document.querySelector('#text-result')
        message.value = response.response;
        message.style.display = 'block'

    })
    .catch(err => console.log(err))
}

