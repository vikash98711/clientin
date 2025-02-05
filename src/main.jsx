// Suppress specific Quill.js warning
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("Listener added for a 'DOMNodeInserted'")
  ) {
    return; // Ignore the warning
  }
  originalWarn(...args); // Log other warnings as usual
};
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { SidebarProvider } from './context/sidebarContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <App />
  </SidebarProvider>
)
