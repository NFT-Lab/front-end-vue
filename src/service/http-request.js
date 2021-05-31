import http from '../http-commons';

class User {
    login(email,password) {
    const user = {
        email: email,
        password: password,
    };
        return http.post("http://localhost:3100/login",user);
    }
}

export default new User();