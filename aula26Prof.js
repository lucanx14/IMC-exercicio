const form = document.querySelector('.form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const inputPeso = e.target.querySelector('.input-1')
    const inputAltura = e.target.querySelector('.input-2')
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if(!peso){
        setResultado('peso invalido'), false
        return;
    } 
    if(!altura){
        setResultado('altura,invalida'), false
        return;
    }
    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)
    const msg = `seu imc é ${imc} ${nivelImc}`
    setResultado(msg, true)
})
function getNivelImc(imc){
    const nivel = [
        'abaixo do peso',
        'Peso normal',
        'sobrepeso',
        'obesidade grau 1',
        'obesidade grau 2',
        'obesidade grau 3']
    if(imc < 18.5) return nivel[0]
    if(imc < 24.9) return nivel[1]
    if(imc < 29.9) return nivel[2]
    if(imc < 34.9) return nivel[3]
    if(imc < 39.9) return nivel[4]
    if(imc > 40) return nivel[5]
}
 
function getImc(peso, altura){
    const imc = peso/altura**2
    return imc
}
function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado')
    const p = criaP()
    if(isValid){
        p.classList.add('paragrafo-resultado')
    } else{
        p.classList.add('bad')
    }
    resultado.innerHTML = ''
    p.innerHTML += msg
    resultado.appendChild(p)
}
function criaP(){
    const p = document.createElement('p')
    return p
}

