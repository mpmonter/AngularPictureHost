<<<<<<< HEAD
angular.module("pullPix",["ngRoute","angularFileUpload"]),angular.module("pullPix").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(e,l){t.currentUser=l})}]),angular.module("pullPix").controller("ImgMetaCtrl",["$scope","ImgMetaSvc",function(t,e){t.ImgUpdate=function(t){t&&e.create({userid:t.userid,imgpath:t.imgpath,imgtitle:t.imgtitle,imgdesc:t.imgdesc,imgtag:t.imgtag}).success(function(e){console.table(e),t=null})}}]),angular.module("pullPix").controller("ListCtrl",["$scope","ListSvc",function(t,e){t.ListAdd=function(){t.listBody&&e.create({body:t.listBody}).success(function(e){t.posts.unshift(e),t.listBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("pullPix").service("ListSvc",["$http",function(t){this.fetch=function(){return t.get("http://localhost:3000/api/posts")},this.create=function(e){return t.post("http://localhost:3000/api/posts",e)}}]),angular.module("pullPix").controller("LoginCtrl",["$scope","UserSvc",function(t,e){t.login=function(l,o){e.login(l,o).then(function(e){t.$emit("login",e.data)})}}]),angular.module("pullPix").controller("RegisterCtrl",["$scope","UserSvc","$location",function(t,e,l){t.register=function(o,n){e.register(o,n).then(function(e){t.$emit("login",e),l.path("/")})}}]),angular.module("pullPix").config(["$routeProvider",function(t){t.when("/",{controller:"ListCtrl",templateUrl:"/partials/posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/partials/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/partials/login.html"}).when("/imagemeta",{controller:"ImgMetaCtrl",templateUrl:"/partials/img-meta.html"}).when("/upload",{controller:"UploadCtrl",templateUrl:"/templates/upload.html"}).when("/splash",{controller:["RegisterCtrl","LoginCtrl"],templateUrl:"/partials/splash-page.html"}).when("/photo",{controller:"ImgMetaCtrl",templateUrl:"/partials/photo-page.html"}).when("/profile",{controller:"",templateUrl:"/partials/profile-page.html"}).when("/photo-map",{controller:"",templateUrl:"/partials/map-page.html"}).when("/upload-page",{controller:"UploadCtrl",templateUrl:"/partials/upload-page.html"})}]),angular.module("pullPix").controller("UploadCtrl",["$scope","$upload",function(t,e){t.onFileSelect=function(l){t.upload=e.upload({url:"/api/user/upload",method:"POST",data:{myObj:t.myModelObj},file:l}).progress(function(t){console.log(t.loaded+" is loaded"),console.log(t.total+" is total "),console.log("percent: "+parseInt(100*t.loaded/t.total)),console.log(l)}).success(function(e){t.fileout=l[0].name,t.fileoutSize=l[0].size,t.fileoutLast=l[0].lastModified,console.log("eeeeeeee"),console.log(e),console.log("successful upload")})}}]),angular.module("pullPix").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/users").then(function(t){return t.data})},e.login=function(l,o){return t.post("/sessions",{username:l,password:o}).then(function(l){return console.log("Res data "+l.data),$window.localStorage.setItem("access_token",l.data),e.token=l.data,t.defaults.headers.common["X-Auth"]=l.data,e.getUser()})},e.register=function(l,o){return t.post("/users",{username:l,password:o}).then(function(){return e.login(l,o)})}}]),angular.module("pullPix").service("ImgMetaSvc",["$http",function(t){this.fetch=function(){return t.get("/img-meta")},this.create=function(e){return t.post("/img-meta",e)}}]);
=======
<<<<<<< HEAD
angular.module("pullPix",["ngRoute","angularFileUpload"]),angular.module("pullPix").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(e,l){t.currentUser=l})}]),angular.module("pullPix").controller("ImgMetaCtrl",["$scope","ImgMetaSvc",function(t,e){t.ImgUpdate=function(t){t&&e.create({userid:t.userid,imgpath:t.imgpath,imgtitle:t.imgtitle,imgdesc:t.imgdesc,imgtag:t.imgtag}).success(function(e){console.table(e),t=null})}}]),angular.module("pullPix").controller("ListCtrl",["$scope","ListSvc",function(t,e){t.ListAdd=function(){t.listBody&&e.create({body:t.listBody}).success(function(e){t.posts.unshift(e),t.listBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("pullPix").service("ListSvc",["$http",function(t){this.fetch=function(){return t.get("http://localhost:3000/api/posts")},this.create=function(e){return t.post("http://localhost:3000/api/posts",e)}}]),angular.module("pullPix").controller("LoginCtrl",["$scope","UserSvc",function(t,e){t.login=function(l,o){e.login(l,o).then(function(e){t.$emit("login",e.data)})}}]),angular.module("pullPix").controller("RegisterCtrl",["$scope","UserSvc","$location",function(t,e,l){t.register=function(o,n){e.register(o,n).then(function(e){t.$emit("login",e),l.path("/")})}}]),angular.module("pullPix").config(["$routeProvider",function(t){t.when("/",{controller:"ListCtrl",templateUrl:"/partials/posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/partials/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/partials/login.html"}).when("/imagemeta",{controller:"ImgMetaCtrl",templateUrl:"/partials/img-meta.html"}).when("/upload",{controller:"UploadCtrl",controller:"ImgMetaCtrl",templateUrl:"/templates/upload.html"})}]),angular.module("pullPix").controller("UploadCtrl",["$scope","$upload",function(t,e){t.onFileSelect=function(l){t.upload=e.upload({url:"/api/user/upload",method:"POST",data:{myObj:t.myModelObj},file:l}).progress(function(t){console.log(t.loaded+" is loaded"),console.log(t.total+" is total "),console.log("percent: "+parseInt(100*t.loaded/t.total)),console.log(l)}).success(function(e){t.fileout=l[0].name,t.fileoutSize=l[0].size,t.fileoutLast=l[0].lastModified,t.fileoutCamera=e["Profile-EXIF"].Model,t.fileoutLongitude=e["Profile-EXIF"]["GPS Latitude"],t.fileoutLatitude=e["Profile-EXIF"]["GPS Longitude"],console.log("data start >>> "+e["Profile-EXIF"]+" <<< data end...from upload.ctrl.js"),console.log("successful upload (from upload.ctrl.js)")})}}]),angular.module("pullPix").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/users").then(function(t){return t.data})},e.login=function(l,o){return t.post("/sessions",{username:l,password:o}).then(function(l){return console.log("Res data "+l.data),$window.localStorage.setItem("access_token",l.data),e.token=l.data,t.defaults.headers.common["X-Auth"]=l.data,e.getUser()})},e.register=function(l,o){return t.post("/users",{username:l,password:o}).then(function(){return e.login(l,o)})}}]),angular.module("pullPix").service("ImgMetaSvc",["$http",function(t){this.fetch=function(){return t.get("/img-meta")},this.create=function(e){return t.post("/img-meta",e)}}]);
=======
angular.module("pullPix",["ngRoute","angularFileUpload"]),angular.module("pullPix").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(e,l){t.currentUser=l})}]),angular.module("pullPix").controller("ImgMetaCtrl",["$scope","ImgMetaSvc",function(t,e){t.ImgUpdate=function(t){t&&e.create({userid:t.userid,imgpath:t.imgpath,imgtitle:t.imgtitle,imgdesc:t.imgdesc,imgtag:t.imgtag}).success(function(e){console.table(e),t=null})}}]),angular.module("pullPix").controller("ListCtrl",["$scope","ListSvc",function(t,e){t.ListAdd=function(){t.listBody&&e.create({body:t.listBody}).success(function(e){t.posts.unshift(e),t.listBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("pullPix").service("ListSvc",["$http",function(t){this.fetch=function(){return t.get("http://localhost:3000/api/posts")},this.create=function(e){return t.post("http://localhost:3000/api/posts",e)}}]),angular.module("pullPix").controller("LoginCtrl",["$scope","UserSvc",function(t,e){t.login=function(l,o){e.login(l,o).then(function(e){t.$emit("login",e.data)})}}]),angular.module("pullPix").controller("RegisterCtrl",["$scope","UserSvc","$location",function(t,e,l){t.register=function(o,n){e.register(o,n).then(function(e){t.$emit("login",e),l.path("/")})}}]),angular.module("pullPix").config(["$routeProvider",function(t){t.when("/",{controller:"ListCtrl",templateUrl:"/partials/posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/partials/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/partials/login.html"}).when("/imagemeta",{controller:"ImgMetaCtrl",templateUrl:"/partials/img-meta.html"}).when("/upload",{controller:"UploadCtrl",templateUrl:"/templates/upload.html"}).when("/splash",{controller:["RegisterCtrl","LoginCtrl"],templateUrl:"/partials/splash-page.html"}).when("/photo",{controller:"ImgMetaCtrl",templateUrl:"/partials/photo-page.html"}).when("/profile",{controller:"",templateUrl:"/partials/profile-page.html"}).when("/photo-map",{controller:"",templateUrl:"/partials/map-page.html"})}]),angular.module("pullPix").controller("UploadCtrl",["$scope","$upload",function(t,e){t.onFileSelect=function(l){t.upload=e.upload({url:"/api/user/upload",method:"POST",data:{myObj:t.myModelObj},file:l}).progress(function(t){console.log(t.loaded+" is loaded"),console.log(t.total+" is total "),console.log("percent: "+parseInt(100*t.loaded/t.total)),console.log(l)}).success(function(e){t.fileout=l[0].name,t.fileoutSize=l[0].size,t.fileoutLast=l[0].lastModified,console.log("eeeeeeee"),console.log(e),console.log("successful upload")})}}]),angular.module("pullPix").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/users").then(function(t){return t.data})},e.login=function(l,o){return t.post("/sessions",{username:l,password:o}).then(function(l){return console.log("Res data "+l.data),$window.localStorage.setItem("access_token",l.data),e.token=l.data,t.defaults.headers.common["X-Auth"]=l.data,e.getUser()})},e.register=function(l,o){return t.post("/users",{username:l,password:o}).then(function(){return e.login(l,o)})}}]),angular.module("pullPix").service("ImgMetaSvc",["$http",function(t){this.fetch=function(){return t.get("/img-meta")},this.create=function(e){return t.post("/img-meta",e)}}]);
>>>>>>> 265cf8955dd60b2c09adcf13afcf25e8cafd526d
>>>>>>> master
