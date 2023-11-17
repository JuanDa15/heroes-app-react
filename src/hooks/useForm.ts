import { type ChangeEvent, useState } from 'react'

export interface IUseForm<T> {
  handleChange: (e: ChangeEvent) => void
  resetForm: () => void
  formState: T
}

export default function useForm<T = any> (initialForm: T): IUseForm<T> {
  const [formState, setFormState] = useState<T>(initialForm)

  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.target as HTMLInputElement
    setFormState({
      ...formState,
      [name]: value
    })
  }
  const resetForm = (): void => {
    setFormState(initialForm)
  }

  return {
    handleChange,
    resetForm,
    formState,
    ...formState
  }
}
