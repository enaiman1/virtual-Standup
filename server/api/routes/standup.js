const Standup = require('../../models/standup')
module.exports = (router) => {
    //This route gets the stand-up meeting notes
    router.get('/standup', (req,res) =>{

    })

    // This routes adds new meeting notes
    router.post('/standup', (req, res)=>{
        let note = new Standup(req.body)
        note.save((err,note) =>{
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })
}