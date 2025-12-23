import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/base.css'
import './assets/css/components.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
