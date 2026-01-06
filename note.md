migrate command

//model:generate
npx sequelize-cli model:generate --name Art --attributes name:string,artist:string,date:date,description:text,photo:string

//migrate spesific file/addColoum
npx sequelize-cli migration:generate --name addColoum-palaceOfOrigin-toArts
