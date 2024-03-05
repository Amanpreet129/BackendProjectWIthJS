const AsyncHanlder = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(`ERROR in ${fn}: ${error}`);
      res
        .status(error.code || 500)
        .json({ success: false, msg: error.message || "Something went wrong" });
    }
  };
};
