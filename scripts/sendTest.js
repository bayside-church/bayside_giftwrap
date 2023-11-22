function sendTest(e){
    e.preventDefault();
    var ip_addr = document.getElementById("ip_addr").value;
    let testZpl = `
        
            ^XA
            ^PW812
            ^LL406

            ^FR^FO0,0^GB812,0,136^FS
            ^FX Test Print
            ^CF0,90
            ^FO85,50^FR^FDTest Print^FS
            ^CF0,60
            ^FB620,2,0,L^FT85,370^FDThis is a test.^FS
            ^XZ
        `;
    sendRequest(ip_addr, testZpl);
}