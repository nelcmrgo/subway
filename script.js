// Vegetariano?
let vegetariano = prompt('Você é vegetariano? (s/n)')
//opções do nosso lanche
let pao
let proteina
let salada
let lanche

if(vegetariano === 's'){
    //menu vegetariano
    pao = Number(prompt('1-Gergelim/ 2- 3 Queijos/ 3- Italiano'))
    switch (pao) {
        case 1:
            lanche = 'Gergelim'
            break;
        case 2:
            lanche = '3 Queijos'
            break;
        case 3:
            lanche = 'Italiano'
            break;
        default:
            alert('Código do pão inválido')
            break;
    }
    proteina = Number(prompt('1-  Hambúrguer Soja / 2- Tofu / 3- Batata'))
    switch (proteina) {
        case 1:
            lanche += ' + Hambúrguer Soja'
            break;
        case 2:
            lanche += ' + Hambúrguer Tofu'
            break;
        case 3:
            lanche += ' + Hambúrguer Batata'
            break;
        default:
            alert('Código da proteína inválido')
            break;
    }
    salada = Number(prompt('1-  Alface / 2- Tomate / 3- Cebola'))
    switch (salada) {
        case 1:
            lanche += ' + Alface'
            break;
        case 2:
            lanche += ' + Tomate'
            break;
        case 3:
            lanche += ' + Cebola'
            break;
        default:
            alert('Código da salada inválido')
            break;
    }
}else{
    //menu normal 
     pao = Number(prompt('1-Gergelim/ 2- 3 Queijos/ 3- Italiano'))
    switch (pao) {
        case 1:
            lanche = 'Gergelim'
            break;
        case 2:
            lanche = '3 Queijos'
            break;
        case 3:
            lanche = 'Italiano'
            break;
        default:
            alert('Código do pão inválido')
            break;
    }
    proteina = Number(prompt('1-  Frango / 2- Peixe / 3- Carne'))
    switch (proteina) {
        case 1:
            lanche += ' + Filé de frango'
            break;
        case 2:
            lanche += ' + Filé de peixe'
            break;
        case 3:
            lanche += ' + Hambúrguer'
            break;
        default:
            alert('Código da proteína inválido')
            break;
    }
    salada = Number(prompt('1-  Alface / 2- Tomate / 3- Cebola'))
    switch (salada) {
        case 1:
            lanche += ' + Alface'
            break;
        case 2:
            lanche += ' + Tomate'
            break;
        case 3:
            lanche += ' + Cebola'
            break;
        default:
            alert('Código da salada inválido')
            break;
    }

}

alert('Seu lanche é: ' + lanche)
