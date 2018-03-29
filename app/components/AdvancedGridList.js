import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

class AdvancedGridList extends React.Component{
  constructor() {
    super();
    this.state = {
      col: (window.screen.availWidth < 400) ? 2 : 4
    }
    this.updateCol = this.updateCol.bind(this);
  }
  updateCol(){
    if(window.innerWidth < 400){
      console.log(true);
      this.setState({col: 2});
    }else{
      this.setState({col: 4});
    }
  }
  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateCol();
    window.addEventListener("resize", this.updateCol);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateCol);
  }
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={'auto'} spacing={1} cols={this.state.col} className={classes.gridList}>
          {this.props.fileData.map( (tile,key) => (
            <GridListTile key={'tile' + key} cols={1} row={1} >
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  fileData: PropTypes.array
};

export default withStyles(styles)(AdvancedGridList);