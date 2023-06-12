'use client'
import { Provider } from 'react-redux'
import store from './redux/store'
import Container from './components/Container'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import ExpandedSearch from './components/Navbar/ExpandedSearch'

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
            <div className='fixed w-full'>
              <Container>
                <>
                  <Navbar />
                </>
              </Container>
            </div>
            {children}
          </>
        </Provider>
      </body>
    </html>
  )
}
