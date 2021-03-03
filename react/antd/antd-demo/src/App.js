import Post from './Post'
import './App.css';
import { Button } from 'antd'
import Login from './Login';
function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      {/* <Login></Login> */}
      <Post></Post>
    </div>
  );
}

export default App;
