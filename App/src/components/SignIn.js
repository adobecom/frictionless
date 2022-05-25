import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {

    return (
        <div className='sign-in-wrapper'>
            <div className='left-box'>
                <h1>Do your best work online with Adobe Acrobat</h1>
                <p>Convert files to PDF, compress PDF documents, and share and store your files with Adobe Acrobat Pro.</p>
                <Link to={"/"} push="true">Start Free Trial</Link>
            </div>
            <div className='right-box'>
                <h2>Sign in or create a free account</h2>
                <p>Get access to Acrobat online tools. Convert, share, fill, and sign.</p>

                <Link to={"/"} push="true">Adobe</Link>
                <Link to={"/"} push="true">Google</Link>
                <Link to={"/"} push="true">Apple</Link>
                <Link to={"/"} push="true">other...</Link>

            </div>
        </div>
    )

}


export default SignIn;