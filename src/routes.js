import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('./components/Dashboard/Dashboard'));
const AssociationManagerList = React.lazy(() => import('./components/Association/AssociationsList'));
const MembersList = React.lazy(() => import('./components/Member/MembersList'));
const SpeakersList = React.lazy(() => import('./components/Speaker/SpeakersList'));
const GroupList = React.lazy(() => import('./components/Group/GroupList'));
const GroupCreate = React.lazy(() => import('./components/Group/GroupCreate'));
const GroupEdit = React.lazy(() => import('./components/Group/GroupEdit'));
const StaffsList = React.lazy(() => import('./components/Staff/StaffsList'));
const StaffCreate = React.lazy(() => import('./components/Staff/StaffCreate'));
const StaffEdit = React.lazy(() => import('./components/Staff/StaffEdit'));
const TransactionsList = React.lazy(() => import('./components/Transaction/TransactionsList'));
const AnnounceList = React.lazy(() => import('./components/Announce/AnnounceList'));
const AnnounceCreate = React.lazy(() => import('./components/Announce/AnnounceCreate'));
const AnnounceEdit = React.lazy(() => import('./components/Announce/AnnounceEdit'));
// En cours
const PlanningList = React.lazy(() => import('./components/Planning/List'));
const PlanningCreate = React.lazy(() => import('./components/Planning/Create'));
const ProjectsList = React.lazy(() => import('./components/Project/ProjectsList'));

const ProductCreate = React.lazy(() => import('./components/Product/Create'));
const ProductsList = React.lazy(() => import('./components/Product/List'));
const ProductEdit = React.lazy(() => import('./components/Product/Edit'));

// FORMS INC
const MemberCreate = React.lazy(() => import('./components/Member/MemberCreate'));
const MemberEdit = React.lazy(() => import('./components/Member/MemberEdit'));

const SpeakerCreate = React.lazy(() => import('./components/Speaker/SpeakerCreate'));
const SpeakerEdit = React.lazy(() => import('./components/Speaker/SpeakerEdit'));

const AssociationCreate = React.lazy(() => import('./components/Association/AssociationCreate'));
const AssociationEdit = React.lazy(() => import('./components/Association/AssociationEdit'));

const ProjectCreate = React.lazy(() => import('./components/Project/ProjectCreate'));
const ProjectEdit = React.lazy(() => import('./components/Project/ProjectEdit'));


