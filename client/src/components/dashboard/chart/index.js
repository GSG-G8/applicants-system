import React from 'react';
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import axios from 'axios';

class ChartsPage extends React.Component {
  state = {
    dataLine: '',
  };

  componentDidMount = async () => {
    const SubmittedDates = (
      await axios.get('api/v1/dashboard/applicants')
    ).data.data.map(({ applicationSubmittedDate }) =>
      applicationSubmittedDate ? applicationSubmittedDate.split('-')[1] : ''
    );
    const Months = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
    ];
    const countSubmittedDates = Months.map((item) => {
      let counter = 0;
      SubmittedDates.reduce((prevVal, curVal) => {
        if (curVal === item) {
          counter += 1;
        }
        return 0;
      }, 0);
      return `${counter}`;
    });

    this.setState({
      dataLine: {
        labels: [
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
          'December',
        ],
        datasets: [
          {
            label: 'Monthly Submitted Applicants',
            fill: true,
            lineTension: 0.3,
            backgroundColor: 'transparent',
            borderColor: '#ed6d23',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#ed6d23',
            pointBackgroundColor: '#ffffff',
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: 'rgba(220, 220, 220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: countSubmittedDates,
          },
        ],
      },
    });
  };

  render() {
    const { dataLine } = this.state;
    return (
      <>
        {dataLine && (
          <MDBContainer>
            <Line data={dataLine} options={{ responsive: true }} />
          </MDBContainer>
        )}
      </>
    );
  }
}

export default ChartsPage;
