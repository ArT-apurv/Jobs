const getJob = async (req, res) => {
  res.send("getJob user");
};

const getAllJobs = async (req, res) => {
  res.send("getAllJobs user");
};

const updateJob = async (req, res) => {
  res.send("update jobs");
};

const deleteJobs = async (req, res) => {
  res.send("delete jobs");
};

const createJobs = async (req, res) => {
  res.send("create jobs");
};

module.exports = { getJob, getAllJobs, updateJob, deleteJobs, createJobs };
