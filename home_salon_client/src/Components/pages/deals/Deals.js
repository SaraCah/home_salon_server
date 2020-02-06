import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import DealItem from './Dealtem';
import { getDeals } from '../../../actions/deal';
import DealForm from './DealForm';
import {
  Grid,
  Divider,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";


const Deals = ({ getDeals, deal: { deals, loading } }) => {
  useEffect(() => {
    getDeals();
  }, [getDeals]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
    <div className="landing">
      <div className="container">
      <div className="section__header">
      <div className="text-center">
      <div className="section-intro1__subtitle mb-24 text-secondary"></div>
      <Grid container spacing={6}>
        {deals.map(deal => (
          <DealItem key={deal._id} deal={deal} />
        ))}
        </Grid>
      
      </div>
      </div>
      </div>
      </div>
  


    </Fragment>
  );
};

Deals.propTypes = {
  getDeals: PropTypes.func.isRequired,
  deal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  deal: state.deal
});

export default connect(
  mapStateToProps,
  { getDeals }
)(Deals);
