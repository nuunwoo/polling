const func = async (url) => {
  try {
    const response = await fetch(url, get);
    if (response.status === 502) {
      await func(url);
    } else if (response.status !== 200) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await func(url);
    } else {
      let result = await response.json();
      if (result) console.log(result);
      if (result.length === 0) delay = 60000;
      else delay = 1000;

      setTimeout(() => func(url), delay);
    }
  } catch (err) {
    setTimeout(() => func(url), delay);
  }
};
