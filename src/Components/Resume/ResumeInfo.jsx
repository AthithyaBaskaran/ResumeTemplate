import React from 'react';
import ResumeSideBar from "../Layout/ResumeHeader";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "../../assets/CSS/Dashboard.css";

const ResumeInfo = () => {
  return (
    <div>
      <ResumeSideBar />
      <h1 className="info-heading">Resume Info</h1>
      <Box className="dashboard-info-box">
        <Card
          className="dashboard-info-card"
        >
          <CardActionArea>
            <CardContent>
              <Box className="info-grid">

                <Box className="info-card-box">
                  <Typography variant="h5" className="info-card-title">
                    UserName
                  </Typography>
                  <Typography variant="body2" className="info-card-description">
                    Athithya
                  </Typography>
                </Box>

                <Box className="info-card-box">
                  <Typography variant="h5" className="info-card-title">
                    Email
                  </Typography>
                  <Typography variant="body2" className="info-card-description">
                    athithyabaskaran2001
                  </Typography>
                </Box>
                <Box className="info-card-box">
                  <Typography variant="h5" className="info-card-title">
                    Role
                  </Typography>
                  <Typography variant="body2" className="info-card-description">
                    Admin
                  </Typography>
                </Box>
                <Box className="info-card-box">
                  <Typography variant="h5" className="info-card-title">
                    Skills
                  </Typography>
                  <Typography variant="body2" className="info-card-description">
                    HTML,CSS,Javascript
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  )
}

export default ResumeInfo
