import '../styles/globals.css';

interface IMyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function MyApp({ Component, pageProps }: IMyAppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
