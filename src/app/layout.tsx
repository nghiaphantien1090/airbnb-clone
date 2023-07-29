'use client'
import { Provider } from 'react-redux'
import store from './redux/store'
import Container from './components/Container'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import LoginModal from './components/Modal/LoginModal'
import { SessionProvider } from 'next-auth/react'


 const metadata = {
  
  title: 'AirBnB App',
  description: 'Fake AirBnB App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Provider store={store}>
            <>
              <LoginModal/>
              <Navbar />
              {children}
            </>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  )
}
