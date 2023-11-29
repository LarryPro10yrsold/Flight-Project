import React from 'react'

function Timeline() {
  return (
    <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "20px",
            marginTop: "5px",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              margin: "0px",
              marginBottom: "7px",
            }}
          >
            21:40
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "10px",
              borderRadius: "100px",
              background: "rgba(77, 70, 250, 0.10)",
              fontWeight: "600",
              padding: "5px 0px",
              paddingRight: "2px",
              paddingLeft: "2px",
              width: "30px",
              marginLeft: "5px",
            }}
          >
            DAD
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontWeight: "300",
              marginBottom: "7px",
              marginTop: "0px",
              marginLeft: "20px",
              fontSize: "14px",
            }}
          >
            1h 30m
          </p>
          <img src="line.svg" alt="line" width=" 91.819px" height=" 7px" />
          <p
            style={{
              fontWeight: "300",
              marginBottom: "0px",
              marginTop: "7px",
              marginLeft: "24px",
              fontSize: "14px",
            }}
          >
            Direct
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            marginTop: "5px",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              margin: "0px",
              marginBottom: "7px",
            }}
          >
            21:40
          </p>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "10px",
              borderRadius: "100px",
              background: "rgba(77, 70, 250, 0.10)",
              fontWeight: "600",
              padding: "5px 0px",
              paddingRight: "2px",
              paddingLeft: "2px",
              width: "30px",
              marginLeft: "5px",
            }}
          >
            DAD
          </div>
        </div>
      </div>
  )
}

export default Timeline