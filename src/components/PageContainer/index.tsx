import { Box } from "@mui/material";
import MapContainer from "../MapContainer";
import PageHeader from "../PageHeader";
import RouteSelector from "../RouteSelector";

export default function PageContainer() {
  return (
    <>
      <PageHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <RouteSelector />
        <MapContainer />
      </Box>
    </>
  );
}
