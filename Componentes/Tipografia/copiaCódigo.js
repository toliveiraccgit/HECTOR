function copyToClipBoard() {

    var content = document.querySelector('.input__text___codigo');
    
    content.select();
    document.execCommand('copy');
}
