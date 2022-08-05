import "./App.css";
import Chat from "./components/Chat";
import FormName from "./components/FormName";
import FormContact from "./components/FormContact";
import FormDate from "./components/FormDate";

function App() {
  return (
    <div
      className="d-flex justify-content-center rounded"
      style={{ backgroundColor: "#DCDCDE" }}
    >
      <Chat>
        <FormName />
        <FormDate />
        <FormContact />
      </Chat>
    </div>
  );
}

export default App;
