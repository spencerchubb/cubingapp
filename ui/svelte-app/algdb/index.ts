import '../src/style/app.css'
import '../src/style/colors.css'
import App from './App.svelte'

const app = new App({
  // @ts-ignore
  target: document.getElementById('app'),
})

export default app
