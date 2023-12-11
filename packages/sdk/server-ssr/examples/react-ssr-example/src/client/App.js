

import { withLDProvider } from '../shared/react';
import client from '../shared/ldclient';
import { useFlags } from '../shared/react';

function ShowFlag() {
  
  const flags = useFlags({
    'release-widget': false,
    'config-is-ssr': false,
  });
  return (
    <div>
      <p>
        The flag <strong>release-widget</strong> is{" "}
        {flags['release-widget'] ? "enabled" : "disabled"}.
      </p>
      <p>
        The flag <strong>config-is-ssr</strong> is{" "}
        {flags['config-is-ssr'] ? "enabled" : "disabled"}.
      </p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      
      <header>
        <ShowFlag />
      </header>
    </div>
  );
}

export default withLDProvider(App, client);
