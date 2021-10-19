import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMutualFundData } from "./fundSlice";
import { Container, Typography } from "@mui/material";

export const FundListing = () => {
  const { funds } = useSelector((state) => state.funds);
  console.log(funds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMutualFundData());
  }, [dispatch]);

  return (
    <div>
      <h3>Fund Listing</h3>
      <Container maxWidth="xs">
        {funds.map((fund) => {
          const {  meta } = fund;
          return (
            <Container
              key={meta.scheme_code}
              sx={{
                border: "1px solid black",
                marginBottom: "1rem",
                padding: "1rem",
                cursor: "pointer",
              }}
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
