import {LOGIN_ROUTE, CUSTOMER_ROUTE , TEAM_ROUTE , OVERALL_ROUTE,FREELANCERS_ROUTE,PROGECT_MANAGER_ROUTE,PROGECT_TYPE_ROUTE ,SALES_MANAGER_ROUTE,SALES_TYPE_ROUTE, ACCOUNTING_ROUTE, } from '../utils/consts'
// import LoginPage from '../pages'
import CustomerPage from '../pages/customer'
import AccountingPage from '../pages/accountingPage'
import Freelancers from '../pages/freelancers'
import ProjectManager from '../pages/projectManager'
import ProjectType from '../pages/projectType'
import SalesType from '../pages/salesType'
import Team from '../pages/team/index'
import SalesManager from '../pages/salesManager'
import OverAll from '../pages/overall'


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: ''
    },
]

export const privateRoutes = [
    {
        path: OVERALL_ROUTE,
        name:'Overall info',
        Component: OverAll
    },
    {
        path: TEAM_ROUTE,
        name: 'Team',
        Component: Team
    },
    {
        path: CUSTOMER_ROUTE,
        name:'Customer',
        Component: CustomerPage
    },
    {
        path: SALES_MANAGER_ROUTE,
        name: 'SM',
        Component: SalesManager
    },
    {
        path: PROGECT_MANAGER_ROUTE,
        name: 'PM',
        Component: ProjectManager,
    },
    {
        path: FREELANCERS_ROUTE,
        name: 'Freelancers',
        Component: Freelancers
    },
    {
        path: SALES_TYPE_ROUTE,
        name:'Sales type',
        Component: SalesType
    },
    {
        path: PROGECT_TYPE_ROUTE,
        name: 'Project type',
        Component: ProjectType
    },
    {
        path: ACCOUNTING_ROUTE,
        name:'Accounting',
        Component: AccountingPage
    },
]