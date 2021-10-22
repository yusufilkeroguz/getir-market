import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";

import store from '../redux/configure-store';

import '../sass/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps}/>
    </Provider>
  )
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
