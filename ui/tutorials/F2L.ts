import '../src/style/app.css'
import '../src/style/colors.css'
import F2L from './F2L.svelte'

const app = new F2L({
  // @ts-ignore
  target: document.getElementById('app'),
})

export default app
