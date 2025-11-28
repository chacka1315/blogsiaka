const getCorsOptions = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      origin: [process.env.WEB_PAGE_URL, process.env.ADMIN_PAGE_URL],
      credentials: true,
    };
  }

  return {
    origin: '*',
  };
};

export default getCorsOptions;
