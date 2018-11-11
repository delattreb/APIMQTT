/**
 * EspController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    updateESP: async function (req, res) {
        sails.log.debug('Name ' + req.param('name') + ' Connected ' + req.param('connected'))
        let namep = req.param('name')
        let connectedp = req.param('connected')
        let result = await Esp.findOne({ name: namep })
        if (!result) {
            result = await Esp.create({ name: namep, connected: connectedp });
        } else {
            result = await Esp.update({ id: result.id }).set({ connected: connectedp })
        }
        return res.json(result)
    },

    updateESPState: async function (req, res) {
        sails.log.debug('Name ' + req.param('name') + ' State ' + req.param('state'))
        let namep = req.param('name')
        let statep = req.param('state')
        let result = await Esp.findOne({ name: namep })
        if (!result) {
        } else {
            result = await Esp.update({ id: result.id }).set({ state: statep })
        }
        return res.json(result)
    },

};

