// home page data

export const getHome = async () => {
  const req = await fetch(
    `https://trawelfreeby.jdinfotech.net/trawelfreeby/api/home`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await req.json();
  return response.data;
};

//about page data
export const getAbout = async () => {
  const req = await fetch(
    `https://trawelfreeby.jdinfotech.net/trawelfreeby/api/about`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await req.json();
  return response.data;
};

//blog page data
export const getBlog = async () => {
  const req = await fetch(
    `https://trawelfreeby.jdinfotech.net/trawelfreeby/api/blog`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await req.json();
  return response.data;
};

// single blog data
export const getSingleBlog = async () => {
  const req = await fetch(
    `https://trawelfreeby.jdinfotech.net/trawelfreeby/api/blog/1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await req.json();
  return response.data;
};

// holidays page data
export const getHolidays = async () => {

  const req = await fetch(
    `https://trawelfreeby.jdinfotech.net/trawelfreeby/api/holidays`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await req.json();
  return response.data;
};

//tour page data

export const getTour = async () => {
  const req = await fetch(
    `https://trawelfreeby.jdinfotech.net/trawelfreeby/api/tours`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await req.json();
  return response.data;
};


// single tour page
export const getSingleTour = async (id) => {
  const req = await fetch(
    `https://trawelfreeby.jdinfotech.net/trawelfreeby/api/tours/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await req.json();
  return response.data;
};
