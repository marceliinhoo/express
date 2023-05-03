// CRUD



const fs = require('fs');

const User = {
    fileName: './database/users.json',
// 1- Salvas o usúario na base de dados
    create: function (userData){
        let allUsers = this.getUsers();
        let newUser = {
            id: this.generateId(),
            ...userData
        }

        allUsers.push(newUser);
        fs.writeFileSync(this.fileName,JSON.stringify(allUsers,null,' '))
        return newUser;
    },
// gerar ID
    generateId: function(){
        let allUsers = this.getUsers();
        let lastUser = allUsers.pop();

        if(lastUser){
            return lastUser.id +1;

        }

        return 1
         
    },

    getUsers: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
// 3- Buscar o usúario pelo ID
    findUserById: function(id) {
        let allUsers = this.getUsers();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
// 2- Buscar o usúario a partir do seu email (no processo de login)
    findUserByField: function(field,value) {
        let allUsers = this.getUsers();
            let userFound = allUsers.find(oneUser => oneUser[field] === value);
        return userFound;
    }
}





module.exports = User
