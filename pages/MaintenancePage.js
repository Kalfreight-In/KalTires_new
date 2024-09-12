import React from "react";
import Image from "next/image";
import Sorry from "../Assets/Images/maintenance-image.svg";

const MaintenancePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Site Under Maintenance</h1>
      <Image
        src={Sorry}
        alt="Maintenance"
        width={600}
        height={400}
        style={styles.image}
      />
      <p style={styles.message}>
        We are temporarily down for maintenance. Sorry for the inconvenience.
      </p>
      <style jsx>{`
        .homeLink:hover {
          background-color: #3498db;
          color: #000000;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    color: "#333",
    textAlign: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  image: {
    marginBottom: "20px",
  },
  heading: {
    fontFamily: "Poppins, sans-serif",
    font: "poppins",
    fontSize: "2rem",
    margin: "0",
    fontWeight: "bold",
    color: "#000000",
  },
  message: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "2rem",
    margin: "0",
    fontWeight: "bold",
    color: "#000000",
  },
};

export default MaintenancePage;
