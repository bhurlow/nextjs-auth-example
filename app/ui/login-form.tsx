'use client'

import { signup } from '@/app/actions/auth'
import { useActionState } from 'react'

export default function LoginForm() {
  const [state, action, pending] = useActionState(signup, undefined)

  return (
    <form action={action}>
      <button type="submit">Sign Up</button>
    </form>
  )
}
