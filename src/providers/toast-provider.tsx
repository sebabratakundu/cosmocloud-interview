'use client'

import { ToastContainer } from 'react-toastify'

interface ToastProviderProps {
  children: React.ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  )
}
