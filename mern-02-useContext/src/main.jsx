import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ThemeContext from './context/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <App />
  </ThemeContext>

)
