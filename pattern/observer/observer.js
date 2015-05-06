/**
 * Created by huxiaoyue on 2015/5/5.
 */
// The Observer
function Observer() {
    this.update = function (context) {
        console.log('Observer change : ' + context);
    };
}
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.count = function () {
    return this.observerList.length;
};

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;
};
ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
};
