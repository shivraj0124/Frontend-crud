import axios from "axios";

class Post {
  create(formData) {
    const url = "https://backend-crud-sk.vercel.app/api/create-post";

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  }

  getPost() {

    const url = "https://backend-crud-sk.vercel.app/api/get-post";

    return axios.get(url);
  }

  deletePost(id) {

    const url = "https://backend-crud-sk.vercel.app/api/delete-post/" + id;

    return axios.get(url);
  }

  update(formData) {

    const url = "https://backend-crud-sk.vercel.app/api/update-post";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  }
}

export default new Post();
