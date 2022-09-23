import axios from "axios";

class UsersApi {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://ironrest.herokuapp.com'
        })
    }
    getUsersList () {
        return this.api.get('/movieprojectusers')
    }
    postUser () {
        return this.api.post('/movieprojectusers')
    }
}

const usersApi = new UsersApi();
export default usersApi; 

