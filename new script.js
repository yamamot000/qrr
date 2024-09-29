let queueNumber = 1;

function generateQRCode() {
    const qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = '';
    const randomInt = Math.floor(Math.random() * 100000000) + 1;
    const qrCodeText = `https://example.com/${queueNumber}-${randomInt}`;
    const qrCode = new QRCode(qrCodeContainer, {
        text: qrCodeText,
        width: 128,
        height: 128
    });
    document.getElementById('queueNumber').innerText = `Queue: ${queueNumber}`;
    queueNumber++;
}
setInterval(generateQRCode, 10000);
generateQRCode();
