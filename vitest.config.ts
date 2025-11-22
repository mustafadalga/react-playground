import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
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