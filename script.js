
function GerarQRCode() { // Inicializando minha função geradora de QRCode que irá funcionar após o evento de click 

    let UrlUsuario = document.getElementById('info').value// Captando valor de url introduzido pelo usuário
    let GoogleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=' // API utilizada para criar QRCodes
    // cht=qr indica que será gerado um QrCode
    //chs=300x300 indica o tamnho do QRCode
    //chl= indica o que irá renderizar após a leitura do QRCode por algum dispositivo
    let ConteudoQRCode = GoogleChartApi + UrlUsuario
    document.getElementById('QRCodeImage').src = ConteudoQRCode // Indicando o src da imagem 
    
}
const MyButton = document.querySelector('button')
MyButton.addEventListener('click', GerarQRCode)







