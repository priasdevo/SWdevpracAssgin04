//@desc     Get all hospitals
//@route    GET /api/vi/hospitals

const Hospital = require("../models/Hospital");

//@access   Public
exports.getHospitals=async (req,res,next)=>{
    try{
        const hospitals = await Hospital.find();
        res.status(200).json({success:true,count:hospitals.length,data:hospitals});
    } catch(err){
        res.status(400).json({success:false});
    }
    
}

//@desc     Get single hospital
//@route    GET /api/vi/hospitals/:id
//@access   Public
exports.getHospital=async(req,res,next)=>{
    try{
        const hospital = await Hospital.findById(req.params.id);
        if(!hospital){
            res.status(400).json({success:false});
        }
        res.status(200).json({success:true,data:hospital});
    } catch(err){
        res.status(400).json({success:false});
    }
}

//@desc     Create single hospitals
//@route    POST /api/vi/hospitals
//@access   Private
exports.createHospital=async(req,res,next)=>{
    const hospital = await Hospital.create(req.body);
    res.status(201).json({success:true, data:hospital});
}

//@desc     Update single hospitals
//@route    PUT /api/vi/hospitals/:id
//@access   Private
exports.updateHospital=async(req,res,next)=>{
    try{
        const hospital = await Hospital.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true
        })
        if(!hospital){
            res.status(400).json({success:false});
        }
        res.status(200).json({success:true,data:hospital});
    } catch(err){
        console.log(err);
        res.status(400).json({success:false});
    }
}

//@desc     Delete single hospitals
//@route    DELETE /api/vi/hospitals/:id
//@access   Private
exports.deleteHospital=async (req,res,next)=>{
    try{
        const hospital = await Hospital.findByIdAndDelete(req.params.id);
        if(!hospital){
            res.status(400).json({success:false});
        }
        res.status(200).json({success:true,data:{}});
    } catch(err){
        res.status(400).json({success:false});
    }
}