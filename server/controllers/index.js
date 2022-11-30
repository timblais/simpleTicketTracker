module.exports = {
    getIndex: (req,res)=>{
        const person = {
            name: 'John smith',
            job: 'React Developer',
            age: 45
        }
        
        res.json({ person: person })
    }
}