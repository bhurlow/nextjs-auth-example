import { createSession } from '@/app/lib/session'

export async function signup(formData: FormData) {
  console.log('HELLO AUTH ACTION')

  await createSession()
}
