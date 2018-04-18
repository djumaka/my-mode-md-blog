'use strict';
let {markdown} = require('markdown');

class Post {
  constructor(postData) {
    let newPostData = postData || {};
    this.post = {};
    Object.assign(this.post, {
      "title": "",
      "slug": "",
      "excerpt": "",
      "publishDate": "",
      "summary": "",
      "content": "",
    }, newPostData);
  }

  getRawPostData() {
    return this.post;
  }

  getTitle() {
    return this.post.title;
  }

  getExcerpt() {
    return markdown.toHTML(this.post.excerpt);
  }

  getExcerptRaw() {
    return this.post.excerpt;
  }

  getContent() {
    return markdown.toHTML(this.post.content);
  }

  getContentRaw() {
    return this.post.content;
  }
  getPublishDate() {
    return this.post.publishDate;
  }
}

module.exports = Post;