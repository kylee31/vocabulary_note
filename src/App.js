import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from './component/EmptyPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />}/>
          <Route path="/day/:day" element={<Day />}/>
          <Route element={<EmptyPage/>}/>
          <Route path="/create_word" element={<CreateWord/>}/>
          <Route path="/create_day" element={<CreateDay/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;