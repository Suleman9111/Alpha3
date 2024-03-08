const express = require("express");
const cors = require("cors");
const server = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require('multer')


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Specify the destination directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original file name
//   }
// });




main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/testing");

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log("db connected");
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, 'uploads/') // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        return cb(null, file.originalname) // Use the original filename for storing files
    }
});

//const upload = multer({ dest: 'uploads/' })
const upload = multer({ storage: storage });

//-------------------------------------- S C H E M A S ---------------

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const chatSchema = new mongoose.Schema({
    username: String,
    userId: String,
    messages: String,
    senderId: String,
    chatId: String,
    checkId: String,
    sendername: String,
});

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    purchasePrice: String,
    sellPrice: String,
    quantity: String,
    creatorId: String,
    imageUrl: String

});

const cartSchema = new mongoose.Schema({
    name: String,
    sellPrice: Number,
    creatorId: String,
    userId: String,
    price: Number
});



const Contacts = mongoose.model("Contacts", userSchema);
const Chat = mongoose.model("Chat", chatSchema);
const Product = mongoose.model("Product", productSchema);
const Cart = mongoose.model("Cart", cartSchema);


server.use(cors());
server.use(bodyParser.json());
//server.use(express.urlencoded({extended:false}));
//server.use(bodyParser.urlencoded({extended:true}))



//---------------------IMAGE ------------------------------------

//const upload = multer({ storage: storage });

// Handle POST request for file upload
server.post('/upload', upload.single('result'), (req, res) => {
    console.log(req.body)
    //const obj = JSON.parse(JSON.stringify(req.body));
    //console.log(obj);
    console.log(req.file)
    //res.status(200).json({ message: 'File uploaded successfully' });
});

server.post('/uploaded', upload.single('image'), (req, res) => {
    console.log('enter')
    console.log(req.body);
    console.log(req.file)
    //res.status(200).json({ message: 'File uploaded successfully' });
});

//------------------------------------U S E R--------------------

server.get("/getusers", async (req, res) => {
    //let contact = new Contacts();
    const ddc = await Contacts.find({});
    res.json(ddc);
    console.log("helo")
})

//Create user
server.post("/save", async (req, res) => {
    let contact = new Contacts();
    contact.email = req.body.email;
    contact.password = req.body.password;
    const doc = await contact.save();

    console.log(req.body);
    res.json(req.body);
});

//Sign user In user
server.post("/demo", async (req, res) => {
    let name = req.body.email;
    let pas = req.body.password;

    try {
        const check = await Contacts.findOne({ email: name });
        // const valid = await Contacts.findOne({password:check.password});

        if (check) {
            if (check.password === pas) {
                //res.json("Exist");
                res.json(check);
            } else {
                res.json("Incorrect password");
            }
        } else {
            res.json("doesnot exist");
        }
        console.log(check);
    } catch (error) {
        res.json("invalid data ");
    }
});

//display users
server.post("/users", async (req, res) => {
    let userEmail = req.body.email;
    const valid = await Contacts.find({ email: { $ne: userEmail } });

    res.json(valid);
});


//-------------------------------------MESSAGES----------------------------------------


//save messages
server.post("/userchat", async (req, res) => {
    let chat = new Chat();
    chat.username = req.body.username;
    chat.userId = req.body.userId;
    chat.messages = req.body.messages;
    chat.senderId = req.body.senderId;
    chat.chatId = req.body.chatId;
    chat.sendername = req.body.sendername;


    const hello = await chat.save();

    res.json("Data is saved");
});


//display chats
server.post("/chats", async (req, res) => {
    let chat = new Chat();
    chat.username = req.body.username;
    chat.userId = req.body.userId;
    chat.messages = req.body.messages;
    chat.senderId = req.body.senderId;
    chat.chatId = req.body.chatId;
    chat.sendername = req.body.sendername;


    //  const sender = chat.senderId;
    //  const receiver = chat.userId;

    //  const checkId =
    //    sender.substring(sender.length - 4) +
    //    receiver.substring(receiver.length - 4);



    console.log(chat.chatId);

    try {
        //    const valid = await Chats.find({ userId: chat.userId });
        const valid = await Chat.find({
            chatId: chat.chatId
        });
        res.json(valid);

        if (valid) {
            //res.json(check);
            console.log("Teue if");
            // console.log(valid)
        } else {
            res.json("no messages");
            console.log("false");
        }
        //console.log(check);
    } catch (error) {
        res.json("invalid data ");
    }
});

//-------------------------------------------P R O D U C T S -------------------

//Create Product
server.post("/product", async (req, res) => {
    let product = new Product();
    product.name = req.body.name;
    product.description = req.body.description;
    product.purchasePrice = req.body.purchasePrice;
    product.sellPrice = req.body.sellPrice;
    product.quantity = req.body.quantity;
    product.creatorId = req.body.creatorId;
    product.imageUrl = req.body.imageUrl


    const save = await product.save();

    console.log(save);
    res.json(save);
});

//Save Image test
server.post("/saveImage", async (req, res) => {
    let product = new Product();

    product.imageUrl = req.body.imageUrl

    const save = await product.save();

    console.log(save);
    res.json(save);
});


//displayproducts
server.get("/displayProducts", async (req, res) => {
    const prod = await Product.find({});

    res.json(prod);
    console.log(prod.sellPrice)

});

//---------------------------------C A R T-----------------------------------------

//ADD TO CART

server.post("/cart", async (req, res) => {
    let cart = new Cart();
    cart.name = req.body.name;
    cart.price = req.body.price;

    cart.userId = req.body.userId;
    // cart.price = req.body.price;


    const upload = await cart.save();

    console.log(upload);
    console.log("Added to cart");
    res.json(upload);
});

//DISPLAY CART

server.post("/displayCart", async (req, res) => {
    let cart = new Cart();
    cart.userId = req.body.userId;

    const shopp = await Cart.find({ userId: cart.userId });

    res.json(shopp);
    console.log(shopp)
});

//EMPTY CART
server.post("/emptyCart", async (req, res) => {
    let cart = new Cart();
    cart.userId = req.body.userId;

    const empty = await Cart.deleteMany({ userId: cart.userId });

    res.json(empty);

});

//----------------------------S E R V E R --------------------------------------------
const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
