import { useStore } from "../store/store";

const Controls = () => {
  const increasePopulation = useStore(state => state.increasePopulation)
  const removeAllBears = useStore(state => state.removeAllBears)
  const changeNuts = useStore(state => state.changeNuts)
  return (
    <>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>remove that</button>
      <button onClick={changeNuts}>change objects</button>
    </>
  )
}

export default Controls