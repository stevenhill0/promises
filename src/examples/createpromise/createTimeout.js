const createTimeout = (time) => {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject('A number is required');
    }
    setTimeout(resolve, time);
  });
};

export default createTimeout;
