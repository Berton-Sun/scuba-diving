var newName;
var newMail;
var newWeb;
var newComment;
var newList = new inforList()
var list_key = "infors";
var getItem = localStorage.getItem(list_key);

function submitInfor() {
    newName = document.getElementById("name").value;
    newMail = document.getElementById("email").value;
    newWeb = document.getElementById("url").value;
    newComment = document.getElementById("comment").value;
   
    if (typeof (Storage) != undefined) {
        if (newName.length != 0 && newMail.length != 0) {
           newList.list=new infor(newName,newMail,newWeb,newComment)// newList.list = new infor(newName, newMail, newWeb, newComment);
           console.log(newList._list)
            if (getItem != null) {
                console.log("find it");
                var savedList = new inforList();
                var savedItem = JSON.parse(getItem);
                var parseList = savedItem._list
                console.log(parseList);
                for (let i = 0; i < parseList.length; i++) {
                    savedList.initialObjPDO(parseList[i]);
                    newList.list.unshift(savedList._list);
                }
                localStorage.setItem(list_key, JSON.stringify(newList));
            } else {
                console.log("entered")
                var JsonForm = JSON.stringify(newList);
                localStorage.setItem(list_key, JsonForm);
            }

        } else {
            alert("Please Complete your information !");

        }
    }else{
        alert("sry ")
    }


}

