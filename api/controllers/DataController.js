/**
 * DataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    insertData: async function (req, res) {
        sails.log.debug('insert ' + req.param('name') + ' ' + req.param('value') + ' '+ req.param('date'))
        let namep = req.param('name')
        let valuep = req.param('value')
        let datep = req.param('date') 
        
        let result = await Data.create({ name: namep, value : valuep, date : datep })
        if (!result) {
            return res.serverError(result)
        } 
        return res.json(result)
    },
};

