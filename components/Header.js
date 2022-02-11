import Link from 'next/link'
import React from 'react'

function header({connect,isLoggedIn,isPage}) {
    let loginButton = <div onClick={connect} className="loginButton">Connect</div>;
    let option = <div></div>
    if(isLoggedIn){
        loginButton = <div className="loggedInButton">Connected</div>
    }
    if(isPage){
        option = <div className="headerItems">
                <p>Save</p>
                <p>Tweet</p>
                <p>Report</p>
            </div>
    }
    return (
        <div className="header">
            <Link href='/'>
                <div className='logoContainer'>
                    <img src='/articleLogo.png' className='articleLogo' alt="Logo" />
                </div>
            </Link>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src='/searchIcon.png' alt="searchIcon" className="searchIcon" />
                </div>
                <input type="text" placeholder='Author, article or account...' className="searchInput" />
            </div>
            {option}
            <div className="headerActions">
                <div className="likeContainer">
                    <img src='/heart.png' className='likeButton' alt="LikeButton" />
                </div>
            </div>
            {loginButton}
        </div>
    )
}

export default header
