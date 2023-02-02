//@desc     Get all hospitals
//@route    GET /api/vi/hospitals
//@access   Public
exports.getHospitals=(req,res,next)=>{
    res.status(200).json({success:true,msg:"show all hospitals"});
}

//@desc     Get single hospital
//@route    GET /api/vi/hospitals/:id
//@access   Public
exports.getHospital=(req,res,next)=>{
    res.status(200).json({success:true,msg:`show hospital ${req.params.id}`});
}

//@desc     Create single hospitals
//@route    POST /api/vi/hospitals
//@access   Private
exports.createHospital=(req,res,next)=>{
    res.status(200).json({success:true, msg:"Create new hospitals"});
}

//@desc     Update single hospitals
//@route    PUT /api/vi/hospitals/:id
//@access   Private
exports.updateHospital=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Update hospital ${req.params.id}`});
}

//@desc     Delete single hospitals
//@route    DELETE /api/vi/hospitals/:id
//@access   Private
exports.deleteHospital=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Delete hospital ${req.params.id}`});
}