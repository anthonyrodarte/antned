require('dotenv').config({path: '../.env'})
const AWS = require("aws-sdk");


AWS.config.update({
  region: "us-west-1",
  endpoint: "http://dynamodb.us-west-1.amazonaws.com",
  accessKeyId: process.env.AWS_KEY, secretAccessKey: process.env.AWS_SECRET
});

const docClient = new AWS.DynamoDB.DocumentClient();

const getCocktails = async () => {
  const params = {
      TableName: "cocktails",
  };

  let cocktailList = [];
  let items;
  do {
      items =  await docClient.scan(params).promise();
      items.Items.forEach((item) => cocktailList.push(item));
      params.ExclusiveStartKey  = items.LastEvaluatedKey;
      console.log(cocktailList)
  } while(typeof items.LastEvaluatedKey !== "undefined");

  return cocktailList;

};

getCocktails()

                    