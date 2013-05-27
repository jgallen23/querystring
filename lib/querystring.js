var querystring = {
  parse : function(string){
    var parsed = {};
    string = (string !== undefined) ? string :  window.location.search;

    if (typeof string === "string" && string.length > 0){
      if (string[0] === '?') {
        string = string.substring(1);
      }

      string = string.split('&');

      for (var i = 0, length = string.length; i < length; i++){
        var element = string[i],
            eqPos = element.indexOf('='),
            keyValue, elValue;

        if (eqPos >= 0){
          keyValue = element.substr(0,eqPos);
          elValue = element.substr(eqPos +1);
        }
        else {
          keyValue = element;
          elValue = '';
        }

        elValue = decodeURIComponent(elValue);

        if (parsed[keyValue] === undefined){
          parsed[keyValue] = elValue;
        }
        else if (parsed[keyValue] instanceof Array) {
          parsed[keyValue].push(elValue);
        }
        else {
          parsed[keyValue] = [parsed[keyValue], elValue];
        }
      }
    }

    return parsed;
  },
  stringify : function(obj){
    var string = [];

    if (!!obj && obj.constructor === Object){
      for (var prop in obj){
        if (obj[prop] instanceof Array){
          for (var i = 0, length = obj[prop].length; i < length; i++){
            string.push([encodeURIComponent(prop),encodeURIComponent(obj[prop][i])].join('='));
          }
        }
        else {
          string.push([encodeURIComponent(prop),encodeURIComponent(obj[prop])].join('='));
        }
      }
    }

    return string.join('&');
  }
};