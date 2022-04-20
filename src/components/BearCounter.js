import { useStore } from "../store/store";
import shallow from "zustand/shallow";
const BearCounter = () => {
  console.log('re-render')
  const bears = useStore(state => state.bears)
  // shallow comparison: re-renders when state.nuts changes in order, count or keys
  const nuts = useStore(state => state.nuts, shallow)
  return (
    <>
      <h1>{bears} around here ...</h1>
      <h3>{JSON.stringify(nuts)}</h3>
    </>
  )

}

export default BearCounter