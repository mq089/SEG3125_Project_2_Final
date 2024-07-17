
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Calendar from './Calendar';

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);



const Dashboard = () => {
    
    
    
    
    
    const [data] = useState({
        labels: ['Last Match', 'Last 2 Matches', 'Last 3 Matches'],
        datasets: [
          {
            label: 'Hits',
            backgroundColor: '#66FF99',
            borderColor: 'black',
            data: [15, 20, 50],
            
          },
          {
              label: 'Shots Fired',
              backgroundColor: '#00FFFF',
              borderColor: 'rgb(194, 116, 161)',
              data: [30, 39, 90],
          },
          {
              label: 'Hits Taken',
              backgroundColor: 'orange',
              borderColor: 'rgb(194, 116, 161)',
              data: [45, 80, 30],
          },
        ],
      });

    return (  
        <div className="home">
            
            <Container fluid className='top-container'>
                <Row className='info-row'>
                    <Col> 
                        <h1 className='info-head'>Dashboard</h1>
                    </Col>
                </Row>

                <Row className='info-row'>
                <Col></Col>
                <Col className='info-col'> 
                    <h2 className='info-msg'>Here you can view your last match statistics and invite your friends to matches!</h2>   
                </Col>
                <Col></Col>
                </Row>
            </Container>
            
            <Container fluid className='home-container'>
                <Row>
                    <Col className='data-col'>
                        <CDBContainer>
                        <h3 className="data-header">Last 3 Match Analytics</h3>
                            <Bar data={data} options={{ responsive: true, color:'#333' }} />
                        </CDBContainer>
                    </Col>
                        
                   
                </Row>

                <Row>
                    <Col>
                        <h1 className='event-head'>Invite Board</h1>
                        <div className="App">
                            <Calendar />
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}
 
export default Dashboard;