const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const conn = "mongodb://127.0.0.1:27017";
const dbname = "firstdb";
mongoClient.connect(conn, (error, res) => {
  if (error) {
    return console.log("error has ocured");
  }
  const db = res.db(dbname);
  console.log("All Perf");

  db.collection("users").insertOne(
    {
      name: "ahmed",
      age: 22,
    },
    (error, data) => {
      if (error) {
        console.log("Unable to insert Data");
      }
      console.log(data.insertedId);
    }
  );
  db.collection("users").insertOne(
    {
      name: "ramy",
      age: 34,
    },
    (error, data) => {
      if (error) {
        console.log("Unable to insert Data");
      }
      console.log(data.insertedId);
    }
  );
  db.collection("users").insertMany(
    [
      {
        name: "maged",
        age: 27,
      },
      {
        name: "maged",
        age: 27,
      },
      {
        name: "maged",
        age: 27,
      },
      {
        name: "maged",
        age: 27,
      },
      {
        name: "maged",
        age: 27,
      },
      {
        name: "maged",
        age: 25,
      },
      {
        name: "maged",
        age: 24,
      },
      {
        name: "maged",
        age: 23,
      },
      {
        name: "maged",
        age: 22,
      },
      {
        name: "maged",
        age: 21,
      },
      {
        name: "maged",
        age: 20,
      },
    ],
    (error, data) => {
      if (error) {
        console.log("unable to insert data");
      }
    }
  );
  db.collection("users").findOne(
    {
      _id: mongodb.ObjectId("6432b7c7ceda0b167661a742"),
    },
    (error, data) => {
      if (error) {
        console.log("unable to insert data");
      }
      console.log(data);
    }
  );

  db.collection("users")
    .find({ age: 27 })
    .toArray((error, data) => {
      if (error) {
        return console.log("error has ocured");
      }
      console.log(data);
    });
  db.collection("users")
    .find({ age: 27 })
    .limit(3)
    .toArray((error, data) => {
      if (error) {
        return console.log("error has ocured");
      }
      console.log(data);
    });

  db.collection('users').updateMany(
    {},
    { $set: { name: "ahmed" } },
    { limit: 4 }
  );
  
  db.collection('users').updateMany(
    {age:27},
    { $ins: { age: 4 } },
    { limit: 4 }
  );
  db.collection('users').updateMany({age:31},{
    $inc:{age:10}
  })
  db.collection('users').deleteMany({age:41})
});
