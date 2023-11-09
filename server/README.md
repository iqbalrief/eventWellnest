## Install
--- npm install

## Setup .env 
---DB_USERNAME=
---DB_PASSWORD=
---DB_DATABASE=
---HOST=
---PORT= 8080
---JWT_SECRETKEY= 

## Create DB
--- npx-sequelize-cli db:crate

## Migrate
--- npx-sequelize-cli db:migrate:all
--- npx-sequelize-cli db:migrate:undo:all

## Seed
--- npx-sequelize-cli db:seed:all
--- npx-sequelize-cli db:undo:all

## Drop DB
-- npx-sequelize-cli db:drop


## RUN
-- npm start
-- password vendor: "vendors"
-- password company: "company"