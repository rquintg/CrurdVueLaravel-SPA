const Home = () => import("./components/Home.vue");
const Contacto = () => import("./components/Contacto.vue");

// impotamos componentes blog posts

const Mostrar = () => import("./components/blog/Mostrar.vue");
const Editar = () => import("./components/blog/Editar.vue");
const Crear = () => import("./components/blog/Crear.vue");

export const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "contacto",
        path: "/contacto",
        component: Contacto,
    },
    {
        name: "mostrarBlogs",
        path: "/blogs",
        component: Mostrar,
    },
    {
        name: "crearBlog",
        path: "/crear",
        component: Crear,
    },
    {
        name: "editarBlog",
        path: "/editar/:id",
        component: Editar,
    },
];
