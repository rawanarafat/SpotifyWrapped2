import express from "express";
import querystring from "querystring";
import axios from "axios";

const router = express.Router();

// Update your login route to use the deployment URL
router.get("/login", async (req, res) => {
  try {
    const queryString = querystring.stringify({
      response_type: "code",
      client_id: "5bb070ff4bdd46cf8598411dc53e7b8a",
      // Update the redirect_uri to match your deployment URL
      redirect_uri: "https://spotifywrapped.onrender.com/auth/callback",
      scope: "user-library-read, user-top-read",
    });

    const authorizationURL =
      "https://accounts.spotify.com/authorize?" + queryString;

    res.status(200).json({ authorizationURL });
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});


router.get("/callback", async function (req, res) {
  const code = req.query.code || null;

  try {
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      method: "post",
      params: {
        code: code,
        // Update the redirect_uri to match your deployment URL
        redirect_uri: "https://spotifywrapped.onrender.com/auth/callback",
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
          ).toString("base64"),
      },
    };

    const response = await axios(authOptions);

    // Your existing logic
    // ...

    // Update the redirect URL after successful authorization
    res.redirect("https://spotifywrapped.onrender.com/mytop/topTracks");
  } catch (error) {
    console.error("Error exchanging the authorization code:", error);
    res.status(500).send("An error occurred during authorization.");
  }
});


export { router as userRouter };
