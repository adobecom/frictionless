const { createProxyMiddleware } = require('http-proxy-middleware');
// const {REACT_APP_HOST_URI, REACT_APP_AUTHORIZATION } = process.env;
// const REACT_APP_HOST_URI = 'https://author-p65820-e568109.adobeaemcloud.com';
// const REACT_APP_AUTHORIZATION = 'admin1:admin';
const REACT_APP_HOST_URI = 'https:/localhost:4502';
const REACT_APP_AUTHORIZATION = 'admin:admin';
const REACT_APP_DEV_TOKEN = 'eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2NTM5NDQ1ODE5ODRfNTJlZTU2OWMtMGVjZS00NDQ4LWE3NGQtZDNiNjM2NDQ3ZTBlX3VlMSIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJkZXYtY29uc29sZS1wcm9kIiwidXNlcl9pZCI6IkYwMEI0N0I2NjI4NjY4N0UwQTQ5NUUxM0BBZG9iZUlEIiwic3RhdGUiOiJ0RUZGWWU3bmdmRGt1dmpHVnhibHlobWkiLCJhcyI6Imltcy1uYTEiLCJhYV9pZCI6IkYwMEI0N0I2NjI4NjY4N0UwQTQ5NUUxM0BBZG9iZUlEIiwiY3RwIjowLCJmZyI6IldQT1k2UEVKWFBON0lIVUtHTVFGU1hRQVVVPT09PT09Iiwic2lkIjoiMTY1Mzk0NDQ3MDg3N19kODgxY2RlYy04ZWZiLTRhMDAtOThjOC1kYmI3MTRmNGNmY2NfdWUxIiwicnRpZCI6IjE2NTM5NDQ1ODE5ODVfMTFmMzMxMGUtYjI2Mi00ZDc2LWI3MTItMzAwMzE2MDYwZWZkX3VlMSIsIm1vaSI6IjkwNWIzNGM3IiwicGJhIjoiIiwicnRlYSI6IjE2NTUxNTQxODE5ODUiLCJleHBpcmVzX2luIjoiODY0MDAwMDAiLCJjcmVhdGVkX2F0IjoiMTY1Mzk0NDU4MTk4NCIsInNjb3BlIjoiQWRvYmVJRCxvcGVuaWQscmVhZF9vcmdhbml6YXRpb25zLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCJ9.gCDHtsm_V579WiNS0Rpcn1Ya0o2ebCxqO00WGDPGVoVvv6JtwKtBGONKxqCihdUfAvscnB1L2IV11FWXseYI3fu-Td4HsH8Cr5zcbYrLamfJJg52oHWR8lWbMnOFmX3jf1z3glwCS0SZRMyaD_3Yii3x3xS-HUkvtjjnisB70Zm7HIwiNZkQB3f0L_4fOYHMIPKEccF5XSzbEx4b8a4VJ-hWVMZt5AdnOkVtNWM5shJsJfVKfUWxI76BnodAE2C7sbh-RqZC7souJGag8nsZxq0dL6RQCrLhqT1TNCSj1OUr4hYlGgH2Dx7Alpg3kq2p5Ch6Jxuq2wc49vj_0SJXzQ';
/*
    Set up a proxy with AEM for local development
    In a production enviroment this proxy should be set up at the webserver level or absolute URLs should be used.
*/

module.exports = function(app) {
  app.use(
    ['/content', '/graphql'],
    createProxyMiddleware({
      target: REACT_APP_HOST_URI,
      changeOrigin: true,
      //pass in credentials when developing against an Author environment
      auth: REACT_APP_AUTHORIZATION,
            onProxyReq: (proxyReq, req, res) => {
          if (REACT_APP_DEV_TOKEN) {
              proxyReq.setHeader('Authorization', `Bearer ${REACT_APP_DEV_TOKEN}`);
          }
      }
    })
  );
};
