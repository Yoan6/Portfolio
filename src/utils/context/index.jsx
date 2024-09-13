import React, { useState, createContext } from 'react'

export const PageContext = createContext()

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState('home')
  const changePage = (newPage) => {
    setPage(newPage)
  }

  return (
    <PageContext.Provider value={{ page, changePage }}>
      {children}
    </PageContext.Provider>
  )
}