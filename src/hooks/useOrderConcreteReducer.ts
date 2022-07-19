import { useReducer } from 'react'
import { concreteEntries } from 'src/consts'

interface FormState {
  concreteModel: string
  volume: string
  payment: string
  concretePump: boolean
}

enum ActionKind {
  SetConcreteModel = 'set-conrete-model',
  SetVolume = 'set-volume',
  SetPayment = 'set-payment',
  SetConcretePump = 'set-conrete-pump',
}

interface SetConreteModelAction {
  type: ActionKind.SetConcreteModel
  payload: string
}

interface SetVolumeAction {
  type: ActionKind.SetVolume
  payload: string
}

interface SetPaymentAction {
  type: ActionKind.SetPayment
  payload: string
}

interface SetConcretePumpAction {
  type: ActionKind.SetConcretePump
  payload: boolean
}

type FormAction =
  | SetConreteModelAction
  | SetVolumeAction
  | SetPaymentAction
  | SetConcretePumpAction

const initialState: FormState = {
  concreteModel: concreteEntries[0].value,
  volume: '',
  payment: 'hard-cash',
  concretePump: false,
}

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case ActionKind.SetConcreteModel:
      return { ...state, concreteModel: action.payload }
    case ActionKind.SetVolume:
      const volume = +action.payload < 0 ? '0' : action.payload

      return { ...state, volume }
    case ActionKind.SetPayment:
      return { ...state, payment: action.payload }
    case ActionKind.SetConcretePump:
      return { ...state, concretePump: action.payload }
  }
}

export default function useOrderConcreteReducer() {
  return useReducer(reducer, initialState)
}

export { ActionKind, type FormState, type FormAction }
