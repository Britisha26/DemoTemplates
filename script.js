import { defineConfig } from 'vite';

export default defineConfig({
build: {
rollupOptions: {
input: {
home: '/index.html',
business: '/pages/business.html',
playful: '/pages/playful.html',
// Add more pages here
},
},
},
});



