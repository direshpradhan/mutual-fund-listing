import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const FundListing = () => {
  const { funds } = useSelector((state) => state.funds);
  console.log(funds);
  const navigate = useNavigate();

  return (
    <div>
      <h3>Fund Listing</h3>
      <Container maxWidth="xs">
        {funds.map((fund) => {
          const { meta } = fund;
          return (
            <Container
              key={meta.scheme_code}
              sx={{
                border: "1px solid black",
                marginBottom: "1rem",
                padding: "1rem",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/fund/${meta.scheme_code}`)}
            >
              <Typography variant="body1" sx={{}}>
                {meta.scheme_name}
              </Typography>
              <Typography variant="body2" color="initial">
                {meta.fund_house}
              </Typography>
            </Container>
          );
        })}
      </Container>
    </div>
  );
};
