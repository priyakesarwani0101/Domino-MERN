const express = require("express");


const dns=require("dns")
const {
  getAllproduct,
  getproductById,
  addproduct,
  updateproductDataById,
  deleteproductById,
} = require("./products");

const app = express();

app.use(express.json())

app.get("/products", async (req, res) => {
  const products = await  getAllproduct();

  return res.send({
    data: products,
  });
});

app.get("/product/:id", (req, res) => {

    const id = req.params.id;

  const product = getproductById(Number(id));

  if(product){
    return res.send({
        data: product,
      });
  }else{
    return res.status(404).send({
        message: "product with given id is does not exist"
    })
  }

  
});

app.post("/product", (req, res) => {
  const productData = req.body;

  const product = addproduct(productData);

  return res.send({
    data: product,
  });
});

app.patch("/product/:id", (req, res) => {
    
    const id = req.params.id;

  const productData = req.body;

  const product = updateproductDataById(Number(id), productData);

  return res.send({
    data: product,
  });
});

app.delete("/product/:id", (req, res) => {

    const id = req.params.id;

    const product = deleteproductById(Number(id));

    
    if(product){
        return res.send({
            data: product,
          });
      }else{
        return res.status(404).send({
            message: "product with given id is does not exist"
        })
      }

});


app.get("/ip/:hostname",(req,res)=>{


    let hostname=req.params.hostname;

    dns.lookup(hostname,(error,address,family)=>{
        res.send(address);
    })

})


const port = Number(process.argv[2]);

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});

