import { useState } from "react"
import { isSameDay } from "date-fns"
import { HabitContext } from "./useHabits"

export function HabitProvider({ children }) {
  const [habits, setHabits] = useState([
  ])

  function addHabit(name) {
    setHabits(curr => [
      ...curr,
      { id: crypto.randomUUID(), name, completions: [] },
    ])
  }

  function deleteHabit(id) {
    setHabits(curr => curr.filter(h => h.id !== id))
  }

  function toggleHabit(id, date) {
    setHabits(curr =>
      curr.map(h => {
        if (h.id !== id) return h

        const alreadyDone = h.completions.some(c => isSameDay(new Date(c), date))
        const completions = alreadyDone
          ? h.completions.filter(c => !isSameDay(new Date(c), date))
          : [...h.completions, date]

        return { ...h, completions }
      }),
    )
  }

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  )
}

export default HabitProvider