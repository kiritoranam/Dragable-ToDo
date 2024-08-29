import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const Contact = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [isOpen, setIsOpen] = useState(false)

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    console.log(11, selectedDate);

    return (
        <Container>
            <div>
                Contact Render Successfullty
            </div>
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        open={isOpen}
                        onOpen={() => setIsOpen(true)}
                        onClose={() => setIsOpen(false)}
                        // margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{ display: 'none' }}
                    />
                </MuiPickersUtilsProvider>
            </div>

            <Container>
                <div>
                    <AddIcon className="iconCss" onClick={e => setIsOpen(true)}></AddIcon>
                </div>
            </Container>

            <Container className="Footer">
                <Grid item xs={12} style={{ display: 'flex' }}>
                    <Grid item xs={6}>
                        TODOS
                    </Grid>
                    <Grid item xs={6}>
                        FINISHED
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Contact