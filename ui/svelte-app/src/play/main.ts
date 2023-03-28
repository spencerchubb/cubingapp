import '../style/app.css'
import '../style/colors.css'
import App from './App.svelte'

// @ts-ignore
const app = new App({
  target: document.getElementById('app'),
})

export default app
