const { request } = require("http");
const https = require("https");

// Read the contents of the url and asynchronously pass it to the callback
function getText(url, callback) {
  // Start an http request on the url
  request = https.get(url);

  // Register a function to handle the response event
  request.on("response", response => {
    // The response event means that the response headers have been received
    let httpStatus = response.statusCode;
    // The body of the http response has not been received yet
    // So we register more event handlers to be called when it arrives.
    response.setEncoding("utf-8");
    let body = "";

    // This event handler is called when a chunk of the body is ready
    response.on("data", chunk => { body += chunk; });

    // This event handler is called when the response is complete
    response.on("end", () => {
      // If the http response was good, pass the response body to the callback
      if (httpStatus === 200) {
        callback(null, body);
      } else {
        callback(httpStatus, null); // Otherwise pass an error
      }
    });
  });

  // We also register an event handler for lower-level network errors
  request.on("error", (err) => {
    callback(err, null);
  });
}