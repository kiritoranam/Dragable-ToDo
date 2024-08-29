import React from "react";
import { trackPromise } from "react-promise-tracker";


const PrintAll = (props) => {
    debugger
    props.map((item, index) => {

        debugger
            if (item.providerName?.toUpperCase() === "TATA - SA SERVICES" && item.country?.toUpperCase() === "IND" && !item.usrAncestorID?.includes("B147")) {
                if (item?.simSubType?.toUpperCase() === "PHYSICAL") {
                    const ESim_NT = process.env.PUBLIC_URL + '/PSimIndia.html'
                    console.log("ESim_NT", ESim_NT);
    
                    // if (ESim_NT) {
                       trackPromise(fetch(ESim_NT)
                            .then((response) => response.text())
                            .then((data) => {
                                debugger
                                data = data.replaceAll("[$mobile$]", item.mobileNo);
                                data = data.replaceAll("[$ActDate$]", item.travelDate);
                                data = data.replaceAll("[$validate$]", item.validity);
                                data = data.replaceAll("[$planName$]", item.plans);
                                data = data.replaceAll("[$simName$]", item.simNo);
    
                                // this.setState({ ESim_NxtTravel: data })
                                return data
    
                            }))
                            .catch((error) => {
                                console.error('Error fetching PSimIndia HTML content:', error);
                            });
                    // }
    
                } 
            
        }
    })
}

export default PrintAll