const convertNumber = (number) => {
   // console.log(number);
   let result = "";
   if (number[0] === "0") {
      result = "62" + number.substring(1);
   } else if (number[0] === "+") {
      result = number.substring(1);
   } else {
      result = "62" + number;
   }
   console.log(result);
   return result;
};


exports.sendMessage = async (req, res) => {
   try {
      const { data } = req.body;
    
      console.log("ISI DATA",data);
      console.log("ISI BODY",req.body);

     

      await Promise.all(
         data.map(async (item) => {
            const sendChat = await client.sendMessage(convertNumber(item.to) + "@c.us", item.body);
            console.log(sendChat.to , sendChat.body);
         })
      );

      res.status(200).json({
         success: true,
         message: "Success Blast Message!",
      });
   } catch (error) {
      console.log(error);
      return res.status(500).send({
         success: false,
         message: error.message,
      });
   }
};
