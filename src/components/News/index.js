import React from "react";
import { Grid, Grow, Typography, ThemeProvider } from "@material-ui/core";
import { indexStyles, theme } from "./styles";
import Card from "./Card";
import info from "./info.json";

export default ({ articles, activeArticle }) => {
  const classes = indexStyles();

  if (!articles.length) {
    return (
      <ThemeProvider theme={theme}>
        <Grow in>
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {info.map((item, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.infoCard}
                key={i}
              >
                <div
                  className={classes.card}
                  style={{ background: item.color }}
                >
                  <div className="">
                    <Typography variant="h5">{item.title}</Typography>
                    <hr className="seprator" />
                  </div>
                  {item.info ? (
                    <Typography variant="h6">
                      <strong>{item.title.split(" ")[2]}:</strong>
                      <br />
                      {item.info}
                    </Typography>
                  ) : null}

                  <Typography variant="h6">
                    Try saying: <br /> <em>{item.text}</em>
                  </Typography>
                  {item.title.includes("Latest") ? (
                    <Typography variant="h6">
                      And: <br /> <em>{item.subtext}</em> <br />
                      to return to homepage.
                    </Typography>
                  ) : null}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grow>
      </ThemeProvider>
    );
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
            key={i}
          >
            <Card article={article} i={i} activeArticle={activeArticle} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};
