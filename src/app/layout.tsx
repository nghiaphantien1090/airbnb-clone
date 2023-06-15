'use client'
import { Provider } from 'react-redux'
import store from './redux/store'
import Container from './components/Container'
import Navbar from './components/Navbar/Navbar'
import './globals.css'

export const metadata = {
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
        <Provider store={store}>
          <>
            <Navbar />
            {children}
          </>
        </Provider>
      </body>
    </html>
  )
}
