import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
// import useAppReducer from '../hooks/useAppReducer'
// import validateNumber from '../utils/validateNumber'

interface ProviderProps {
  children?: ReactNode
}

const AppStateContext = createContext(false)
const AppDispatchContext = createContext<any>(null)

export default function AppProvider({ children }: ProviderProps) {
  const [orderCallModalOpened, setOrderCallModalOpened] = useState(false)

  return (
    <AppStateContext.Provider value={orderCallModalOpened}>
      <AppDispatchContext.Provider value={setOrderCallModalOpened}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

function useAppState() {
  const context = useContext(AppStateContext)

  if (context === undefined) {
    throw new Error('useAppState must be used within an AppProvider')
  }

  return context
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext)

  if (context === undefined) {
    throw new Error('useAppDispatch must be used within an AppProvider')
  }

  return context
}

function useApp() {
  const state = useContext(AppStateContext)
  const dispatch = useContext(AppDispatchContext)

  if (state === undefined || dispatch === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }

  return [state, dispatch]
}

export { useAppState, useAppDispatch, useApp }
