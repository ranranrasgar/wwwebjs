exports.signIn = async (req, res) => {
   try {
      client.getState().then((data) => {
         if (data) {
            console.log("authenticated");
            return  res.json({
               success: true,
               message: "success",
               data: "CONNECTED",
            });
         }

         res.json({
            success: true,
            message: "success",
            data: "localhost:3000/upload/qr.jpg",
         });
      });
   } catch (error) {
      return res.status(500).send({
         success: false,
         message: error.message,
      });
   }
};

exports.checkAuth = async (req, res) => {
   client
      .getState()
      .then((data) => {
         console.log(data);
         if (!data) {
           return res.status(400).send({
               success: false,
               message: "Disconnected",
            });
         }
            res.json({
               success: true,
               message: "Sudah Terautentikasi",
               data,
            });
         
      })
      .catch((err) => {
         if (err) {
            res.status(400).send({
               success: false,
               message: "Disconnected",
            });
         }
      });
};
