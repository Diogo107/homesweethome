import React, { Component } from 'react';
import { getBill } from '../../Services/otherServices';
import { Pie, Line, Doughnut } from 'react-chartjs-2';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBills: [],
      charData: {
        labels: ['Income', 'Expenses'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: ['#00bdaa', '#fe346e'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 56]
          }
        ]
      }
    };

    this.fetchData = this.fetchData.bind(this);
    this.updateGraph = this.updateGraph.bind(this);
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const bills = await getBill();
    console.log('this is bills', bills);
    this.setState({
      allBills: bills
    });
    console.log('this is bills', bills);
  }

  updateGraph() {
    this.setState({
      charData: {
        labels: ['Income', 'Expenses'],
        datasets: [
          {
            label: 'Income',
            data: [67, 25],
            backgroundColor: ['	#41a34d', '#c33626']
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.updateGraph} />
        <Doughnut
          data={this.state.charData}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
        <h1>This will be the graph</h1>
      </div>
    );
  }
}
