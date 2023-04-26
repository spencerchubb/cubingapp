import '../src/style/app.css'
import '../src/style/colors.css'
import Index from './Index.svelte'

const app = new Index({
  // @ts-ignore
  target: document.getElementById('app'),
})

export default app
