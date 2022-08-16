const { Favourite } = require("../models/favouritesSchema");
const {productListing}=require("../models/productListingSchema");
const {serviceListing}=require("../models/serviceListingSchema");


const addFavourite = async(req, res, next) => {
    const data = req.body;
    try{
        const fav = new Favourite(data);
        const result= await fav.save();
        res.status(200).json({
        success:true,
        response:result._id
        })
    }catch(e){
        console.log("error:  " + e);
        res.status(500).json({
        success:false,
        response:"Something went wrong. Try again later"
        });
    }
}

//Sarah: Getting favourites based on user ID
const getFavourites = async(req, res, next) => {
    let id = req.params.id;
     Favourite.find({clientId:id}) //.sort({ _id: -1 })
     .then(function (Favourite) {
       res.status(200).json({
         "success":true,
         "listings": Favourite
       });
     })
     .catch(()=>{
        console.log("error:  " + e);
        res.status(500).json({
           success:false,
          response:"Something went wrong. Try again later"
        });
     });
 }

 //Sarah: Deleting favourites by ID
 const deleteFavourite = async(req, res, next) =>{
  //let id=req.params.id;
  const {listingId, clientId}=req.body;
   
    try{
      await Favourite.findOneAndDelete({
        listingId:listingId,
        clientId:clientId
      });
     const favs = await Favourite.find({clientId:clientId}) ;

     res.status(200).json({
       success:true,
       response:"Favourite Deleted",
       favourites: favs
     })
    }catch(e){
     res.status(500).json({
       success:false,
       response:"Somehting went wrong. Try again later"
     })
    }
 }

 //get listing data for logged in user from post iD
 const getListingDataById = async(req, res, next) => {

        const error = 0;
        let id = req.params.id;
       await productListing.findOne({_id:id})
        .then(function (listings) {
            return res.status(200).json({
              "success":true,
              "listings": listings
            });
        })
        .catch((e)=>{
           error++;
           console.log("error: " + e);
        }); 

        await serviceListing.findOne({_id:id})
        .then(function (listings) {
            return res.status(200).json({
              "success":true,
              "listings": listings
            });
        })
        .catch((e)=>{
            console.log("error: " + e);
            error++;
            res.status(500).json({
                success:false,
                response:"Something went wrong. Try again later\n "+e
            });
        }); 

        if(error>0){
          res.status(500).json({
            success:false,
            response:"Something went wrong. Try again later\n "+e
        });
        }
       
      
           
  }

  const checkFavourite = async(req,res) => {
    const { clientId,listingId } = req.body;
    try{
      const entry = await Favourite.find({
        clientId:clientId,
        listingId:listingId
      });
        if(entry.length==0){
            return  res.status(200).json({
              isFav:false,
              entry:entry
            });
        }
        return res.status(200).json({
            isFav:true,
            entry:entry
            
        });
    }
    catch(e){
      res.status(404).json({
        isFav:false,
        e
      });
    }
  }
  

module.exports = {
    addFavourite, getFavourites, deleteFavourite, getListingDataById, checkFavourite
}
