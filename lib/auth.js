import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'

const secretKey = new TextEncoder().encode(
    process.env.JWT_SECRET || 'your-secret-key-change-in-production'
)

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@fetawale.com'
// Hardcoded hash for "admin123" - env vars strip $ characters
const ADMIN_PASSWORD_HASH = '$2b$10$iSJlhYsh10EOqB4LW8hms.E3CqwTQhKL2mYGrbtN3SNP7tCP4Bezm'

export async function hashPassword(password) {
    return bcrypt.hash(password, 10)
}

export async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash)
}

export async function verifyAdminCredentials(email, password) {
    console.log('Login attempt:', { email, expectedEmail: ADMIN_EMAIL })
    console.log('Password hash from env:', ADMIN_PASSWORD_HASH?.substring(0, 20) + '...')

    if (email !== ADMIN_EMAIL) {
        console.log('Email mismatch')
        return false
    }

    const result = await bcrypt.compare(password, ADMIN_PASSWORD_HASH)
    console.log('Password compare result:', result)
    return result
}

export async function createToken(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('24h')
        .sign(secretKey)
}

export async function verifyToken(token) {
    try {
        const { payload } = await jwtVerify(token, secretKey)
        return payload
    } catch {
        return null
    }
}

export async function getSession() {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin-token')?.value
    if (!token) return null
    return verifyToken(token)
}

export async function isAuthenticated() {
    const session = await getSession()
    return !!session
}
