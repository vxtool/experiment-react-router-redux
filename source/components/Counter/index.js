import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions';
import { hexa } from '../../helpers';

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement } = this.props;
    const nnn = Array.apply(0, Array((counter > 0 ? counter : 0) + 1))
      .reduce((acc, curr, idx) => {
        if (idx === 0) {
          acc.push('n');
        } else {
          acc.push(<span style={{ color: `#${hexa()}` }}>n</span>);
        }
        return acc;
      }, []);
    const className = counter >= 0 ? 'success' : 'danger';
    return (
      <section>
        <h1>Cou{nnn}ter</h1>
        <h4>A simple counter</h4>
        <div className="group">
          <button className="btn btn-danger" onClick={() => onDecrement()}>-</button>
          {' '}
          <button className="btn" onClick={() => onIncrement()}>+</button>
        </div>
        <span className={`counter ${className}`}>{counter}</span>
      </section>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { counter } = state;
  return {
    counter,
  };
};
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
