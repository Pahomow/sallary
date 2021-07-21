

export const team = [
    
   { Role:  'Customers',
     id: '1', 
     Label: 'Customers',
     Columns: [
       {width: 150, field: 'Name', id: 'Name', label: 'ФИО', minWidth: 170 , align: 'center', },
        {width: 150, field: 'level', id: 'level', label: 'Уровень', minWidth: 100 , align: 'center',},
        {width: 150, field: 'sallary', id: 'sallary', label: 'Зарплата', minWidth: 100 , align: 'center',},
     ], 
     Rows: [
          {Name: 'Alex', level: 'Middle' , sallary: '800' , id: '1'},
          {Name: 'Oleg', level: 'Middle' , sallary: '700' , id: '2'},
          {Name: 'Pavel', level: 'Middle' , sallary: '2900' , id: '3'},
          {Name: 'Alex', level: 'Middle' , sallary: '800' , id: '4'},
          {Name: 'Oleg', level: 'Middle' , sallary: '700' , id: '5'},
          {Name: 'Pavel', level: 'Middle' , sallary: '2900' , id: '6'},        
      ]},
    { Role: 'BA', 
     Label: 'BA',
     id: '2',
     Columns: [
       {width: 150, field: 'Name', id: 'Name', label: 'ФИО', minWidth: 170 , align: 'center', },
        {width: 150, field: 'level', id: 'level', label: 'Уровень', minWidth: 100 , align: 'center',},
        {width: 150, field: 'sallary', id: 'sallary', label: 'Зарплата', minWidth: 100 , align: 'center',},
     ], 
     Rows: [
      {Name: 'Alex', level: 'Middle' , sallary: '800' , id: '1'},
      {Name: 'Oleg', level: 'Middle' , sallary: '700' , id: '2'},
      {Name: 'Pavel', level: 'Middle' , sallary: '2900' , id: '3'},
      {Name: 'Alex', level: 'Middle' , sallary: '800' , id: '4'},
      {Name: 'Oleg', level: 'Middle' , sallary: '700' , id: '5'},
      {Name: 'Pavel', level: 'Middle' , sallary: '2900' , id: '6'},   
      ]},    
    { Role: 'QA', 
     Label: 'QA',
     id: '3',
     Columns: [
       {width: 150, field: 'Name', id: 'Name', label: 'ФИО', minWidth: 170 , align: 'center', },
        {width: 150, field: 'level', id: 'level', label: 'Уровень', minWidth: 100 , align: 'center',},
        {width: 150, field: 'sallary', id: 'sallary', label: 'Зарплата', minWidth: 100 , align: 'center',},
     ], 
     Rows: [
      {Name: 'Alex', level: 'Middle' , sallary: '800' , id: '1'},
      {Name: 'Oleg', level: 'Middle' , sallary: '700' , id: '2'},
      {Name: 'Pavel', level: 'Middle' , sallary: '2900' , id: '3'},
      {Name: 'Alex', level: 'Middle' , sallary: '800' , id: '4'},
      {Name: 'Oleg', level: 'Middle' , sallary: '700' , id: '5'},
      {Name: 'Pavel', level: 'Middle' , sallary: '2900' , id: '6'},   
      ]},    
    { Role: 'Dicaners', 
     Label: 'Dicaners',
     id: '4',
     Columns: [
       {width: 150, field: 'Name', id: 'Name', label: 'ФИО', minWidth: 170 , align: 'center', },
        {width: 150, field: 'level', id: 'level', label: 'Уровень', minWidth: 100 , align: 'center',},
        {width: 150, field: 'sallary', id: 'sallary', label: 'Зарплата', minWidth: 100 , align: 'center',},
     ], 
     Rows: [
      {Name: 'Alex', level: 'Middle' , sallary: '800' , id: '1'},
      {Name: 'Oleg', level: 'Middle' , sallary: '700' , id: '2'},
      {Name: 'Pavel', level: 'Middle' , sallary: '2900' , id: '3'},
      {Name: 'Alex', level: 'Middle' , sallary: '800' , id: '4'},
      {Name: 'Oleg', level: 'Middle' , sallary: '700' , id: '5'},
      {Name: 'Pavel', level: 'Middle' , sallary: '2900' , id: '6'},   
      ]},    
  ] 
export const managers = {
  sm: [
    {name: 'Настя' ,project: [{name: 'Pro1', id: '1'},{name: 'Pro2', id: '2'}, {name: 'Pro3', id: '3'}], id: '1'},
    {name: 'Юля' ,project: [{name: 'Pro4', id: '1'},{name: 'Pro6', id: '2'}, {name: 'Pro7', id: '3'}], id: '2'},
    {name: 'Ксюша' ,project: [{name: 'Pro5', id: '1'},{name: 'Pro6', id: '2'}, {name: 'Pro7', id: '3'}], id: '2'},
  ],
  pm: [
    {name: 'Дима' ,project: [{name: 'Pro1', id: '1'},{name: 'Pro2', id: '2'}, {name: 'Pro3', id: '3'}], id: '1'},
    {name: 'Игорь' ,project: [{name: 'Pro4', id: '1'},{name: 'Pro6', id: '2'}, {name: 'Pro7', id: '3'}], id: '2'},
    {name: 'Максим' ,project: [{name: 'Pro5', id: '1'},{name: 'Pro6', id: '2'}, {name: 'Pro7', id: '3'}], id: '2'},
  ]
}
export const clients = [
{name:'Client 1',id: '1'},
{name:'Client 2',id: '2'},
{name:'Client 3',id: '3'},
{name:'Client 4',id: '4'},
]

