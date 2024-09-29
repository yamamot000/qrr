function generateQRCode() {
    const qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = '';
    const randomInt = Math.floor(Math.random() * 100000000) + 1; 
    const qrCode = new QRCode(qrCodeContainer, {
        text: `queue number: '${randomInt}`,
        width: 128,
        height: 128
    });
}
setInterval(generateQRCode, 5000);
generateQRCode();
