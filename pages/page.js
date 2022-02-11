// import the web3 library with setup from lib/web3.js
import { web3 } from '../lib/web3';

// import react hooks
import { useState, useEffect } from 'react';

//import react components
import Header from '../components/Header'
import Article from '../components/article';

export default function Home() {
  const [accounts, setAccounts] = useState([])
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [isPage,setIsPage] = useState(true)

  const connect = async function () {
    let a = await window.ethereum.request({ method: "eth_requestAccounts" })
    setAccounts(a)
  }

  const eth = web3.utils.toWei('0.01',"ether");

  const sendEth = async function() {
      window.ethereum.request({
          method:"eth_sendTransaction",
          params: [{
              from:accounts[0],
              to: "0xEbDB0bEa5FbBf4F762dEBe80D919A2d087d14e44",
              value: web3.utils.toHex(eth)
          }]
      })
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
      <Article isLoggedIn={isLoggedIn} sendEth={sendEth} />
    </main>
  )
}
