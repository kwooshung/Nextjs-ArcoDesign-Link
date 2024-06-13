import Link from './link';
import LinkProvider from './link/linkProvider';

const App = () => {
  return <LinkProvider>
    <Link href='/'>Demo</Link>
  </LinkProvider>;
};

export default App;
