import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "../../assets/CSS/Dashboard.css";
import Header from "../Layout/ResumeHeader";
import ResumeCard from "../Layout/ResumeCard";
import audience from "../../assets/images/audience.png";
import approved from "../../assets/images/approved.png";
import skills from "../../assets/images/skills.png";
import ResumeFooter from "../Layout/ResumeFooter";

const cards = [
  { id: 1, title: "50", description: "Resume Count", image: audience },
  { id: 2, title: "3", description: "User Count", image: approved },
  { id: 3, title: "17", description: "Total Relevant Skills", image: skills },
  { id: 4, title: "6", description: "Most Used Template", image: audience },
  { id: 5, title: "19", description: "Most Used Relevanted Skills", image: audience },
];

function Dashboard() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <>
      <Header />
       <div className="page-content">
      <Box className="dashboard-box">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            className="dashboard-card"
            data-active={selectedCard === index ? "true" : "false"}
          >
            <CardActionArea onClick={() => setSelectedCard(index)}>
              <CardContent>
                <Typography variant="h5" className="card-title">
                  {card.title}
                  <div className="img-wrap">
                    <img src={card.image} alt="" className="card-img" />
                  </div>
                </Typography>
                <Typography variant="body2" className="card-description">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <div className="resume-card">
        <ResumeCard />
      </div>
      </div>
      <ResumeFooter />
    </>
  );
}

export default Dashboard;
