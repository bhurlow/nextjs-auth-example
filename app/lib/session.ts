import 'server-only'
import { cookies } from 'next/headers'

export async function createSession() {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = 'TEST_SESSION'
  const cookieStore = await cookies()

  cookieStore.set('YD_SESSION', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/'
  })
}
