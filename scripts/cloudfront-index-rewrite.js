// CloudFront Function (viewer-request) for the asnmcare.com distribution.
// S3 REST origins don't resolve directory indexes, so map "/about/" to
// "/about/index.html", and 301 "/about" to "/about/" (trailingSlash: true).
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
    return request;
  }

  var last = uri.substring(uri.lastIndexOf("/") + 1);
  if (last.indexOf(".") === -1) {
    var qs = Object.keys(request.querystring).map(function (k) {
      var v = request.querystring[k];
      return v.value ? k + "=" + v.value : k;
    }).join("&");
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: { location: { value: uri + "/" + (qs ? "?" + qs : "") } },
    };
  }

  return request;
}
