import axios from "axios";

const apiUrl = "https://ec18a006imageupload.herokuapp.com/api/";

export const singleFileUpload = async (data, options) => {
  try {
    await axios.post(apiUrl + "singleFile", data, options);
  } catch (error) {
    throw error;
  }
};
export const getSingleFiles = async () => {
  try {
    const { data } = await axios.get(apiUrl + "getSingleFiles");
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
