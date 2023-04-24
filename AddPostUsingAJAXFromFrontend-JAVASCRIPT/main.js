//Quick add Post Ajax
var addpostbtn = document.querySelector("#quick-add-button");

if(addpostbtn){
    addpostbtn.addEventListener("click", function(){

        var addpostData = {
            "title" : document.querySelector(".admin-quick-add [name='title']").value,
            "content": document.querySelector(".admin-quick-add [name='content']").value,
            "status" : "publish"
        }
        var addPosts = new XMLHttpRequest();
        addPosts.open("POST", magicaldata.siteURL + "/wp-json/wp/v2/posts");
        addPosts.setRequestHeader("X-WP-Nonce",magicaldata.nonce);
        addPosts.setRequestHeader("Content-type","application/json;charset=utf-8");
        addPosts.send(JSON.stringify(addpostData));
        addPosts.onreadystatechange = function(){
            if(addPosts.readyState == 4){
                if(addPosts.status == 201){
                    document.querySelector(".admin-quick-add [name='title']").value = '';
                    document.querySelector(".admin-quick-add [name='content']").value = '';
                } else{
                    alert("Try Again!!!!!!!!");
                }
            }
        }
    });
}