



function tip(valorBotao){
    const bill = document.querySelector(".splitter__input")
    const people = document.querySelector(".splitter__input-2")
    const tip = document.querySelectorAll(".splitter__numero")
    const valor = bill.value
    const valorPeople = people.value
    const porcentagem = 100/valorBotao
    const mensagem = document.querySelector(".splitter__input-mensagem")
    const mensagem2 = document.querySelector(".splitter__input-mensagem-2")

    if(valor == 0){
        bill.classList.add("error")
        mensagem.innerHTML = "Can't be zero"
        return
    }
    else{
        bill.classList.remove("error")
        mensagem.innerHTML = ""
    }
    if(valorPeople == 0){
        people.classList.add("error")
        mensagem2.innerHTML = "Can't be zero"
        return
    }
    else{
        people.classList.remove("error")
        mensagem2.innerHTML = ""
    }

    let valorTip = valor/porcentagem
    let valorTotal = (parseFloat(valorTip)+parseFloat(valor)) / valorPeople
    tip[0].innerHTML = `$${valorTip / valorPeople}`
    tip[1].innerHTML = `$${valorTotal}`

}
function tipInput(){
    const bill = document.querySelector(".splitter__input")
    const people = document.querySelector(".splitter__input-2")
    const tip = document.querySelectorAll(".splitter__numero")
    const tipInput = document.querySelector(".splitter__botao-p-input")
    const valor = bill.value
    const valorPeople = people.value
    const porcentagem = 100/tipInput.value
    let valorTip = valor/porcentagem
    let valorTotal = (parseFloat(valorTip)+parseFloat(valor)) / valorPeople
    tip[0].innerHTML = `$${valorTip / valorPeople}`
    tip[1].innerHTML = `$${valorTotal}`

}
function reset(){
    const tip = document.querySelectorAll(".splitter__numero")
    tip[0].innerHTML = "$0.00"
    tip[1].innerHTML = "$0.00"

}


