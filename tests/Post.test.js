let {expect} = require('chai');
let mock = require('mock-fs');
let Post = require('../lib/model/Post');

let  $mockPostData = {
  "title": 'Post Title',
  "slug": 'unittest',
  "excerpt": 'Sample short one'
};

describe('FilePostLoader', () => {
  it('should create new post from object', () => {

    var post;

    expect(() => {
      post = new Post($mockPostData);
    }, '[new post]').to.not.throw();

    expect(new Post($mockPostData), '[new post]').to.be.an('object').that.is.empty;
  });

    /*it.pause('should load proper post', () => {

      mock({
        'C:/Test/djumak-blog/content/post-unittest.json': JSON.stringify($mockPostData)
      });

      let postData = loadSinglePostFromFile('unittest');
      expect(postData.getRawPostData()).to.deep.equal($mockPostData);

      mock.restore();
    });*/
});
