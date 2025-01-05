import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: 'toolpack'
        },
        sourcemap: 'inline',
        //     rollupOptions: {
        //         output: {
        //             // this is a slightly insane fix for the "regeneratorRuntime is not defined" issue that
        //             // appears because editorjs link and image includes the polyfill and is missing something.
        //             banner: `var regeneratorRuntime;`
        //         }
        //     }
    }
})