const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const fileUpload = require("express-fileupload");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send(
    `<h1 style="text-align:center"> Iqraprotidin News Paper Backend </h1>`
  );
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3enfr80.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//  Mongo Connect
client.connect((err) => {
  const database = client.db("IqraprotidinNewsPortal");
  const newsCollection = database.collection("news");
  const youtubeVideoCollection = database.collection("ytVideo");
  const ePaperCollection = database.collection("ePaper");
  const userCollection = database.collection("users");
  const categoryCollection = database.collection("category");
  const locationCollection = database.collection("location");
  const adsCollection = database.collection("adsImages");
  const logoCollection = database.collection("logo1");

  // Add News
  app.post("/addNews", async (req, res) => {
    const allNewsInfo = req.body;
    const result = await newsCollection.insertOne(allNewsInfo);
    res.json(result);
  });

  // Add EPaper News
  app.post("/ePaperNews", async (req, res) => {
    const allEPaperInfo = req.body;
    const result = await ePaperCollection.insertOne(allEPaperInfo);
    res.json(result);
  });

  // Get All ePaper
  app.get("/allEPaperNews", async (req, res) => {
    const news = await ePaperCollection
      .find({})
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Delete E-Paper
  app.delete("/deleteEPaper/:Id", async (req, res) => {
    const id = req.params.Id;
    const query = { _id: ObjectId(id) };
    const result = await ePaperCollection.deleteOne(query);
    res.send(result);
  });

  // Get All News
  app.get("/allNews", async (req, res) => {
    const news = await newsCollection.find({}).sort({ $natural: -1 }).toArray();
    res.send(news);
  });

  // Get All News 6
  app.get("/firstSixNews", async (req, res) => {
    const news = await newsCollection
      .find({})
      .limit(6)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Delete News
  app.delete("/deleteNews/:Id", async (req, res) => {
    const id = req.params.Id;
    const query = { _id: ObjectId(id) };
    const result = await newsCollection.deleteOne(query);
    res.send(result);
  });

  // Find News With Id
  app.get("/news/:id", async (req, res) => {
    const idMatch = req.params.id;
    const query = { _id: ObjectId(idMatch) };
    const result = await newsCollection.find(query).toArray();
    res.send(result);
  });

  // Find Related News News With Id
  app.get("/related/:id", async (req, res) => {
    const idMatch = req.params.id;
    const query = { _id: ObjectId(idMatch) };
    const result = await newsCollection.findOne(query);
    const mainQuery = { newsCategory: `${result.newsCategory}` };

    const news = await newsCollection
      .find(mainQuery)
      .limit(10)
      .sort({ $natural: -1 })
      .toArray();

    res.send(news);
  });

  // Get Latest Slider News
  app.get("/sliderNews", async (req, res) => {
    const query = { newsShowSlider: true };
    const news = await newsCollection
      .find(query)
      .limit(4)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Featured News
  app.get("/featuredNews", async (req, res) => {
    const query = { newsShowFeatured: true };
    const news = await newsCollection
      .find(query)
      .limit(8)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Breaking News
  app.get("/breakingTitleNews", async (req, res) => {
    const query = { newsShowBreaking: true };
    const news = await newsCollection
      .find(query)
      .limit(6)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Important News
  app.get("/importantNews", async (req, res) => {
    const query = { newsShowImportantNews: true };
    const news = await newsCollection
      .find(query)
      .limit(8)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get National News
  app.get("/nationalNews", async (req, res) => {
    const query = { newsCategory: "জাতীয়" };
    const news = await newsCollection
      .find(query)
      .limit(6)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Politics Single One News
  app.get("/politicsNewsSingle", async (req, res) => {
    const query = { newsCategory: "রাজনীতি" };
    const news = await newsCollection
      .find(query)
      .limit(1)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Politics News
  app.get("/politicsNews", async (req, res) => {
    const query = { newsCategory: "রাজনীতি" };
    const news = await newsCollection
      .find(query)
      .limit(5)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Education Single One News
  app.get("/educationNewsSingle", async (req, res) => {
    const query = { newsCategory: "শিক্ষা" };
    const news = await newsCollection
      .find(query)
      .limit(1)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Education News
  app.get("/educationNews", async (req, res) => {
    const query = { newsCategory: "শিক্ষা" };
    const news = await newsCollection
      .find(query)
      .limit(5)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Entertainment News
  app.get("/entertainmentNews", async (req, res) => {
    const query = { newsCategory: "বিনোদন" };
    const news = await newsCollection
      .find(query)
      .limit(6)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Accident News
  app.get("/accidentNews", async (req, res) => {
    const query = { newsCategory: "দুর্ঘটনা" };
    const news = await newsCollection
      .find(query)
      .limit(3)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Agriculture News
  app.get("/agricultureNews", async (req, res) => {
    const query = { newsCategory: "কৃষি" };
    const news = await newsCollection
      .find(query)
      .limit(6)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get HealthAndMedical News
  app.get("/healthAndMedicalNews", async (req, res) => {
    const query = { newsCategory: "স্বাস্থ্য ও চিকিৎসা" };
    const news = await newsCollection
      .find(query)
      .limit(6)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get IslamicLife News
  app.get("/islamicLifeNews", async (req, res) => {
    const query = { newsCategory: "ইসলামী জীবন" };
    const news = await newsCollection
      .find(query)
      .limit(6)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get AllOverCountry News
  app.get("/allOverCountryNews", async (req, res) => {
    const query = { newsCategory: "সারাদেশ" };
    const news = await newsCollection
      .find(query)
      .limit(6)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Sports News
  app.get("/sportsNews", async (req, res) => {
    const query = { newsCategory: "খেলাধুলা" };
    const news = await newsCollection
      .find(query)
      .limit(6)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Others News
  app.get("/othersNews", async (req, res) => {
    const query = { newsCategory: "অন্যান্য" };
    const news = await newsCollection
      .find(query)
      .limit(6)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Literary Page News
  app.get("/literaryPageNews", async (req, res) => {
    const query = { newsCategory: "হৃদকলমে সাহিত্য" };
    const news = await newsCollection
      .find(query)
      .limit(4)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Get Islamic Page News
  app.get("/islamicPageNews", async (req, res) => {
    const query = { newsCategory: "ইসলামিক পাতা" };
    const news = await newsCollection
      .find(query)
      .limit(4)
      .sort({ $natural: -1 })
      .toArray();
    res.send(news);
  });

  // Add Youtube Video
  app.post("/addYoutubeVideo", async (req, res) => {
    const youtubeVideo = req.body;
    const result = await youtubeVideoCollection.insertOne(youtubeVideo);
    res.json(result);
  });

  // Get All Youtube Video
  app.get("/allYoutubeVideo", async (req, res) => {
    const video = await youtubeVideoCollection
      .find({})
      .sort({ $natural: -1 })
      .toArray();
    res.send(video);
  });

  // Get 5 Youtube Video
  app.get("/fiveYoutubeVideo", async (req, res) => {
    const video = await youtubeVideoCollection
      .find({})
      .limit(5)
      .sort({ $natural: -1 })
      .toArray();
    res.send(video);
  });

  // Update News
  app.put("/updateNews/:id", async (req, res) => {
    const updateId = req.params.id;
    const allNewsInfo = req.body;
    const collectionId = { _id: ObjectId(updateId) };
    const updateDoc = { $set: allNewsInfo };
    const result = await newsCollection.updateOne(collectionId, updateDoc);
    res.json(result);
  });

  // Make User
  app.post("/makeUser", async (req, res) => {
    const userInfo = req.body;
    const result = await userCollection.insertOne(userInfo);
    res.json(result);
  });
  // Get Users Info
  app.get("/manageUsers", async (req, res) => {
    const users = await userCollection
      .find({})
      .sort({ $natural: -1 })
      .toArray();
    res.send(users);
  });

  // Get One Users
  app.get("/users/:email", async (req, res) => {
    const params = req.params.email;
    const query = { email: params };
    const result = await userCollection.find(query).toArray();
    res.send(result);
  });

  // Delete User
  app.delete("/deleteUser/:Id", async (req, res) => {
    const id = req.params.Id;
    const query = { _id: ObjectId(id) };
    const result = await userCollection.deleteOne(query);
    res.send(result);
  });

  // Update User Role
  app.put("/changeUserRole/:id", async (req, res) => {
    const updateId = req.params.id;
    const role = req.body;
    const collectionId = { _id: ObjectId(updateId) };
    const updateDoc = { $set: role };
    const result = await userCollection.updateOne(collectionId, updateDoc);
    res.json(result);
  });

  // Category Add
  app.post("/categoryAdd", async (req, res) => {
    const categoryInfo = req.body;
    const result = await categoryCollection.insertOne(categoryInfo);
    res.json(result);
  });

  // Get Category Info
  app.get("/categories", async (req, res) => {
    const users = await categoryCollection
      .find({})
      .sort({ $natural: -1 })
      .toArray();
    res.send(users);
  });

  // Delete Category
  app.delete("/deleteCategory/:Id", async (req, res) => {
    const id = req.params.Id;
    const query = { _id: ObjectId(id) };
    const result = await categoryCollection.deleteOne(query);
    res.send(result);
  });

  // location Add
  app.post("/locationAdd", async (req, res) => {
    const categoryInfo = req.body;
    const result = await locationCollection.insertOne(categoryInfo);
    res.json(result);
  });

  // Get location Info
  app.get("/locations", async (req, res) => {
    const users = await locationCollection
      .find({})
      .sort({ $natural: -1 })
      .toArray();
    res.send(users);
  });

  // Delete location
  app.delete("/deleteLocation/:Id", async (req, res) => {
    const id = req.params.Id;
    const query = { _id: ObjectId(id) };
    const result = await locationCollection.deleteOne(query);
    res.send(result);
  });

  // Ads Add
  app.put("/adsImage", async (req, res) => {
    const categoryInfo = req.body;
    const query = {
      adsMiddle: categoryInfo?.adsMiddle || {
        adsNavbar: categoryInfo?.adsNavbar,
      },
    };
    const options = { upsert: true };
    const updateDoc = { $set: categoryInfo };
    const result = await adsCollection.updateOne(query, updateDoc, options);
    res.json(result);
  });

  // Get ads
  app.get("/manageAds", async (req, res) => {
    const users = await adsCollection
      .find({})
      .limit(1)
      .sort({ $natural: -1 })
      .toArray();
    res.send(users);
  });
  // Logos Add
  app.put("/siteLogo", async (req, res) => {
    const categoryInfo = req.body;
    const query = { websiteLogo: categoryInfo?.websiteLogo };
    const options = { upsert: true };
    const updateDoc = { $set: categoryInfo };
    const result = await logoCollection.updateOne(query, updateDoc, options);
    res.json(result);
  });

  // Get  ads
  app.get("/manageLogo", async (req, res) => {
    const users = await logoCollection
      .find({})
      .limit(1)
      .sort({ $natural: -1 })
      .toArray();
    res.send(users);
  });
});

app.listen(port, () => console.log("Server Running At Port", port));
