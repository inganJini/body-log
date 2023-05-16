import {ChangeEvent, FormEvent, useState} from "react";

export default function WorkoutCreate() {
  const [workoutValue, setChange] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setChange(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const WORKOUTS = 'workouts';
    const workouts = localStorage.getItem(WORKOUTS);
    if (!workouts) {
      localStorage.setItem(WORKOUTS, JSON.stringify([workoutValue]));
      console.log('localStorage', localStorage.getItem(WORKOUTS));
      return;
    }

    try {
      const parsedWorkouts = JSON.parse(workouts) as string[];

      const merged = [...parsedWorkouts, workoutValue];

      localStorage.setItem(WORKOUTS, JSON.stringify(merged));

      console.log('localStorage', localStorage.getItem(WORKOUTS));
    } catch (error) {
      alert('error!');
    }

    // if (workoutList.getItem('workout') === null) {
    //   workoutList.setItem('workout', JSON.stringify([workoutValue]));
    // } else workoutList.setItem('workout', '');
    e.preventDefault();
  }

  return (
    <main>
      <div>
        <form className="flex-1" onSubmit={handleSubmit}>
          <label>
            오늘 할 운동:
            <input type="text" name="name" value={workoutValue} onChange={handleChange}/>
          </label>
          <input type="submit" value="등록"/>
        </form>
      </div>
    </main>
  )
}
