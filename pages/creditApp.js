import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import SignatureCanvas from "react-signature-canvas";
import credbg from "../Assets/Images/Home/credbg.jpg";
import { PDFDocument, rgb } from "pdf-lib";
import getConfig from "next/config";


const CreditApp = () => {
  const captchaRef = useRef(null);
  const [kvlrep, setKvlRep] = useState("");
  const [name, setName] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [desiredCreditLimit, setDesiredCreditLimit] = useState("");
  const [apContactName, setApContactName] = useState("");
  const [apContactPhone, setApContactPhone] = useState("");
  const [apContactEmail, setApContactEmail] = useState("");
  const [apContactAddress, setApContactAddress] = useState("");
   const [selectedOption, setSelectedOption] = useState("");
  const [fleet, setFleet] = useState("");
  const [repairShop, setRepairShop] = useState(false);
  const [mobileRepair, setMobileRepair] = useState(false);
  const [tireShop, setTireShop] = useState(false);
  const [legalName, setLegalName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [dotNumber, setDotNumber] = useState("");
  const [taxId, setTaxId] = useState("");
  const [timeInBusiness, setTimeInBusiness] = useState("");
  const [employeeNamesOne, setEmployeeNamesOne] = useState("");
  const [employeeNamesTwo, setEmployeeNamesTwo] = useState("");
  const [fleetEquipment, setFleetEquipment] = useState("");
  const [noOfTrucks, setNoOfTrucks] = useState("");
  const [noOfTrailers, setNoOfTrailers] = useState("");
  const [creditReferenceName, setCreditReferenceName] = useState("");
  const [creditReferenceAddress, setCreditReferenceAddress] = useState("");
  const [creditReferenceZip, setCreditReferenceZip] = useState("");
  const [creditReferencePhone, setCreditReferencePhone] = useState("");
  const [creditReferenceEstMonth, setCreditReferenceEstMonth] = useState("");
  const [creditReferenceYearsInBusiness, setCreditReferenceYearsInBusiness] =
    useState("");
  const signatureCanvas = useRef(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");

  const resetForm = () => {
    // Reset all form fields here
    setKvlRep("");
    setName("");
    setSocialSecurityNumber("");
    setBirthdate("");
    setAddress("");
    setCellPhone("");
    setDesiredCreditLimit("");
    setApContactName("");
    setApContactPhone("");
    setApContactEmail("");
    setApContactAddress("");
    setFleet(false);
    setRepairShop(false);
    setMobileRepair(false);
    setTireShop(false);
    setLegalName("");
    setTradeName("");
    setBusinessType("");
    setDotNumber("");
    setTaxId("");
    setTimeInBusiness("");
    setEmployeeNamesOne("");
    setEmployeeNamesTwo("");
    setFleetEquipment("");
    setNoOfTrucks("");
    setNoOfTrailers("");
    setCreditReferenceName("");
    setCreditReferenceAddress("");
    setCreditReferenceZip("");
    setCreditReferencePhone("");
    setCreditReferenceEstMonth("");
    setCreditReferenceYearsInBusiness("");
    signatureCanvas("");
    setTitle("");
    setDate("");
    setError(false);
    setButtonText("Submit");
  };

  const { publicRuntimeConfig } = getConfig();

    const sendEmail = async (pdfBlob) => {
      const { publicRuntimeConfig } = getConfig();

      const transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
          user: "Noreply@kvltires.com", // Your email
          pass: "Wap12139", // Your password
        },
      });

      const mailOptions = {
        from: "Noreply@kvltires.com",
        to: "crraju@kalfreight.com", // Recipient's email
        subject: "Credit Application Submission",
        text: "Thank you for submitting the credit application.",
        attachments: [
          {
            filename: "Credit_Application.pdf",
            content: pdfBlob,
            encoding: "base64",
          },
        ],
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });
    };

  const handleDownloadPdf = async () => {
    const pdfUrl = `${publicRuntimeConfig.BASE_URL}/Documents/KvlTires_Credit_Application.pdf`;

    // Fetch the PDF file
    const response = await fetch(pdfUrl);
    const existingPdfBytes = await response.arrayBuffer();

    // Load existing PDF
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Access the first page
    const page = pdfDoc.getPage(0); // Adjust the page number accordingly

    if (selectedOption === "fleet") {
      const tickMark = "\u2022"; // Unicode character for a tick mark
      page.drawText(tickMark, {
        x: 36,
        y: 296,
        tickMark,
        size: 30,
        fontColor: rgb(0, 0, 0),
      });
    }

    if (selectedOption === "repairShop") {
      const tickMark = "\u2022"; // Unicode character for a tick mark
      page.drawText(tickMark, {
        x: 100,
        y: 296,
        tickMark,
        size: 30,
        fontColor: rgb(0, 0, 0),
      });
    }

    if (selectedOption === "mobileRepair") {
      const tickMark = "\u2022"; // Unicode character for a tick mark
      page.drawText(tickMark, {
        x: 176,
        y: 296,
        tickMark,
        size: 30,
        fontColor: rgb(0, 0, 0),
      });
    }

    if (selectedOption === "tireShop") {
      const tickMark = "\u2022"; // Unicode character for a tick mark
      page.drawText(tickMark, {
        x: 262,
        y: 296,
        tickMark,
        size: 30,
        fontColor: rgb(0, 0, 0),
      });
    }

    // Add text to the page
    page.drawText(`${legalName}`, {
      x: 90,
      y: 647,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${tradeName}`, {
      x: 435,
      y: 647,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${businessType}`, {
      x: 170,
      y: 628,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${dotNumber}`, {
      x: 445,
      y: 628,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${taxId}`, {
      x: 110,
      y: 609,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${timeInBusiness}`, {
      x: 365,
      y: 609,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${desiredCreditLimit}`, {
      x: 190,
      y: 581,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${name}`, {
      x: 80,
      y: 523,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${address}`, {
      x: 80,
      y: 504,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${socialSecurityNumber}`, {
      x: 350,
      y: 523,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${birthdate}`, {
      x: 500,
      y: 523,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${cellPhone}`, {
      x: 95,
      y: 485,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${employeeNamesOne}`, {
      x: 50,
      y: 432,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${employeeNamesTwo}`, {
      x: 330,
      y: 432,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${apContactName}`, {
      x: 140,
      y: 372,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${apContactPhone}`, {
      x: 305,
      y: 372,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${apContactEmail}`, {
      x: 120,
      y: 359,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${apContactAddress}`, {
      x: 85,
      y: 346,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${fleetEquipment}`, {
      x: 260,
      y: 274,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${noOfTrucks}`, {
      x: 115,
      y: 255,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${noOfTrailers}`, {
      x: 260,
      y: 255,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${creditReferenceName}`, {
      x: 112,
      y: 214,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${creditReferenceAddress}`, {
      x: 75,
      y: 195,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${creditReferenceZip}`, {
      x: 400,
      y: 195,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${creditReferencePhone}`, {
      x: 70,
      y: 176,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${creditReferenceYearsInBusiness}`, {
      x: 300,
      y: 176,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${creditReferenceEstMonth}`, {
      x: 505,
      y: 176,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${title}`, {
      x: 326,
      y: 52,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });
    page.drawText(`${date}`, {
      x: 476,
      y: 52,
      size: 10,
      fontColor: rgb(0, 0, 0),
    });

    // Add signature image to the page
    const signatureImage = await pdfDoc.embedPng(
      signatureCanvas.current.toDataURL("image/png")
    );
    page.drawImage(signatureImage, { x: 80, y: 50, width: 100, height: 30 });

    // Save the modified PDF
    const modifiedPdfBytes = await pdfDoc.save();

    // Create a Blob from the bytes
    const modifiedPdfBlob = new Blob([modifiedPdfBytes], {
      type: "application/pdf",
    });

    // Send the modified PDF as an email attachment
    sendEmail(modifiedPdfBlob);

    // Open the modified PDF in a new tab
    window.open(URL.createObjectURL(modifiedPdfBlob), "_blank");
  };

  const signatureCanvasRef = useRef(null);

  const handleClearSignature = () => {
    signatureCanvasRef.current.clear();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Prepare your data for submission
    const data = {
      kvlrep,
      name,
      socialSecurityNumber,
      birthdate,
      address,
      cellPhone,
      desiredCreditLimit,
      apContactName,
      apContactPhone,
      apContactEmail,
      apContactAddress,
      fleet,
      repairShop,
      mobileRepair,
      tireShop,
      legalName,
      tradeName,
      businessType,
      dotNumber,
      taxId,
      timeInBusiness,
      employeeNamesOne,
      employeeNamesTwo,
      fleetEquipment,
      noOfTrucks,
      noOfTrailers,
      creditReferenceName,
      creditReferenceAddress,
      creditReferenceZip,
      creditReferencePhone,
      creditReferenceEstMonth,
      creditReferenceYearsInBusiness,
      signatureCanvas,
      title,
      date,
    };

    setSuccess(false);

    // Make your API call here using axios
    axios
      .post("your_api_endpoint", data)
      .then(() => {
        setSuccess(true);
        resetForm();
      })
      .catch(() => {
        setError(true);
        setButtonText("Submit");
        console.log("Form submission error");
      });

    setTimeout(() => {
      setSuccess(false);
      console.log(`Success: ${success}`);
    }, 8000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:p-8 p-4 lg:flex flex justify-center items-center grid-form font-Helvetica"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url(${credbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(5px)",
      }}
    >
      <h2 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
        Credit Application
      </h2>
      <div className="w-full lg:w-2/3  md:p-8 p-4 grid-section">
        <label>
          KVL Rep:
          <input
            type="text"
            value={kvlrep}
            onChange={(e) => setKvlRep(e.target.value)}
            className="underlined-input"
          />
        </label>
        <br></br>
        <div>
          <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
            Business Company Information
          </h3>{" "}
        </div>
        <br></br>
        <label>
          Legal Name:
          <input
            type="text"
            value={legalName}
            onChange={(e) => setLegalName(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Trade Name:
          <input
            type="text"
            value={tradeName}
            onChange={(e) => setTradeName(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Business Type (Corp, LLC, etc):
          <input
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          MC# or DOT#:
          <input
            type="number"
            value={dotNumber}
            onChange={(e) => setDotNumber(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Federal Tax ID#:
          <input
            type="text"
            value={taxId}
            onChange={(e) => setTaxId(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Time in Business:
          <input
            type="text"
            value={timeInBusiness}
            onChange={(e) => setTimeInBusiness(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Desired Credit Limit ($):
          <input
            type="text"
            value={desiredCreditLimit}
            onChange={(e) => setDesiredCreditLimit(e.target.value)}
            className="underlined-input"
          />
        </label>
        <br></br>

        <div>
          <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
            Individual/Gaurantor Information
          </h3>{" "}
        </div>
        <br></br>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Social Security #:
          <input
            type="number"
            value={socialSecurityNumber}
            onChange={(e) => setSocialSecurityNumber(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Birth Date:
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Cell Phone:
          <input
            type="number"
            value={cellPhone}
            onChange={(e) => setCellPhone(e.target.value)}
            className="underlined-input"
          />
        </label>
      </div>
      <br></br>
      <div className="w-full lg:w-2/3  md:p-8 p-4 grid-section">
        <h6>
          List Employee(s) names and titles that can sign contracts and/or
          authorize purchase orders/work orders on behalf of your company:
        </h6>
        <br></br>
        <input
          type="text"
          value={employeeNamesOne}
          onChange={(e) => setEmployeeNamesOne(e.target.value)}
          className="underlined-input"
        />
        <br></br>
        <input
          type="text"
          value={employeeNamesTwo}
          onChange={(e) => setEmployeeNamesTwo(e.target.value)}
          className="underlined-input"
        />
      </div>
      <br></br>
      <div className="w-full lg:w-2/3  md:p-8 p-4 grid-section">
        <div>
          <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
            Accounts Payable Information
          </h3>{" "}
        </div>
        <br></br>
        <label>
          Name of AP Contact:
          <input
            type="text"
            value={apContactName}
            onChange={(e) => setApContactName(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            value={apContactPhone}
            onChange={(e) => setApContactPhone(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Email:
          <input
            type="mail"
            value={apContactEmail}
            onChange={(e) => setApContactEmail(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={apContactAddress}
            onChange={(e) => setApContactAddress(e.target.value)}
            className="underlined-input"
          />
        </label>
      </div>
      <br></br>
      <div className="w-full lg:w-2/3  md:p-8 p-4 grid-section">
        <div>
          <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
            Type Of Business
          </h3>
        </div>
        <br></br>
        <div className="w-full lg:w-full md:p-8 p-4 grid-section-radio">
          <div>
            <input
              type="radio"
              value="fleet"
              id="fleet"
              name="typeOfBusiness"
              checked={selectedOption === "fleet"}
              onChange={() => setSelectedOption("fleet")}
            />
            <label htmlFor="fleet">Fleet</label>
          </div>
          <div>
            <input
              type="radio"
              value="repairShop"
              id="repairShop"
              name="typeOfBusiness"
              checked={selectedOption === "repairShop"}
              onChange={() => setSelectedOption("repairShop")}
            />
            <label htmlFor="repairShop">Repair Shop</label>
          </div>
          <div>
            <input
              type="radio"
              value="mobileRepair"
              id="mobileRepair"
              name="typeOfBusiness"
              checked={selectedOption === "mobileRepair"}
              onChange={() => setSelectedOption("mobileRepair")}
            />
            <label htmlFor="mobileRepair">Mobile Repair</label>
          </div>
          <div>
            <input
              type="radio"
              value="tireShop"
              id="tireShop"
              name="typeOfBusiness"
              checked={selectedOption === "tireShop"}
              onChange={() => setSelectedOption("tireShop")}
            />
            <label htmlFor="tireShop">Tire Shop</label>
          </div>
        </div>
        <label>
          Total # of Pieces of Equipment in Fleet (If Applicable):
          <input
            type="number"
            value={fleetEquipment}
            onChange={(e) => setFleetEquipment(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Total # of Trucks:
          <input
            type="number"
            value={noOfTrucks}
            onChange={(e) => setNoOfTrucks(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Total # of Trailers:
          <input
            type="number"
            value={noOfTrailers}
            onChange={(e) => setNoOfTrailers(e.target.value)}
            className="underlined-input"
          />
        </label>
      </div>
      <br></br>
      <div className="w-full lg:w-2/3  md:p-8 p-4 grid-section">
        <div>
          <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
            Credit Reference
          </h3>{" "}
        </div>
        <br></br>
        <label>
          Company Name:
          <input
            type="text"
            value={creditReferenceName}
            onChange={(e) => setCreditReferenceName(e.target.value)}
            className="underlined-input"
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            value={creditReferenceAddress}
            onChange={(e) => setCreditReferenceAddress(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Zip Code:
          <input
            type="text"
            value={creditReferenceZip}
            onChange={(e) => setCreditReferenceZip(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            value={creditReferencePhone}
            onChange={(e) => setCreditReferencePhone(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Years in Business:
          <input
            type="number"
            value={creditReferenceYearsInBusiness}
            onChange={(e) => setCreditReferenceYearsInBusiness(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          {" "}
          Estimated Monthly Credit Usage:
          <input
            type="number"
            value={creditReferenceEstMonth}
            onChange={(e) => setCreditReferenceEstMonth(e.target.value)}
            className="underlined-input"
          />
        </label>
      </div>
      <div className="w-full lg:w-2/3  md:p-8 p-4 grid-section">
        <p>
          By signing below, each undersigned individual(s), who is either a
          principal of the credit applicant listed below or a personal guarantor
          of its obligations, provides written instructions to KVL TIRES INC.,
          its designee, nominees or assignees or potential assignees,
          authorization to review his or her personal credit profile from a
          national credit bureau. Authorization is also granted to KVL TIRES
          INC., its designees, nominees, assignees, or potential assignees to
          obtain business credit reports, bank references, and trade references,
          provided to KVL TIRES INC. or to its affiliates and to review any
          provided financial statements. Such authorization shall extend to
          obtaining a credit profile in considering the application of the
          credit applicant and subsequently for the purposes of update, renewal,
          or extension of such credit and for reviewing or collecting the
          resulting account. A photo static or facsimile copy of this
          authorization shall be valid as the original
        </p>
      </div>
      <div className="w-full lg:w-2/3 md:p-8 p-4 grid-section">
        <div className="item1">
          <label>Signature</label>
          <SignatureCanvas
            ref={signatureCanvas}
            penColor="black"
            style={{ cursor: "crosshair" }}
            canvasProps={{
              className: "signature-canvas",
              width: 500,
              height: 150,
              className: "border border-black mt-2",
            }}
          />
          <button
            className="text-black bg-red rounded h-6 w-28 font-Helvetica"
            type="button"
            onClick={handleClearSignature}
          >
            Clear Signature
          </button>
        </div>
        <br />
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="underlined-input"
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="underlined-input"
            />
          </label>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          className="text-white bg-red-500 rounded h-12 p-4 w-48 mt-2 flex justify-center items-center font-Helvetica"
          type="submit"
          id="submitmain"
          onClick={handleDownloadPdf}
        >
          {buttonText}
        </button>
      </div>

      <style jsx>{`
        .justify-content-center {
          display: flex;
          justify-content: center;
        }

        .grid-form {
          display: grid;
          grid-template-columns: auto auto;
          padding: 20px;
          column-gap: 20px;
        }

        .grid-section {
          grid-column: span 2;
          display: grid;
          grid-template-columns: auto auto; /* Two columns */
          column-gap: 20px;
          row-gap: 20px;
        }

        .item1 {
          grid-row: 1 / 4;
        }

        .grid-section-radio {
          grid-column: span 4;
          display: grid;
          grid-template-columns: auto auto auto auto; /* Two columns */
          column-gap: 20px;
          row-gap: 20px;
        }

        .underlined-input {
          border: none;
          border-bottom: 1px solid black;
          outline: none;
          width: 100%;
        }

        .underlined-input:focus {
          border-bottom: 2px solid red;
        }
      `}</style>
    </form>
  );
};

export default CreditApp;
