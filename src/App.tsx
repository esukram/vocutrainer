import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <span>Hello World!</span>
    </div>
  );
}

export default withAuthenticator(App);
