// const Project = require('../../models/project')
module.exports = (router) => {
    // this route gets the list of active projects
    router.get('/project', (req,res) =>{

    })

     // This routes adds new project
     router.post('/project', (req, res)=>{
        let project = new Project (req.body)
        project.save((err,note) =>{
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })
}