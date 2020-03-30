const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index (req, res) {
        const urls = await connection('urls').select('*').orderBy('id');
        res.render('index', { urls: urls })
    },

    async create (req, res) {
        const { url_long } = req.body;
      
        const url = await connection('urls')
          .where('url_long', url_long)
          .select('url_short')
          .first()
      
        if(url != null){ // url already exists in database
            res.render('url', {url: url.url_short});
        }
        else {
          const url_short = generateUniqueId();
          const count = 0;
      
          await connection('urls').insert({
              url_long,
              url_short,
              count
          });
      
          res.render('url', {url: url_short});
        }
    },

    async redirect (req, res) {
        const url = await connection('urls')
          .where('url_short', req.params.url_short)
          .select('id', 'url_long', 'count')
          .first();
      
        if (url == null) return res.sendStatus(404);
      
        await connection('urls')
          .update({ count: url.count+1 })
          .where('id', url.id);
      
        res.redirect(url.url_long);
      }

}


