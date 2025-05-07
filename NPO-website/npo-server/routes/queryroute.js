const express=require('express');
const router=express.Router();
const query=require('../Model/query');
router.get('/all',async (req,res)=>{
    try{
        const data=await query.find();
        res.json(data).status(200);
    }
    catch(error){
        res.json(error).status(500);
    }
})
router.post('/add', async (req, res) => {
    try {
      const data = new query(req.body);
      const save = await data.save();
      res.status(200).json(save);
    } catch (error) {
      console.error('Error saving query:', error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  });
  
router.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    try
    {
        const data=await query.findByIdAndDelete(id);
        if(!data)
        {
            return res.status(404).json({message : 'not found'});
        }
        res.status(200).json({message : 'query deleted successfully'})
    }
    catch (err) {
        console.error('Error deleting data:', err);
        res.status(500).json({ message: 'Error deleting data'});
      }
    })
module.exports=router;