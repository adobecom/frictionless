import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import useGraphQL from '../api/useGraphQL';
import Loading from './Loading';

function SeoBlade(props) {
    console.log(props);
    let path = props.path;
    path = path.split('/');
    path.pop();
    const PATH = path.join('/');
    console.log(PATH);

    const [query, setQuery] = useState(seoBladeQuery(PATH));
    const { data } = useGraphQL(query);




        if(!data) return <Loading />;
        if (data) {
            let seoBladeData = data.seoBladeByPath.item;
            return (
            
                <div className="seo-content">
                  <div className="seo-content-wrapper">
                  <img className="center" src={`http://localhost:4502/${seoBladeData.item1.image._path}`}
                            alt={seoBladeData.item1.title}/>
                <h2>{seoBladeData.item1.title}</h2>
                <p>{seoBladeData.item1.description.plaintext}</p>
                
            </div>

            <div className="seo-content-wrapper">
                <img className="center" src={`http://localhost:4502/${seoBladeData.item2.image._path}`}
                            alt={seoBladeData.item2.title}/>
                <h2>{seoBladeData.item2.title}</h2>
                <p>{seoBladeData.item2.description.plaintext}</p>
                
            </div>

            <div className="seo-content-wrapper">
            <img className="center" src={`http://localhost:4502/${seoBladeData.item3.image._path}`}
                            alt={seoBladeData.item3.title}/>
                <h2>{seoBladeData.item3.title}</h2>
                <p>{seoBladeData.item3.description.plaintext}</p>
                
            </div>
                </div>
            );
        }

  }


function seoBladeQuery(_path) {
    return `{
      seoBladeByPath(
          _path: "${_path}/seo/seo-blade"
        ) {
          item {
            _path
            _variation
            item1 {
              image {
                ... on DocumentRef {
                  _path
                  type
                  size
                  format
                }
              }
              title
              description {
                html
                plaintext
              }
            }
            item2 {
              image {
                ... on DocumentRef {
                  _path
                  type
                  size
                  format
                }
              }
              title
              description {
                html
                plaintext
              }
            }
            item3 {
              image {
                ... on DocumentRef {
                  _path
                  type
                  size
                  format
                }
              }
              title
              description {
                html
                plaintext
              }
            }
          }
        }
      }
    `;
}

export default SeoBlade;
