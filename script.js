function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.lenght == 0) {
        window.alert('Por Favor, Digite um Número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //pra limpar a tabuada após o uso
        let item = document.createElement('option')
        item.text = `${Math.sqrt(n)}`
        tab.appendChild(item)
        c++
    }
}