import React from 'react';
import {Grid} from "semantic-ui-react";
import {Doughnut, HorizontalBar, Radar} from "./portfolioCharts";

export class Portfolio extends React.Component {

    constructor(props, context, data) {
        super(props, context);
        this.doughnutdata = {
            labels: [
                'High Risk Investments',
                'Moderate Risk Investments',
                'Guaranteed Returns'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF3333',
                    '#6699FF',
                    '#33AA33'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#CEFF56'
                ]
            }]
        };
        this.radardata = {
            labels: ['Mutual Funds', 'Blue Chip Stocks', 'CDs', 'Savings', 'Real Estate', 'IP', 'Loans'],
            datasets: [
                {
                    label: 'Merrill Lynch (USD MM)',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'Bank of America (USD MM)',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        this.hbdata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dividends Received (USD MM)',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,30,30,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
        this.bdata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
    }


    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8} floated='left' verticalAlign='top'>
                        <Doughnut data={this.doughnutdata}/>
                    </Grid.Column>
                    <Grid.Column width={8} floated='left' verticalAlign='top'>
                        <HorizontalBar data={this.hbdata}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16} floated='left' verticalAlign='top'>
                        <Radar data={this.radardata}/>
                    </Grid.Column>
                </Grid.Row>
                {/*<Grid.Row>
                    <Grid.Column width={3}>
                        <Radar data={this.radardata}/>
                    </Grid.Column>
                    <Grid.Column width={10} floated='left' verticalAlign='top'>
                    </Grid.Column>
                    <Grid.Column width={3} verticalAlign='top'>
                        <Bar data={this.bdata}/>
                    </Grid.Column>
                </Grid.Row>*/}
            </Grid>
        );
    }
}