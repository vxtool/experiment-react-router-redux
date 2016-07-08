import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { grids } = this.props;
    return (
      <section>
        <h1>Home</h1>
        <h4>A simple grid</h4>
        <div className="limiter">
        {grids.map((item, key) => (
          <div className="row" key={key}>
            {grids.slice(0, key + 1)
              .map((i, k) =>
                <div key={k} className={`col-${key + 1}`}><span>grid-{key + 1}</span></div>)}
          </div>
        ))}
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  grids: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const { grids } = state;
  return {
    grids,
  };
};

export default connect(mapStateToProps)(Home);
