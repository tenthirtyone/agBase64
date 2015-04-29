angular.module('agBase64', [])

.filter('base64Decode', function() {
    return function(cipherText) {
        return cipherText && atob(cipherText);
    };
})

.filter('base64Encode', function() {
    return function(textToEncode) {
        return textToEncode && btoa(textToEncode);
    };
});
