import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import AdvancedGridList from './AdvancedGridList';
import HackerNews from './HackerNews';
import Work from './Work';
import Developer from './Developer';
import imageData from '../data/imageData';
import heroData from '../data/heroData';

function TabContainer(props) {
  return (
    <Typography component="div" className="padding-responsive">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Home extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="My Skills" />
            <Tab label="Cat Gallery"  />
            <Tab label="Hacker News" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Work/></TabContainer>}
        {value === 1 && <TabContainer><AdvancedGridList fileData={heroData}/></TabContainer>}
        {value === 2 && <TabContainer><HackerNews/></TabContainer>}
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
