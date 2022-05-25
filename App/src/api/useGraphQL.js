import React, { useEffect, useState } from "react";

// const { NODE_ENV, REACT_APP_HOST_URI, REACT_APP_GRAPHQL_ENDPOINT, REACT_APP_AUTHORIZATION } = process.env;
const NODE_ENV = 'NOT-development';
const REACT_APP_HOST_URI = 'https://author-p65820-e568109.adobeaemcloud.com';
const REACT_APP_GRAPHQL_ENDPOINT = '/content/graphql/global/endpoint.json';
const REACT_APP_AUTHORIZATION = 'admin1:admin';
const REACT_APP_DEV_TOKEN = 'eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2NTM0MTQ4ODY5MzJfNmQzMWM4M2YtOTcwYy00MGU0LWEyZDItZTMxOTFkMGMyZmNmX3VlMSIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJkZXYtY29uc29sZS1wcm9kIiwidXNlcl9pZCI6IkYwMEI0N0I2NjI4NjY4N0UwQTQ5NUUxM0BBZG9iZUlEIiwic3RhdGUiOiIyOHRTaVVDRVQ0UHdFeUNIdHE2VUNSSGoiLCJhcyI6Imltcy1uYTEiLCJhYV9pZCI6IkYwMEI0N0I2NjI4NjY4N0UwQTQ5NUUxM0BBZG9iZUlEIiwiY3RwIjowLCJmZyI6IldPNVJFQ1lIWFBON0lQVUtHTVFGVDdRQURRPT09PT09Iiwic2lkIjoiMTY1MzQwMTk5ODI0NV9lODM5ZDY5Mi05M2NjLTRmNDktOGZlYS0zZmNiYWEwYWM4YmZfdWUxIiwicnRpZCI6IjE2NTM0MTQ4ODY5MzNfMGU3MzM1MTktNDAyZC00NTM5LWEyMTEtZTc1ZjMxNTJkMDE1X3VlMSIsIm1vaSI6ImM3OWMyYWM2IiwicGJhIjoiIiwib2MiOiJyZW5nYSpuYTFyKjE4MGY3MzRmYmE4KlI2UE5WNTFRN1MyOEIzOVJDRjM1SFhZMDUwIiwicnRlYSI6IjE2NTQ2MjQ0ODY5MzMiLCJleHBpcmVzX2luIjoiODY0MDAwMDAiLCJzY29wZSI6IkFkb2JlSUQsb3BlbmlkLHJlYWRfb3JnYW5pemF0aW9ucyxhZGRpdGlvbmFsX2luZm8ucHJvamVjdGVkUHJvZHVjdENvbnRleHQiLCJjcmVhdGVkX2F0IjoiMTY1MzQxNDg4NjkzMiJ9.PY0SFGk5TFCdT_iNuyDOBObr3J1O72ZXdbKpIDfXbuedkH1Xax_qfZgGYfvsaEGWCra6ZWBCRGXWXqOlCW3TfayoTVOjzIv8TrHltPyOdHCeILKX21IoiOfXyIkqQYagmxhKy08et9SzuSrKB-kom3hGR1-96d45cx9m9K6QCmDPPToMeJKC990rXL0lu7atK1PN-kcpAzSymUD30AuPBI7egG2MjF63BwAcs-0z3BOjigVlBW5kQat0K8flSw0SE3_8n-Cs5KbKn6V0KovVbYBNu2DshUw8WeYYsdYAvKwVPGDnoyXdKKIUMjRYC90k4zkn7V-PnpR1YEeDsphYTw';


/*
    Custom React Hook to perform a GraphQL query
    query paramter is a GraphQL query
    environment variable REACT_APP_GRAPHQL_ENDPOINT is used to point to endpoint in AEM
*/
function useGraphQL(query) {

    let [data, setData] = useState(null);
    let [errorMessage, setErrors] = useState(null);

    useEffect(() => {
        window.fetch(
            getRequestUrl(), 
            getRequestOptions(query)
        ).then(response => response.json())
        .then(({data, errors}) => {
            //If there are errors in the response set the error message
            if(errors) {
                setErrors(mapErrors(errors));
            }
            //Otherwise if data in the response set the data as the results
            if(data) {
                setData(data);
            }
        })
        .catch((error) => {
            setErrors(error);
        });
    }, [query]);

    return {data, errorMessage}
}

/**
 * Get the request uri based on environment variables
 */
function getRequestUrl() {

    if(NODE_ENV === 'development') {
        // always use a relative url during development so the proxy is used at setupProxy.js
        return REACT_APP_GRAPHQL_ENDPOINT;
    }

    // use an absolute URL for everything else
    return REACT_APP_HOST_URI + REACT_APP_GRAPHQL_ENDPOINT;
}

/**
 * Set the GraphQL endpoint based on environment variables and passed in query
 * @param {*} query 
 */
function getRequestOptions(query) {

    // headers and include authorization if authorization set
    let httpHeaders = new Headers();
    httpHeaders.append('Content-Type', 'application/json');

    if(REACT_APP_AUTHORIZATION) {
        httpHeaders.append('Authorization', 'Basic ' + btoa(REACT_APP_AUTHORIZATION));
    }

    return  {
        method: 'POST',
        headers: httpHeaders,
        body: JSON.stringify({query}),
    };
}

/**
 * concatenate error messages into a single string.
 * @param {*} errors 
 */
function mapErrors(errors) {
    return errors.map((error) => error.message).join(",");
}
export default useGraphQL
