const LINE_SERVICE_HOST = process.env.NEXT_PUBLIC_LINE_SERVICE_HOST;

export const getStations = async (lineId?: number) => {
  const url = `${LINE_SERVICE_HOST}/line/all`;
  const response = await fetch(url, {
    method: "POST",
    body: lineId ? JSON.stringify({ lineId: lineId }) : "",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("res", response);
};
