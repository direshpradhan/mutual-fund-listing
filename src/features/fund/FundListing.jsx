import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const FundListing = () => {
  const { funds } = useSelector((state) => state.funds);
  console.log(funds);
  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
        {funds.map((fund) => {
          const { meta } = fund;
          return (
            <Container
              key={meta.scheme_code}
              sx={{
                border: "1px solid gray",
                borderRadius: "0.5rem",
                marginBottom: "1rem",
                padding: "1rem",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/fund/${meta.scheme_code}`)}
            >
              <Typography variant="body1" sx={{ fontSize: "1.05rem" }}>
                {meta.scheme_name}
              </Typography>
              <Typography variant="body2" color="initial">
                {meta.fund_house}
              </Typography>
            </Container>
          );
        })}
      </Container>
    </>
  );
};
