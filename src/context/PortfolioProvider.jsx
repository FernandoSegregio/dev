import React from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from './PortfolioContext';

export default function PortfolioProvider({ children }) {
  const context = {};
  return (
    <PortfolioContext.Provider value={context}>
      {children}
    </PortfolioContext.Provider>
  );
}
PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
