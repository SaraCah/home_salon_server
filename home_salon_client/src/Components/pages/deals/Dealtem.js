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
  <Grid item md={4} sm={4} >
     <Card className="text-center card">
      <CardContent className="testimonial1__card-content">
      <CardHeader className="pricing1__card-header" title={dealname} />
        <h4>{price}</h4>
        <h4>{services}</h4>
        {!auth.loading && auth.admin && (
          <button onClick={e => deleteDeal(_id)}>Delete</button>
        )}
        ;
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
