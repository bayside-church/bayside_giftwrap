function sendRequest(ip_addr, zpl){
    if (!ip_addr) {
        alert('Printer IP address missing');
        return;
    };
    var url = "http://"+ip_addr+"/pstprnt";
    var method = "POST";
    var async = true;
    var request = new XMLHttpRequest();

    request.onload = function () {
        var status = request.status; 
        var data = request.responseText; 
        output.innerHTML = "Status: " + status + "<br>" + data;
    }
    console.log('1');

    request.open(method, url, async);

    console.log('2');

    request.send(zpl);

};