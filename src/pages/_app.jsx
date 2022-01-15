/* eslint-disable react/jsx-props-no-spreading */
import '../../styles/globals.css'
import { Provider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
