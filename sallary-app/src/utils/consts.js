export const LOGIN_ROUTE = '/login'
export const CUSTOMER_ROUTE = '/customer'
export const FREELANCERS_ROUTE = '/freelancers'
export const PROGECT_MANAGER_ROUTE = '/progect_manager'
export const PROGECT_TYPE_ROUTE = '/progect_type'
export const PROGECT_TABLE_ROUTE = '/progect_table'
export const SALES_MANAGER_ROUTE = '/sales_manager'
export const SALES_TYPE_ROUTE = '/sales_type'
export const TEAM_ROUTE = '/team'
export const ACCOUNTING_ROUTE = '/accouting'
export const ACCOUNTING_TABLE_ROUTE = '/accouting_table'
export const OVERALL_ROUTE = '/over_all'

export const FREELANCE_EXPENSES = '/freelanceExpenses'
export const SM_BONUSES = '/smBonuses'
export const PM_BONUSES = '/pmBonuses'
export const TOTAL_TABLE = '/totalTable'

export const user = true

export const columns = {
    team: [
        {width: 150, field: 'Name', id: 'Name', label: 'ФИО', title:'ФИО', minWidth: 170 , align: 'center', },
        {width: 150, field: 'level', id: 'level', label: 'Уровень',title:'Уровень', minWidth: 100 , align: 'center',},
        {width: 150, field: 'sallary',
        id: 'sallary',
        label: 'ЗП $',
        title:'ЗП $',
        minWidth: 170,
        align: 'center',
        }
    ],
    projectType: [
        {width: 450 ,id:'1',label: 'Outsourse', field: 'Outsourse', headerName: 'Outsourse', minWidth: 170 , align: 'center', },
        {width: 450 ,id:'2',label: 'Outstaff', field: 'Outstaff', headerName: 'Outstaff', minWidth: 170 , align: 'center', },
        // {field: 'Outsourse',label: 'Outsourse', id: '1'},
        // {field: 'Outstaff', label: 'Outstaff', id: '2'},
    ],
    // salesType: [
    //     {field: 'Outband', id:'1'},
    //     {field: 'Inband', id:'2'},
    //     {field: 'Free',  id:'3'},
    // ],
    salesType: [
        {width: 450 ,id:'1',label: 'Outband', field: 'Outband', headerName: 'Outband', minWidth: 170 , align: 'center', },
        {width: 450 ,id:'2',label: 'Inband', field: 'Inband', headerName: 'Inband', minWidth: 100 , align: 'center',},
        {width: 450 ,id:'3',label: 'Free', field: 'Free', headerName: 'Free', minWidth: 100 , align: 'center',},       
    ],

    freelancers: [
        {width: 150 ,label: 'Name', field: 'Name', headerName: 'ФИО', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Techonology', field: 'Techonology', headerName: 'Технологии', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Role', field: 'Role', headerName: 'Роль', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Project', field: 'Project', headerName: 'Проект', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Rate', field: 'Rate', headerName: 'Рейт', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Payment', field: 'Payment', headerName: 'Дата оплаты', minWidth: 100 , align: 'center',},
    ],
    bonuses: [
        {width: 150 ,label: 'Order Number', field: 'OrderNumber', headerName: 'Order Number', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Project Number', field: 'ProjectNumber', headerName: 'Project Number', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Customer', field: 'Customer', headerName: 'Customer', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Name of Project', field: 'NameOfProject', headerName: 'Name of Project', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Sale type', field: 'SaleType', headerName: 'Sale type', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'The amount of the bonus (USD)', field: 'Amount', headerName: 'The amount of the bonus (USD)', minWidth: 100 , align: 'center',},
    ],  
    freelanceExpenses: [
        {width: 150 ,label: 'Freelancer', field: 'Freelancer', headerName: 'Freelancer', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Project', field: 'Project', headerName: 'Project', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Role', field: 'Role', headerName: 'Role', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Hours',field: 'Hours', headerName: 'Hours', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Freelancer bonus', field: 'FreelancerBonus', headerName: 'Freelancer bonus', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Payed', field: 'Payed', headerName: 'Payed', minWidth: 170 , align: 'center', },
    ],
    customers: [
        {width: 150 ,label: 'Customer',title: 'Customer', field: 'Customer', headerName: 'Customer', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Project', title: 'Project', field: 'Project', headerName: 'Проект', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Status',  title: 'Status', field: 'Status', headerName: 'Статус', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Entity',  title: 'Entity', field: 'Entity', headerName: 'Юридическое лицо', minWidth: 100 , align: 'center',},
    ],
    // customers: [
    //     {width: 150 ,label: 'Customer',title: 'Customer', field: 'Customer', headerName: 'Customer', minWidth: 170 , align: 'center', },
    //     {width: 150 ,label: 'Project', title: 'Project', field: 'Project', headerName: 'Проект', minWidth: 100 , align: 'center',},
    //     {width: 150 ,label: 'Status',  title: 'Status', field: 'Status', headerName: 'Статус', minWidth: 100 , align: 'center',},
    //     {width: 150 ,label: 'Entity',  title: 'Entity', field: 'Entity', headerName: 'Юридическое лицо',type: 'numeric', minWidth: 100 , align: 'center',},
    // ],
    
    salesManager: [
        {width: 150 ,label: 'SM', field: 'SM', headerName: 'SM', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Проект', field: 'Project', headerName: 'Проект', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Клиент', field: 'Customer', headerName: 'Клиент', minWidth: 100 , align: 'center',},
        
    ],
    pmManager: [
        {width: 150 ,label: 'PM', field: 'PM', headerName: 'PM', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Проект', field: 'Project', headerName: 'Проект', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Клиент', field: 'Customer', headerName: 'Клиент', minWidth: 100 , align: 'center',},
        
    ],
    total: [
        {width: 150 ,label: 'Order Number', field: 'Order Number', headerName: 'Order Number', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Project Number', field: 'Project Number', headerName: 'Project Number', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Customer', field: 'Customer', headerName: 'Customer', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Name of Project', field: 'Name of Project', headerName: 'Name of Project', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Customer debt (USD)', field: 'Customer debt (USD)', headerName: 'Customer debt (USD)', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Incomings from Customer (USD)', field: 'Incomings from Customer (USD)', headerName: 'Incomings from Customer (USD)', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Project Profit (USD)', field: 'Project Profit (USD)', headerName: 'Project Profit (USD)', minWidth: 170 , align: 'center', },
        
    ],
    overall: [
        {width: 150 ,label: 'Order Number', field: 'Order Number', headerName: 'Order Number', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Project Number', field: 'Project Number', headerName: 'Project Number', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Customer', field: 'Customer', headerName: 'Customer', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Name of Project', field: 'Name of Project', headerName: 'Name of Project', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Status', field: 'Status', headerName: 'Status', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Start Date', field: 'Start Date', headerName: 'Start Date', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Sale Type', field: 'Sale Type', headerName: 'Sale Type', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Sales Manager', field: 'Sales Manager', headerName: 'Sales Manager', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Project Type', field: 'Project Type', headerName: 'Project Type', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Project Manager', field: 'Project Manager', headerName: 'Project Manager', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Freelancer', field: 'Freelancer', headerName: 'Freelancer', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Freelancer role', field: 'Freelancer role', headerName: 'Freelancer role', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Developer', field: 'Developer', headerName: 'Developer', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Rate', field: 'Rate', headerName: 'Rate', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'UI/UX Designer', field: 'UI/UX Designer', headerName: 'UI/UX Designer', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Rate', field: 'Rate', headerName: 'Rate', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Business Analyst', field: 'Business Analyst', headerName: 'Business Analyst', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Rate', field: 'Rate', headerName: 'Rate', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'QA Engineer', field: 'QA Engineer', headerName: 'QA Engineer', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Rate', field: 'Rate', headerName: 'Rate', minWidth: 170 , align: 'center', },
    ]

};

export const radio = {
    team : [
        {value: 'customers' , label: 'Разработчик' , id: '1'},
        {value: 'ba' , label: 'БА' , id: '2'},
        {value: 'qa' , label: 'QA' , id: '3'},
        {value: 'designer' , label: 'Дизайнер' , id: '4'},
    ],
    // freelancers : [
    //     {value: 'architect' , label: 'Архитектор' , id: '1'},
    //     {value: 'technicalDirector' , label: 'Технический консультант' , id: '2'},
    //     {value: 'himself' , label: 'Делает задания сам' , id: '3'},
    //     {value: 'submits' , label: 'Передаёт задания нашему разработчику' , id: '4'},
    // ],
    freelancers : [
        {value: 'rate' , label: 'Рейт' , id: '1'},
        {value: 'fixedRate' , label: 'Фиксированная ставка' , id: '2'},
    ],
    countries : [
        {value: 'belarus', label: 'Беларусь', id: '1'},
        {value: 'ukraine', label: 'Украина', id: '2'},
    ]

}
export const knowledgeStack = ["c++","c#","ruby","js","java","swift","python","react"]


export const selector = {
    team : [
        {value: 'junior-' , label: 'Junior-' , id: '1'},
        {value: 'junior' , label: 'Junior' , id: '2'},
        {value: 'junior+' , label: 'Junior+' , id: '3'},
        {value: 'middle-' , label: 'Middle' , id: '4'},
        {value: 'middle' , label: 'Middle-' , id: '5'},
        {value: 'middle+' , label: 'Middle+' , id: '6'},
        {value: 'senior-' , label: 'Senior-' , id: '7'},
        {value: 'senior' , label: 'Senior' , id: '8'},
        {value: 'senior+' , label: 'Senior+' , id: '9'},
        {value: 'lead' , label: 'Lead' , id: '10'},
        
    ],
    freelancers: [
        {value: 'Project junior ' , label: 'Project Junior ' , id: '1'},
        {value: 'Project middle ' , label: 'Project Middle ' , id: '2'},
        {value: 'Project senior ' , label: 'Project Senior ' , id: '3'},
    ],
}

export const selectorInput = {
    values: [
        {value: 1, id: 1 ,label: 1,},
        {value: 2, id: 2 ,label: 2,},
        {value: 3, id: 3 ,label: 3,},
        {value: 4, id: 4 ,label: 4,},
        {value: 5, id: 5 ,label: 5,},
        {value: 6, id: 6 ,label: 6,},
        {value: 7, id: 7 ,label: 7,},
        {value: 8, id: 8 ,label: 8,},
        {value: 9, id: 9 ,label: 9,},
    ],
    team: [
        {value: 'customers' ,name: 'customers', label: 'Разработчик' , id: '1'},
        {value: 'ba' ,name: 'ba', label: 'БА' , id: '2'},
        {value: 'qa' ,name: 'qa', label: 'QA' , id: '3'},
        {value: 'designer' ,name: 'designer', label: 'Дизайнер' , id: '4'},
    ]
}

export const dateSelector = {
    mounths: [
    {id:"1", label:"Январь", value:"January"},
    {id:"2", label:"Февраль",value:"February"},
    {id:"3", label:"Март",value:"March"},
    {id:"4", label:"Апрель",value:"April"},
    {id:"5", label:"Май",value:"May"},
    {id:"6", label:"Июнь",value:"June"},
    {id:"7", label:"Июль",value:"July"},
    {id:"8", label:"Август",value:"August"},
    {id:"9", label:"Сентябрь",value:"September"},
    {id:"10", label:"Октябрь",value:"October"},
    {id:"11", label:"Ноябрь",value:"November"},
    {id:"12", label:"Декабрь",value:"December"},
    ],
    years: [
    {id:"1", label:"2018", value:"2018",},
    {id:"2", label:"2019", value:"2019",},
    {id:"3", label:"2020", value:"2020",},
    {id:"4", label:"2021", value:"2021",},
    {id:"5", label:"2022", value:"2022",},
    {id:"6", label:"2023", value:"2023",},
    {id:"7", label:"2024", value:"2024",},
    {id:"8", label:"2025", value:"2025",},
    ],
}
// Январь [yan-VAR’] January
// Февраль [fye-VRAL’] February
// Март [MART] March
// Апрель [ap-RYEL’] April
// Май [MAY] May
// Июнь [ee-YOON’] June
// Июль [ee-YOOL’] July
// Август [AV-goost] August
// Сентябрь [syen-TYABR’] September
// Октябрь [ok-TYABR’] October
// Ноябрь [no-YABR’] November
// Декабрь 