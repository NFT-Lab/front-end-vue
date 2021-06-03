import http from '../http-commons';

class User {
    login(user) {
       return http.post("http://localhost:3100/login",user);
    }
}

export default new User();