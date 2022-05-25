# 📄 Frictionless + Odin via Helix 📑

## Getting Started 
### Step 1. 
Start Helix Server by running `hlx up` from the root.

### Step 2. 
Build the project by running `npm run-script build` from the `/App` folder, then head over to `http://localhost:3000/`.

OR, if you are developing the React stuff run `npm run-script serve` from the `/App` folder, then head over to `http://localhost:8080/`.

### Step 3
Start the Odin AEM Server. GraphQL request might get block, I need to figure out a HTTP proxy... in the meantime use a Header Mod Extension (this is a POC 😜 )