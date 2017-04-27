 (function() {
  angular
    .module("PostApp", [])
    .controller("PostController", PostController);
    
    function PostController($scope, $http){
    $scope.createPost = createPost;

    function init(){
      getAllPosts();
    };

    init();

    function getAllPosts(){
      $http
        .get("api/posts")
        .success(function(posts){
          $scope.posts = posts;
        })
    }

    function createPost(post) {
        console.log(post);
      $http
        .post("/api/posts", JSON.stringify(post))
        .success(function(post){ 
          $scope.post='post';
        })
    }
  }
}
    
)()
