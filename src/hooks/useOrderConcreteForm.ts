import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { concreteEntries } from 'src/consts'
import { useOrderConcreteReducer } from '.'
import { ActionKind } from './useOrderConcreteReducer'

export default function useOrderConcreteForm() {
  const [state, dispatch] = useOrderConcreteReducer()
  const [summary, setSummary] = useState(0)

  const handleConcreteModelChange = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch({ type: ActionKind.SetConcreteModel, payload: e.target.value })

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: ActionKind.SetVolume, payload: e.target.value })

  const handlePaymentChange = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch({ type: ActionKind.SetPayment, payload: e.target.value })

  const handleConcretePumpChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: ActionKind.SetConcretePump,
      payload: e.target.checked,
    })

  const calculateSummary = () => {
    const entry = concreteEntries.find(v => v.value === state.concreteModel)
    const price =
      state.payment === 'hard-cash'
        ? entry?.prices.hardCash
        : entry?.prices.withVAT
    const priceWithVolume = (price || 0) * +state.volume
    const totalPrice = priceWithVolume + (state.concretePump ? 14000 : 0)

    setSummary(totalPrice)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
  }

  useEffect(() => {
    console.log(state)
    calculateSummary()
  }, [state])

  return {
    summary,
    state,
    handlers: {
      handleConcreteModelChange,
      handleVolumeChange,
      handlePaymentChange,
      handleConcretePumpChange,
      handleSubmit,
    },
  }
}
