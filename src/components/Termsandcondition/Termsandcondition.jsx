import React from "react";
import "./Termsandcondition.scss";
import Glassmorph from "../Glassmorph/Glassmorph";
import { Typo_Basefont, Typo_Smallfont } from "../Typo/Typo";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Termsandcondition = () => {
  return (
    <div className="Termsandcondition">
      <Glassmorph
        uri={
          "https://b.zmtcdn.com/data/zomaland/c94a1e779c5f3126720dcfb0c6a8dad81733740463.png"
        }
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            background: "black",
            borderRadius: 2,
            marginBlock: 4,
            minHeight: "70vh",
            padding: 6,
          }}
        >
          <h2>Terms and Condition</h2>
          <Box sx={{ paddingBlock: 1 }}>
            <Typo_Basefont
              text="Because even fun needs some rules!"
              fc="#787878"
              fs="1.8rem"
            />
          </Box>
          <p>
            ---------------------------------------------------------------------------------------
          </p>

          <Box sx={{ padding: 2 }}></Box>

          <Box sx={{ paddingBlock: 1 }}>
            <Typo_Basefont
              text={
                <>
                  <p>1. Ticket &amp; Entry:</p>
                  <p>
                    Your ticket is your golden passport to cosmic vibes. Keep it
                    safe&mdash;no ticket, no entry, no exceptions, no drama.
                  </p>
                  <p>
                    Tickets are non-refundable, non-transferable, and cannot be
                    used to barter for camels, stardust, or anything else.
                  </p>
                  <p>&nbsp;</p>
                  <p>2. Age Restrictions:</p>
                  <p>
                    This is a 21+ event, so bring your ID. If you look younger
                    than 21, thank your genes but also show proof of age.
                  </p>
                  <p>&nbsp;</p>
                  <p>3. No Cosmic Gatecrashing:</p>
                  <p>
                    Even if you come from another planet, entry is strictly for
                    those with tickets. Climbing walls, sneaking in through the
                    sand dunes, or teleporting in is strictly prohibited.
                  </p>
                  <p>&nbsp;</p>
                  <p>4. Weather or Not:</p>
                  <p>
                    It&rsquo;s Ajmer, folks&mdash;expect sand, stars, and
                    surprises! The concert goes on, come rain, shine, or meteor
                    shower. No refunds for weather-related issues.
                  </p>
                  <p>&nbsp;</p>
                  <p>5. Behavior &amp; Conduct:</p>
                  <p>
                    Bring your best vibes, not your bad moods. We have zero
                    tolerance for fights, inappropriate behavior, or anything
                    that ruins someone else&rsquo;s cosmic journey. Violators
                    will be ejected faster than a spaceship hitting warp speed.
                  </p>
                  <p>&nbsp;</p>
                  <p>6. Safety First:</p>
                  <p>
                    Follow all instructions from the event crew. If you see a
                    UFO, don&rsquo;t panic; just call security.
                  </p>
                  <p>No fireworks, weapons, or alien pets allowed.</p>
                  <p>&nbsp;</p>
                  <p>7. Food &amp; Beverages:</p>
                  <p>
                    Outside food and drinks are not allowed. We have a galaxy of
                    snacks and drinks waiting for you inside.
                  </p>
                  <p>&nbsp;</p>
                  <p>8. No Backstage Hopping:</p>
                  <p>
                    Backstage is strictly for artists, crew, and intergalactic
                    VIPs. Stay in the audience zones, stargazer!
                  </p>
                  <p>&nbsp;</p>
                  <p>9. Photography &amp; Recording:</p>
                  <p>
                    Bring your phones and cameras but be respectful. No annoying
                    flashes or obstructing others&rsquo; views. The cosmos
                    doesn&rsquo;t appreciate photobombing.
                  </p>
                  <p>&nbsp;</p>
                  <p>10. Parking:</p>
                  <p>
                    Parking is available, but at your own risk. We&rsquo;re not
                    responsible if your car gets abducted by aliens or kissed by
                    camels.
                  </p>
                  <p>&nbsp;</p>
                  <p>11. Liability:</p>
                  <p>
                    We&rsquo;re here to rock, not babysit. Attend at your own
                    risk. Not liable for lost belongings, bad dance moves, or
                    accidental encounters with stardust.
                  </p>
                  <p>&nbsp;</p>
                  <p>12. Ticket Scalping:</p>
                  <p>
                    Buying tickets from unauthorized sources is a no-go. If you
                    get scammed, the cosmos will sigh, but we won&rsquo;t help.
                  </p>
                  <p>&nbsp;</p>
                  <p>13. Have Fun:</p>
                  <p>
                    This is a party, not a board meeting. Let loose, groove, and
                    enjoy the magical dunes!
                  </p>
                </>
              }
              fc="#eeeeee"
              fs="1.6rem"
            />
          </Box>

          <p>
            ---------------------------------------------------------------------------------------
          </p>

          <Box sx={{ padding: 2 }}></Box>

          <h2>Privacy Policy</h2>
          <Box sx={{ paddingBlock: 1 }}>
            <p>&nbsp;</p>
            <ul>
              <li>
                We collect personal information, such as your name, email, and
                payment details, solely for booking and customer support
                purposes.
              </li>
              <li>
                Your data is securely stored and shared only with trusted
                partners necessary for processing transactions and delivering
                services.
              </li>
              <li>
                We do not sell or disclose your information to third parties for
                marketing without your explicit consent.
              </li>
              <li>
                Cookies may be used to enhance your experience, and you can
                manage these through your browser settings.
              </li>
              <li>
                By using our website, you agree to our Privacy Policy; contact
                us for any questions or concerns.
              </li>
            </ul>
            <p>&nbsp;</p>
          </Box>

          <Box sx={{ padding: 2 }}></Box>

          <h2>Refund Policy</h2>
          <Box sx={{ paddingBlock: 1 }}>
            <p>
              All ticket sales are final, and no refunds will be issued once a
              booking is confirmed. In case of event cancellation or
              rescheduling, refunds or exchanges will be handled as per the
              event organizer's policy. Please review all details carefully
              before completing your purchase.
            </p>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Termsandcondition;
