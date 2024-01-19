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
  const apiUrl = await fetch(
    "https://trawelfreeby.jdinfotech.net/api/holidays"
  );
  const result = await apiUrl.json();
  console.log(result.data);
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
export const getSingleTour = async () => {
  const apiUrl = await fetch("https://trawelfreeby.jdinfotech.net/api/tours/1");
  const result = await apiUrl.json();
  console.log(result.data);
};
