import './App.css';
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo name={"cat"} age={5} hasPet={true}/>
    </div>
  );
}

export default App;
