import React from 'react'

function header({connect,isLoggedIn}) {
    let loginButton = <div onClick={connect} className="loginButton">Connect</div>;
    if(isLoggedIn){
        loginButton = <div className="loggedInButton">Connected</div>
    }
    return (
        <div className="header">
            <div className='logoContainer'>
                <img src='/articleLogo.png' className='articleLogo' alt="Logo" />
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src='/searchIcon.png' alt="searchIcon" className="searchIcon" />
                </div>
                <input type="text" placeholder='Author, article or account...' className="searchInput" />
            </div>
            <div className="headerItems">
                <p>Save</p>
                <p>Tweet</p>
                <p>Report</p>
            </div>
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
