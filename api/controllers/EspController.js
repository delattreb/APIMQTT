/**
 * EspController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    updateESP: async function (req, res) {
        let namep = req.param('name')
        let connectedp = req.param('connected')
        let result = await Esp.findOne({ name: namep })
        if (!result) {
            result = await Esp.create({ name: namep, connected: connectedp });
        } else {
            result = await Esp.update({ id: result.id }).set({ connected: connectedp });
        }
        return res.json(result);
    },
};

