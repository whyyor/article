import React from 'react'

const article = ({isLoggedIn,sendEth}) => {
    let loginButton
    if(!isLoggedIn){
        loginButton = <div className="loggedInButton">Login to Donate</div>
    } else {
        loginButton = <div onClick={sendEth} className="loginButton">Donate 0.01 ETH</div>;
    }
    return (
        <div className='article'>
            <div className="headerContainer">
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <div className="profileContainer">
                    <div className="profileImageContainer">
                        <img src="/cat.png" className='profileImage' alt="" />
                    </div>
                    <p className='profileText'>whyyor.eth</p>
                </div>
            </div>
            <div className="articleBody">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptate, cupiditate totam repudiandae veritatis, minus ad molestiae minima nam ratione deserunt ducimus rerum illo. Quidem dignissimos odit distinctio consectetur odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident ipsam illo! Velit unde blanditiis at distinctio quidem a esse, dignissimos quae perspiciatis quia et laboriosam aut neque repellat suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloremque nulla impedit corporis natus, optio ex temporibus veritatis repellendus, voluptates animi? Est perspiciatis assumenda nihil ducimus, quisquam sapiente totam ipsum.</p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio voluptatibus quam exercitationem ab quas ut rerum, rem libero sit fugiat, expedita voluptatum recusandae similique reiciendis porro, nobis repellendus modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui pariatur explicabo temporibus optio magnam sunt repudiandae voluptatibus doloribus ducimus iusto, consectetur minus, saepe suscipit velit. Eaque doloremque consectetur temporibus incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat quas debitis minus ipsum numquam tempore aperiam mollitia nam quidem, tenetur illum nulla officia nemo fugiat molestias quia? Blanditiis, modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sunt repellat cumque saepe, sed, in quo voluptates tempora assumenda cum iure minus vero, dolorem at aliquam obcaecati nostrum error sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem eligendi tenetur ea alias voluptates sed voluptas, libero, nesciunt voluptate, nihil dolores quibusdam! Sint est omnis nemo. Culpa, explicabo quis!</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit omnis facilis earum commodi illum ipsa eos praesentium corrupti. Quis officiis perspiciatis commodi a nesciunt recusandae cumque aperiam ea eos error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellendus quasi ut voluptate, delectus, assumenda consequatur iure harum doloremque numquam quidem molestiae sunt aliquam magnam! Iure obcaecati illum recusandae soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe dolor excepturi natus placeat, aspernatur quo nulla exercitationem sapiente! Consequuntur, eveniet molestiae officiis eligendi vero dignissimos sapiente facere aliquam dolore voluptatum.</p>
            </div>
            <section className='footer'>
                {loginButton}
                <button className='nextButton'>Next&#8594;</button>
            </section>
        </div>
    )
}

export default article
