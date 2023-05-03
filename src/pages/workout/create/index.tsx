import {Inter} from 'next/font/google'
import {FormEvent} from "react";

const inter = Inter({subsets: ['latin']})

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  alert((e.target as any).name.value);
}

export default function WorkoutCreate() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <form className="flex-1" onSubmit={handleSubmit}>
          <label>
            오늘 할 운동:
            <input type="text" name="name"/>
          </label>
          <input type="submit" value="등록"/>
        </form>
      </div>
    </main>
  )
}
