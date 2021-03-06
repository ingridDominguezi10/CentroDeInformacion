import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/estadisticas",
    children: [
      {
        path: "estadisticas",
        name: "estadistícas",
        component: Dashboard
      },
      {
        path: "profile",
        name: "Perfil de Usuario",
        component: Profile
      },
      {
        path: "escuelaVision",
        name: "Escuelas de la Visión",
        component: Notifications
      },
      {
        path: "casaDePaz",
        name: "Casa de Paz",
        component: Icons
      },
      {
        path: "movimientoSobrenatural",
        name: "Movimiento Sobrenatural",
        component: Maps
      },
      {
        path: "discipuladoApostolico",
        name: "Discipulado Apostólico",
        component: Typography
      },
      {
        path: "serviciosGenerales",
        name: "Servicios Generales",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
