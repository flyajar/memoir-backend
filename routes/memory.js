const express = require("express");
const router = express.Router();
const Memory = require("../models/Memory");

router.get("/test", (request, response) => {
  return response.json({message: "memory route test!"});
});

router.get("/", (request, response) => {
  Memory.find()
    .then((memories) => {
      return response.json(memories);
    })
    .catch((error) => {
      return response.status(404).json({
        message: "No memories found",
      });
    });
});

router.get("/:id", (request, response) => {
  Memory.findById(request.params.id)
    .then((memory) => {
      return response.json(memory);
    })
    .catch((error) => {
      return response.status(404).json({
        message: "No memory found",
      });
    });
});

router.post("/", (request, response) => {
  Memory.create(request.body)
    .then((memory) => {
      return response.json({
        message: "Memory added succesfully.",
      });
    })
    .catch((error) => {
      return response.status(400).json({
        message: "Unable to add this memory.",
      });
    });
});

router.put("/:id", (request, response) => {
  Memory.findByIdAndUpdate(request.params.id, request.body)
    .then((memory) => {
      return response.json({
        message: "Memory updated successfully.",
      });
    })
    .catch((error) => {
      return response.status(400).json({
        message: "Unabled to update this memory.",
      });
    });
});

router.delete('/:id', (request, response) => {
  Memory.findByIdAndRemove(request.params.id, request.body)
    .then((memory) => {
      return response.json({
        message: "Memory entry successfully deleted."
      })
    }).catch((error) => {
      return response.status(404).json({
        message: "Memory not found."
      })
    })
})


module.exports = router;