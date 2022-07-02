import axios from "axios";

const LappaAPI = axios.create({
     baseURL: `https://validacion.hgtsa.com.ar/app/`,
     headers: { "Content-Type": "application/json" },
});

export const getToken = (dataForm) => {
     axios.post(`https://validacion.hgtsa.com.ar/app/login`, {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataForm)
     }).then((res)=> {
        console.log(res.data)
     })
};
