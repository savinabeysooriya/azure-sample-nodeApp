const student = require('../model/student');
exports.dictionaryDataGet = async (req, res) => {

        try {
            student.findAll().then(result=>{
                res.status(200).json({
                    data: result,

                });
                }
            ).catch(e=>{
                console.log(e);
            });
        }catch (e) {
            console.log(e);
        }
}