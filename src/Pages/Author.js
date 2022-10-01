import React from 'react'
import { useEffect, useState } from 'react'
import logo from '../levvel-logo.svg'
import {useLocation} from 'react-router-dom'
import '../Components/UserPreview.css'

function Author() {

  const location = useLocation();
  const {user, articles} = location.state;

  console.log(user)
      
  return (
    <div className="Wrapper">
      <div className="Container">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            <h1>{`${user.name}`}</h1>
            <hr/>
        </div>

        <div className="User-Container">
        {articles.map((article) => {
            return(
              <div className='UserPreview'>
                <div className='PostContainer'>
                  <div>
                    <h2 className='Title'>{article.title}</h2>
                    <hr/>
                  </div>
                  <div>
                    <h4>{article.body}</h4>
                  </div>
                </div>   
              </div>
            )
        })}
        </div>
      </div>
    </div>
  )
}

export default Author
