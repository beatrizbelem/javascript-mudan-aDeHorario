function carregar () {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        img.src ="manhaaaaa.jpg"
        document.body.style.background= "#efbc82"
    } else if (hora >= 12 && hora < 18) {
        img.src ="tarde.jpg"
        document.body.style.background= "#a2a77b"

    } else {
        img.src = "Vidigal_-_Noite.jpeg"
        document.body.style.background= "#010631"

    }
}

