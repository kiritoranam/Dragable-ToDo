import React, { useEffect, useState, useHistory } from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, Grid, FormControl, Input, TextField } from "@material-ui/core";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import htmlContent from './esim'
// import { PDFReader } from 'reactjs-pdf-reader';
import dummy from './images/dummy.pdf'
// import {data} from './TimePass'
import TimePass from '../src/TimePass'
import Layout from "./Layout";
import MainLogin from "./MainLogin";
import Dashboard from "./Dashboard"
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import Stepper from "./Stepper";
import img from '../src/images/invoice_logo.png'

function Login(props) {
  const [userData, setUserData] = useState({
    userID: "",
    password: ""
  })

  function threeSum1(arr) {
    debugger
    let sortArr = arr.sort((a, b) => a - b)
    let left = 0;
    let right = sortArr.length - 2;
    let middle = left + 1;
    let result = []

    for (var i = 0; i < right; i++) {

      if (left > 0 && (sortArr[left] !== sortArr[left - 1])) continue

      while (middle < right) {
        let sum = sortArr[left] + sortArr[middle] + sortArr[right];
        if (sum === 0) {
          result.push(sortArr[left], sortArr[middle], sortArr[right])
        }
        if (sum < 0) {
          // left++
          middle++
        } else if (sum > 0) {
          right--
        }


      }
    }
    return result

  }
  const loginData = (e) => {
    e.preventDefault()
    threeSum1([-1, 0, 1, 2, -1, -4])
  }

  const data =
    [
      {
        "msisdn": "27615114741",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050607",
        "data": 0.01,
        "sms": 0,
        "voice": 187.47,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-01-23T18:14:15",
        "planName": "1.5 GB High Speed Data sdfasdddddddddddddddddddddddddddddddddddddertqrtertwergwrgrt"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
      {
        "msisdn": "27686427791",
        "country": "SOUTH AFRICA",
        "simNo": "8927000008795050623",
        "data": 0,
        "sms": 0,
        "voice": 76,
        "segment": "Domestic",
        "channelPartner": "Next Cellular",
        "retailer": "UAT User 01",
        "actDate": "2023-02-10T11:10:59",
        "planName": "Voice_Anynet_20mins_3days"
      },
    ]

  const generatePDF = () => {
    debugger;
    var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });
    // var doc = new jsPDF('l')
    var totalPagesExp = '{total_pages_count_string}'
    doc.autoTableSetDefaults(null)
    var finalLength = doc.lastAutoTable.finalY || 10
    doc.text('Usage Detailed Report', 14, finalLength + 15)
    const columns = ["Mobile No.", "Country", "Sim No", "Data", "SMS", "Voice", "Market", "Channel Partner", "Retailer", "Activation Date", "Plan Name"];
    const rows = []
    data.map((item) => {
      rows.push([item.msisdn, item.country, item.simNo, item.data, item.sms, item.voice, item.segment, item.channelPartner, item.retailer, item.actDate, item.planName])
    });

    doc.autoTable({
      // startY: finalLength + 20,
      // startY: doc.lastAutoTable.finalLength + 15,
      rowPageBreak: 'auto',
      bodyStyles: { valign: 'top' },
      styles: { fontSize: 9 },
      // headStyles: { /*minCellWidth: 50*/width: 100,
      //   align: "center",
      //   padding: 0
      // },
      // bodyStyles: { minCellHeight: 5 , minCellWidth: 20  },
      head: [columns],
      body: rows,
      autoSize: true,
      // rowPageBreak: 'auto', 
      // theme: 'grid',
      // html: '.table',
      // useCss: true,
      willDrawPage: function (data) {
        // Header
        // doc.setFontSize(20)
        // doc.setTextColor(40)
        debugger;
        if (img) {
          doc.addImage(img, 'png', doc.internal.pageSize.width - 50, 10, 0, 0)
        }
        // doc.text('Report', data.settings.margin.left + 15, 22)
      },
      didDrawPage: function (data) {
        // Footer
        var str = 'Page ' + doc.internal.getNumberOfPages()
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === 'function') {
          str = str + ' of ' + totalPagesExp
        }
        doc.setFontSize(10)

        // jsPDF 1.4+ uses getHeight, <1.4 uses .height
        var pageSize = doc.internal.pageSize
        var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
        doc.text(str, data.settings.margin.left, pageHeight - 10)
      },
      margin: { top: 30 },

    })
    if (typeof doc.putTotalPages === 'function') {
      doc.putTotalPages(totalPagesExp)
    }
    doc.save('Detailed Report.pdf')
  }

  return (

    <div class="container">
      <div class="row">
        <div class="col-3" />
        <div class="col-6 align-self-center top">
          <form onSubmit={loginData}>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="User ID" value={userData.userID} onChange={e => setUserData({ ...userData, userID: e.target.value })} />
              <label for="floatingInput">User ID</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="d-grid gap-2 col-5 mx-auto">
              <button type="submit" onClick={loginData} class="btn btn-primary mt-3">Login</button>
            </div>
          </form>
        </div>
        <div class="col-3" />
      </div>
    </div>
    // <div>
    //   <button onClick={generatePDF}>Generate PDF</button>
    // </div>
  );
}

export default Login