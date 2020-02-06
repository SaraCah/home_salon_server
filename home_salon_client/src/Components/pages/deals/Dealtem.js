import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteDeal } from "../../../actions/deal";
import {
  Grid,
  Divider,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";

const DealItem = ({
  auth,
  deleteDeal,
  deal: { _id, dealname, price, services }
}) => (
  <Grid  lg={3} md={3} sm={6} xs={12} >
     <Card className="text-center card">
      <CardHeader className="pricing1__card-header pricing1__highlighted pink" title={dealname} />
      <Divider />
      <CardContent className="pricing1__card-content">
        <h2 className="font">${price}.00</h2>

        <h3>{services}</h3>
        {!auth.loading && auth.admin && (
          <button onClick={e => deleteDeal(_id)}>Delete</button>
        )}
      </CardContent>
    </Card>
  </Grid>
);

DealItem.defaultProps = {
  showActions: true
};

DealItem.propTypes = {
  deal: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteDeal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteDeal })(DealItem);
