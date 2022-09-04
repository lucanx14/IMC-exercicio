function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    function recebeEventoForm(evento){
        evento.preventDefault()
        const peso = document.querySelector('.input-1').value
        const altura = parseFloat(document.querySelector('.input-2').value).toFixed(2)
        const imc = function(){
            const imc1 = peso/altura**2
            return imc1.toFixed(2) 
        }
        const imcEstado = function(){
            if(imc() >= 5 && imc() < 18.5){
                return `Seu imc é ${imc()} e você esta abaixo do peso`
            } else if( imc() >= 18.5 && imc() < 25){
                return `Seu imc é ${imc()} e você esta com Peso normal`
            } else if(imc() >= 25 && imc() < 30){
                return `Seu imc é ${imc()} e você esta com sobrepeso`
            } else if(imc() >= 30 && imc() < 35){
                return `Seu imc é ${imc()} e você esta com obesidade grau 1`
            } else if(imc() >= 35 && imc() < 40){
                return `Seu imc é ${imc()} e você esta com obesidade grau 2`
            } else if(imc() >= 40 && imc() < 70){
                return `Seu imc é ${imc()} e você esta com obesidade grau 3`
            } else if(imc() < 5 || imc() > 70){
                return 'invalido, digite valores reais'
            }
        }
        console.log(peso/altura**2)
        resultado.innerHTML = ``
        resultado.innerHTML += `<p>${imcEstado()}</p>`
    }
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()