import routes from "./routes";

export default function Post() {
  /**
   * This function is use to edit user details
   * @param value
   * @returns
   */
  const addPost = async (value: any) => {
    const url = routes.CREATE_POST();
    console.log(url,'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    const body:any = {
      ...value
    };
    try {
      // const response: any = await axiosInstance.patch(url, body);
      const options:any = {
        method: "POST",
        headers: {
          "X-RapidAPI-Host": "sandeep test",
          'content-type':'application/json'
        },
        body:JSON.stringify(value)
      };
      fetch(
        url,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          return response;
        })
        .catch((err) => console.error(err));
    } catch (error: any) {
      await errorHandler(
        error?.response?.status,
        "patch",
        error?.response?.data?.errorMessage
      );
      return { error: true, status: error?.response?.status };
    }
  };

  const fetchPost = async () => {
    const url = routes.GET_POST();
    try {
      // const response: any = await axiosInstance.patch(url, body);
      const options:any = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "sandeep test",
          'content-type':'application/json'
        },      };
      return fetch(
        url,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          return response;
        })
        .catch((err) => console.error(err));
    } catch (error: any) {
      await errorHandler(
        error?.response?.status,
        "patch",
        error?.response?.data?.errorMessage
      );
      return { error: true, status: error?.response?.status };
    }
  };

  /**
   * Error Handler
   * @param status
   * @param methodType
   * @param message
   */
  const errorHandler = async (
    status: any,
    methodType: string,
    message: any
  ) => {
    if (status != 404 || methodType != "get") {
      const toastMessage =
        message || "We're having some issues, please check back later";
      alert(toastMessage);
      // toast.dismiss();
      // toast.error(toastMessage);
    }
    if (status === 403 || status === 401) {
      // await logout();
    }
  };
  return {
    addPost,fetchPost
  };
}
