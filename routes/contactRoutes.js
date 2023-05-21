const express = require('express');
const router = express.Router();
const getContact = (req,res)=>{
     res.status(200).json({"message":"Get all contacts"});
}
const updateContact = (req,res)=>{
      res.status(200).json({"message":`Update all contacts for ${req.params.id}`});
}
const deleteContacts = (req,res)=>{
    res.status(200).json({"message":`Delete all contacts for ${req.params.id}`});
}
const getAllContacts = (req,res)=>{
    res.status(200).json({"message":`Get all contacts for ${req.params.id}`});
}
const postContacts = (req,res)=>{
    res.status(200).json({"message":"Send all contacts"});
}
const sendAllContacts = (req,res)=>{
    res.status(200).json({"message":"Send all contacts"});
};
const simpleMessage = (req,res)=>{
    res.status(200).json({"message":"Send all contacts"})
}
module.exports = {getContact , updateContact, deleteContacts,getAllContacts,postContacts,sendAllContacts};
router.route("/").get(sendAllContacts);
router.route("/").post(getContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContacts);
router.route("/:id").get(getAllContacts);
router.route("/").post(postContacts);
router.route("/api/mess").get(simpleMessage);
module.exports = router;