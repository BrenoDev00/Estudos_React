import { useState } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";

export const Buttons: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h2>Buttons</h2>

      <div>
        <Button
          startIcon={<SendIcon />}
          size="large"
          color="success"
          variant="contained"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          update count
        </Button>

        <Button
          endIcon={<DeleteIcon />}
          color="error"
          variant="outlined"
          onClick={() => setCount(0)}
          style={{ marginLeft: "10px" }}
        >
          reset count
        </Button>

        <IconButton
          style={{ marginLeft: "10px" }}
          onClick={() => alert("clicked")}
        >
          <DeleteIcon />
        </IconButton>

        <IconButton style={{ marginLeft: "10px" }}>
          <ShoppingCartIcon fontSize="small" />
          <Badge
            badgeContent={count}
            style={{ bottom: "20px", color: "red" }}
          />
        </IconButton>

        <Button variant="text" style={{ marginLeft: "10px" }}>
          Click
        </Button>

        <Button
          size="small"
          variant="contained"
          href="/not-found"
          style={{ marginLeft: "10px" }}
          disabled={count < 3}
        >
          Link Button
        </Button>

        <div style={{ marginTop: "10px" }}>Count is {count}</div>
      </div>
    </>
  );
};
