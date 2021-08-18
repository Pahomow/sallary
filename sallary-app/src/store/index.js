import {configureStore } from '@reduxjs/toolkit'

import clientSlice from "../reduxToolkit/clientSlice";
import employeesSlice from "../reduxToolkit/employeesSlice";
import freelancersSlice from "../reduxToolkit/freelancersSlice";
import pmSlice from "../reduxToolkit/pmSlice";
import smSlice from "../reduxToolkit/smSlice";
import projectType from "../reduxToolkit/projectType";
import salesType from "../reduxToolkit/salesType";
import totalTable from "../reduxToolkit/totalTable";
import projectInfo from "../reduxToolkit/projectInfo";
import freelanceExpenses from "../reduxToolkit/freelanceExpenses";
import projectSlice from "../reduxToolkit/projectSlice";


export const store = configureStore({
    reducer: {
        client: clientSlice,
        employees: employeesSlice,
        freelancers:freelancersSlice,
        pm:pmSlice,
        sm:smSlice,
        projectType:projectType,
        salesType:salesType,
        totalTable:totalTable,
        projectInfo:projectInfo,
        freelanceExpenses:freelanceExpenses,
        projectSlice:projectSlice,
        
    }
})