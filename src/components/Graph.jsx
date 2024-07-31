import { Grid, Card, CardContent, Button, Typography } from '@mui/material';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import myImage from './3dImage.png'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function Graph() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                type: 'line',
                label: 'Applications',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3,
                pointRadius: 5,
                pointHoverRadius: 10,
                pointStyle: 'circle',
            },
            {
                type: 'bar',
                label: 'Received',
                data: [70, 75, 85, 90, 60, 65, 45],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                barPercentage: 0.5,
                categoryPercentage: 0.5,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                    },
                    color: '#333',
                },
            },
            title: {
                display: true,
                text: 'Monthly Applications and Received Applications',
                font: {
                    size: 20,
                },
                color: '#333',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)',
                },
                ticks: {
                    color: '#333',
                },
            },
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutBounce',
        },
        elements: {
            line: {
                borderWidth: 3,
            },
            point: {
                radius: 5,
                hoverRadius: 10,
            },
        },
    };

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={7}>
                        <h2>Applications and Received Applications Info</h2>
                        <Chart data={data} options={options} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
                        <Card style={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)', color: '#fff', borderRadius: '15px', height: '100%' }}>
                            <CardContent style={{ height: '100%' }}>
                                <Grid container spacing={2} alignItems="center" style={{ height: '100%' }}>
                                    <Grid item xs={4} style={{ textAlign: 'center' }}>
                                        <img src="https://img.icons8.com/ios-filled/50/000000/todo-list.png" alt="To-Do List" style={{ maxWidth: '50px', marginBottom: '10px' }} />
                                        <Typography variant="h3" component="div" style={{ marginBottom: '10px' }}>
                                            0033
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            New Assessments
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
                                            <img src={myImage} alt="HR" style={{ maxWidth: '100%', height: 'auto' }} />
                                        </div>
                                        <Button variant="contained" style={{ backgroundColor: '#fff', color: '#6a11cb' }}>
                                            View Details
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
