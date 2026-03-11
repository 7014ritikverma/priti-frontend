import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { QuoteProvider } from "./context/QuoteContext";

ReactDOM.createRoot(document.getElementById('root')).render(

    <QuoteProvider>   {/* ⭐ MUST */}

        <App />

    </QuoteProvider>

)
