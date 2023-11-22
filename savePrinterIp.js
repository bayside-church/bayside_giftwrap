function savePrinterIP() {
    // Get the IP address from the input field
    var ip = document.getElementById('ip_addr').value;
    
    // Save it in local storage
    localStorage.setItem('printerIPAddress', ip);
}

function getPrinterIP() {
    // Retrieve the IP address from local storage
    return localStorage.getItem('printerIPAddress');
}

// When the page loads, populate the input field with the saved IP address, if it exists
window.onload = function() {
    var savedIP = getPrinterIP();
    if (savedIP) {
        document.getElementById('ip_addr').value = savedIP;
    }
}
