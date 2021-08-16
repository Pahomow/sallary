import React from "react";
import {Dialog, DialogActions,DialogContent,DialogTitle, Box, TextField} from '@material-ui/core'
import Button from "../Button";
import SelectorForm from "../Selector";
import FormDatePicker from "../TimePickers";
import {MyTextField} from "../MyTextField";
const AccoutingDialogComponent= ({showDialog , columns , handleChange , updateRow , setShowDialog}) => (
    <Dialog open={showDialog}>
        <DialogTitle>Update data</DialogTitle>
        <DialogContent>
            {/*{columns.map((item) => {*/}
            {/*    return (*/}
            {/*        <TextField*/}
            {/*            key={item.id}*/}
            {/*            label={item.label}*/}
            {/*            placeholder="Enter Your name"*/}
            {/*            fullWidth*/}
            {/*            name={item.field}*/}
            {/*            // value= {currentRow.name}*/}
            {/*            onChange={handleChange}/>*/}
            {/*    )*/}
            {/*})}*/}
            <SelectorForm label="Номер проекта"/>
            <SelectorForm label="Клиент"/>
            <SelectorForm label="Название проекта"/>
            <Box>
                <FormDatePicker label="Дата выставления первой оплаты"/>
                <MyTextField label="Сумма выставленной первой оплаты"/>
                <FormDatePicker label="Дата выставления второй оплаты"/>
                <MyTextField label="Сумма выставленной второй оплаты"/>
            </Box>
            <Box>
                <FormDatePicker label="Дата получения первой оплаты"/>
                <MyTextField label="Сумма полученной первой оплаты"/>
                <FormDatePicker label="Дата получения второй оплаты"/>
                <MyTextField label="Сумма полученной второй оплаты"/>
            </Box>
            <Box>
                <SelectorForm label="Freelancer"/>
                <MyTextField label="Количество отработанных часов за месяц"/>
                <MyTextField label="Бонус от клиента"/>
            </Box>


        </DialogContent>
        <DialogActions>
            //Todo: test Button
            <Button variant="contained" color="primary" onClick={updateRow} title="Save"/>
            <Button variant="outlined" color="primary" onClick={()=> setShowDialog(false)} title="Cancel"/>
        </DialogActions>
    </Dialog>
);

export default AccoutingDialogComponent