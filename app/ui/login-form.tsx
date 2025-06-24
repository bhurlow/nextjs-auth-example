'use client'

import { signup } from '@/app/actions/auth'
// import { useActionState } from 'react'

export default function LoginForm() {
  // const [state, action, pending] = useActionState(signup, undefined)

  const data = new FormData()

  return (
    <form
      action={async () => {
        'use server'
        await signup(data)
      }}>
      <button type="submit">Sign Up</button>
    </form>
  )
}
