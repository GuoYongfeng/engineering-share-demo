define(function(require, exports, module){

/**
 * 日期格式化工具
 * @type {Object}
 */
module.exports = {
	//格式化数字
    formatPadLeft: function(v){
        v = v.toString();
        return (v.length >= 2 ? v : '0'+v);
    },
   	/**
   	 * 将Date转化为分日期和时间的JSON格式
   	 * @param  {Date} date eg:Tue Aug 26 2014 11:15:00 GMT+0800
   	 * @return {JSON}      eg:{year: 2014, month:8, date:26, hour:11, minute:15, ms: 1409019310000}
   	 */
    parseDatetimeToJSON: function(date){
        var obj = null;
        if(date){
            obj = {
                year: date.getFullYear(),
                month: date.getMonth()+1,
                date: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                ms: date.getTime()
            }
        }
        return obj;
    },
    /*
     * Date()
     * return yyyy-mm-dd
     */
    parseDateToString: function(date){
        return date.getFullYear()+"-"+this.formatPadLeft((date.getMonth()+1),2)+"-"+this.formatPadLeft(date.getDate());
    },
    /*
     * Date()
     * return yyyy-mm-dd HH:MM
     */
    parseDatetimeToString: function(date){
        return this.parseDateToString(date)+" "+this.formatPadLeft(date.getHours())+":"+this.formatPadLeft(date.getMinutes());
    },
    /*
     * str:yyyy-mm-dd HH:MM
     * return Date()
     */
    parseStringToDatetime: function(str){
        var arr = str.split(/[-:\s]/);
        var date = null;
        switch (arr.length){
            case 5:
                date = new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) -1, parseInt(arr[2], 10), parseInt(arr[3], 10), parseInt(arr[4]), 10);
                break;
            case 3:
                date = new Date(parseInt(arr[0]), parseInt(arr[1]-1), parseInt(arr[2]));
                break;
            default:
                break;
        }
        return date;
    },
    /**
     * 将字符串转换为JOSN
     * @param  {String} str yyyy-mm-dd HH:MM
     * @return {JSON}     [description]
     */
    parseStringToJSON: function(str){
    	var d = this.parseStringToDatetime(str);
    	var obj = this.parseDatetimeToJSON(d);
    	return obj;
    },
    //获取当前日期上一个月
    getLastMonthYestdy:function (date){   
     var daysInMonth = new Array([0],[31],[28],[31],[30],[31],[30],[31],[31],[30],[31],[30],[31]);   
     var strYear = date.getFullYear();     
     var strDay = date.getDate();     
     var strMonth = date.getMonth()+1;   
     if(strYear%4 == 0 && strYear%100 != 0){   
        daysInMonth[2] = 29;   
     }   
     if(strMonth - 1 == 0)   
     {   
        strYear -= 1;   
        strMonth = 12;   
     }   
     else  
     {   
        strMonth -= 1;   
     }   
     strDay = daysInMonth[strMonth] >= strDay ? strDay : daysInMonth[strMonth];   
     if(strMonth<10)     
     {     
        strMonth="0"+strMonth;     
     }   
     if(strDay<10)     
     {     
        strDay="0"+strDay;     
     }   
     datastr = strYear+"-"+strMonth+"-"+strDay;   
     return datastr;   
  } 
};


});
