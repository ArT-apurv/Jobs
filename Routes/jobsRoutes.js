const express = require("express");
const router = express.Router();

const {
  createJobs,
  getAllJobs,
  getJob,
  deleteJobs,
  updateJob,
} = require("../Controllers/jobsController");

router.route("/").post(createJobs).get(getAllJobs);
router.route("/:id").get(getJob).delete(deleteJobs).patch(updateJob);

module.exports = router;
