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

    // You can use the access token from the response to make requests to Spotify's API on behalf of the user
    const access_token = response.data.access_token;
    // You might also receive a refresh token, depending on the scope you requested
    res.cookie("access_token", access_token);
    res.cookie("spotifyExpiry", response.data.expires_in);
    res.cookie("spotifyRefreshToken", response.data.refresh_token);
    const tokenCreationTime = Date.now();
    res.cookie("tokenCreationTime", tokenCreationTime);
    // Further logic and processing can be performed here, such as saving the access token in a database or using it to fetch user data from Spotify
    console.log(response.data, " + ", access_token);
    //res.send("Authorization successful!");
    //res.status(200).send("Authorization successful!");
    res.redirect("https://spotifywrapped.onrender.com/mytop/TopTracks");
    // Respond to the client or redirect to another page after successful authorization
  } catch (error) {
    console.error("Error exchanging the authorization code:", error);
    res.status(500).send("An error occurred during authorization.");
  }
});

export { router as userRouter };
