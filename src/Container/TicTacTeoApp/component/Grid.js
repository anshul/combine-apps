/* eslint react/no-array-index-key: 0, jsx-a11y/no-noninteractive-element-interactions: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from '../styles';

class Grid extends PureComponent {
  renderBoard() {
    return this.props.board.map((row, x) =>
      <tr key={x}>
        {row.map((square, y) =>
          <td key={y} onClick={() => this.props.onSquareClick({ x, y })}>
            {square}
          </td>,
        )}
      </tr>,
    );
  }

  render() {
    return (   
       <s.parentDiv>
        <s.div>
          <table>
            <tbody>{this.renderBoard()}</tbody>
          </table>
        </s.div>  
        </s.parentDiv>   
    );
  }
}

Grid.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onSquareClick: PropTypes.func.isRequired,
};

export default Grid;
