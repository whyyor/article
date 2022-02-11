// import the web3 library with setup from lib/web3.js
import { web3 } from '../lib/web3';


// import react hooks
import Link from 'next/link'
import { useState, useEffect } from 'react';

//import react components
import Header from '../components/Header'

export default function Home() {
  const [accounts, setAccounts] = useState([])
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [isPage,setIsPage] = useState(false)

  const connect = async function () {
    let a = await window.ethereum.request({ method: "eth_requestAccounts" })
    setAccounts(a)
  }

  useEffect(() => {
      if(accounts.length>0){
          setIsLoggedIn(true)
      } else {
          setIsLoggedIn(false)
      }
  }, [accounts])

  useEffect( async () => {
      let a = await window.ethereum.request({method:"eth_accounts"})
      setAccounts(a)

      window.ethereum.on("accountsChanged",function(a){
          setAccounts(a)
      })
  })

  return (
    <main>
      <Header connect={connect} isLoggedIn={isLoggedIn} isPage={isPage}/>
      <h1 className='article-heading'>Wanna read some articles?</h1>
      <div className='collection'>
            <Link href='/page'>
                <div className='card'>
                    <img src='/lorem.png' alt="article1" />
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <span>
                        2 Feb 2022 • 2 min read
                    </span>
                </div>
            </Link>
            <Link href='/page'>
                <div className='card'>
                    <img src='/lorem.png' alt="article1" />
                    <h1>Lorem ipsum</h1>
                    <p>Commodi id rerum ex mollitia consequatur quaerat culpa facere?</p>
                    <span>
                        5 Feb 2022 • 5 min read
                    </span>
                </div>
            </Link>
            <Link href='/page'>
                <div className='card'>
                    <img src='/lorem.png' alt="article1" />
                    <h1>Lorem ipsum</h1>
                    <p>Ut, dolore totam tenetur quis labore fugiat placeat animi ipsa nostrum autem tempora repellendus.</p>
                    <span>
                        8 Feb 2022 • 3 min read
                    </span>
                </div>
            </Link>
      </div>
      <div className='buttonContainer'><button className='viewmore'>View More</button></div>
    </main>
  )
}
