import React from 'react';
import BackgroundImage from "../../assets/images/image3.jpg";
import HeartImage from "../../assets/images/heart.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
const ResumeFooter = () => {
    return (
        <Box className="resume-Footer"
            sx={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
            }}
        >
            <Box className="resume-footer-card-content">
                <Typography variant="h5" className="resume-footer-card-title">
                    Contact Us
                </Typography>
                <Typography variant="body1" className="resume-footer-card-text">
                    Email : athithyabaskaran2001@gmail.com
                    Address:6,Subrayalu Nagar,Cuddalore.
                    MobileNo:7871812581
                </Typography>
            </Box>
            <Typography variant="h5" className="resume-footer-card-title">
                Designed By <span style={{color:"blueviolet"}}>Athithya Baskaran & Nandhini<img src={HeartImage} alt=""style={{width:"40px"}} /> </span>
            </Typography>
        </Box>
        
    )
}

export default ResumeFooter
