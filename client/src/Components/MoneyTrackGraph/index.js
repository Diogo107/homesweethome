import React, { Component } from 'react';
import { getBill } from '../../Services/otherServices';
import { Pie, Line, Doughnut, Bar } from 'react-chartjs-2';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphType: 2,
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
    this.pieChart = this.pieChart.bind(this);
  }

  async componentDidMount() {
    await this.fetchData();
    this.setState({
      graphType: 1
    });
    this.pieChart();
  }

  async fetchData() {
    const bills = await getBill();
    console.log('this is bills', bills);
    this.setState({
      allBills: bills
    });
    console.log('this is bills', bills);
  }

  pieChart() {
    console.log('Working with this');

    if (this.state.graphType == 1) {
      let income = this.state.allBills.map(data => {
        if (data.type == true) {
          return data.amount;
        } else {
          return 0;
        }
      });
      income = income.reduce((a, b) => a + b, 0);
      let expense = this.state.allBills.map(data => {
        if (data.type == false) {
          return data.amount;
        } else {
          return 0;
        }
      });
      expense = expense.reduce((a, b) => a + b, 0);
      this.setState({
        graphType: 2,
        charData: {
          labels: ['Income', 'Expenses'],
          datasets: [
            {
              label: 'Income',
              data: [income, expense],
              backgroundColor: ['	#66c537', '#cc0b59']
            }
          ]
        }
      });
    } else if (this.state.graphType == 2) {
      let temp = [...this.state.allBills];
      let content = temp.filter(data => {
        return data.type == false;
      });
      //console.log( content)

      let box = {
        Electricity: 0,
        Water: 0,
        Internet: 0,
        'Stair Cleaning': 0,
        Gardening: 0,
        'Outside Painting': 0,
        'Inside Painting': 0,
        'Fire Extinguishers': 0,
        'Antennas Maintenance': 0,
        'Door Keeper': 0,
        'Plumbing Maintenance': 0,
        'Administrative Costs': 0,
        Insurance: 0,
        'Elevator Maintenance': 0,
        Gas: 0,
        Other: 0
      };

      for (let i of content) {
        let name = i.purpose;
        let amount = i.amount;
        box[name] = box[name] + amount;
        //box.push({name: sum})
      }

      Object.keys(box).forEach(key => {
        if (!box[key]) delete box[key];
      });

      let entries = [];
      let quantities = [];

      for (let i = 0; i < Object.entries(box).length; i++) {
        entries.push(Object.entries(box)[i][0]);
        quantities.push(Object.entries(box)[i][1]);
      }
      this.setState({
        graphType: 3,
        charData: {
          labels: entries,
          datasets: [
            {
              label: "Expenses's Categories",
              data: quantities,
              backgroundColor: ['#66c537', '#03b67b', '#ff5a01', , '#cc0b59', '#922fbf']
            }
          ]
        }
      });
    } else {
      var TodayDate = new Date();
      let temp = this.state.allBills;
      let tempMonth = temp.filter(data => data.month < TodayDate.getMonth() + 1);
      let arr = temp.filter(data => {
        if (data.year == new Date().getFullYear()) {
          return data;
        }
      });

      let incomeArr = arr.filter(data => data.type == true);
      let expenseArr = arr.filter(data => data.type == false);

      let incomeObj = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0
      };

      for (let i of incomeArr) {
        let name = i.month;
        let amount = incomeObj[name] + i.amount;
        incomeObj[name] = amount;
      }

      let expenseObj = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0
      };

      for (let i of expenseArr) {
        let name = i.month;
        let amount = incomeObj[name] + i.amount;
        expenseObj[name] = amount;
      }

      Object.keys(incomeObj).forEach(key => {
        if (!incomeObj[key]) delete incomeObj[key];
      });
      Object.keys(expenseObj).forEach(key => {
        if (!expenseObj[key]) delete expenseObj[key];
      });

      let entries = [];
      let incomeQuantities = [];
      let expenseQantities = [];

      for (let i = 0; i < Object.entries(incomeObj).length; i++) {
        entries.push(Object.entries(incomeObj)[i][0]);
        incomeQuantities.push(Object.entries(incomeObj)[i][1]);
      }

      for (let i = 0; i < Object.entries(expenseObj).length; i++) {
        expenseQantities.push(Object.entries(expenseObj)[i][1]);
      }

      var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

      entries = entries.map(month => {
        return months[month - 1];
      });
      this.setState({
        graphType: 1,
        charData: {
          labels: entries,
          datasets: [
            {
              label: 'Monthly Income',
              data: incomeQuantities,
              backgroundColor: [
                '	#66c537',
                '	#66c537',
                '	#66c537',
                '	#66c537',
                '	#66c537',
                '	#66c537',
                '	#66c537',
                '	#66c537',
                '	#66c537',
                '	#66c537',
                '	#66c537',
                '	#66c537'
              ]
            },
            {
              label: 'Monthly Expenses',
              data: expenseQantities,
              backgroundColor: [
                '#cc0b59',
                '#cc0b59',
                '#cc0b59',
                '#cc0b59',
                '#cc0b59',
                '#cc0b59',
                '#cc0b59',
                '#cc0b59',
                '#cc0b59',
                '#cc0b59',
                '#cc0b59',
                '#cc0b59'
              ]
            }
          ]
        }
      });
    }
  }

  render() {
    {
      console.log(this.state.graphType);
    }

    return (
      <div>
        <button onClick={this.pieChart}>Change Graph</button>

        {this.state.graphType == 2 && (
          <Doughnut
            data={this.state.charData}
            width={50}
            height={50}
            options={{ maintainAspectRatio: false }}
          />
        )}
        {this.state.graphType == 3 && (
          <Doughnut
            data={this.state.charData}
            width={50}
            height={50}
            options={{ maintainAspectRatio: false }}
          />
        )}
        {this.state.graphType == 1 && (
          <Bar
            data={this.state.charData}
            width={50}
            height={100}
            options={{ maintainAspectRatio: false }}
          />
        )}
      </div>
    );
  }
}
