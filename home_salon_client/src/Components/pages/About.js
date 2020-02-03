import React, { Component } from "react";

import { Card, CardContent, Grid, Button } from "@material-ui/core";
import '../../stylesheets/About.scss'

class About extends Component {
  state = {};

  testimonialList = [
    {
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Fugit modi voluptas vero iusto fuga quos totam
      eius, atis magnam tempora doloribus ducimus dolorem
      culpa animi beatae tenetur! Sapiente, quia tempora."`,
    
    },
    {
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Fugit modi voluptas vero iusto fuga quos totam
      eius, atis magnam tempora doloribus ducimus dolorem
      culpa animi beatae tenetur! Sapiente, quia tempora."`,
  
    },
    {
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Fugit modi voluptas vero iusto fuga quos totam
      eius, atis magnam tempora doloribus ducimus dolorem
      culpa animi beatae tenetur! Sapiente, quia tempora."`,
    },

  ];

  render() {
    return (
      <div className="landing">
      <div className="section section-testimonial1" id="testimonial2">
        <div className="container">
          <div className="section__header">
            <h2>About Me</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              unde inventore molestias ab adipisci eius nisi placeat at.
            </p>
          </div>

          <Grid container spacing={4}>
            {this.testimonialList.map((testimonial, index) => (
              <Grid item md={4} sm={4} key={index}>
                <Card className="h-100 px-24 card">
                  <CardContent className="testimonial1__card-content">
                    <div className="pb-16">
                    
                      <p className="m-0">{testimonial.comment}</p>
                    </div>

                    <div className="card__user">
                     
                      <div className="pl-16">
                        <p className="m-0">
                          <strong>blah</strong>
                        </p>
                        <p className="m-0"></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <div className="text-center pt-40">
            <Button variant="contained" size="large" color="secondary">
              load more
            </Button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default About;