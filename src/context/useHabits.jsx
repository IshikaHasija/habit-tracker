import { createContext, useContext } from "react"

export const HabitContext = createContext(null)

export function useHabits() {
  const habitContext = useContext(HabitContext)
  if (habitContext == null) throw new Error("Null context")

  return habitContext
}