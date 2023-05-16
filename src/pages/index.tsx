import {Inter} from 'next/font/google'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

console.log(localStorage.getItem('workouts'))

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <li className="flex-1">
          오늘 할 운동
        </li>
        <li className="flex-1">
          <Link href="/workout/create">
            등록
          </Link>
        </li>
      </div>
    </main>
  )
}
