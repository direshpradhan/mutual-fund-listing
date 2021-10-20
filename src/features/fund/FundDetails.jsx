import { Chip, CircularProgress, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

export const FundDetails = () => {
  const { fundId } = useParams();
  const { funds } = useSelector((state) => state.funds);
  const fund = funds.find((fund) => fund.meta.scheme_code === Number(fundId));
  const [historicData, setHistoricData] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    fund &&
      historicData.length === 0 &&
      setHistoricData([...fund.data].reverse());
    !token && navigate("/login");
  }, [fund, historicData, token, navigate]);
  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
        {historicData.length === 0 ? (
          <Container maxWidth="xs">
            <CircularProgress
              style={{ color: "#3B82F6" }}
              size={100}
              thickness={1.5}
            />
          </Container>
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((data) => data.date),
                datasets: [
                  {
                    data: historicData.map((data) => data.nav),
                    label: "Price",
                    borderColor: "#3B82F6",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 0.75,
                  },
                },
              }}
            />
            <Typography
              variant="h6"
              sx={{ marginTop: "1rem", fontWeight: "bold" }}
            >
              {fund?.meta.scheme_name}
            </Typography>
            <Typography variant="body1" color="initial">
              {fund?.meta.fund_house}
            </Typography>

            <Chip label={fund?.meta.scheme_category} />

            <Typography variant="body1" sx={{ marginTop: "1rem" }}>
              NAV:{" "}
              <span style={{ fontWeight: "bold" }}>₹ {fund?.data[0].nav}</span>
            </Typography>
          </>
        )}
      </Container>
    </>
  );
};
