import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'Lalan Reddy',
        email : 'lalan@gmail.com',
        password : bcrypt.hashSync('123456',12),
        isAdmin : true
    },
    
    
]
export default Users