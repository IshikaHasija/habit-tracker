import Button from './Button';
import { useState } from 'react';
import { useHabits } from "../context/useHabits"


function Habitform() {

  const [name, setName] = useState('');
  const { addHabit } = useHabits()

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") return
    setName("")
    addHabit(name)
  }
  return (
    <div className='flex flex-col gap-3'>
      <form className='flex gap-3' onSubmit={handleSubmit}>
        <input className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          placeholder='Add a new habit'
        />
        <Button
          className="rounded-lg px-4 py-2 font-medium"
          disabled={name.trim() === ""}
        >
          Add Habit
        </Button>
      </form>
    </div>
  );
}

export default Habitform;