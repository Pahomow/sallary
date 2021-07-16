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


export const user = true

export const columns = {
    team: [
        {width: 150, field: 'Name', id: 'Name', label: 'ФИО', minWidth: 170 , align: 'center', },
        {width: 150, field: 'level', id: 'level', label: 'Уровень', minWidth: 100 , align: 'center',},
        {width: 150, field: 'sallary',
        id: 'sallary',
        label: 'ЗП $',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
        }
    ],
    projectType: [
        {field: 'Outsourse',label: 'Outsourse', id: '1'},
        {field: 'Outstaff', label: 'Outstaff', id: '2'},
    ],
    salesType: [
        {field: 'Outband', id:'1'},
        {field: 'Inband', id:'2'},
        {field: 'Free',  id:'3'},
    ],

    freelancers: [
        {width: 150 ,label: 'Name', field: 'Name', headerName: 'ФИО', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Techonology', field: 'Techonology', headerName: 'Технологии', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Role', field: 'Role', headerName: 'Роль', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Project', field: 'Project', headerName: 'Проект', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Rate', field: 'Rate', headerName: 'Рейт', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Payment', field: 'Payment', headerName: 'Дата оплаты', minWidth: 100 , align: 'center',},
    ],
    customers: [
        {width: 150 ,label: 'Customer', field: 'Customer', headerName: 'Customer', minWidth: 170 , align: 'center', },
        {width: 150 ,label: 'Project', field: 'Project', headerName: 'Проект', minWidth: 100 , align: 'center',},
        {width: 150 ,label: 'Entity', field: 'Entity', headerName: 'Юридическое лицо', minWidth: 100 , align: 'center',},
    ]
};

export const radio = {
    team : [
        {value: 'customers' , label: 'Разработчик' , id: '1'},
        {value: 'ba' , label: 'БА' , id: '2'},
        {value: 'qa' , label: 'QA' , id: '3'},
        {value: 'designer' , label: 'Дизайнер' , id: '4'},
    ],
    freelancers : [
        {value: 'architect' , label: 'Архитектор' , id: '1'},
        {value: 'technicalDirector' , label: 'Технический консультант' , id: '2'},
        {value: 'himself' , label: 'Делает задания сам' , id: '3'},
        {value: 'submits' , label: 'Передаёт задания нашему разработчику' , id: '4'},
    ],
    countries : [
        {value: 'belarus', label: 'Беларусь', id: '1'},
        {value: 'ukraine', label: 'Украина', id: '2'},
    ]

}
export const knowledgeStack = ["c++","c#","ruby","js","java","swift","python","react"]


export const selector = {
    team : [
        {value: 'junior' , label: 'Junior' , id: '1'},
        {value: 'junior+' , label: 'Junior+' , id: '2'},
        {value: 'middle' , label: 'Middle' , id: '3'},
        {value: 'middle+' , label: 'Middle+' , id: '4'},
        {value: 'senior' , label: 'Senior' , id: '5'},
        {value: 'senior+' , label: 'Senior+' , id: '6'},
        {value: 'lead' , label: 'Lead' , id: '7'},
        
    ],
    freelancers: [
        {value: 'Project junior ' , label: 'Project Junior ' , id: '1'},
        {value: 'Project middle ' , label: 'Project Middle ' , id: '2'},
        {value: 'Project senior ' , label: 'Project Senior ' , id: '3'},
    ]
}