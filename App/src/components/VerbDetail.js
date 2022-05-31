import React, {useState} from 'react';
// import {Link, useLocation} from 'react-router-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useGraphQL from '../api/useGraphQL';
import Error from './Error';
import Loading from './Loading';
import SeoBlade from './SeoBlade';
import Foot from './Foot';


function Verbs() {
    let location = useLocation();
    const contentFragmentPath = `/content/dam/frictionless/en/verbs${location.pathname}${location.pathname}`
    const { data, errorMessage } = useGraphQL(verbDetailQuery(contentFragmentPath));

    let navigate = useNavigate();
    function handleClick() {
      navigate("/");
      navigate(0);
    }

    const script = document.createElement('script');

    function mockWidget() {
      alert('Converting the widget');
      sessionStorage.didsomestuff = true;
    }

    if(!data) return <Loading />;

    return (
        <div className='verbs'>
            <Link className="adventure-detail-close-button"  to={"/"} onClick={handleClick}>
                ...
            </Link>
            <div className="bg"></div>
            <div onClick={mockWidget} className="fake-dc">
              {data.verbByPath.item.title}
            </div>
      
            <SeoBlade path={contentFragmentPath} />
            <Foot />
        </div>
    )

}


function verbDetailQuery(_path) {
    return `{
      verbByPath (_path : "${_path}") {
        item {
          _path
          _variation
          title
          verbName
        }
      }
    }
    `;
  }

export default Verbs;
