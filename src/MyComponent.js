import React, { useState, useRef } from "react";
import { Grid } from "@material-ui/core";
import { useReactToPrint } from "react-to-print";

const BulkDataPreview = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [disp, setDisp] = useState(false);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,

  });
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // const handlePrint = () => {
  //   window.print();
  // };

  return (
    <div>
      <h1>Bulk Data Preview</h1>
      <button onClick={handlePrint}>Print Preview</button>
      {totalPages > 1 && (
        <div>
          {/* Pagination controls */}
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next Page
          </button>
        </div>
      )}

      <div>
        <p>{currentData.length}</p>
      </div>
      <div style={{ display: "none" }}>
          <div ref={componentRef}>
            {currentData.map((item) => (
              <div key={item.id}>
                <Grid container spacing={3}>

                  <Grid item xs={12} style={{ display: "flex", justifyContent: "end", marginLeft: '3%', marginRight: '3%' }}>
                    <img src={process.env.PUBLIC_URL + "/images/invoice_logo.png"} alt="invoice_logo" style={{ width: "22%", height: '84%' }} />

                  </Grid>

                  <Grid item lg={12} md={12} sm={12} xs={12} style={{ display: "flex", marginLeft: '3%', marginRight: '3%', marginTop: '-1%' }} >
                    <Grid item lg={8} md={8} sm={8} xs={8}>
                      <p style={{ fontWeight: 'bolder', margin: '0', fontSize: '40px', color: 'black' }}>TAX INVOICE</p>
                      {/* <p style={{ paddingLeft: '8%' }}>{this.state.customer}</p> */}
                      {/* <p style={{ paddingLeft: '4%' }}>{this.state.address}</p> */}

                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={2}>
                      <p style={{ fontWeight: "bolder", margin: '0', color: 'black', fontSize: '15px' }}>Invoice Date </p>
                      {/* <p>{this.state.txnDate}</p> */}
                      <p style={{ fontWeight: "bolder", margin: '0', color: 'black', fontSize: '15px' }}>Invoice Number </p>
                      {/* <p>{this.state.txnRefNo}</p> */}
                      <p style={{ fontWeight: "bolder", margin: '0', color: 'black', fontSize: '15px' }}>Reference </p>
                      {/* <p>{this.state.serviceType}</p> */}
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={2}>
                      <p style={{ textAlign: 'left', margin: '0', paddingLeft: '17%' }}>Next360 Global</p>
                      <p style={{ textAlign: 'left', margin: '0', paddingLeft: '17%' }}>Headquarter</p>
                      <p style={{ textAlign: 'left', margin: '0', paddingLeft: '17%' }}>8A Wessels Rivonia</p>
                      <p style={{ textAlign: 'left', margin: '0', paddingLeft: '17%' }}>Boulevard</p>
                      <p style={{ textAlign: 'left', margin: '0', paddingLeft: '17%' }}>JOHANNESBURG</p>
                      <p style={{ textAlign: 'left', margin: '0', paddingLeft: '17%' }}>GAUTENG 2129</p>
                      <p style={{ textAlign: 'left', margin: '0', paddingLeft: '17%' }}>SOUTH AFRICA</p>
                      <p style={{ textAlign: 'left', margin: '0', paddingLeft: '17%' }}>VAT NO: 4670279589</p>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <br></br>
                    <br></br>
                    <br></br>
                  </Grid>


                  <Grid item xs={12}>

                    <table style={{ width: '93%', marginLeft: '3%', marginRight: '3%' }}>
                      <tr style={{ fontWeight: 'bolder', borderBottom: '1px solid #000', color: 'black', fontSize: '15px' }}>
                        <th style={{ width: "35%", textAlign: 'left', paddingBottom: '8px', paddingTop: '8px' }}>Description</th>
                        <th style={{ width: "8%", textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }}>Quantity</th>
                        <th style={{ width: "8%", textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }} >Unit Price</th>
                        <th style={{ width: "8%", textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }}></th>
                        <th style={{ width: "8%", textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }}>Amount</th>
                      </tr>

                      <tr style={{ width: '95%', marginLeft: '3%', marginRight: '3%' }}>
                        <td style={{ width: "35%", textAlign: 'Left', paddingBottom: '8px', paddingTop: '8px' }}></td>
                        <td style={{ width: "7%", textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }}></td>
                        <td style={{ width: "9%", textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }} ></td>
                        <td style={{ width: "8%", textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }}> %</td>
                        <td style={{ width: "8%", textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }}></td>
                      </tr>

                      <tr style={{ borderTop: '1px solid lightgrey' }} >
                        <td style={{ textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }}></td>
                        <td style={{ textAlign: 'right', paddingBottom: '8px', paddingTop: '8px', borderBottom: '1px solid' }}></td>
                        <td style={{ textAlign: 'right', paddingBottom: '8px', paddingTop: '8px', borderBottom: '1px solid' }}></td>
                        <td style={{ textAlign: 'right', paddingBottom: '8px', paddingTop: '8px', borderBottom: '1px solid' }}>INCLUDES </td>
                        <td style={{ textAlign: 'right', paddingBottom: '8px', paddingTop: '8px', borderBottom: '1px solid' }} ></td>
                      </tr>

                      <tr>
                        <td style={{ textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }}></td>
                        <td style={{ textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }}></td>
                        <td style={{ textAlign: 'right', paddingBottom: '8px', paddingTop: '8px' }}></td>
                        <td style={{ fontWeight: 'bolder', textAlign: 'right', paddingBottom: '8px', paddingTop: '8px', color: 'black', fontSize: '15px' }}>TOTAL </td>
                        <td style={{ fontWeight: 'bolder', textAlign: 'right', paddingBottom: '8px', paddingTop: '8px', color: 'black', fontSize: '15px' }} ></td>
                      </tr>
                    </table>


                  </Grid>

                  <Grid item xs={12}>
                    <br></br>
                    <br></br>
                  </Grid>


                  <Grid item xs={12} style={{ marginLeft: '3%', marginRight: '3%' }}>
                    <p style={{ fontWeight: "bolder", margin: '0', color: 'black', fontSize: '15px' }}>Due Date:</p>
                    <p style={{ textAlign: 'left', margin: '0' }}>All Payments in South Africa</p>
                    <p style={{ textAlign: 'left', margin: '0' }}> Name: Next360 Pty Ltd</p>
                    <p style={{ textAlign: 'left', margin: '0' }}>Bank: First National Bank</p>
                    <p style={{ textAlign: 'left', margin: '0' }}>Account Number: 62830227486</p>
                    <p >Branch Code: 250 655</p>
                  </Grid>

                  <Grid item xs={12} class="page-footer" style={{ marginLeft: '3%', marginRight: '3%', fontSize: '12px' }}>
                    <p>Company Registration No: 2017/320606/07. Registered Office: 8A Wessels Rivonia Boulevard, Johannesburg, Gauteng, 2129, South Africa.</p>
                  </Grid>
                </Grid>
              </div>
            ))}
          </div>
      </div>


    </div>
  );
};

export default BulkDataPreview;