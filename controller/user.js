import fs from 'fs';
import path from 'path';
const index = fs.readFileSync('index.html', 'utf-8')
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json'), 'utf-8'))
const users = data.users;

//CREATE POST /users
const createUser = (req, res) => {
    users.push(req.body)
    res.json({ type: "POST Successfull", data: req.body })
}

//READ data Get users 
const getAllUsers = (req, res) => {
    res.json(users)
}
//READ data Get One user by id 
const getUserById = (req, res) => {
    const id = +req.params.id;
    const user = users.find(p => p.id === id)
    res.json(user)
}

//UPDATE data Get users -->
const updateUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id);
    users.splice([userIndex], 1, { ...req.body, id: id })
    res.json(users)
}
//UPDATE data Get users -->
const patchUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id);

    const user = users[userIndex];
    users.splice([userIndex], 1, { ...user, ...req.body })
    res.json(users)
}

//DELETE  /users/:id
const deleteUserById = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id);
    const deletedData = users[userIndex]
    users.splice([userIndex], 1)
    res.status(201).json(
        {
            deleted: deletedData,
            data: users
        })
}


export { createUser,getAllUsers, getUserById, deleteUserById, updateUser, patchUser}






