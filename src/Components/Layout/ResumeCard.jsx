import React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "../../assets/CSS/Dashboard.css";
import Resume from "../../assets/images/curriculum-vitae.png";
import new_resume from "../../assets/images/cv.png";
import new_cv from "../../assets/images/new_cv.png";


const ResumeCard = () => {
    return (
        <>
            <div className='resume-card-box'>
                <h1 className='resume-heading'>Resume-Based Skill Insights</h1>
                <p className='resume-card-content'>When a user uploads a resume, the system automatically extracts their skills and compares them with the skills required for the selected job role. It then highlights the most relevant skills, helping users understand how closely they match the job requirements.
                </p>
            </div>
            <div className='resume-card-container'>
                <Box className="resume-dashboard-box">
                    <Card
                        className="resume-dashboard-card"
                    >
                        <CardActionArea onClick={() => setSelectedCard(index)}>
                            <img src={Resume} alt="" className='resume-img-card' />
                            <CardContent>
                                <Typography variant="h4" className="resume-card-title">
                                    Cover Letter Objectives
                                </Typography>
                                <Typography variant="body2" className="resume-card-description">
                                    Cover Letter objectives are used to show employers what you’re looking for in your next role: take a look at our samples today to hone in on what you want in a job.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
                <Box className="resume-dashboard-box">
                    <Card
                        className="resume-dashboard-card"
                    >
                        <CardActionArea onClick={() => setSelectedCard(index)}>
                            <img src={new_resume} alt="" className='resume-img-card' />
                            <CardContent>
                                <Typography variant="h4" className="resume-card-title">
                                    Cover Letter Objectives
                                </Typography>
                                <Typography variant="body2" className="resume-card-description">
                                    Cover Letter objectives are used to show employers what you’re looking for in your next role: take a look at our samples today to hone in on what you want in a job.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
                <Box className="resume-dashboard-box">
                    <Card
                        className="resume-dashboard-card"
                    >
                        <CardActionArea onClick={() => setSelectedCard(index)}>
                            <img src={new_cv} alt="" className='resume-img-card' />
                            <CardContent>
                                <Typography variant="h4" className="resume-card-title">
                                    Cover Letter Objectives
                                </Typography>
                                <Typography variant="body2" className="resume-card-description">
                                    Cover Letter objectives are used to show employers what you’re looking for in your next role: take a look at our samples today to hone in on what you want in a job.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </div>
        </>
    )
}

export default ResumeCard
