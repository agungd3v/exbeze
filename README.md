## Setup
```bash
npm install
cp .env.example .env

APP_PORT=<YOUR_PORT>
APP_KEY=<YOUR_KEY> // value for request header keysec
NODE_ENV=<YOUR_ENV> // development or production
DB_CONNECTION=<YOUR_CONNECTION> // mysql or posgres
DB_HOST=<YOUR_DB_HOST>
DB_PORT=<YOUR_DB_PORT>
DB_DATABASE=<YOUR_DB_NAME>
DB_USERNAME=<YOUR_DB_USER>
DB_PASSWORD=<YOUR_DB_PASS>

npx sequelize-cli db:migrate

npm start OR nodemon index.js
```

create db
```bash
npx sequelize-cli model:generate --name <model> --attributes <field>:<type>,<field>:<type>
````

migrate db
```bash
npx sequelize-cli db:migrate
```

rollback db
```bash
npx sequelize-cli db:migrate:undo
```
