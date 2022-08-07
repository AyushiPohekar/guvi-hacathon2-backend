import express from "express";
import {auth} from "../middleware/auth.js";
import {createEquipment, deleteEquipment,getEquipmentById,getAllequipments, updateEquipmentById} from "./helper.js";
const router=express.Router();

router.get("/",async function (request, response) {
   
    if(request.query.rating){
        request.query.rating=+ request.query.rating;
    }
    console.log(request.query);
    const equipments = await getAllequipments(request);
  response.send(equipments);
});

router.get("/:id", async function (request, response) {
  const { id } = request.params;
  console.log(request.params, id);

  const equipment = await getEquipmentById(id);
 equipment
    ? response.send(equipment)
    : response.status(404).send({ msg: "equipment not found" });
});

router.delete("/:id", async function (request, response) {
    
    const { id } = request.params;
    console.log(request.params, id);
  
    const result = await deleteEquipment(id);
    result.deletedCount>0
      ? response.send({msg:"Equipment successfully deleted"})
      : response.status(404).send({ msg: "Equipment not found" });
  });

router.post("/",async function (request, response) {
   const data=request.body;
  
   const result = await createEquipment(data);
   response.send(result);
  });

  router.put("/:id", async function (request, response) {
    
    const { id } = request.params;
    console.log(request.params, id);
    const data=request.body;
   
    const result = await updateEquipmentById(id, data)
    result.modifiedCount>0
      ? response.send({msg:"equipment successfully updated"})
      : response.status(404).send({ msg: "equipment not found" });
  });

  export const equipmentsRouter=router;


