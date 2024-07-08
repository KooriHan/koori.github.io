var posts=["2024/07/08/hello-world/","2024/07/08/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };