class User{
    constructor({username, isAdmin, create_time}) {
        this.username = username
        this.isAdmin = isAdmin
        this.creatTime = create_time
        this.isUser = true
    }
}
module.exports = User
