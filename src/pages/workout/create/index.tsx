import {ChangeEvent, FormEvent, useState} from "react";



export default function WorkoutCreate() {
  const [workoutValue, setChange] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setChange(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    alert(workoutValue);
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
