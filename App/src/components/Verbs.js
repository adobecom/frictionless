import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import useGraphQL from '../api/useGraphQL';
import Error from './Error';
import Loading from './Loading';

function Verbs() {
    const [query, setQuery] = useState(allVerbsQuery);
    const { data, errorMessage } = useGraphQL(query);

    if(errorMessage) return <Error errorMessage={errorMessage} />;

    if(!data) return <Loading />;

    return (
        <div className='verbs'>
          <ul className="verb-items">
            {
                //Iterate over the returned data items from the query
                data.verbList.items.map((verb, index) => {
                    return (
                        <VerbItem key={index} {...verb} />
                    );
                })
            }
            </ul>
        </div>
    )

}

function VerbItem(props) {

    //Must have title, path, and image
    if(!props || !props._path || !props.title) {
      return null;
    }
    return (
        <div>
            <Link to={`/${props.verbName}`} push="true">
                <li className="adventure-item">
                    <img className="verb-item-image" src={`http://localhost:4502/${props.icon._path}`} 
                        alt={props.verbName}/>
                    <div className="adventure-item-length-price">
                        <div className="adventure-item-length">{props.title}</div>
                        <div className="adventure-item-price">{props.description.plaintext}</div>
                    </div>
                    <div className="adventure-item-title">{props.title}</div>
                </li>
            </Link>
        </div>


        );
  }

const allVerbsQuery = `
{
    verbList {
        items {
        _path
        title
        description {
            plaintext
        }
        verbName
        icon {
            ... on DocumentRef {
              _path
              type
              size
              format
            }
          }
        }
    }
}
`;

export default Verbs;