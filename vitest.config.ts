import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './setupTest.ts',
        alias: {
            '@': './src/',
        },
        testTimeout: 15000,
        exclude: [
            '**/node_modules/**',
            '**/e2e/**/*'
        ]
    },
})