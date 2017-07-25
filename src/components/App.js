import React, {Component} from 'react';
import PropTypes from 'prop-types';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
    render() {
        return (
            <div>
                {/* <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >

                </MuiThemeProvider> */}
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;