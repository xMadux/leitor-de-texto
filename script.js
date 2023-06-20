const textarea = document.querySelector('#texto')
const button = document.querySelector('.falar')

button.addEventListener('click', falarTexto)

function falarTexto(){
    if(textarea.value === ''){
        alert('Precisa inserir um texto!')
        return;
    }
    
    const mensagemInserida = textarea.value
    const api = new SpeechSynthesisUtterance(mensagemInserida)
    const apiVoices = speechSynthesis.getVoices()
    

    api.lang = 'pt-BR'
    api.voice = apiVoices[1]
    speechSynthesis.speak(api)

}

