import '../src/style/app.css'
import '../src/style/colors.css'
import SpacedRepetition from './SpacedRepetition.svelte'

const app = new SpacedRepetition({
  // @ts-ignore
  target: document.getElementById('app'),
})

export default app
