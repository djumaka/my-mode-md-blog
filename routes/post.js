let express = require('express');
let debug = require('debug');
const appRoot = require('app-root-path');

let {loadSinglePostFromFile, loadRecentPostsList} = require(appRoot + '/lib/FilePostLoader');
let router = express.Router();

const {check, validationResult} = require('express-validator/check');

/* GET posts listing. */
router.get('/', function (req, res, next) {

  let postsList = loadRecentPostsList(1);
  return res.render('post-index', {"posts": postsList});
});

router.get('/read/:postSlug',
  [
    check('postSlug', 'Invalid post url').matches(/[a-z0-9\-]+/)
  ],
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return redirectTo404(res, JSON.stringify(errors));
    }

    try {
      let post = loadSinglePostFromFile(req.params.postSlug);
      console.log(post);
      return res.render('post', {"post": post})
    } catch (e) {
      return redirectTo404(res, e.message);
    }


  }
);

function redirectTo404(res, debugMessage) {
  debug(debugMessage);
  return res.status(404).render('404', {'message': 'Page not found ' + debugMessage});
}

module.exports = router;
