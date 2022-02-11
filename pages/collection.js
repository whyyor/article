// import the web3 library with setup from lib/web3.js
import { web3 } from '../lib/web3';

// import react hooks
import { useState, useEffect } from 'react';

//import react components
import Header from '../components/Header'
import Card from '../components/card'

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
      <div className='collection'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  )
}
