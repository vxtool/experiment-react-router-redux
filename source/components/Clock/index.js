import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { fetchDatas } from '../../actions';

class Clock extends Component {
  render() {
    const { datas, isFetching, addMore } = this.props;
    const buttonClass = classnames('btn', { 'btn-disable': isFetching });
    const buttonText = isFetching ? 'Loadding...' : 'Add More';
    return (
      <section>
        <h1>Clock</h1>
        <h4>An async call example</h4>
        <div className="group">
          <button className={buttonClass} onClick={() => addMore()}>{buttonText}</button>
        </div>
        <div className="limiter">
          {datas.map((i, k) => <p key={k}>{i}</p>)}
        </div>
      </section>
    );
  }
}

Clock.propTypes = {
  datas: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  addMore: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { stores } = state;
  const {
    datas,
    isFetching,
  } = stores || { datas: [], isFetching: false };
  return {
    datas,
    isFetching,
  };
};
const mapDispatchToProps = dispatch => ({
  addMore: () => dispatch(fetchDatas()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