export const projects = [
{name: 'Prg 1', id:'1'},
{name: 'Prg 2', id:'2'},
{name: 'Prg 3', id:'3'},
{name: 'Prg 4', id:'4'},
]

export const projectMangers = [
  {name: 'Oleg', id:'1'},
  {name: 'Maks', id:'2'},
  {name: 'Alex', id:'3'},
  {name: 'Andrey', id:'4'},
  ]

export const projectsType = [
{field: 'Outsource', value: '20%', id:'1'},
{field: 'Outstaff', value: '25%', id:'2'},
]

export const salesType = [  
  {field: 'Outband', value: '20%', id:'1'},
  {field: 'Inband', value: '25%', id:'2'},
  {field: 'Free', value: '30%', id:'3'},
  ]
export const overall = [  
  {field: 'Outband', value: '20%', id:'1'},
  {field: 'Inband', value: '25%', id:'2'},
  {field: 'Free', value: '30%', id:'3'},
  ]  

export const freelancers = [
  { id: 1, Name: "Hello", Techonology: "Worldsds" , Role: "wqd", Project:"wwdd", Rate:"erfe", Payment: "ddffdf"},
  { id: 2, Name: "Hello", Techonology: "Worldsds" , Role: "wqd", Project:"wwdd", Rate:"erfe", Payment: "ddffdf"},
  { id: 3, Name: "ello", Techonology: "Worldsds" , Role: "wqd", Project:"wwdd", Rate:"erfe", Payment: "ddffdf"},
  { id: 4, Name: "Hello", Techonology: "Worldsds" , Role: "wqd", Project:"wwdd", Rate:"erfe", Payment: "ddffdf"},
  { id: 5, Name: "Hello", Techonology: "Worldsds" , Role: "wqd", Project:"wwdd", Rate:"erfe", Payment: "ddffdf"},
  { id: 6, Name: "llo", Techonology: "Worldsds" , Role: "wqd", Project:"wwdd", Rate:"erfe", Payment: "ddffdf"},
  { id: 7, Name: "Hello", Techonology: "Worldsds" , Role: "wqd", Project:"wwdd", Rate:"erfe", Payment: "ddffdf"},
  { id: 8, Name: "Hello", Techonology: "Worldsds" , Role: "wqd", Project:"wwdd", Rate:"erfe", Payment: "ddffdf"},
  { id: 9, Name: "elo", Techonology: "Worldsds" , Role: "wqd", Project:"wwdd", Rate:"erfe", Payment: "ddffdf"},
  { id: 10, Name: "Hello", Techonology: "Worldsds" , Role: "wqd", Project:"wwdd", Rate:"erfe", Payment: "ddffdf"}, 
]
export const customers = [
  { id: 1, Customer: "Alex", Project: "WorldWibe" ,Status: "Active", Entity: "uk"},
  { id: 2, Customer: "Oleg", Project: "Fls" ,Status: "Active", Entity: "rb"},
  { id: 3, Customer: "Igor", Project: "Give" ,Status: "Not Active", Entity: "rb"},
  { id: 4, Customer: "Maks", Project: "Vision" ,Status: "Active", Entity: "uk"},
]
export const salesManager = [
  { id: 1, SM: "Alex", Project: "WorldWibe" ,Customer: "Active"},
  { id: 2, SM: "Oleg", Project: "Fls" ,Customer: "Active"},
  { id: 3, SM: "Igor", Project: "Give" ,Customer: "Not Active"},
  { id: 4, SM: "Maks", Project: "Vision" ,Customer: "Active"},
]
export const pmManager = [
  { id: 1, PM: "Alex", Project: "WorldWibe" ,Customer: "Active"},
  { id: 2, PM: "Oleg", Project: "Fls" ,Customer: "Active"},
  { id: 3, PM: "Igor", Project: "Give" ,Customer: "Not Active"},
  { id: 4, PM: "Maks", Project: "Vision" ,Customer: "Active"},
]

export const freelanceExpenses = [
  { id: 1, Freelancer: "Alex", Project: "WorldWibe" ,Role: "Active",Hours:"21", FreelancerBonus: "2", Payed: "3000" },
  { id: 2, Freelancer: "Oleg", Project: "Fls" ,Role: "Active",Hours:"21", FreelancerBonus:"223", Payed: "3000" },
  { id: 3, Freelancer: "Igor", Project: "Give" ,Role: "Not Active",Hours:"21", FreelancerBonus:"2111", Payed: "3000" },
  { id: 4, Freelancer: "Maks", Project: "Vision" ,Role: "Active",Hours:"21", FreelancerBonus:"225", Payed: "3000" },
]

export const bonuses = [
  { id: 1, OrderNumber: "Alex", ProjectNumber: "WorldWibe" ,Customer: "Active",NameOfProject:"21", SaleType: "2", Amount: "Amount" },
  { id: 2, OrderNumber: "Alex", ProjectNumber: "WorldWibe" ,Customer: "Active",NameOfProject:"21", SaleType: "2", Amount: "Amount" },
  { id: 3, OrderNumber: "Alex", ProjectNumber: "WorldWibe" ,Customer: "Active",NameOfProject:"21", SaleType: "2", Amount: "Amount" },
  { id: 4, OrderNumber: "Alex", ProjectNumber: "WorldWibe" ,Customer: "Active",NameOfProject:"21", SaleType: "2", Amount: "Amount" },
  
]