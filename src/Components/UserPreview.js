import React from 'react'
import {Link} from 'react-router-dom'
import './UserPreview.css'
import { useEffect, useState } from 'react'

export default function UserPreview({user}) {

    const[articles, setArticles] = useState([])

    useEffect(() => {

        const getArticles= async () => {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
            let data = await response.json();
            console.log(data);
            setArticles(data);
        }
    
        getArticles();
    
    }, [])

  return (
    <Link to={`/about/${user.name}`} state={{user: user, articles: articles}} className='UserPreview'>
        {articles.length === 0 ? null : 
        <div className='PostContainer'>
            <div>
                <h2 className='Title'>{articles[0].title}</h2>
                <h3 className='Title'>By: {user.name}</h3>
                <hr/>
            </div>
            <div>
                <h4>{articles[0].body}</h4>
            </div>
        </div>
        }
    </Link>
  )
}
