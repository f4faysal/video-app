import { PrismaClient } from '@prisma/client'

// PrismaClient is a constructor function that returns a new PrismaClient instance.
declare global {
     var db: PrismaClient | undefined
}

export const db = globalThis.db || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
    globalThis.db = db
}