const routes = [
    // SADMIN
    { path: '/sadmin', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/sadmin/associations', exact: true, name: 'Liste des associations', component: AssociationManagerList },
    { path: '/sadmin/membres', exact: true, name: 'Liste des membres', component: MembersList },
    { path: '/sadmin/intervenants', exact: true, name: 'Liste des intervenants', component: SpeakersList },
    { path: '/sadmin/groupe', exact: true, name: 'Liste des staffs', component: GroupList },
    { path: '/sadmin/staffs', exact: true, name: 'Liste des staffs', component: StaffsList },
    { path: '/sadmin/transactions', exact: true, name: 'Liste des transactions', component: TransactionsList },
    { path: '/sadmin/projets', exact: true, name: 'Liste des transactions', component: ProjectsList },
    { path: '/sadmin/plannings', exact: true, name: 'Planning', component: PlanningList },
    { path: '/sadmin/annonces', exact: true, name: 'Planning', component: AnnounceList },
    { path: '/sadmin/products', exact: true, name: 'Product', component: ProductsList },

    // ADMIN
    { path: '/admin', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/associations', exact: true, name: 'Liste des associations', component: AssociationManagerList },
    { path: '/admin/membres', exact: true, name: 'Liste des membres', component: MembersList },
    { path: '/admin/intervenants', exact: true, name: 'Liste des intervenants', component: SpeakersList },
    { path: '/admin/groupe', exact: true, name: 'Liste des staffs', component: GroupList },
    { path: '/admin/staffs', exact: true, name: 'Liste des staffs', component: StaffsList },
    { path: '/admin/transactions', exact: true, name: 'Liste des transactions', component: TransactionsList },
    { path: '/admin/projets', exact: true, name: 'Liste des transactions', component: ProjectsList },
    { path: '/admin/plannings', exact: true, name: 'Planning', component: PlanningList },
    { path: '/admin/annonces', exact: true, name: 'Planning', component: AnnounceList },


    // MEMBRE
    { path: '/membre', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/membre/associations', exact: true, name: 'Liste des associations', component: AssociationManagerList },
    { path: '/membre/projets', exact: true, name: 'Liste des transactions', component: ProjectsList },

    // BACKEND FORMS CREATION
        //admin
    { path: '/admin/membres/creer', exact: true, name: 'Création de membre', component: MemberCreate },
    { path: '/admin/projets/creer', exact: true, name: 'Création de projet', component: ProjectCreate },
    { path: '/admin/groupe/creer', exact: true, name: 'Création de groupe', component: GroupCreate },
    { path: '/admin/staffs/creer', exact: true, name: 'Création de staff', component: StaffCreate },
    { path: '/admin/intervenants/creer', exact: true, name: 'Créer des intervenants', component: SpeakerCreate },
    { path: '/admin/plannings/creer', exact: true, name: 'Création de Planning', component: PlanningCreate },
    { path: '/admin/annonces/creer', exact: true, name: 'Création de Planning', component: AnnounceCreate },

        //sadmin
    { path: '/sadmin/membres/creer', exact: true, name: 'Création de membre', component: MemberCreate },
    { path: '/sadmin/associations/creer', exact: true, name: 'Création d\'une association', component: AssociationCreate },
    { path: '/sadmin/projets/creer', exact: true, name: 'Création de projet', component: ProjectCreate },
    { path: '/sadmin/groupe/creer', exact: true, name: 'Création de groupe', component: GroupCreate },
    { path: '/sadmin/staffs/creer', exact: true, name: 'Création de staff', component: StaffCreate },
    { path: '/sadmin/intervenants/creer', exact: true, name: 'Créer des intervenants', component: SpeakerCreate },
    { path: '/sadmin/plannings/creer', exact: true, name: 'Création de Planning', component: PlanningCreate },
    { path: '/sadmin/annonces/creer', exact: true, name: 'Création de Planning', component: AnnounceCreate },
    { path: '/sadmin/products/creer', exact: true, name: 'Création de Planning', component: ProductCreate },

    // BACKEND FORMS EDIT
        //admin
    { path: '/admin/groupe/modifier', exact: true, name: 'Editer de groupe', component: GroupEdit },
    { path: '/admin/staffs/modifier', exact: true, name: 'Editer de groupe', component: StaffEdit },
    { path: '/admin/membres/modifier', exact: true, name: 'Modification de membre', component: MemberEdit },
    { path: '/admin/projets/modifier', exact: true, name: 'Modification de projet', component: ProjectEdit },
    { path: '/admin/intervenants/modifier', exact: true, name: 'Modifier des intervenants', component: SpeakerEdit },
    { path: '/admin/annonces/modifier', exact: true, name: 'Modifier des intervenants', component: AnnounceEdit },

        //sadmin
    { path: '/sadmin/membres/modifier', exact: true, name: 'Modification de membre', component: MemberEdit },
    { path: '/sadmin/groupe/modifier', exact: true, name: 'Editer de groupe', component: GroupEdit },
    { path: '/sadmin/staffs/modifier', exact: true, name: 'Editer de groupe', component: StaffEdit },
    { path: '/sadmin/associations/modifier', exact: true, name: 'Modification d\'une association', component: AssociationEdit },
    { path: '/sadmin/projets/modifier', exact: true, name: 'Modification de projet', component: ProjectEdit },
    { path: '/sadmin/intervenants/modifier', exact: true, name: 'Modifier des intervenants', component: SpeakerEdit },
    { path: '/sadmin/annonces/modifier', exact: true, name: 'Modifier des intervenants', component: AnnounceEdit },
    { path: '/sadmin/products/modifier', exact: true, name: 'Modifier des intervenants', component: ProductEdit },
];

export default routes;
