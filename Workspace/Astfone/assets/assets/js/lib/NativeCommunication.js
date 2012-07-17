var nativeCommunication = {};
nativeCommunication.callNativeMethod = function(URL)
{
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", URL);
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}