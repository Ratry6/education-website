import React from 'react';
import './ErrorFound.css'

const ErrorFound = () => {
    return (
        <div className="error-message">
            <h1> Error 404!!</h1>
            <p>Sorry!the page you are trying to get is not available here</p>
            <p>Please Check your internet connection or reload this page</p>
        </div>
    );
};

export default ErrorFound;