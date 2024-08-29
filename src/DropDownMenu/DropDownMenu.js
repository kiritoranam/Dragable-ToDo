// src/App.js
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, List, Typography } from '@material-ui/core';
import React from 'react';

function DropDownMenu() {

    const generateMenu = () => {

        let men = [
            {
                "roleid": "1",
                "groupId": 2,
                "srNo": 1,
                "level": 1,
                "menuType": 1,
                "description": "Acquisition",
                "pageName": "",
                "add": true,
                "modify": true,
                "delete": true,
                "inquire": true,
                "authorize": false,
                "ParentId": 0,
                "IsParent": true,
                "Id": 1,
                "Children": [
                    {
                        "roleid": "1",
                        "groupId": 2,
                        "srNo": 2,
                        "level": 2,
                        "menuType": 2,
                        "description": "Employee ID Creation",
                        "pageName": "HierarchyCreation.xaml",
                        "add": true,
                        "modify": true,
                        "delete": false,
                        "inquire": true,
                        "authorize": false,
                        "ParentId": 1,
                        "IsParent": false,
                        "Id": 2,
                        "Children": [],
                        "CRUD": true
                    },
                    {
                        "roleid": "1",
                        "groupId": 2,
                        "srNo": 3,
                        "level": 2,
                        "menuType": 2,
                        "description": "Channel ID creation",
                        "pageName": "UserCreation.xaml",
                        "add": true,
                        "modify": true,
                        "delete": false,
                        "inquire": true,
                        "authorize": false,
                        "ParentId": 1,
                        "IsParent": false,
                        "Id": 3,
                        "Children": [],
                        "CRUD": true
                    }
                ],
                "CRUD": true
            },
        ]
        const allMenus = men;

        return allMenus.map((item, index) => {

            return (
                <Accordion TransitionProps={{ unmountOnExit: true }} square expanded={this.state.expanded === 'panel' + index} onChange={this.handleChange('panel' + index)} key={item.description} >
                    <AccordionSummary className='AccordianMenu' aria-controls="panel1d-content" id="panel1d-header" >
                        <i className={"icon-" + ((item.description !== "Activation & Recharge" && item.description !== "Learning & Development") ? item.description.replace(/ /g, "-") : item.description === "Primary Billing Report" ? "Stock-Report" : item.description.replace(" & ", "-and-"))} > </i>
                        <Typography>{this.props.t(item.description)}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordianSubMenu">
                        <List component="div" disablePadding>
                            {item.Children.map((item, index) => {
                                { return this.generateNextLevel(item, index) }
                            })}
                        </List>
                    </AccordionDetails>
                </Accordion>
            );

        });
    }

    return (
        <Container>
            <Grid item lg={12}>
                <List component="nav" style={{ backgroundColor: 'black', paddingBottom: '83px', color: "white", width: "100%", height: "fit-content", display: 'flex' }}>
                    {generateMenu}
                </List>
            </Grid>
        </Container>
    );
}

export default DropDownMenu;
