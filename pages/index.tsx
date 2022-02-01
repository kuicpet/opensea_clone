import { useWeb3 } from '@3rdweb/hooks'
import Head from 'next/head'
import { useEffect } from 'react'
import { IoWalletOutline } from 'react-icons/io5'
import {client} from '../lib/sanityClient'
import toast, {Toaster} from 'react-hot-toast'
import Header from '../components/Header'
import Hero from '../components/Hero'


const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#000] `,
  button: `flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded cursor-pointer hover:bg-[#2546bd] text-white font-semibold text-base`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  const {address, connectWallet} = useWeb3()
  const welcomeUser = (userName: string, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back ${userName !== 'Unnamed' ? `${userName}`: ''}`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        }
      }
    )
  }
  useEffect(() => {
   if(!address) return;
   (async () => {
     const userDoc = {
       _type: 'users',
       _id: address,
       userName: 'Unnamed',
       walletAddress: address
     }
     const result = await client.createIfNotExists(userDoc)
     welcomeUser(result.userName)
   })()
  }, [address]);
  
  return (
    <div className={style.wrapper}>
      <Head>
        <title>OpenSea Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position='top-right' reverseOrder={false} />
        {address ? (
          <>
          
          <Header />
          <Hero />
          </>
        ): (
          <div className={style.walletConnectWrapper}>
          <button className={`${style.button} mint-button`} onClick={() => connectWallet('injected')}>
            <IoWalletOutline  className='mx-5' fontSize={21} />
            <span className='mx-5'>Connect Wallet</span>
          </button>
          </div>
        )}
      
    </div>
  )
}
