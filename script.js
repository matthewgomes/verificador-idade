function checar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nc = document.getElementById('nasc').value
    var res = document.getElementById('res')

    if (nc == 0 || nc > ano) {
        res.innerText = '[ERRO] ano inválido!'
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - nc
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var gênero = ''
            if (fsex[0].checked  && idade < 21) {
                gênero = '<strong> Menino </strong>'

                if (idade >= 0 && idade <= 10) {
                    img.setAttribute('src', 'pics/kid-man.png')
                } else if (idade < 21) {
                    img.setAttribute('src', 'pics/teen-man.png')
                }

            } else if (fsex[0].checked && idade >=21) {
                gênero = '<strong> Homem </strong>'
                
                if (idade < 50) {
                    img.setAttribute('src', 'pics/adult-man.png')
                } else {
                    img.setAttribute('src', 'pics/senior-man.png')
                }

            } else if (fsex[1].checked && idade < 21) {
                gênero = '<strong> Menina </strong>'

                    if (idade >= 0 && idade <= 10){
                        img.setAttribute('src', 'pics/kid-woman.png')
                    } else if (idade < 21) {
                        img.setAttribute('src', 'pics/teen-woman.png')
                    }

            } else if (fsex[1].checked && idade >=21) {
                gênero = '<strong> Mulher </strong>'

                if (idade < 50){
                    img.setAttribute('src', 'pics/adult-woman.png')
                } else {
                    img.setAttribute('src', 'pics/senior-woman.png')
                }
            }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} de ${idade} anos. <br>`
        res.appendChild(img)
    }
}
 