import axios from "axios";
const handler = async (input) => {
  try {
    // const result = await axios.post("127.0.0.1:3000/", {
    //   redirectUrl: "https://www.youtube.com/",
    // });
    const result = await axios.post("http://localhost:3000/", {
      redirectUrl: `${input}`,
    });
    console.log("post method success", result.data.shortUrl);
    return result.data.shortUrl;
  } catch (err) {
    console.log(err);
  }
};
export default handler;
