function ipToInt32(ip){
    var exponent = 3;
    var ipNum = 0;

    ip.split('.').forEach(function(item) {
        ipNum += item * (Math.pow(256,exponent--));
    });

    return ipNum;

}