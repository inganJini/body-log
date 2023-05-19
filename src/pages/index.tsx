import {Inter} from 'next/font/google'
import Link from "next/link";
import {useEffect, useMemo, useState} from "react";

const inter = Inter({subsets: ['latin']})
const WORKOUTS = 'workouts';

// function getWorkoutList() {
//   const workouts = localStorage.getItem(WORKOUTS);
//   if (workouts !== null) {
//     const parsedWorkouts = JSON.parse(workouts) as string[];
//     const register = document.getElementById('register');
//     parsedWorkouts.forEach((workout) => {
//       const li = document.createElement('li');
//       li.innerText = workout;
//       if (register !== null) {
//         register.appendChild(li)
//       }
//     })
//   }
// }

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log(localStorage.getItem(WORKOUTS))
    // if (localStorage.getItem(WORKOUTS) !== null) {
    //   getWorkoutList();
    // }
  }, []);

  const workouts = useMemo(() => {
    // Hydration issue. mounted 된 후에 localStorage에 접근해야함.
    if (!mounted) return null;

    try {
      const strWorkouts = localStorage.getItem(WORKOUTS);
      if (!strWorkouts) return null;

      const parsedWorkouts = JSON.parse(strWorkouts) as string[];

      return parsedWorkouts;
    } catch (error) {
      return null;
    }
  }, [mounted]);  // Dependency 중요!!

  return (
    <main>
      <div>
        오늘 할 운동
      </div>
      <div id="register">
        <Link href="/workout/create">
          등록
        </Link>
      </div>
      <ul>
        {workouts && workouts.map((workout, index) => (
          <li key={index}>
            {workout}
          </li>
        ))}
      </ul>
    </main>
  )
}
