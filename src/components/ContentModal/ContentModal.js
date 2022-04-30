import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import "./ContentModal.css";
import axios from "axios";
import { useEffect, useState } from "react";

import { unavailable, unavailableLandscape } from "../config/config";
import { YouTube } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  height: "80%",
};

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=0da96188f2a5a645e7beed07147dd6f0&language=en-US`
    );

    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=0da96188f2a5a645e7beed07147dd6f0&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <>
      <div>
        <Button onClick={handleOpen} type="button" className="media">
          {children}
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            {content && (
              <Box sx={style}>
                <div className="ContentModal">
                  {/*<img
                      alt={content.name || content.title}
                      className="Content__potrait"
                       src={content.poster_path
                       ?`${"https://image.tmdb.org/t/p/w500"}/${content.poster_path}`
                       :unavailable
                       }
                      />*/}
                  <img
                    src={
                      content.backdrop_path
                        ? `${"https://image.tmdb.org/t/p/w500"}/${
                            content.backdrop_path
                          }`
                        : unavailableLandscape
                    }
                    alt={content.name || content.title}
                    className="ContentModal__landscape"
                  />
                  <div className="ContentModal__about">
                    <span className="ContentModal__title">
                      {content.name || content.title}(
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                      ).substring(0, 4)}
                      )
                    </span>
                    {content.tagline && (
                      <i className="tagline">{content.tagline}</i>
                    )}
                    <span className="ContentModal__description">
                      {content.overview}
                    </span>
                    <div> </div>
                    <Button
                      variant="contained"
                      startIcon={<YouTube />}
                      color="secondary"
                      target="__blank"
                      href={`https://www.youtube.com/watch?v=${video}`}
                    >
                      Watch the trailer
                    </Button>
                  </div>
                </div>
              </Box>
            )}
          </Fade>
        </Modal>
      </div>
    </>
  );
}
