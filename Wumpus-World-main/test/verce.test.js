const axios = require('axios');

const DEPLOYED_URL = "https://wumpus-world-psu7.vercel.app/"; // Replace with your deployed URL

describe("Vercel Deployment Test", () => {
  it("should respond with status 200", async () => {
    const response = await axios.get(DEPLOYED_URL);
    expect(response.status).toBe(200);
  });

  it("should serve the correct content", async () => {
    const response = await axios.get(DEPLOYED_URL);
    expect(response.data).toContain("Wumpus world"); // Adjust based on your expected content
  });
});
