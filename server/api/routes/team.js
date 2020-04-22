const TeamMember = require('../../models/teamMember')
module.exports = (router) => {
    // this route get list of Team Memebers
    router.get('/team', (req,res) =>{

    })

     // This routes adds new meeting notes
     router.post('/standup', (req, res)=>{
        let member = new TeamMember(req.body)
        member.save((err,note)=>{
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })
}