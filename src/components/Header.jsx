import { format, isToday } from 'date-fns';
import Button from './Button';
import { useHabits } from "../context/useHabits"

function Header({ visibleDates, onprev, onNext }) {
    const startDate = visibleDates[0]
    const endDate = visibleDates[visibleDates.length - 1]

    const { habits } = useHabits()

    const doneToday = habits.filter(h =>
        h.completions.some(c => isToday(c)),
    ).length

    return (
        <>
            <header className='flex justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-3xl font-bold'>Habit Tracker</h1>
                    <span className='text-zinc-400 text-sm'>{doneToday} / {habits.length} done today</span>
                </div>

                <div className='flex flex-col gap-1' >
                    <span className='text-zinc-400 text-sm'>{startDate && format(startDate, 'MMM d')}- {endDate && format(endDate, "MMM d")}</span>
                    <div className='flex item-center gap-3'>
                        <Button children="prev" onclick={onprev} />
                        <Button children="next" onclick={onNext} disabled={visibleDates.some(d => isToday(d))} />
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header