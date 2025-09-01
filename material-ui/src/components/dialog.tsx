import { Dialog, Button, DialogTitle, DialogContent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
export const DialogComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const [selectedEmail, setSelectedEmail] = useState<string>("");

  const emails: string[] = ["fulano@mail.com", "ciclano.meuemail@mail.com"];

  return (
    <>
      <h2>Dialog</h2>

      {selectedEmail && <p>Email selecionado: {selectedEmail}</p>}

      <Button
        variant="text"
        color="secondary"
        onClick={() => setIsDialogOpen(true)}
      >
        Open modal
      </Button>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle
          style={{ backgroundColor: "black", color: "white" }}
          textAlign={"center"}
        >
          Selecionar e-mail
        </DialogTitle>

        <DialogContent style={{ backgroundColor: "black" }}>
          {emails.map((email) => {
            return (
              <div
                key={email}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                }}
              >
                <p style={{ color: "white" }}>{email}</p>

                <Button
                  startIcon={<AddIcon />}
                  onClick={() => {
                    setSelectedEmail(email);
                    setIsDialogOpen(false);
                  }}
                >
                  Select
                </Button>
              </div>
            );
          })}
        </DialogContent>
      </Dialog>
    </>
  );
};
