import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "../../assets/CSS/Dashboard.css"
import Sidebar from '../Layout/ResumeSidebar';

const cards = [
    {
        id: 1,
        title: '50',
        description: 'Resume Count',
    },
    {
        id: 2,
        title: '3',
        description: 'User Count',
    },
    {
        id: 3,
        title: '17',
        description: 'Most Revelanted Skills',
    },
    {
        id: 4,
        title: '6',
        description: 'Most Used Reseume Template',
    },
];

function Dashboard() {
    const [selectedCard, setSelectedCard] = React.useState(0);
    return (
        <>
        <Sidebar/>
        <Box
            className="dashboard-box"    >
            {cards.map((card, index) => (
                <Card className="dashboard-card">
                    <CardActionArea
                        onClick={() => setSelectedCard(index)}
                        data-active={selectedCard === index ? '' : undefined}
                    >
                        <CardContent>
                            <Typography variant="h5" component="div" className='card-title'>
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
        </>
    );
}

export default Dashboard;
