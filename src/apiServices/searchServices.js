import * as request from "~/utils/request";

export const search = async (q, type = "less") => {
  try {
    const response = await request.get("users/search", {
      params: {
        q,
        type,
      },
    });

    if (!response.data) {
      throw new Error("Something went wrong!");
    }

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
