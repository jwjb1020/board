"use restrict";
const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://jwjb1020:jwj1020@cluster0.8t1vcta.mongodb.net/test";

module.exports = function (callback){
    return MongoClient.connect(uri,callback);
};