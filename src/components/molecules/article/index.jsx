import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const Article = ({ article }) => {
  const {
    title,
    media,
    des_facet,
    abstract,
    byline,
    org_facet,
    per_facet,
    id,
  } = article;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const imageSource = media[0];
  const image =
    imageSource && imageSource["media-metadata"]
      ? imageSource["media-metadata"][2]
      : {
          url: "https://static01.nyt.com/images/2024/07/11/multimedia/11nat-heat-SWAP-qhkc/11nat-heat-SWAP-qhkc-mediumThreeByTwo440.jpg",
          format: "mediumThreeByTwo440",
          height: 293,
          width: 440,
        };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          variant="h4"
          fontWeight={800}
          data-testid={`article-detail-title-${title}`}
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <Typography mb={3}>{imageSource?.caption}</Typography>
          <img
            src={image.url}
            alt={media[0]?.caption}
            width={"100%"}
            height={image.height + 100}
          />
          <Box display={"flex"} justifyContent={"flex-end"} mb={3}>
            <Typography variant="caption">{imageSource?.copyright}</Typography>
          </Box>
          <DialogContentText id="alert-dialog-description">
            {abstract}
            {abstract}
            {abstract}
          </DialogContentText>
          <Box my={3}>
            <Typography borderBottom={"1px solid black"} component={"span"}>
              {byline}
            </Typography>
          </Box>
          <Typography variant="subtitle1" fontWeight={800}>
            Keywords:
          </Typography>
          {per_facet?.map((name) => (
            <Typography key={name}>{name}</Typography>
          ))}
          {org_facet?.map((name) => (
            <Typography key={name}>{name}</Typography>
          ))}
          {des_facet?.map((name) => (
            <Typography key={name}>{name}</Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        display={"flex"}
        flexDirection={"row-reverse"}
        justifyContent={"space-between"}
        borderBottom={"1px solid black"}
        pb={2}
        mb={2}
        data-testid={`article-${id}`}
      >
        <img
          src={image.url}
          alt={media[0]?.caption}
          width={image.width}
          height={image.height}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography variant="h5" fontWeight={800}>
              {title}
            </Typography>
            <Box mt={4}>
              <Typography variant="body" width={350} component={"p"}>
                {abstract}
              </Typography>
            </Box>
          </Box>
          <Box mt={3}>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              data-testid={"article-read-button-" + id}
            >
              4 Min Read
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
