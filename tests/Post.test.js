let {expect} = require('chai');
let mock = require('mock-fs');
let markdown = require('markdown-it')();
let Post = require('../lib/model/Post');
let {loadSinglePostFromFile} = require('../lib/FilePostLoader');

let mockPostData = {
  "title": 'Post Title',
  "slug": 'unittest',
  "excerpt": 'Sample short one',
  "publishDate": '01-01-1970',
  "content": "content body"
};

describe('FilePostLoader', () => {
  it('should create new post from object', () => {

    var post;

    expect(() => {
      post = new Post(mockPostData);
    }, '[new post]').to.not.throw();

    expect(new Post(mockPostData), '[new post]').to.be.an('object').that.is.not.empty;
  });

  it('should load proper post', () => {

    mock({
      './content/post-unittest.json': JSON.stringify(mockPostData)
    });

    let postData = loadSinglePostFromFile('unittest');
    expect(postData.getRawPostData().title).to.equal(mockPostData.title);
    expect(postData.getRawPostData().slug).to.equal(mockPostData.slug);
    expect(postData.getRawPostData().excerpt).to.equal(mockPostData.excerpt);


    expect(postData.getTitle()).to.equal(mockPostData.title);
    expect(postData.getSlug()).to.equal(mockPostData.slug);
    expect(postData.getPublishDate()).to.equal(mockPostData.publishDate);
    expect(postData.getContentRaw()).to.equal(mockPostData.content);
    expect(postData.getContent()).to.equal(markdown.render(mockPostData.content));
    expect(postData.getExcerpt()).to.equal(markdown.render(mockPostData.excerpt));
    expect(postData.getExcerptRaw()).to.equal(mockPostData.excerpt);

    mock.restore();
  });
});
