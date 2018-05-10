'use strict';
let markdown = require('markdown-it')();

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
    return markdown.render(this.post.excerpt);
  }

  getExcerptRaw() {
    return this.post.excerpt;
  }

  getContent() {
    return markdown.render(this.post.content);
  }

  getContentRaw() {
    return this.post.content;
  }
  getPublishDate() {
    return this.post.publishDate;
  }
  getSlug() {
    return this.post.slug
  }
}

module.exports = Post;