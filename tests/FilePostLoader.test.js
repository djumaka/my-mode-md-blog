let {expect} = require('chai');
let fsMock = require('mock-fs');
const appRoot = require("app-root-path");

let {loadSinglePostFromFile, loadRecentPostsList} = require('../lib/FilePostLoader');

const mockPostData = {
  "title": 'Post Title',
  "slug": 'unittest',
  "excerpt": 'Sample short one'
};


const emptyPost = {
  "title": "",
  "slug": "",
  "excerpt": "",
  "publishDate": "",
  "summary": "",
  "content": "",
};

describe('FilePostLoader', () => {
  it('should return empty post on wrong slug', () => {

    expect(() => {
      loadSinglePostFromFile('non-existing-post')
    }, '[load post]').to.not.throw();

    let postData = loadSinglePostFromFile('non-existing-post');

    expect(postData.getRawPostData(), '[load post]').to.be.an('object').that.deep.equal(emptyPost);
  });

  it('should load proper post', () => {

    let mockFilePath = appRoot + '/content/post-unittest.json';
    let fsMockSettings = {};
    fsMockSettings[mockFilePath] = JSON.stringify(mockPostData);
    fsMock(fsMockSettings);


    let postData = loadSinglePostFromFile('unittest');

    expect(postData.getRawPostData()).to.be.an('object').that.have.property('title', mockPostData.title);
    expect(postData.getRawPostData()).to.be.an('object').that.have.property('slug', mockPostData.slug);
    expect(postData.getRawPostData()).to.be.an('object').that.have.property('excerpt', mockPostData.excerpt);

    fsMock.restore();
  });

  it('should load last X posts', () => {
    expect(() => {
      loadRecentPostsList(1, 5);
    }, '[load recent posts]').to.not.throw();
  });

  it('should fail on empty index', () => {
    let mockFilePath = appRoot + '/content/';
    let fsMockSettings = {};
    fsMockSettings[mockFilePath] = {};
    fsMock(fsMockSettings);

    expect(() => {
      loadRecentPostsList(1, 5);
    }, '[load posts from broken index]').to.not.throw();

    fsMock.restore();
  })
});
