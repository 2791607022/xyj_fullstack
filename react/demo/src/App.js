import './App.css';

import Left from './components/Left';
import Right from './components/Right';
import dayjs from "dayjs"
let newlist = [];
window.fetch("https://systemjs.1688.com/krump/schema/1352.json")
.then((response) => response.json())
.then((data)=>{
    newlist = data?.list
})
function App() {
console.log(newlist)
  return (
    <div className="App">
      {newlist.length > 0 && newlist.map((item,index)=>(
        <div  key={item.money+index}  className="box">
          <Right  money= {item.money}/> 
          <Left 
            title={item.title}
            description={item.description}
            time={item.time}
            status={item.status}
            countDown={item.restTime?dayjs(item.restTime).format("HH:mm:ss"): null}
            restTime={item.restTime || null}
        />
        </div>
      ))}
    </div>
  );
}

export default App;
