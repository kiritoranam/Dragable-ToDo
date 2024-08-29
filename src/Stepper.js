import React, { useRef, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Card, CardContent, Container, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
        transitionDelay: '5s'
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Ordered Placed', 'Picked by courier', 'Ready for pickup'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        // return props.courierPosition;
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}

function CustomizedSteppers(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    setTimeout(() => {
        setActiveStep(1)
    }, 5);

    console.log("activeStep", activeStep);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    // useEffect(() => {
    //     debugger
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // },[activeStep != 0])

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function OrderTracking(props) {
    const [pageName, setPageName] = useState('MY ORDERS');
    const [simNo, setSimNo] = useState('');
    const [courierPosition1, setCourierPosition] = useState(false)
    const messageDialog = useRef(null);

    const handleTrack = () => {
        if (simNo) {
            setCourierPosition(true)
        }
    }

    return (

        <Container>
            <Grid item xs={12} className="center-margin">
                <Grid item lg={12} className="setting-width">
                    <Card variant="outlined" style={{ margin: "0px" }}>

                        <Grid item xs={12}  >
                            <Card className="inquire-table-card" style={{ boxShadow: "none" }}>
                                <Typography variant="h5" noWrap className="inqurire-table-title">{pageName}</Typography>
                            </Card>
                        </Grid>

                        <Grid item lg={12} xs={11} sm={10} className="center-margin" style={{ paddingLeft: '50px', paddingRight: '10px' }} >
                            <br></br>
                            <Grid container spacing={1}>

                                <Grid item lg={3} style={{ marginRight: '17px' }} >
                                    <TextField
                                        fullWidth
                                        size="small"
                                        margin="normal"
                                        value={simNo}
                                        onChange={e => setSimNo(e.target.value)}
                                    />
                                </Grid>

                                <Grid item lg={2} style={{ paddingTop: '24px' }}>
                                    <Button variant="contained" margin="normal" size="small" onClick={handleTrack} color="secondary">Track</Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Card variant='outlined' style={{ margin: '16px 0px 0px 0px' }}>
                                <Grid item lg={12} xs={12}>
                                    <h3># Order ID: 9685554874</h3>
                                </Grid>

                                <Grid item lg={12} xs={12}>
                                    {courierPosition1 && <CustomizedSteppers /*courierPosition={courierPosition1}*/ />}
                                </Grid>
                            </Card>
                        </Grid>

                        <br></br>
                        {/* <MaterialTable
                            title=""
                            style={{ width: '100%', }}
                            columns={[
                                { title: 'Txn ID', field: 'txnId', cellStyle: { minWidth: '110px' }, editable: 'never' },
                                {
                                    title: 'SIM No.', field: 'simNo', cellStyle: { minWidth: '300px' },
                                    editComponent: props => (
                                        console.log("props.value", props),
                                        <Autocomplete
                                            fullWidth
                                            id="combo-box-demo"
                                            disableClearable
                                            onChange={(event, newValue) => {
                                                debugger
                                                let value = newValue?.simNo?.split(" - ")[0]
                                                props.onChange(value);
                                            }}
                                            options={sims}
                                            getOptionLabel={(option) => option.simNo}
                                            renderInput={(params) => <FStrField {...params} variant="standard" />}
                                        />
                                    ),
                                },
                                { title: 'SIM Type', field: 'simType', editable: 'never' },
                                { title: 'Sim SubType', field: 'simSubType', cellStyle: { minWidth: '110px' }, editable: 'never' },
                                { title: 'Region', field: 'region', cellStyle: { minWidth: '200px' }, editable: 'never' },
                                { title: 'Travel Date', field: 'travelDate', cellStyle: { minWidth: '200px' }, editable: 'never', render: rowData => rowData.travelDate === "Invalid date" ? "" : rowData.travelDate },
                                { title: 'Shipping Address', field: 'shipAddress2', cellStyle: { minWidth: '250px' }, editable: 'never' },
                                { title: 'Email ID', field: 'emailID', cellStyle: { minWidth: '200px' }, editable: 'never' },
                                { title: 'Status', field: 'status', cellStyle: { minWidth: '110px' }, editable: 'never' },
                            ]}

                            // actions={[
                            //     {
                            //         icon: 'description_icon',
                            //         tooltip: 'Download Excel',
                            //         isFreeAction: true,
                            //         onClick: (event) => document.getElementById("API_Logs").click(),
                            //     }]}

                            data={data}

                            options={{
                                filtering: true,
                                search: false,
                            }}

                            editable={{
                                isEditHidden: rowData => rowData.simNo,
                                onRowUpdate: (newData, oldData, rowData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(async () => {
                                            const dataUpdate = [...data];
                                            const index = oldData.tableData.id;
                                            debugger;
                                            dataUpdate[index] = newData;
                                            let filterSim = sims.find(item => item.simNo?.split(" - ")[0] === newData.simNo);
                                            if (filterSim?.simType?.toUpperCase() !== newData?.simType?.toUpperCase()) {
                                                messageDialog.current.openDialog("Message", "Selected Sim-Type doesn't Match with the Rowdata !!!");
                                                resolve();
                                                return;
                                            }
                                            if (filterSim?.simSubType?.toUpperCase() !== newData?.simSubType?.toUpperCase()) {
                                                messageDialog.current.openDialog("Message", "Selected SimSub-Type doesn't Match with the Rowdata !!!");
                                                resolve();
                                                return;
                                            }
                                            if (filterSim?.rgName?.toUpperCase() !== newData?.region?.toUpperCase()) {
                                                messageDialog.current.openDialog("Message", "Selected sim Region doesn't Match with the Rowdata !!!");
                                                resolve();
                                                return;
                                            }
                                            setUpData(newData);
                                            setData([...dataUpdate]);

                                            try {
                                                let resp = await postService(`Transactions/UpdStkDelivery?LoginEntityID=${props.auth.entityId}&Status=${newData.status}&SDID=${newData.sdid}&SimNo=${newData.simNo}`);
                                                console.log("resp.data", resp.data)
                                                setRefresh(true);
                                            } catch (error) {
                                                var obj = [error.response.data];
                                                var err = JSON.stringify(obj);
                                                err = err.replace(/#/g, '');
                                                if (error.response.data) {
                                                    const ErrMsg = "UpdStkDelivery : Modify : Error Occurred at UI end : " + err;
                                                    await postService("Entities/LogError?ErrMsg=" + ErrMsg)
                                                }
                                                messageDialog.current.openDialog(`${props.t("message")}`, `${props.t("failed_to_add_2")}`, error.response.data.messageData ? error.response.data.messageData : "Something Went Wrong !!! Please retry...", true);
                                                setRefresh(true);
                                            }

                                            resolve();
                                        }, 1000)
                                    })

                            }}

                        /> */}


                    </Card>

                </Grid>




            </Grid>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        ...state
    };
}
export default OrderTracking;