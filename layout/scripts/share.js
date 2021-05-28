class infor{
    constructor(name,mail,website,comment){
        this._name = name
        this._mail = mail
        this._web = website
        this._comment = comment
    }
    set name(n)
    {
        this._name = n;
    }
    set mail(m)
    {
        this._mail = m;
    }
    set web(w)
    {
        this._web = w;
    }
    set comment(c)
    {
        this._comment = c;
    }
    get name()
    {
        return this._name;
    }
    get mail()
    {
        return this._mail;
    }
    get web()
    {
        return this._web;
    }
    get comment()
    {
        return this._comment;
    }
    initialPDO(newOne)
    {
        this._name = newOne._name;this._mail = newOne._mail;this._web = newOne._web;this._comment = newOne._comment;
    }
}

class inforList{
    constructor()
    {
        this._list = [];
    }
    set list(newL)
    {
        this._list.push(newL);
    }
    get list()
    {
        return this._list;
    }
    initialObjPDO(initialItem)
    {
        console.log(initialItem);
        var newInfor = new infor();
        newInfor.initialPDO(initialItem);
        this._list = new infor(newInfor._name,newInfor._mail,newInfor._web,newInfor._comment);
        
    }
              
}
