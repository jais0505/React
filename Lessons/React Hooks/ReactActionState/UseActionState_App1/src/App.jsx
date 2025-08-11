import { useActionState } from "react"

const App = () => {
  const [count, formAction] = useActionState(increment, 0);
  return (
    <div>
      <form action="">
        <h1>Count:{count}</h1>
        <button formAction={formAction}>
          <h2>+</h2>
        </button>
      </form>
    </div>
  )
}

function increment(countValue) {
  var value = countValue + 1;
  return value;
}

export default App