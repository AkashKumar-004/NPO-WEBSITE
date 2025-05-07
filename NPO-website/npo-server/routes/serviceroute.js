const express=require('express');
const router=express.Router();
const service=require('../Model/Service');

router.get('/all',async (req,res)=>{
    try{
        const data=await service.find();
        res.json(data).status(200);
    }
    catch{
        res.json(error).status(500);
    }
})
router.get('/:id', async (req, res) => {
    try {
        const data = await service.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching service', error: error.message });
    }
});

router.post('/add',async(req,res)=>{
    try
    {
        const data=new service(req.body);
        const save=await data.save();
        res.json(save).status(200)
    }
    catch
    {
        res.json(error).status(500);
    }
})
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await service.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        if (req.body.name !== undefined) {
            data.name = req.body.name;
        }
        if (req.body.location !== undefined) {
            data.location = req.body.location;
        }
        if (req.body.description !== undefined) {
            data.description = req.body.description;
        }
        if (req.body.donationLink !== undefined) {
            data.donationLink = req.body.donationLink;
        }
        if (req.body.contact !== undefined) {
            data.contact = req.body.contact;
        }
        if (req.body.history !== undefined) {
            data.history = req.body.history;
        }
        if (req.body.impact !== undefined) {
            data.impact = req.body.impact;
        }
        if (req.body.category !== undefined) {
            data.category = req.body.category;
        }
        const updatedData = await data.save();
        res.status(200).json(updatedData);
    } catch (err) {
        res.status(500).json({ message: 'Error updating data', error: err.message });
    }
});

router.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    try
    {
        const data=await service.findByIdAndDelete(id);
        if(!data)
        {
            return res.status(404).json({message : 'not found'});
        }
        res.status(200).json({message : 'service deleted successfully'})
    }
    catch (err) {
        console.error('Error deleting data:', err);
        res.status(500).json({ message: 'Error deleting data'});
      }
})
module.exports=router;