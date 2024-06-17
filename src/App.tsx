import Link from './link';
import LinkProvider from './link/linkProvider';

const App = () => {
  return (
    <LinkProvider>
      <Link>Demo</Link>
    </LinkProvider>
  );
};

export default App;
