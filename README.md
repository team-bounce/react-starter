## Neil's React Starter Project

##### Git: git@github.com:St8ck3rs/eckoh_reactjs.git
##### Tutorial: https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph

### How to use...
npm start (for dev)  
npm run build && npx serve dist  

### How to make...
mkdir reactjs  
cd reactjs  
npm init  
npm i --save-dev typescript  
create tsconfig.json  
npm i --save-dev webpack webpack-cli webpack-dev-server css-loader html-webpack-plugin  mini-css-extract-plugin ts-loader  
create webpack.config.js  
add scripts to package.json...  
    "start": "webpack serve --port 3000",  
    "build": "NODE_ENV=production webpack"  
... or, for windows powershell... "build": "set NODE_ENV=production && webpack"  

create html catch-all page in src/html  
npm i react react-dom  
npm i --save-dev @types/react @types/react-dom  
create src/index.tsx  
create src/css/index.css and import into src/index.tsx  

### How to git...
git init  
git commit -m "first commit"  
git branch -M master  
git remote add origin git@github.com:St8ck3rs/eckoh_reactjs.git  
git push -u origin master  