const AWS = require("aws-sdk");


AWS.config.update({
  region: "us-west-1",
  endpoint: "http://dynamodb.us-west-1.amazonaws.com",
  accessKeyId: "", secretAccessKey: ""
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
  } while(typeof items.LastEvaluatedKey !== "undefined");

  return cocktailList;

};

export default getCocktails

                    