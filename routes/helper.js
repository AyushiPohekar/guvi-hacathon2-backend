import { client } from "../index.js";

export async function updateEquipmentById(id, data) {
    return await client
      .db("webcode2")
      .collection("equipments")
      .updateOne({ id: id }, { $set: data });
  }
  export async function deleteEquipment(id) {
    return await client
      .db("webcode2")
      .collection("equipments")
      .deleteOne({ id: id });
  }
  export async function createEquipment(data) {
    return await client
      .db("webcode2")
      .collection("equipments")
      .insertMany(data);
  }
  
  export async function createUser(data) {
    return await client
      .db("webcode2")
      .collection("users")
      .insertOne(data);
  }
  export async function getEquipmentById(id) {
    return await client
      .db("webcode2")
      .collection("equipments")
      .findOne({ id: id });
  }
  
  export async function getUserByName(username) {
    return await client
      .db("webcode2")
      .collection("users")
      .findOne({ username: username});
  }
  
  export async function getAllequipments(request) {
    return await client
      .db("webcode2")
      .collection("equipments")
      .find(request.query)
      .toArray();
  }
  