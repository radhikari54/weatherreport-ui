import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import s from './Dashboard.css';

// Renders the dashboard
class Dashboard extends React.Component {
  static propTypes = {
    reports: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        weather: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Current Weather by Office</h1>
          <MuiThemeProvider>
            <Table>
              <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn>City</TableHeaderColumn>
                  <TableHeaderColumn>Weather</TableHeaderColumn>
                  <TableHeaderColumn>Description</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {this.props.reports.map(report => (
                  <TableRow>
                    <TableRowColumn>{report.name}</TableRowColumn>
                    <TableRowColumn>
                      <img
                        alt="Weather icon"
                        src={`http://openweathermap.org/img/w/${report
                          .weather[0].icon}.png`}
                      />
                      {report.weather[0].main}
                    </TableRowColumn>
                    <TableRowColumn>
                      {report.weather[0].description}
                    </TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Dashboard);
