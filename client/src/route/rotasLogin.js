
import Index from "../views/login/Index.vue";

const meta = {
    desc: "Login",
    public: true,
    onlyWhenLoggedOut: true
}
export const login = {
    path: '/login', titulo: 'Login', component: Index, meta
};
