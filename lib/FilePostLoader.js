'use strict';

const fs = require("fs");
const appRoot = require("app-root-path");

let debug = require("debug")('post');

const Post = require("./model/Post");

module.exports.loadSinglePostFromFile = function (postSlug) {
  let postData = {};
  let filePath = appRoot + "/content/post-" + postSlug + ".json";

  try {
    postData = JSON.parse(fs.readFileSync(filePath, 'UTF-8'));
  } catch (e) {
    debug('File "' + filePath + '" not found');
  }
  return new Post(postData);
};


module.exports.loadRecentPostsList = function (page, pageSize) {
  const filePath = appRoot + "/content/index.json";
  let pageId = (page || 1) - 1;
  let postsPerPage = pageSize || 12;
  let postsList = [];

  try {
    let fullArticlesList = JSON.parse(fs.readFileSync(filePath, 'UTF-8'));
    let countAllArticles = fullArticlesList.posts.length;

    let rawPostsList = fullArticlesList.posts.slice(pageId * postsPerPage, (pageId + 1) * postsPerPage);

    for (let postIndex = 0; postIndex < postsPerPage && postIndex < countAllArticles; postIndex++) {
      postsList.push(new Post(rawPostsList[postIndex]));
    }

  } catch (e) {
    debug("Posts list not found" + e.message);
  }

  return postsList;
};