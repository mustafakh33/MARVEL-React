import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.scss"
import { IsMobileProvider } from './utilis/isMobileContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <IsMobileProvider>
    <App />
  </IsMobileProvider>

)
