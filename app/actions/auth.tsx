'use server'

import { createSession } from '@/app/lib/session'

export async function signup(formData: FormData) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  console.log('HELLO AUTH ACTION')

  await createSession()
}
