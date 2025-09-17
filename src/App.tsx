import Chat from "./pages/ChatbotPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Chat />
      <ToastContainer position="bottom-center" theme="dark" />
    </div>
  );
}

export default App;
