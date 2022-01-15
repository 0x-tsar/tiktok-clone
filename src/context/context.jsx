import React, { createContext, useState } from 'react'

export const Contexto = createContext({})

export function Provider({ children }) {
  const [state, setState] = useState('foo')

  return <Contexto.Provider value={{ state }}>{children}</Contexto.Provider>
}
