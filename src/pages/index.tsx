import {Inter} from 'next/font/google'
import Link from "next/link";
import {useEffect} from "react";

const inter = Inter({subsets: ['latin']})
const WORKOUTS = 'workouts';

function getWorkoutList() {
  const workouts = localStorage.getItem(WORKOUTS);
  if (workouts !== null) {
    const parsedWorkouts = JSON.parse(workouts) as string[];
    const register = document.getElementById('register');
    parsedWorkouts.forEach((workout) => {
      const li = document.createElement('li');
      li.innerText = workout;
      if (register !== null) {
        register.appendChild(li)
      }
    })
  }
}

export default function Home() {
  useEffect(() => {
    console.log(localStorage.getItem(WORKOUTS))
    if (localStorage.getItem(WORKOUTS) !== null) {
      getWorkoutList();
    }
  }, [])
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex-1">
          오늘 할 운동
        </div>
        <div className="flex-1" id="register">
          <Link href="/workout/create">
            등록
          </Link>
        </div>
      </div>
    </main>
  )
}
