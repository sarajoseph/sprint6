 # Sprint 6 - Pressupostos
  
En aquesta entrega, desenvoluparem una aplicació amb l'objectiu d'agilitzar els càlculs per al pressupost d'un lloc web, incrementant la interacció amb l'usuari/ària en comparació amb la pràctica anterior, mitjançant l'ús de caselles de selecció, camps d'entrada (inputs) i botons.
  
  
## Instructions
  
Download repository  
`git clone https://github.com/sarajoseph/sprint6.git`  
  
Update dependencies  
`npm install`  
  
Run project  
`npm run dev`
  
  
## Dependencies  
  
Vite  
Tailwind  
DaisyUI  
  
  
## Installation  
  
Vite (https://vitejs.dev/guide/)  
`npm create vite@latest`  
  
Tailwind (https://tailwindcss.com/docs/installation)  
`npm install -D tailwindcss`  
  
DaisyUI (https://daisyui.com/docs/install/)  
`npm i -D daisyui@latest`  
`npm install -D @tailwindcss/typography`  
  
  
## Notes
  
Only the Tailwind classes that are used are loaded. When adding a new one, it must be added to the css file.  
`npx tailwindcss -i ./src/assets/css/tailwind-input.css -o ./src/assets/css/tailwind-output.css --watch`